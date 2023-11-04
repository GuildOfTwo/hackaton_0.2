import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import { ContentWrapper } from './styled';
import { ViewContainer } from '../../layouts/view-container';
import Slider from '../../layouts/Sider';
const MainPage = () => {
  return (
    <>
      <Slider />
      <Header />
      <ContentWrapper >
        <Main isSider={true}>
          <ViewContainer />
        </Main>
      </ContentWrapper>
    </>
  );
}

export default MainPage;