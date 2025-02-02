import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
    bookmark?: string;
    bookMarkDesc?: string;
    bookMarkUri?: string;
  };

const BookmarkCreate = () => {
      
      const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
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
        name="bookmark"
        rules={[{ required: true, message: "Lutfen sayfanin ismini girin." }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Sayfa Aciklamasi"
        name="bookMarkDesc"
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Sayfa URL"
        name="bookMarkUri"
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
