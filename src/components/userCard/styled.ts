import styled from 'styled-components';
import { Button, Switch } from 'antd';
export const Wrapper = styled.div`
  width: 180px;
  position: absolute;
  bottom: 20px;
  left: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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

export const SwitchButton = styled(Switch)`
  position: relative;
  display: flex;
  font-size: 0.7em;
  font-weight: 600;
  color: ${(props) => props.theme.textcolor};
  &:before {
    right: 50px;
    position: absolute;

    content: 'day';
  }

  &::after {
    left: 50px;
    position: absolute;
    content: 'nigth';
  }
`;

export const ProfileButton = styled(Button)`
  color: ${(props) => props.theme.textcolor};
  background-color: ${(props) => props.theme.backgroundColor3};
`;
