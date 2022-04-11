import React from "react";
import { Container, Content, Title } from "./styled";

export type DivisorProps = {
  title: string;
  indicator: true | false;
  width:
    | "10%"
    | "20%"
    | "30%"
    | "40%"
    | "50%"
    | "60%"
    | "70%"
    | "80%"
    | "90%"
    | "100%";
};

const Divisor: React.FC<DivisorProps> = ({ title, indicator, width }) => {
  return (
    <Container>
      <Content width={width}>
        <Title indicator={indicator}>{title}</Title>
      </Content>
    </Container>
  );
};

export default Divisor;
