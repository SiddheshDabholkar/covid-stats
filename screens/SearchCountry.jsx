import React, { useEffect, useState, useRef, useMemo } from "react";
import { View, Text, Dimensions } from "react-native";
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider,
  BaseScrollView,
} from "recyclerlistview";
import Stack from "../Components/Stack";
import { countries as c } from "country-data";

function mergeArray(arr1 = [], arr2 = []) {
  let res = [];
  res = arr1.map((obj) => {
    const index = arr2.findIndex((el) => el["id"] == obj["id"]);
    const { address } = index !== -1 ? arr2[index] : {};
    return {
      ...obj,
      address,
    };
  });
  return res;
}

const ViewTypes = {
  FULL: 0,
};

let { width } = Dimensions.get("window");

const dataProviderMaker = (data) =>
  new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(data);

const rowRenderer = (type, data) => {
  return (
    <Stack vertical={false}>
      <Text>bruh</Text>
    </Stack>
  );
};

const layoutMaker = () =>
  new LayoutProvider(
    (index) => {
      return ViewTypes.FULL;
    },
    (type, dim) => {
      switch (type) {
        case ViewTypes.FULL:
          dim.width = width;
          dim.height = 50;
          break;
        default:
          dim.width = 0;
          dim.height = 0;
      }
    }
  );

export default function SearchCountry() {
  console.log(c.all);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState([]);
  const [search, onChangeSearch] = useState("");
  const SearchedCountry = countries.filter((d) => {
    return d.name.includes(search);
  });
  const data = SearchedCountry.length > 0 ? SearchedCountry : countries;
  const _layoutProvider = useRef(layoutMaker()).current;
  const dataProvider = useMemo(() => dataProviderMaker(data), [data]);
  const fetchCountries = () => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then((res) => res.json())
      .then((res) => {
        setCountries(res.countries);
        // console.log(res.countries);
      })
      .catch((err) => setError("failedto fetch countries"));
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <RecyclerListView
      layoutProvider={_layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={rowRenderer}
    />
  );
}
