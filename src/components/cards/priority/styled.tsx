import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  min-width: ${({ theme }) => `${theme.screenDimensions.width * 0.6}px`};
  max-width: ${({ theme }) => `${theme.screenDimensions.width * 0.8}px`};
  background-color: ${({ theme }) => theme.colors.cardColor};
  min-height: ${({ theme }) => `${theme.screenDimensions.height * 0.1}px`};
  margin: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.sm};
  border-radius: 20px;
  align-items: flex-start;
  justify-content: center;
  elevation: 2;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  text-transform: capitalize;
`;

export const Descrition = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.space.md} 0;
`;
