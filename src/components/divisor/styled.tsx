import styled from "styled-components/native";

type ContainerProps = {
  width: string;
};
type TitleProps = {
  indicator: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View<ContainerProps>`
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.colors.division};
  padding-top: ${({ theme }) => theme.space.xs};
  padding-bottom: ${({ theme }) => theme.space.xs};
  padding-left: ${({ theme }) => theme.space.md};
  border-bottom-right-radius: ${({ theme, width }) =>
    width === "100%" ? 0 : theme.border.md};
  border-top-right-radius: ${({ theme, width }) =>
    width === "100%" ? 0 : theme.border.md};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme, indicator }) =>
    indicator === true ? theme.colors.emphasis : theme.colors.divisionTitle};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
