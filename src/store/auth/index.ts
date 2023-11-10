/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
// utils

interface IAuthState {
  isLogin: boolean;
}

const initialState: IAuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: IAuthState) => {
      state.isLogin = true;
    },
    logout: () => {},
  },
});

export const { logout, login } = authSlice.actions;
export const getAuthStatus = (state: IAuthState) => state.isLogin;

export default authSlice.reducer;
