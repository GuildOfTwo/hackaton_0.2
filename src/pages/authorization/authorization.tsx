import { FC, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { AuthContainer, ErrorMessage, LoginForm } from './styled';
import { loginRequest } from '../../api/authorization';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { MAIN_PAGE_URI } from '../../utils/constants/navigation';
import { errorHandler } from '../../utils/errorHandler';
import { FieldType, ValuesType } from '../../utils/types/types';

export const Authorization: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleLogin = (values: ValuesType) => {
    loginRequest(values.username, values.password)
      .then((res) => res.data)
      .then((res) =>
        dispatch(
          login({
            user: {
              firstName: res.firstName,
              lastName: res.lastName,
              roles: res.roles,
              email: res.email,
            },
            accessRoles: res.accessRoles,
          })
        )
      )
      .then(() => navigate(MAIN_PAGE_URI))
      .catch((error) => setError(error.response.status));
  };

  return (
    <>
      <AuthContainer>
        <LoginForm
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name='remember'
            valuePropName='checked'
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
          {error ? <ErrorMessage>{errorHandler(error)}</ErrorMessage> : null}
        </LoginForm>
      </AuthContainer>
    </>
  );
};
