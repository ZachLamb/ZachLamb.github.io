import React from "react";
import {
  Legend,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer
} from "recharts";

import "../styles/main.scss";

const data = [
  {
    subject: "Front End",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Back End",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Product",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Yoga",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Hiking",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Graphic Design",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

export default function RadarReactChart(props) {
  return (
    <ResponsiveContainer width="100%" height="50%">
      <RadarChart outerRadius={90} data={data} width={1400} height={500}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="What percentage of my time is spent on at work"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="What percentage of my time is spent outside of work"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}
