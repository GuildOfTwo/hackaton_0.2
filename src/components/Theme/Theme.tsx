import { ThemeProvider } from 'styled-components';
import { TThemeProps } from '../../utils/types/types';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import darkTheme from '../../themes/darkTheme';
import lightTheme from '../../themes/lightTheme';

const Theme = ({ children }: TThemeProps) => {
  const currentTheme = useAppSelector((store) => store.theme.theme);
  const [appTheme, setAppTheme] = useState({});
  useEffect(() => {
    if (currentTheme === 'default') {
      setAppTheme(lightTheme);
    }
    if (currentTheme === 'dark') {
      setAppTheme(darkTheme);
    }
  }, [currentTheme]);

  return <> {appTheme && <ThemeProvider theme={appTheme}>{children}</ThemeProvider>}</>;
};

export default Theme;
