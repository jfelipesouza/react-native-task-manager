import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  border-radius: ${({ theme }) => theme.border.xxxlg};
  bottom: ${({ theme }) => theme.space.lg};
  right: ${({ theme }) => theme.space.lg};
  align-items: center;
  justify-content: center;
  elevation: 2;
`;

export const Icon = styled(Ionicons)`
  margin: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => `${theme.icons.xxlg}px`};
  color: ${({ theme }) => theme.colors.buttonText};
`;
