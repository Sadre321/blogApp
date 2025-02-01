import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate,useLocation } from "react-router";  // 'navigate' işlevini kullanabilmek için bu importu ekliyoruz
import {
  LaptopOutlined,
  PieChartOutlined,
  AppstoreOutlined,
  RollbackOutlined,
  PictureOutlined 
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const AdminLayouts: React.FC = ({children}:{children:React.node}) => {
  const navigate = useNavigate();  // navigate işlevini burada tanımlıyoruz
  const location = useLocation();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
        {
          key: "3",
          label: "Blog Listesi",
          onClick: () => navigate("/admin/blog"),
        },
        {
          key: "4",
          label: "Yeni Blog Ekle",
          onClick: () => navigate("/admin/blog/create"),
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Siteler",
      children: [
        {
          key: "6",
          label: "Site Listesi",
          onClick: () => navigate("/admin/bookmark"),
        },
        {
          key: "7",
          label: "Yeni Site Ekle",
          onClick: () => navigate("/admin/bookmark/create"),
        },
      ],
    },
    {
      key: "8",
      icon: <PictureOutlined />,
      label: "Anilar",
      children: [
        {
          key: "9",
          label: "Ani Listesi",
          onClick: () => navigate("/admin/dump"),
        },
        {
          key: "10",
          label: "Yeni Ani Ekle",
          onClick: () => navigate("/admin/dump/create"),
        },
      ],
    },{
      key: "11",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => window.location.href = "/",
    }
  ];

  const dynamicBreadCrumb = (pathname: string) => {
    const breadCrumbParts = pathname.split("/").filter(x => x);  // "breadCrumbPart" -> "breadCrumbParts" anlam daha uygun
    return breadCrumbParts.map((bread) => ({
      title: bread
    }));
  };
  
  const breadCrumb = dynamicBreadCrumb(location.pathname);
  
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} style={{ background: colorBgContainer }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={menuItems}
        />
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Header style={{ display: "flex", alignItems: "center", padding: 0 }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={[{ key: "1", label: "Dashboard" }]}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Breadcrumb
          items={breadCrumb.map(x=> x)}
          style={{ margin: "16px 0" }}
        />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {/* Content Goes Here */}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayouts;
