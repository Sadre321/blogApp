import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import { FieldType } from '../../../types';
import { useAuth } from '../../../context/authContext';

const BookmarkCreate = () => {

  const { token } = useAuth();
  const apiUri = import.meta.env.VITE_API_URI;
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = async(values) => {
   
    try {
      const response = await fetch(`${apiUri}/bookmark`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },body:JSON.stringify(values)});
      const data = await response.json();
      if (response.ok) {
        message.success("Yer Tutucu olusturuldu");
        form.resetFields();
      } else {
        message.error("Yer Tutucu olusturulamadi.");
        console.log(data.message);
      }
    }
    catch (err:any) {
      console.log("Hata : " + err.message);
      message.error("Server hatasi.");
    }
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Sayfanin Ismi"
        name="title"
        rules={[{ required: true, message: "Lutfen sayfanin ismini girin." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Sayfa Aciklamasi"
        name="description"
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Sayfa URL"
        name="url"
        rules={[{ required: true, message: "Lutfen sayfanin url'sini girin." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Ekle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BookmarkCreate;
