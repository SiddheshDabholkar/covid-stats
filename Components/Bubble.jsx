import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Stack from "./Stack";

export default function Bubble({ bg, text, color }) {
  return (
    <Stack bg={bg} br={20}>
      <Text style={{ color, fontSize: 12 }}>{text}</Text>
    </Stack>
  );
}
