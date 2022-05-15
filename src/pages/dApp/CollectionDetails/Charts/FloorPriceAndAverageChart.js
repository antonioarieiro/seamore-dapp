import react from 'react';
import { ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 6,
    pv: 23.5,
    amt: 23,
  },
  {
    name: 'Page B',
    uv: 23,
    pv: 0,
    amt: 10,
  },
  {
    name: 'Page C',
    uv: 12,
    pv: 21,
    amt: 6,
  },
  {
    name: 'Page D',
    uv: 10,
    pv: 0,
    amt: 22,
  },
  {
    name: 'Page E',
    uv: 24,
    pv: 0,
    amt: 14,
  },
  {
    name: 'Page F',
    uv: 12,
    pv: 0,
    amt: 20,
  },
];


export default function FlorPriceAndAverageChart() {
  return (
    <>
      <ComposedChart
                        width={700}
                        height={300}
                        data={data}
                        margin={{
                          top: 20,

                        }}
                      >
                        <defs>
                          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                          </linearGradient>
                        </defs>

                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

                        <Line type="monotone" dataKey="uv" stroke="#80CCF4" strokeDasharray="5 5" />
                      </ComposedChart>
    </>
  )
}