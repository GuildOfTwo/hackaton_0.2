import styled from 'styled-components';
import { Button, Layout } from 'antd';
import { HEADER_HEIGHT } from '../../utils/constants';

const { Header } = Layout;

const HeaderWrapper = styled(Header)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor2};
  height: ${HEADER_HEIGHT};
`;

const HeaderLogo = styled.img`
  max-width: 400px;
`;

export const ButtonPopover = styled(Button)`
  background-color: ${(props) => props.theme.backgroundColor2};
`;

export { HeaderWrapper, HeaderLogo };
