import { View, Text } from 'react-native';
import React from 'react';
import { LineChart as LC, Grid } from 'react-native-svg-charts';

const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

export default function LineChart() {
  return (
    <LC
      style={{ height: 200 }}
      data={data}
      svg={{ stroke: 'rgb(134, 65, 244)' }}
      contentInset={{ top: 20, bottom: 20 }}
    >
      <Grid />
    </LC>
  );
}