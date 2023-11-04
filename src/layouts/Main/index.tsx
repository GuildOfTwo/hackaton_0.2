import Slider from '../Sider';
import { TMainProps } from '../../utils/types';
import MainWrapper from './styled';

const Main = ({ children, isSider }: TMainProps) => {
  return (
    <>
  

  <MainWrapper >

    {children}
    </MainWrapper>
    </>
  )
};

export default Main;