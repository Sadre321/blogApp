import { message, Popconfirm, Space, Table } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";

interface BookmarkPost {
  name: string,
  description?: string,
  url: string
}

const Bookmark = () => {

  const apiUri = import.meta.env.VITE_API_URI;
  const [bookmarkData, setBookmarkData] = useState<BookmarkPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBookmark = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUri}/bookmark`);
      if (!response.ok) throw new Error("Giriş yaparken bir hata oluştu");

      const data = await response.json();
      setBookmarkData(data.bookmarks.map((bookmark: any) => ({
        ...bookmark,
        key: bookmark.id || bookmark.title, // Unique key assignment
      })));

    } catch (error) {
      console.error("Giriş hatası:", error);
      message.error("Bir hata oluştu, lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }, [apiUri]);

  useEffect(() => {
    fetchBookmark();
  }, [fetchBookmark]);

  const columns = [
    {
      title: "Baslik",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Actions",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_: any, record: BookmarkPost) => (
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

  return (
    <Table loading={loading} dataSource={bookmarkData} columns={columns} />
  );
};

export default Bookmark;
