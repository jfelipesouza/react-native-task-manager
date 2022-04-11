import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderContainer = styled(LinearGradient)`
  width: 100%;
  height: ${({ theme }) =>
    (theme.screenDimensions.height * 0.09).toFixed(0) + "px"};
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Scroll = styled.ScrollView``;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ActiveButton = styled.TouchableOpacity`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xs} 0;
  border-radius: ${({ theme }) => theme.border.sm};
  margin-top: ${({ theme }) => theme.space.sm};
`;

export const ActiveButtonText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.header};
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonIcon = styled.TouchableOpacity``;
