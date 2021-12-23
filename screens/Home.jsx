import React, { useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";

import ListCard from "../Components/ListCard";
import BoxCard from "../Components/BoxCard";
import Stack from "../Components/Stack";
import { gradient } from "../styles/theme";
import LineChartG from "../Components/LineChart";

export default function Home() {
  const [search, onChangeSearch] = useState("");
  return (
    <Stack p={15} jc="flex-start">
      <Stack>
        <TextInput
          placeholder="Search a country"
          style={Styles.textInputStyle}
          onChangeText={onChangeSearch}
        />
      </Stack>
      <Text style={Styles.text}>World Update</Text>
      <Stack jc="space-evenly" wrap="wrap" vertical={false} w="100%">
        <BoxCard w="40%" gradient={gradient.purple} />
        <BoxCard w="40%" gradient={gradient.pink} />
        <BoxCard w="40%" gradient={gradient.green} />
        <BoxCard w="40%" gradient={gradient.yellow} />
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
