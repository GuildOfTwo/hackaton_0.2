import { createSlice } from '@reduxjs/toolkit';
import { handleSetTheme } from '../../utils/theme';

interface IThemeState {
  theme: string;
}

const initialState: IThemeState = {
  theme: 'default',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDefaultTheme(state: IThemeState) {
      handleSetTheme('default'), (state.theme = 'default');
    },
    setDarkTheme(state: IThemeState) {
      handleSetTheme('dark'), (state.theme = 'dark');
    },
  },
});

export const { setDefaultTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
