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
    A: 70,
    fullMark: 80
  },
  {
    subject: "Back End",
    A: 20,
    fullMark: 80
  },
  {
    subject: "Product",
    A: 10,
    fullMark: 80
  },
  {
    subject: "Yoga",
    B: 50,
    fullMark: 80
  },
  {
    subject: "Hiking",
    B: 30,
    fullMark: 80
  },
  {
    subject: "Graphic Design",
    B: 20,
    fullMark: 80
  }
];

export default function RadarReactChart(props) {
  return (
    <ResponsiveContainer width="100%" height="65%">
      <RadarChart outerRadius={90} data={data} width={1400} height={300}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={130} domain={[0, 100]} />
        <Radar
          name="What percentage of my time is spent outside of work"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
<Radar
          name="What percentage of my time is spent on at work"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend  className="about-radar-legend"/>
      </RadarChart>
    </ResponsiveContainer>
  );
}
