import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { FieldType } from "../../../types";
import { useAuth } from "../../../context/authContext";

const BlogCreate = () => {

  const {token} = useAuth();
  const apiUri = import.meta.env.VITE_API_URI;
  const [form] = Form.useForm();
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Ay 0-11 arası olduğu için 1 ekliyoruz
  const day = today.getDate();


  // Bugünün tarihini "yyyy-mm-dd" formatında oluşturuyoruz
  const formattedDate = `${day < 10 ? '0' + day : day
    }-${month < 10 ? '0' + month : month}-${year}`;

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    try {
      const response = await fetch(`${apiUri}/blog`, { method: "POST", headers: { "Content-Type": "application/json",Authorization:`Beare ${token}`}, body: JSON.stringify(values) });

      console.log(response);
      if(response.ok){
        message.success("Blog olusturuldu");
        form.resetFields();
      }else{
        message.error("Blog olusturulamadi."); 
      }
    }
    catch (err) {
      console.log("Hata : " + err);
      message.error("Server hatasi.");
    }
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
