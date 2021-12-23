import React from "react";
import { Colors } from "../styles/theme";

import BoxWithStats from "./BoxWithStats";
import Stack from "./Stack";

const { purple, pink, green, yellow, black } = Colors;

export default function ListCard({
  flag,
  Infections,
  Deaths,
  Recoveries,
  Critical,
}) {
  return (
    <Stack jc="space-between" vertical={false} m="3%">
      <Stack w="20%">{flag}</Stack>
      <Stack w="20%">
        <BoxWithStats stat={Infections} text="Infections" color={purple} />
      </Stack>
      <Stack w="20%">
        <BoxWithStats stat={Deaths} text="Deaths" color={pink} />
      </Stack>
      <Stack w="20%">
        <BoxWithStats stat={Recoveries} text="Recoveries" color={green} />
      </Stack>
      <Stack w="20%">
        <BoxWithStats stat={Critical} text="Critical" color={yellow} />
      </Stack>
    </Stack>
  );
}
