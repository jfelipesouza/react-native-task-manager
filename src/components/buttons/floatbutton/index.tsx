import React from "react";
import { useTheme } from "styled-components";
import { Container, Icon } from "./styled";

type FloatButtonProps = {
  onPress: () => {};
};

export const FloatButton: React.FC<FloatButtonProps> = ({ onPress }) => {
  const { colors } = useTheme();
  return (
    <Container
      onPressOut={onPress}
      style={{
        shadowColor: colors.gray,
      }}
    >
      <Icon name="ios-add-outline" />
    </Container>
  );
};
