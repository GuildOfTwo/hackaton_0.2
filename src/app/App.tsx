import React from 'react';
import AppRoutes from '../routes';
import { Modal } from '../components/modal';
import { AppStyles } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const location = useLocation()
const navigate = useNavigate()
  React.useEffect(() => {
    location.pathname === '/' ? navigate('dashboard') : ''
  }, [location])
  return (
    <>
      <AppStyles />
      <AppRoutes />
      <Modal />
    </>
  );
};

export default App;