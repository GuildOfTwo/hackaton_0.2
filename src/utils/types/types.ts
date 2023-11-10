export type TUserSliceState = {
  user: null | TUser;
  error: string;
  isLoading: boolean;
};

export type TUser = {
  id: number;
  firstSignIn: boolean;
  name: string;
  email: string;
  phoneNumber:string;
  mentor: string;
  departament:string;
  director: string;
  firstName: string,
  lastName: string,
  roles: Array<string>,
  accessRoles: Array<string>,
  telegram: string,
  birthday: Date;
  mentor_tg: string;
  middleName: string;
  post: string;
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

export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export type ValuesType = {
  username: string;
  password: string;
};

export type TProtectedRoute = {
  onlyForLogged: boolean;
  element: JSX.Element;
  userType?: string;
};

export type TProtectedRouteByLoggin = {
  element: JSX.Element;
  userType?: string;
};

export type TProtectedRouteByPower = {
  element: JSX.Element;
};

export type TAnswersCourse = {
  answer: [string, boolean]
}

export type TCourseQuestions = {
  name: string,
  answers:TAnswersCourse[]
}

export type TCourseContent = {
  text: string,
  question: TCourseQuestions[]
}

export type TCreateNewCourseApi = {
  name: string,
  courseDuration: string,
  CourseContent:TCourseContent[],
  type: number[]
}

export type TCourse = {
  course: TCreateNewCourseApi
}


export type TProfileFieldType = {
  Telegram?: string;
  Phone?: string;
  DateOfBirth: string;
};
