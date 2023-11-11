import { createSlice } from '@reduxjs/toolkit';
import { TUser, TUserCourse, TUserSliceState } from '../../utils/types/types';

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
      state.user = action.payload;
    },
    setUserOnLoad: (state: TUserSliceState, action: { payload: TUser; type: string }) => {
      state.user = action.payload;
    },
    setUserCourse: (state: TUserSliceState, action: { payload: any; type: string }) => {
      if (state.user != null) state.user.UserCourses = action.payload;
    },
    setFirstSignInFalse: (state: TUserSliceState) => {
      if (state.user !== null) state.user.firstSignIn = false;
    },
  },
});

export const { setLoginInfo, setFirstSignInFalse, setUserOnLoad, setUserCourse } =
  userSlice.actions;
export default userSlice.reducer;
