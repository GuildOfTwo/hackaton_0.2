/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
// utils
import { IUser } from '../../utils/constants/user';

interface IAuthState {
  isLogin: boolean;
  user?: IUser | null;
  accessRoles?: Array<string>;
}
interface ILoginPayload {
  user: IUser;
  accessRoles: Array<string>;
}
const initialState: IAuthState = {
  isLogin: false,
  accessRoles: [],
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: IAuthState, action: { payload: ILoginPayload; type: string }) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.accessRoles = action.payload.accessRoles;
    },
    logout: (state: IAuthState) => {},
  },
});

export const { logout, login } = authSlice.actions;
export const getAuthStatus = (state: IAuthState) => state.isLogin;

export default authSlice.reducer;
