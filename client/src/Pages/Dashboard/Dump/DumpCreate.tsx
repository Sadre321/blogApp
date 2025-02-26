import { DatePicker, Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import type { UploadFile } from "antd/es/upload/interface";

const DumpCreate = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onFinish = (values: any) => {
    console.log("Form Values:", { ...values, fileList });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Validation Failed:", errorInfo);
  };

  const handleFileChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
    console.log("Uploaded Files:", fileList);
  };

  return (
    <Form
      name="dumpCreateForm"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* Tarih Seçici */}
      <Form.Item
        label="Tarih"
        name="date"
        rules={[{ required: true, message: "Lütfen bir tarih seçin." }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      {/* Resim Yükleme */}
      <Form.Item label="Resim" name="file">
        <Upload
          fileList={fileList}
          beforeUpload={() => false} // Dosya otomatik yüklenmez, manuel işlenir
          onChange={handleFileChange}
        >
          <Button icon={<UploadOutlined />}>Dosya Yükle</Button>
        </Upload>
      </Form.Item>

      {/* Açıklama Alanı */}
      <Form.Item
        label="Açıklama"
        name="description"
        rules={[{ required: true, message: "Lütfen bir açıklama girin." }]}
      >
        <Input />
      </Form.Item>

      {/* Gönder Butonu */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ekle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DumpCreate;
