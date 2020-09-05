import { DefaultTheme, Colors } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.lightGreen900,
    secondary: Colors.lightGreen500,
    error: Colors.red500
  }
};
