import React, { useState } from "react";
import { CardProps } from "../../../@types/card";
import { NoteModal } from "../../modal";
import { CardCheck, CardDate, Container, CardTitle } from "./styled";

export const CardItem: React.FC<CardProps> = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(!visible);
  };

  return (
    <Container onPress={() => show()}>
      <CardCheck status={data.status} />
      <CardTitle numberOfLines={1}>{data.title}</CardTitle>
      <CardDate>{data.status ? data.date : data.alert}</CardDate>
      <NoteModal data={data} visible={visible} close={() => show()} />
    </Container>
  );
};
