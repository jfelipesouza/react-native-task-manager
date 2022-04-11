import React, { memo } from "react";
import { InputProps } from "../../../../@types/form/input";
import Divisor from "../../../divisor";
import { Container, Field } from "./styled";

const InputText: React.FC<InputProps> = ({
  title,
  value,
  width,
  indicator,
  ...rest
}) => {
  return (
    <Container>
      <Divisor title={title} indicator={indicator} width={width} />
      <Field value={value} {...rest} />
    </Container>
  );
};

export const Input = memo(InputText);
