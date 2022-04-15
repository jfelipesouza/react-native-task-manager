import React, { useState } from "react";
import { CardProps } from "../../../@types/card";
import { NoteModal } from "../../modal";
import { Container, Descrition, Title } from "./styled";

export const PriorityCard: React.FC<CardProps> = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    setVisible(!visible);
  };

  return (
    <Container onPress={() => show()}>
      <Title numberOfLines={1}>{data.title}</Title>
      <Descrition numberOfLines={1}> {data.content}</Descrition>
      <NoteModal close={show} visible={visible} data={data} />
    </Container>
  );
};
