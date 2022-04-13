import React, { useState } from "react";
import { DateProps } from "../../../@types/form/date";
import { Container, DateContainer, DateText, Inline, Label } from "./styled";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export const DateComponent: React.FC<DateProps> = ({
  label,
  mode,
  type,
  buttonText,
  display,
  setDate,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const today = new Date(Date.now());

  const handleCancel = () => {
    setDate("", type);
    setVisible(false);
  };

  const handleConfirm = (date: Date, type: string) => {
    if (type === "date") {
      const day = `${
        date.getDate() < 10 ? "0" + `${date.getDate()}` : date.getDate()
      }/${
        date.getMonth() + 1 < 10
          ? "0" + `${date.getMonth() + 1}`
          : date.getMonth() + 1
      }`;
      setDate(day, type);
    }
    if (type === "alert") {
      const hour = `${
        date.getHours() < 10 ? "0" + `${date.getHours()}` : date.getHours()
      }:${
        date.getMinutes() < 10
          ? "0" + `${date.getMinutes()}`
          : date.getMinutes()
      }`;

      setDate(hour, type);
    }
    setVisible(false);
  };

  const handleSelect = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === "dismissed") {
      handleCancel();
    }
    if (event.type === "set") {
      handleConfirm(date as Date, type);
    }
  };

  return (
    <Container>
      <Inline>
        <Label>{label}</Label>
        {visible && (
          <DateTimePicker
            minimumDate={type === "date" ? new Date(today) : undefined}
            mode={mode}
            display={display}
            value={type === "date" ? today : new Date(Date.now() + 2)}
            onChange={(event, date) => handleSelect(event, date)}
            is24Hour={true}
          />
        )}
        <DateContainer onPress={() => setVisible(!visible)}>
          <DateText>{buttonText}</DateText>
        </DateContainer>
      </Inline>
    </Container>
  );
};
