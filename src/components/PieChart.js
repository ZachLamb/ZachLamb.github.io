import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import PieSVG from "./PieSVG";

export default function PieChart() {
  const generateData = (value, length = 5) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data] = useState(generateData());

  return (
        <PieSVG
          data={data}
          width={400}
          height={400}
          innerRadius={190}
          outerRadius={200}
        />
  );
}