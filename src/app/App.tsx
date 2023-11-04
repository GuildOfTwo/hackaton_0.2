import React from 'react';
import AppRoutes from '../routes';
// import { AppWrapper} from './styled';
import { Modal } from '../components/modal';
import { Normalize } from './styled';

const App: React.FC = () => {
  return (
    <>

      <Normalize />
      <AppRoutes />
      <Modal />

    </>
  );
};

export default App;