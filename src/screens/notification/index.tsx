import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  handleCancel,
  handleScheduleNotification,
  showNotification,
} from "./notification";

export const Notification: React.FC = () => {
  const date = new Date(Date.now());
  const [visible, setVisible] = useState(false);

  const handleConfirm = (date: Date, type: string) => {
    if (type === "time") {
      const alert = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        0
      );

      handleScheduleNotification(
        "teste",
        `Funcionou o alerta das ${date.toLocaleTimeString()}`,
        alert
      );
      console.log(alert);
    }
    setVisible(!visible);
  };

  const handleSelect = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === "dismissed") {
      setVisible(!visible);
    }
    if (event.type === "set" && date) {
      handleConfirm(date, "time");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>Push notification</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => showNotification("Testando", "Isso é um Teste")}
      >
        <Text style={styles.text}> Click me get notification </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setVisible(!visible);
        }}
      >
        <Text style={styles.text}> Click me to get notification after 5s </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleCancel()}>
        <Text style={styles.text}> Click me to cancel all notification </Text>
      </TouchableOpacity>

      {visible && (
        <DateTimePicker
          mode="time"
          value={date}
          onChange={(event, date) => handleSelect(event, date)}
          is24Hour={true}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    paddingVertical: 10,
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  title: {
    color: "#222",
    marginBottom: 20,
  },
});
