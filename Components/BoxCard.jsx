import React from "react";
import { Text } from "react-native";
import Bubble from "./Bubble";
import Stack from "./Stack";
import { LinearGradient } from "expo-linear-gradient";
import LineChart from "./LineChart";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function BoxCard({ w, bg, color, gradient, data, text }) {
  return (
    <Stack jc="center" w={w} h={150} m={15}>
      <Stack h={75}>
        <Stack vertical={false} p={10} flex={1}>
          <Stack w="35%">
            <Bubble bg={bg} text="lmao" color={color} />
          </Stack>
          <Stack w="55%">
            <LineChart data={data} color={color} />
          </Stack>
        </Stack>
      </Stack>
      <Stack h={75}>
        <Text style={{ color, fontSize: 25, fontWeight: "bold" }}>data</Text>
        <Text>{text}</Text>
      </Stack>
    </Stack>
  );
}
