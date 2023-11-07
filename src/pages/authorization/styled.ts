import styled from 'styled-components';
import { Form } from 'antd';

export const AuthContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  align-items: center;
  gap: 14px;
`;

export const LoginForm = styled(Form)`
  max-width: 600px;
`;
