import { Button, Form, Input } from "antd";
import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

export default function NewReminder({
  onAddReminder,
}: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");
  const [form] = Form.useForm();

  const submitForm = (e: React.FormEvent) => {
    if (!title) return;
    onAddReminder(title);
    form.resetFields();
    setTitle("");
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={submitForm}
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 12 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Reminder message"
        name="Reminder message"
        rules={[{ message: "Please input your message" }]}
      >
        <Input
          value={title}
          id={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Add Reminder
        </Button>
      </Form.Item>
    </Form>
  );
}
