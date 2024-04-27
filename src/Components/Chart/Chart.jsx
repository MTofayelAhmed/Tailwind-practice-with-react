// import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  const StudentArray = [
    {
      id: 1,
      name: "Alice",
      math: 85,
      physics: 78,
    },
    {
      id: 2,
      name: "Bob",
      math: 90,
      physics: 88,
    },
    {
      id: 3,
      name: "Charlie",
      math: 76,
      physics: 82,
    },
    {
      id: 4,
      name: "David",
      math: 65,
      physics: 70,
    },
    {
      id: 5,
      name: "Eve",
      math: 92,
      physics: 95,
    },
    {
      id: 6,
      name: "Frank",
      math: 74,
      physics: 80,
    },
    {
      id: 7,
      name: "Grace",
      math: 88,
      physics: 86,
    },
    {
      id: 8,
      name: "Hank",
      math: 79,
      physics: 73,
    },
    {
      id: 9,
      name: "Ivy",
      math: 81,
      physics: 84,
    },
    {
      id: 10,
      name: "Jack",
      math: 95,
      physics: 89,
    },
    {
      id: 11,
      name: "Kara",
      math: 72,
      physics: 68,
    },
    {
      id: 12,
      name: "Liam",
      math: 85,
      physics: 91,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer>
      <LineChart width={1000} height={300} data={StudentArray}>
        <XAxis dataKey="name" />
        <YAxis  />
        <Tooltip />
        <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Chart;
