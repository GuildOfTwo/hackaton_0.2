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
import { getMe } from '../api/authorization';

const App: React.FC = () => {
  getMe().then(res => console.log(res));
  const dispatch = useAppDispatch();
  const isFirstTimeLogin = useAppSelector(store => store.user.user?.firstSignIn)
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
    isFirstTimeLogin && dispatch(openModalWindow({type: "welcomeModal"}));
    dispatch(closeModalWindow({type: "welcomeModal"}));
  }, []);
  
  React.useEffect(() => {
    setThemeOnLoad();
  }, []);

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
