import React from 'react';
import { Layout } from 'antd';
import Header from '../layouts/Header';
import Main from '../layouts/Main';
import AppRoutes from '../routes';
import { AppWrapper, ContentWrapper } from './styled';

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