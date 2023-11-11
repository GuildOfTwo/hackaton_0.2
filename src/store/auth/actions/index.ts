import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserOnLoad } from '../../../api/getUserOnLoad/getUserOnLoad';

export const GET_USER_ON_LOAD = createAsyncThunk('GET_USER_ON_LOAD', () => {
  getUserOnLoad();
});
