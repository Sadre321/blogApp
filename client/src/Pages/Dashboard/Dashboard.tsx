import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Dashboard: React.FC = () => {
  const data = [
    { name: "Pazartesi", uv: 4000, pv: 2400 },
    { name: "Sali", uv: 3000, pv: 1398 },
    { name: "Carsamba", uv: 2000, pv: 9800 },
    { name: "Persembe", uv: 2780, pv: 3908 },
    { name: "Cuma", uv: 1890, pv: 4800 },
    { name: "Cumartesi", uv: 2390, pv: 3800 },
    { name: "Pazar", uv: 3490, pv: 4300 },
  ];

  return (
    <AreaChart
      width={window.innerWidth * 0.8} // Ekran boyutuna göre dinamik genişlik
      height={300} // Yüksekliği esnek tutarak daha iyi görünüm
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }} // Margin değerini güncelledim
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
      <XAxis dataKey="name" label={{ value: 'Gunler', position: 'insideBottomRight', offset: -5 }} />
      <YAxis label={{ value: 'Gunluk ziyaretci ', angle: -90, position: 'insideLeft' }} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default Dashboard;
