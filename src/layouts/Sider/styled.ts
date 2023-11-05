import { Menu, Button } from 'antd';
import styled from 'styled-components';

export const SliderMenu = styled(Menu)`
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
`