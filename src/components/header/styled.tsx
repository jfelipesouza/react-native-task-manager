import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  width: 100%;
  min-height: ${({ theme }) => theme.screenDimensions.height * 0.2}px;
  flex-direction: row;
  align-items: center;
  padding: 0px ${({ theme }) => theme.space.sm};
`;

export const Avatar = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.screenDimensions.width * 0.18}px;
  height: ${({ theme }) => theme.screenDimensions.width * 0.18}px;
  border-radius: ${({ theme }) => theme.border.md};
  elevation: 3;
  background-color: ${({ theme }) => theme.colors.cardColor};
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.border.md};
`;

export const Content = styled.View`
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.fontSizes.header};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.header};
`;
