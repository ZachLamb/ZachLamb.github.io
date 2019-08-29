import React, { useState, useEffect } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import "../styles/main.scss";

export default function RBChart(props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        width={1000}
        height={100}
        innerRadius="20%"
        outerRadius="70%"
        data={props.data}
        startAngle={0}
        endAngle={360}
        barSize={30}
        animationDuration={1000}
      >
        <RadialBar
          minAngle={0}
          label={{ fill: "#FFF", position: "insideEnd" }}
          background
          clockWise={true}
          dataKey="value"
          nameKey="name"
        />
        <Legend
          iconSize={20}
          width={200}
          height={140}
          layout="vertical"
          align="right"
          verticalAlign="middle"
          iconType="circle"
        />
        <Tooltip labelFormatter={index => props.data[index].name}/>
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
