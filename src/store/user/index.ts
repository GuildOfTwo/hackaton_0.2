import { createSlice } from '@reduxjs/toolkit';
import { TUser, TUserSliceState } from '../../utils/types/types';

const initialState: TUserSliceState = {
  user: null,
  error: '',
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoginInfo: (state: TUserSliceState, action: { payload: TUser; type: string }) => {
      state.user = { ...action.payload };
    },
    setUserOnLoad: (state: TUserSliceState, action: { payload: TUser; type: string }) => {
      state.user = { ...action.payload };
    },
    setFirstSignInFalse: (state: TUserSliceState) => {
      if (state.user !== null) state.user.firstSignIn = false;
    },
  },
});

export const { setLoginInfo, setFirstSignInFalse, setUserOnLoad } = userSlice.actions;
export default userSlice.reducer;
