import { Menu, Button } from 'antd';
import styled from 'styled-components';
import Sider from 'antd/es/layout/Sider';
import { HEADER_HEIGHT } from '../../utils/constants';

export const SliderWrapper = styled.div`
  position: absolute;
  height: calc(100% - 80px);
  z-index: 900;
  top: 80px;
`;

export const SliderMenu = styled(Menu)`
  height: 100%;
  height: calc(100vh - ${HEADER_HEIGHT});
  background-color: ${(props) => props.theme.backgroundColor3};
  color: ${(props) => props.theme.color};

  .ant-menu-item-selected {
    background-color: ${(props) => props.theme.backgroundColor4};
  }
`;

export const MainSider = styled(Sider)`
  background: transparent;
  height: 100%;
`;

export const SliderButton = styled(Button)`
  font-size: '16px';
  width: 20%;
  height: 20;
  background-color: white;
  background: transparent;
  margin: 10px 0 0;
  position: absolute;
  top: 0;
  right: -30px;
`;

export const UserWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 30px;
`;
