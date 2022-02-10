import React, { useEffect, useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";

import ListCard from "../Components/ListCard";
import BoxCard from "../Components/BoxCard";
import Stack from "../Components/Stack";
import { gradient } from "../styles/theme";
import LineChartExample from "../Components/LineChart";
// import LineChart from "../Components/LineChart";

// import LineChartExample from '../Components/ListCard';



export default function Home() {
  const [confirmed, setConfirmed] = useState();
  const [death, setDeath] = useState();
  const [recovered, setRecovered] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(confirmed) + Number(death) + Number(recovered));
  }, [confirmed, death, recovered]);

  useEffect(() => {
    setLoading(true);
    fetch("https://covid19.mathdro.id/api")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setConfirmed(data.confirmed.value);
          setDeath(data.deaths.value);
          setRecovered(data.recovered.value);
          setLoading(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <Stack p={15} jc="flex-start">
      <Text style={Styles.text}>World Update</Text>
      <Stack jc="space-evenly" wrap="wrap" vertical={false} w="100%">
        {/* <BoxCard
          w="40%"
          gradient={gradient.purple}
          data={confirmed}
          text="Confirmed"
        />
        <BoxCard w="40%" gradient={gradient.pink} data={death} text="deaths" />
        <BoxCard
          w="40%"
          gradient={gradient.green}
          data={recovered}
          text="recovered"
        />
        <BoxCard w="40%" gradient={gradient.yellow} data={total} text="total" /> */}
        <LineChartExample />
      </Stack>
      <Text style={Styles.text}>Most Infected</Text>
      <Stack jc="center">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </Stack>
    </Stack>
  );
}

const Styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "flex-start",
    margin: 20,
  },
  textInputStyle: {
    backgroundColor: "#c9c9c9",
    margin: 12,
    height: 40,
    width: "90%",
    marginTop: 50,
    borderRadius: 10,
  },
});
