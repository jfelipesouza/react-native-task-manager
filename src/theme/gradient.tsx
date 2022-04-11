import { useTheme } from "styled-components";

const { colors } = useTheme();

export const gradient = {
  colors: [colors.primary, colors.tint],
};
