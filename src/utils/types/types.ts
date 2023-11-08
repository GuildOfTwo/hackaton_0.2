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
  children: JSX.Element | JSX.Element[];
};

export type TCreateUser = {
  user: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    mentor?: string;
    departament?: string;
    phone?: string;
    role?: string[];
    middleName?: string;
  };
};

export type TAnswers = {
  answer: string;
  correct?: boolean;
};

export type TQuestions = {
  name: string;
  answers: TAnswers[];
};

export type TCreateNewCourse = {
  name: string;
  type: string[];
  content: string;
  questions: TQuestions[];
};
