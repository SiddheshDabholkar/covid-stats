import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Stack from "./Stack";

export default function BoxWithStats({ stat, text, color }) {
  return (
    <Stack>
      <Text
        style={{
          fontSize: 20,
          color,
        }}
      >
        150 K
      </Text>
      <Text
        style={{
          fontSize: 11,
        }}
      >
        {text}
      </Text>
    </Stack>
  );
}
