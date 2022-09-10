import { Button, List } from "antd";
import React from "react";
import Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

export default function ReminderList({
  items,
  onRemoveReminder,
}: ReminderListProps) {
  return (
    <List
      grid={{ gutter: 8, column: 2 }}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <List.Item.Meta
            title={<div>{item.title}</div>}
            description={
              <Button
                shape="round"
                danger
                onClick={() => onRemoveReminder(item.id)}
              >
                Delete
              </Button>
            }
          />
        </List.Item>
      )}
    />
  );
}
