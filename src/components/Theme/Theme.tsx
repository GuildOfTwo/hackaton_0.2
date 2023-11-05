import { ThemeProvider } from "styled-components";
import { TThemeProps } from "../../utils/types/types";
import { useState, useEffect } from 'react';
import { useAppSelector } from "../../hooks";
import darkTheme from "../../themes/darkTheme";
import { defaultTheme } from "antd/es/theme/context";

const Theme = ({ children }: TThemeProps) => {
  const currentTheme = useAppSelector(store => store.theme.theme)
  const [appTheme, setAppTheme] = useState({});
  useEffect(() => {
    currentTheme !== "default" ? setAppTheme(darkTheme) : setAppTheme(defaultTheme)
  }, [currentTheme]);

  return (
    <> {appTheme && <ThemeProvider theme={appTheme}>{children}</ThemeProvider>}</>)
};

export default Theme;