import styled from 'styled-components';
import { Layout } from 'antd';
import { HEADER_HEIGHT } from '../../utils/constants';

const MainWrapper = styled(Layout)`
  padding: 24px 100px;
  background: ${(props) => props.theme.backgroundColor1};
  flex: 1;
  height: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  height: calc(100vh - ${HEADER_HEIGHT});
`;

export default MainWrapper;
