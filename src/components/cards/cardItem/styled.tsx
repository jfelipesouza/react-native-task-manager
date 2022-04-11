import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 92%;
  height: ${({ theme }) => theme.screenDimensions.height * 0.05}px;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: left;
  padding: 0 ${({ theme }) => theme.space.sm};
  flex: 1;
`;

type CardCheckProps = {
  status: boolean;
};

export const CardCheck = styled.View<CardCheckProps>`
  width: ${({ theme }) => theme.space.md};
  height: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.border.md};
  background-color: ${({ theme, status }) =>
    status ? theme.colors.divisionTitle : theme.colors.primary};
`;

export const CardDate = styled.Text`
  color: ${({ theme }) => theme.colors.ligthGray};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: right;
`;
