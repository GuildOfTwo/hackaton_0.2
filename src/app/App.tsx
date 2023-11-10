import React from 'react';
import AppRoutes from '../routes';
import { Modal } from '../components/modal';
import { AppStyles } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Theme from '../components/Theme/Theme';
import { getTheme } from '../utils/theme';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setDarkTheme, setDefaultTheme } from '../store/theme';
import { openModalWindow } from '../store/modal';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFirstTimeLogin = useAppSelector(store => store.user.user?.firstSignIn)
  isFirstTimeLogin && dispatch(openModalWindow({type: "welcomeModal"}));
  const setThemeOnLoad = () => {
     if (getTheme() === 'dark') {
      dispatch(setDarkTheme());
    }
    if (getTheme() === 'default') {
      dispatch(setDefaultTheme());
    }
  };
  setThemeOnLoad();
  const location = useLocation();
  const navigate = useNavigate();
  React.useEffect(() => {
    location.pathname === '/' ? navigate('dashboard') : '';
  }, [location]);

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
