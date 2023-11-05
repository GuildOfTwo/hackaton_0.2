import React from 'react';
import AppRoutes from '../routes';
import { Modal } from '../components/modal';
import { AppStyles } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import Theme from '../components/Theme/Theme';
import { getTheme } from '../utils/theme';
import { useAppDispatch } from '../hooks';
import { setDarkTheme } from '../store/theme';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  if (getTheme() !== "default") {dispatch(setDarkTheme())}
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
