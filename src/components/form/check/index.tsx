import React from "react";
import { CheckProps } from "../../../@types/form/check";
import { Container, Inline, Check, Title } from "./styled";

export const CheckField: React.FC<CheckProps> = ({
  label,
  value,
  setValue,
  ...rest
}) => {
  return (
    <Container>
      <Inline>
        <Title>{label}</Title>
        <Check
          value={value}
          onValueChange={(value: boolean) => setValue(value)}
          {...rest}
        />
      </Inline>
    </Container>
  );
};
