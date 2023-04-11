import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "A1",
      mark: 60,
    },
    {
      name: "A2",
      mark: 58,
    },
    {
      name: "A3",
      mark: 60,
    },
    {
      name: "A4",
      mark: 60,
    },
    {
      name: "A5",
      mark: 60,
    },
    {
      name: "A6",
      mark: 60,
    },
    {
      name: "A7",
      mark: 60,
    },
    {
      name: "A8",
      mark: 60,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h4 className="text-3xl font-bold text-gray-900 mb-14">
        PHero Assignment Analytics
      </h4>

      <div className="w-full">
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            width={800}
            height={350}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="mark" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="mark"
              stroke="#7E90FE"
              fill="#9873FB"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
