import { Dimensions } from "react-native";

import { RFPercentage as Perct } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

export const light = {
  colors: {
    primary: "#4DACA6",
    tint: "#07bcb7",
    secundary: "#0FEAEA",
    buttonText: "#ffffff",
    cardColor: "#ffffff",
    background: "#F4F5FC ",
    gray: "#5E5D5D",
    ligthGray: "#8A8080",
    text: "#535252",
    division: "#ffe0deaa",
    divisionTitle: "#F98533",
    title: "#222",
    emphasis: "#ff6347",
    backgroundModal: "#00000054",
  },
  fonts: {
    bold: "YaldeviColombo-SemiBold",
    medium: "YaldeviColombo-Medium",
    regular: "YaldeviColombo-Regular",
  },
  fontSizes: {
    header: `${Perct(3)}px`,
    title: `${Perct(2.75)}px`,
    subTitle: `${Perct(2.5)}px`,
    text: `${Perct(2)}px`,
  },
  space: {
    xs: `${Perct(1)}px`,
    sm: `${Perct(2)}px`,
    md: `${Perct(2.5)}px`,
    lg: `${Perct(3)}px`,
    xlg: `${Perct(3.5)}px`,
    xxlg: `${Perct(4.5)}px`,
    xxxlg: `${Perct(6)}px`,
    view: `${Perct(8)}px`,
  },
  screenDimensions: {
    width: width,
    height: height,
  },
  border: {
    xsm: `${Perct(1)}px`,
    sm: `${Perct(1.5)}px`,
    md: `${Perct(2.5)}px`,
    lg: `${Perct(3)}px`,
    xlg: `${Perct(4)}px`,
    xxlg: `${Perct(5)}px`,
    xxxlg: `${Perct(6)}px`,
  },
  icons: {
    xs: Perct(0.5),
    sm: Perct(1),
    md: Perct(2.5),
    lg: Perct(3),
    xlg: Perct(4),
    xxlg: Perct(4.5),
    xxxlg: Perct(6),
  },
};
