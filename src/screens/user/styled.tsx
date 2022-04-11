import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${({ theme }) => theme.screenDimensions.height * 0.07}px;
  align-items: center;
  padding: 0 ${({ theme }) => theme.space.sm};
  justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: ${({ theme }) => theme.icons.xlg}px;
`;

export const Scroll = styled.ScrollView``;
export const Content = styled.KeyboardAvoidingView``;

export const Avatar = styled.TouchableOpacity`
  width: ${({ theme }) => theme.screenDimensions.width * 0.5}px;
  height: ${({ theme }) => theme.screenDimensions.width * 0.5}px;
  border-radius: ${({ theme }) => theme.screenDimensions.width * 0.15}px;
  background-color: ${({ theme }) => theme.colors.buttonText};
  margin: ${({ theme }) => theme.space.lg} 0;
  align-self: center;
  elevation: 2;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.screenDimensions.width * 0.15}px;
`;
