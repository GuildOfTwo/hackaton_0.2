import Header from '../../layouts/Header';
import Main from '../../layouts/Main';
import { ContentWrapper } from './styled';
import { ViewContainer } from '../../layouts/view-container';
import Slider from '../../layouts/Sider';
import TelegramLink from '../../components/telegram_link';

const MainPage = () => {
  return (
    <>
      <Slider />
      <Header />
      <ContentWrapper>
        <Main>
          <ViewContainer />
        </Main>
      </ContentWrapper>
      <TelegramLink />
    </>
  );
};

export default MainPage;
