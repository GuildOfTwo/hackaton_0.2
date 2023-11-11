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
    setLightTheme(state: IThemeState) {
      handleSetTheme('light'), (state.theme = 'light');
    },
  },
});

export const { setDefaultTheme, setLightTheme } = themeSlice.actions;

export default themeSlice.reducer;
