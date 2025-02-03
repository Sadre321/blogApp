import React from "react";
import {
  LineChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";
import { Flex, Card, Typography } from "antd";

const Dashboard: React.FC = () => {
  const data = [
    { name: "Pazartesi", ziyaretci: 4000 },
    { name: "Sali", ziyaretci: 3000 },
    { name: "Carsamba", ziyaretci: 2000 },
    { name: "Persembe", ziyaretci: 2780 },
    { name: "Cuma", ziyaretci: 1890 },
    { name: "Cumartesi", ziyaretci: 2390 },
    { name: "Pazar", ziyaretci: 3490 },
  ];

  return (
    <Flex vertical="vertical" justify="space-between" gap={40}>
      <Flex gap={30}>
        <Card style={{ width: 550 }}>
          <Typography.Title level={5}>Toplam Ziyaretci</Typography.Title>
          <Flex justify="space-between" align="baseline">
            <Typography.Title level={3}>413</Typography.Title>
            <Typography>Ziyaretci</Typography>
          </Flex>
        </Card>
        <Card style={{ width: 550 }}>
          <Typography.Title level={5}>Toplam Blog</Typography.Title>
          <Flex justify="space-between" align="baseline">
            <Typography.Title level={3}>413</Typography.Title>
            <Typography>Blog</Typography>
          </Flex>
        </Card>
        <Card style={{ width: 550 }}>
          <Typography.Title level={5}>Toplam Yer Isareti</Typography.Title>
          <Flex justify="space-between" align="baseline">
            <Typography.Title level={3}>413</Typography.Title>
            <Typography>Site</Typography>
          </Flex>
        </Card>
        <Card style={{ width: 550 }}>
          <Typography.Title level={5}>Toplam Fotograf</Typography.Title>
          <Flex justify="space-between" align="baseline">
            <Typography.Title level={3}>413</Typography.Title>
            <Typography>Fotograf</Typography>
          </Flex>
        </Card>
      </Flex>
      <LineChart
        width={1600}
        height={350}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ziyaretci" stroke="#82ca9d" />
      </LineChart>
    </Flex>
  );
};

export default Dashboard;
