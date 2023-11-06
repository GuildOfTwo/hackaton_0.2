import styled from 'styled-components';
import { Button, Switch } from 'antd';
export const Wrapper = styled.div`
  width: 180px;
  height: 300px;
  position: absolute;
  bottom: 0;
  left: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const InfoWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfoTitle = styled.div`
  font-size: 0.8em;
  margin: 0;
`;

export const InfoSubtitle = styled.div`
  font-size: 0.7em;
  margin: 0;
  text-align: right;
`;

export const SwitchButton = styled(Switch)``;

export const ProfileButton = styled(Button)`
  color: ${(props) => props.theme.textcolor};
  background-color: ${(props) => props.theme.backgroundColor3};
`;
