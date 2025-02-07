import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";

type FieldType = {
  title?: string;
  description?: string;
  tags?: string[];
  date?: string;
};

const BlogCreate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Ay 0-11 arası olduğu için 1 ekliyoruz
  const day = today.getDate();

  // Bugünün tarihini "yyyy-mm-dd" formatında oluşturuyoruz
  const formattedDate = `${
    day < 10 ? '0' + day : day
  }-${month < 10 ? '0' + month : month}-${year}`;

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={{
        date: formattedDate, // Tarihi initialValues ile formun başlangıcına ekliyoruz
      }}
    >
      <Form.Item<FieldType>
        label="Başlık"
        name="title"
        rules={[{ required: true, message: "Lütfen sayfanın başlığını girin." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Açıklama"
        name="description"
        rules={[{ required: true, message: "Lütfen blogun açıklamasını girin." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Etiket"
        name="tags"
        rules={[{ required: true, message: "Lütfen sayfanın etiketlerini girin." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Tarih"
        name="date"
      >
        <Input disabled />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Ekle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogCreate;
