import styled from 'styled-components';
import { Button, Form, Space } from 'antd';

export const FormWrapper = styled(Form)`
  background-color: ${(props) => props.theme.backgroundColor1};
  padding: 0 150px 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 7px ${(props) => props.theme.backgroundColor2};
  border-radius: 5%;
  min-width: 650px;
  min-height: 400px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 500;
`;

export const ResetButton = styled(Button)`
  background-color: ${(props) => props.theme.backgroundColor3};
`;

export const ButtonWrapper = styled(Space)`
  display: flex;
  justify-content: center;
`;
