export type userSliceState = {
  user: null | TUser;
  error: string;
  isLoading: boolean;
  isAuth: boolean;
};

export type TUser = {
  name: string;
  email: string;
};

export type TThemeProps = {
  children: JSX.Element|JSX.Element[];
};

