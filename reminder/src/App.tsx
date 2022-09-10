import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "antd";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    newReminder.id = Date.now();
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList
        items={reminders}
        onRemoveReminder={removeReminder}
      ></ReminderList>
    </div>
  );
}

export default App;
