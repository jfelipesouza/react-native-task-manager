import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space.md};
  align-items: center;
`;

export const Field = styled(TextInput)`
  border-width: 1px;
  margin-top: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.border.sm};
  padding-top: ${({ theme, multiline }) => (multiline ? theme.space.xs : 0)};
  padding-bottom: ${({ theme, multiline }) => (multiline ? theme.space.xs : 0)};
  padding-left: ${({ theme }) => theme.space.sm};
  padding-right: ${({ theme }) => theme.space.sm};
  min-height: ${({ theme }) => theme.screenDimensions.height * 0.06};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  width: 95%;
`;
