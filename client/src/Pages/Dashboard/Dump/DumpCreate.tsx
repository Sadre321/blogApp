import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload, DatePicker, Button, Form, Input } from "antd";
import type { UploadProps } from "antd";
import type { RcFile } from "antd/es/upload/interface";
import { FieldType } from "../../../types";


const getBase64 = (file: RcFile): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG files!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const DumpCreate = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange: UploadProps["onChange"] = async (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done" && info.file.originFileObj) {
      const url = await getBase64(info.file.originFileObj as RcFile);
      setImageUrl(url);
      setLoading(false);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const onFinish = (values: FieldType) => {
    console.log("Form Values:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Validation Failed:", errorInfo);
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
      <Form.Item<FieldType>
        label="Tarih"
        name="date"
        rules={[{ required: true, message: "Lütfen bir tarih seçin." }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      {/* Resim Yükleme */}
      <Form.Item label="Resim">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </Form.Item>

      {/* Açıklama Alanı */}
      <Form.Item<FieldType>
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
