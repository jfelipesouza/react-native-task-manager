import { Switch } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  margin: ${({ theme }) => theme.space.sm} 0;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Inline = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Check = styled(Switch)`
  transform: scale(1.2);
`;
