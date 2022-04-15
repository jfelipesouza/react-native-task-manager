import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundModal};
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  width: ${({ theme }) => theme.screenDimensions.width * 0.9}px;
  min-height: ${({ theme }) => theme.screenDimensions.width * 0.9}px;
  background-color: ${({ theme }) => theme.colors.cardColor};
  border-radius: ${({ theme }) => theme.border.md};
  position: relative;
`;

export const CardHeader = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  width: 60%;
  margin: ${({ theme }) => theme.space.xs} 0;
`;

export const CardContent = styled.View`
  flex: 1;
  width: 100%;
  margin: ${({ theme }) => theme.space.md} 0;
  position: relative;
`;

export const CardSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray};
`;

export const CardDescrition = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  margin: ${({ theme }) => theme.space.md} 0;
  padding: 0 ${({ theme }) => theme.space.sm};
`;

export const CloseIcon = styled.TouchableOpacity`
  position: absolute;
  top: ${({ theme }) => theme.space.md};
  right: ${({ theme }) => theme.space.md};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.space.xlg};
  width: ${({ theme }) => theme.space.xxxlg};
  height: ${({ theme }) => theme.space.xxxlg};
  align-items: center;
  justify-content: center;
`;

export const Inline = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.space.sm};
  padding: 0 ${({ theme }) => theme.space.sm};
`;

type ActionButtonProps = {
  type: "delete" | "edit";
};

export const ActionButton = styled.TouchableOpacity<ActionButtonProps>`
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.space.xs};
  margin-top: ${({ theme }) => theme.space.sm};

  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  width: 45%;
  align-self: center;
  border-radius: ${({ theme }) => theme.border.sm};
  background-color: ${({ theme, type }) =>
    type === "delete" ? theme.colors.emphasis : theme.colors.primary};
`;

export const Confirm = styled.Switch``;

export const ActionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.subTitle};
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.buttonText};
`;

export const LoadingView = styled.View`
  position: absolute;
`;
