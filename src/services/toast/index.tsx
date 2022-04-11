import React from "react";
import { BaseToast } from "react-native-toast-message";
import { light } from "../../theme";

const { colors, fonts } = light;
export const TOAST_CONFIG = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        flexWrap: "wrap",
      }}
      text1Style={{
        fontSize: 18,
        fontFamily: fonts.bold,
        color: colors.buttonText,
      }}
      text2Style={{
        fontSize: 16,
        fontFamily: fonts.medium,
        color: colors.buttonText,
      }}
    />
  ),
  error: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: colors.emphasis,
        backgroundColor: colors.emphasis,
      }}
      text1Style={{
        fontSize: 18,
        fontFamily: fonts.bold,
        color: colors.buttonText,
      }}
      text2Style={{
        fontSize: 16,
        fontFamily: fonts.medium,
        color: colors.buttonText,
      }}
    />
  ),
};
