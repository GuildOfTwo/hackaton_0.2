/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
// utils
import { IUser } from '../../utils/constants/user';

interface IAuthState {
  isAuth: boolean;
  authorizationStatus?: string;
  user?: IUser;
  role?: string;
}

const initialState: IAuthState = {
  isAuth: false,
  role: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (_state: IAuthState, _action: { payload: IAuthState; type: string }) => {},
    logout: (_state: IAuthState) => {},
  },
});

export const { logout, login } = authSlice.actions;
export const getAuthStatus = (state: IAuthState) => state.isAuth;

export default authSlice.reducer;
