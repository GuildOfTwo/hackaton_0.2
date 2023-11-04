import React from 'react';
import AppRoutes from '../routes';
import { AppWrapper, Normalize } from './styled';

const App: React.FC = () => {
  return (
    <AppWrapper >
      <Normalize />
      <AppRoutes />
    </AppWrapper>
  );
};

export default App;