import styled from 'styled-components';
import { Form } from 'antd';

export const AuthContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  gap: 14px;
  height: 100vh;
  justify-content: center;
`;

export const LoginForm = styled(Form)`
  max-width: 600px;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-weight: 900;
`;
