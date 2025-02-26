import { message, Popconfirm, Space, Table, Typography } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";

interface BlogPost {
  key: string;
  title: string;
  date: string;
  tags: string[];
}

const Blog = () => {
  const apiUri = import.meta.env.VITE_API_URI;
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBlog = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUri}/blog`);
      if (!response.ok) throw new Error("Giriş yaparken bir hata oluştu");

      const data = await response.json();
      setBlogData(data.blogs.map((blog: any) => ({
        ...blog,
        key: blog.id || blog.title, // Unique key assignment
      })));
    } catch (error) {
      console.error("Giriş hatası:", error);
      message.error("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }, [apiUri]);

  useEffect(() => {
    fetchBlog();
  }, [fetchBlog]);

  const columns = [
    {
      title: "Başlık",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Etiketler",
      dataIndex: "tags",
      key: "tags",
      render: (_: any, record: BlogPost) => (
        <Space>
          {record.tags.map((tag) => (
            <Typography.Text key={tag} style={{ margin: 0 }}>
              #{tag}
            </Typography.Text>
          ))}
        </Space>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_:any, record:BlogPost) => (
        <Space size="large" >
          <EditTwoTone
            type="primary"
            onClick={() => {
              // navigate(`/admin/products/update/${record._id}`);
              console.log(record);
            }}
          >
            Düzenle
          </EditTwoTone >
          <Popconfirm
            title="Yer Isareti silme"
            description="Yer Isareti silinmesini istiyor musunuz?"
            okText="Evet"
            cancelText="Hayır"
            onConfirm={() => {
              // deleteProduct(record._id); // `record._id` ile silme işlemi
            }}
          >
            <DeleteTwoTone  twoToneColor="#eb2f96">
              Sil
            </DeleteTwoTone >
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table dataSource={blogData} columns={columns} loading={loading} />;
};

export default Blog;
