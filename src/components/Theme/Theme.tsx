import { ThemeProvider } from "styled-components";
import { TThemeProps } from "../../utils/types/types";
import { useState, useEffect } from 'react';
import { useAppSelector } from "../../hooks";


const defaultTheme = {
  textcolor: 'black',
  backgroundColor1: '#ebf1f1',
  backgroundColor2: '#bec3c6',
  backgroundColor3: '#7C7C7C'
}

const darkTheme = {
  textcolor: '#D2D2D2',
  backgroundColor1: '#0A1F32',
  backgroundColor2: '#2D384A',
  backgroundColor3: '#344756'
}

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