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

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const DateContainer = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.border.sm};
`;

export const DateText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.ligthGray};
`;
