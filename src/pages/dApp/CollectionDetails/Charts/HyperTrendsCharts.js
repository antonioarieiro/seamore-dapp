import React from 'react';
import { AreaChart, ComposedChart, Area, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Icon from '@material-tailwind/react/Icon';
const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

export default function HyperTrendsCharts() {
  return (
    <>
      <div className="flex h-[113px] w-full flex-col border-b border-gray-700">
        <p className=" ml-[24px]">Volume</p>
        <div className="w-full  ml-9 flex">
          <AreaChart width={300} height={60} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
            
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4DBC19" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#4DBC1900" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#4DBC19" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
          <div className="flex flex-col ml-[65px]">
            <div className=" flex items-center justify-center">
              <span className="mr-[9px]">
                <Icon name='call_received' size='sm' color='red' />
              </span>
              <p>9,28%</p>
            </div>
            <div className="flex items-center">
              <span className="flex flex-col items-center ">
                <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
                <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
              </span>
              <h4 className="ml-[9px]">
                1.9k
              </h4>
            </div>
          </div>
        </div>

      </div>
      <div className="flex h-[113px] w-full flex-col border-b border-gray-700">
        <p className=" ml-[24px]">Volume</p>
        <div className="w-full  ml-9 flex">
          <AreaChart width={300} height={60} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4DBC19" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4DBC19" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#4DBC19" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
          <div className="flex flex-col ml-[65px]">
            <div className=" flex items-center justify-center">
              <span className="mr-[9px]">
                <Icon name='call_received' size='sm' color='red' />
              </span>
              <p>9,28%</p>
            </div>
            <div className="flex items-center">
              <span className="flex flex-col items-center ">
                <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
                <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
              </span>
              <h4 className="ml-[9px]">
                1.9k
              </h4>
            </div>
          </div>
        </div>

      </div>
      <div className="flex w-full flex-col">
        <p className=" ml-[24px] mt-2">Volume</p>
        <div className="w-full  ml-9 flex">
          <AreaChart width={300} height={50} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#4DBC19" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
          <div className="flex flex-col ml-[65px]">
            <div className=" flex items-center justify-center">
              <span className="mr-[9px]">
                <Icon name='call_received' size='sm' color='red' />
              </span>
              <p>9,28%</p>
            </div>
            <div className="flex items-center">
              <span className="flex flex-col items-center ">
                <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
                <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                </svg>
              </span>
              <h4 className="ml-[9px]">
                1.9k
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}