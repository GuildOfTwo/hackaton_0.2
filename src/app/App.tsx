import React from 'react';
import AppRoutes from '../routes';
import { Modal } from '../components/modal';
import { AppStyles } from './styled';

const App: React.FC = () => {
  return (
    <>
      <AppStyles />
      <AppRoutes />
      <Modal />
    </>
  );
};

export default App;