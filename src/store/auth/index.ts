/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
import { GET_USER_ON_LOAD } from './actions';
// utils

interface IAuthState {
  isLogin: boolean;
  isLoading: string;
}

const initialState: IAuthState = {
  isLogin: false,
  isLoading: 'negative',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: IAuthState) => {
      state.isLogin = true;
    },
    getUser: (state: IAuthState) => {
      state.isLogin = true;
    },
    logout: (state: IAuthState) => {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GET_USER_ON_LOAD.fulfilled, (state, action) => {
        state.isLogin = true;
        state.isLoading = action.type;
      })
      .addCase(GET_USER_ON_LOAD.pending, (state, action) => {
        state.isLogin = false;
        state.isLoading = action.type;
      })
      .addCase(GET_USER_ON_LOAD.rejected, (state, action) => {
        state.isLogin = false;
        state.isLoading = action.type;
      });
  },
});

export const { logout, login, getUser } = authSlice.actions;
export const getAuthStatus = (state: IAuthState) => state.isLogin;

export default authSlice.reducer;
