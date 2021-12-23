import React from "react";
import { View } from "react-native";

export default function Stack({
  children,
  p = 0,
  vertical = true,
  wrap,
  jc,
  bg,
  w,
  h,
  m,
  flex,
  mt,
  br,
}) {
  return (
    <View
      style={{
        flex: flex,
        flexDirection: vertical ? "column" : "row",
        alignItems: "center",
        justifyContent: jc,
        flexWrap: wrap,
        padding: p,
        backgroundColor: bg,
        width: w ? w : "100%",
        height: h,
        margin: m,
        marinTop: mt,
        borderRadius: br,
      }}
    >
      {children}
    </View>
  );
}
