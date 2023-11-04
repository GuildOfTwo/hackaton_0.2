import { TMainProps } from '../../utils/types';
import MainWrapper from './styled';

const Main = ({ children }: TMainProps) => {
  return (
    <>
      <MainWrapper >
        {children}
      </MainWrapper>
    </>
  )
};

export default Main;