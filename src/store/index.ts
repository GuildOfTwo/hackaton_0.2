import { configureStore } from '@reduxjs/toolkit';
import UserReduser from './user';
import ModalReduser from './modal';
import ThemeReduser from './theme';
import AutReduser from './auth';
import { combineReducers } from 'redux';

enum ReducerName {
  User = 'user',
  Modal = 'modal',
  Theme = 'theme',
  Auth = 'auth',
}

const rootReducer = combineReducers({
  [ReducerName.User]: UserReduser,
  [ReducerName.Auth]: AutReduser,
  [ReducerName.Modal]: ModalReduser,
  [ReducerName.Theme]: ThemeReduser,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
