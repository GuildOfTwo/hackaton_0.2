import React from 'react';
import AppRoutes from '../routes';
import { Modal } from '../components/modal';
import { AppStyles } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Theme from '../components/Theme/Theme';
import { getTheme } from '../utils/theme';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setLightTheme, setDefaultTheme } from '../store/theme';
import { closeModalWindow, openModalWindow } from '../store/modal';
import { getUserOnLoad } from '../api/getUserOnLoad/getUserOnLoad';
import { setUserOnLoad } from '../store/user';
import { AUTHORIZATION_URI } from '../utils/constants/navigation';
import { GET_USER_ON_LOAD } from '../store/auth/actions';
import { Preloader } from '../components/preloader';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFirstTimeLogin = useAppSelector((store) => store.user.user?.firstSignIn);
  const isLogin = useAppSelector((store) => store.auth.isLogin);
  const isLoading = useAppSelector((store) => store.auth.isLoading);
  const setThemeOnLoad = () => {
    if (getTheme() === 'default') {
      dispatch(setDefaultTheme());
    }
    if (getTheme() === 'light') {
      dispatch(setLightTheme());
    }
  };
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    location.pathname === '/' ? navigate('dashboard') : '';
  }, [location]);

  React.useEffect(() => {
    isFirstTimeLogin && dispatch(openModalWindow({ type: 'welcomeModal' }));
    dispatch(closeModalWindow());
  }, []);

  React.useEffect(() => {
    setThemeOnLoad();
  }, []);
  const checkUser = () => {
    getUserOnLoad()
      .then((res) => res.data)
      .then(
        (res) => (
          dispatch(GET_USER_ON_LOAD()),
          dispatch(
            setUserOnLoad({
              avatar: res.avatar,
              id: res.id,
              firstName: res.firstName,
              lastName: res.lastName,
              roles: res.roles,
              firstSignIn: res.firstSignIn,
              email: res.email,
              phoneNumber: res.phone,
              mentor: res.mentor,
              department: res.department,
              accessRoles: res.accessRoles,
              mentor_tg: res.mentor_tg,
              telegram: res.telegram,
              birthday: res.birthday,
              middleName: res.middleName,
              post: res.post,
              UserCourses: res.UserCourses,
              UserAwards: res.UserAwards,
            })
          )
        )
      )
      .catch((error) => (console.log(error), navigate(AUTHORIZATION_URI)));
  };

  React.useEffect(() => {
    !isLogin && checkUser();
  }, []);

  if (isLoading === 'GET_USER_ON_LOAD/pending') return <Preloader />;
  return (
    <>
      <Theme>
        <AppStyles />
        <AppRoutes />
        <Modal />
      </Theme>
    </>
  );
};

export default App;
