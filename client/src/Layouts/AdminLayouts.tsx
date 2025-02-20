import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation } from "react-router";
import {
  LaptopOutlined,
  PieChartOutlined,
  AppstoreOutlined,
  RollbackOutlined,
  PictureOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { AdminLayout } from "../types";
import { useAuth } from "../context/authContext";

const { Header, Content, Sider } = Layout;

const AdminLayouts: React.FC<AdminLayout> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { token, logout } = useAuth();

  if (!token) window.location.pathname="/login";

  const menuItems = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
      onClick: () => navigate("/admin"),
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Bloglar",
      children: [
        { key: "3", label: "Blog Listesi", onClick: () => navigate("/admin/blog") },
        { key: "4", label: "Yeni Blog Ekle", onClick: () => navigate("/admin/blog/create") },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Siteler",
      children: [
        { key: "6", label: "Site Listesi", onClick: () => navigate("/admin/bookmark") },
        { key: "7", label: "Yeni Site Ekle", onClick: () => navigate("/admin/bookmark/create") },
      ],
    },
    {
      key: "8",
      icon: <PictureOutlined />,
      label: "Anılar",
      children: [
        { key: "9", label: "Anı Listesi", onClick: () => navigate("/admin/dump") },
        { key: "10", label: "Yeni Anı Ekle", onClick: () => navigate("/admin/dump/create") },
      ],
    },
    {
      key: "11",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => (window.location.href = "/"),
    },
  ];

  const breadCrumbItems = location.pathname
    .split("/")
    .filter(Boolean)
    .map((bread) => ({ title: bread }));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }} items={menuItems} />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 0 }}>
          <Menu mode="horizontal" defaultSelectedKeys={["1"]} items={[{ key: "1", label: "Dashboard" }]} style={{ flex: 1 }} />
          <Menu
            mode="horizontal"
            items={[{ key: "logout", label: "Logout", icon: <LogoutOutlined />, onClick: logout }]}
          />
        </Header>
        <Breadcrumb items={breadCrumbItems} style={{ margin: "16px 0" }} />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayouts;