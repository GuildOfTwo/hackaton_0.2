import React from 'react';
import './index.css';
import { Layout } from 'antd';
import Header from './layouts/Header/header';
import Main from './layouts/Main/main';
import AppRoutes from './routes/Routes';
import AppWrapper from './style';

const App: React.FC = () => {
  const { Content, Footer } = Layout;
  return (
    <AppWrapper >
      <Header />
      <Content >
        <Main isSider={true}>
          <Content >
            <AppRoutes />
          </Content>
        </Main>
      </Content>
      <Footer />
    </AppWrapper>
  );
};

export default App;