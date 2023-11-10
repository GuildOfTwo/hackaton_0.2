import React from 'react';
import AppRoutes from '../routes';
import { Modal } from '../components/modal';
import { AppStyles } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Theme from '../components/Theme/Theme';
import { getTheme } from '../utils/theme';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setDarkTheme, setDefaultTheme } from '../store/theme';
import { closeModalWindow, openModalWindow } from '../store/modal';
import { getUserOnLoad } from '../api/getUserOnLoad/getUserOnLoad';
import { getUser } from '../store/auth';
import { setUserOnLoad } from '../store/user';
import { LOGIN_PAGE_URI } from '../utils/constants/navigation';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFirstTimeLogin = useAppSelector((store) => store.user.user?.firstSignIn);
  const isLogin = useAppSelector((store) => store.auth.isLogin);
  const setThemeOnLoad = () => {
    if (getTheme() === 'dark') {
      dispatch(setDarkTheme());
    }
    if (getTheme() === 'default') {
      dispatch(setDefaultTheme());
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
          dispatch(getUser),
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
            })
          ),
          console.log(res)
        )
      )
      .catch((error) => (console.log(error), navigate(LOGIN_PAGE_URI)));
  };
  !isLogin && checkUser();
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
