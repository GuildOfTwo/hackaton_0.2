import React from 'react';
import AppRoutes from '../routes';
import { Modal } from '../components/modal';
import { AppStyles } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Theme from '../components/Theme/Theme';
import { getTheme } from '../utils/theme';
import { useAppDispatch } from '../hooks';
import { setDarkTheme, setDefaultTheme } from '../store/theme';
import { DASHBOARD_URI } from '../utils/constants/navigation';
// import { openModalWindow } from '../store/modal';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  // dispatch(openModalWindow({type: "welcomeModal"}));
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
