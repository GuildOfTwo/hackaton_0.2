import Slider from '../Sider/slider';
import { TMainProps } from '../../utils/types';
import MainWrapper from './style';

const Main = ({ children, isSider }: TMainProps) => {
  return (<MainWrapper >
    {isSider ? <Slider /> : null}
    {children}
    </MainWrapper>
  )
};

export default Main;