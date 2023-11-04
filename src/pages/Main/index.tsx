import { Layout } from 'antd';
import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import { ContentWrapper } from './styled';
import { ViewContainer } from '../../layouts/view-container';

const MainPage = () => {
  const { Content, Footer } = Layout;
  return (
    <>      <Header />
      <ContentWrapper >
        <Main isSider={true}>
        <ViewContainer />
        </Main>
      </ContentWrapper>
      <Footer />
    </>

  );

}

export default MainPage;