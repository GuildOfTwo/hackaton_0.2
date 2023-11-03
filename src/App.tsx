import React from 'react';
import './index.css';
import { Layout } from 'antd';
import Header from './layouts/Header/header';
import Main from './layouts/Main/main';
import AppRoutes from './routes/Routes';
import { AppWrapper, ContentWrapper } from './style';

const App: React.FC = () => {
  const { Content, Footer } = Layout;
  return (
    <AppWrapper >
      <Header />
      <ContentWrapper >
        <Main isSider={true}>
          <Content >
            <AppRoutes />
          </Content>
        </Main>
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default App;