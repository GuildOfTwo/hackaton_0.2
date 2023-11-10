import { FC, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { AuthContainer, ErrorMessage, LoginForm } from './styled';
import { loginRequest } from '../../api/authorization';
import { useAppDispatch } from '../../hooks';
import { login } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_URI } from '../../utils/constants/navigation';
import { errorHandler } from '../../utils/errorHandler';
import { FieldType, ValuesType } from '../../utils/types/types';
import { Label } from '../../views/NewCourse/styled';
import { setLoginInfo } from '../../store/user';

export const Authorization: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleLogin = (values: ValuesType) => {
    loginRequest(values.username, values.password)
      .then((res) => res.data)
      .then(
        (res) => (
          dispatch(login()),
          dispatch(
            setLoginInfo({
              id: res.id,
              firstName: res.firstName,
              lastName: res.lastName,
              roles: res.roles,
              firstSignIn: res.firstSignIn,
              name: res.name,
              email: res.email,
              phoneNumber: res.phone,
              mentor: res.mentor,
              departament: res.departament,
              director: res.director,
              accessRoles: res.accessRoles,
              mentor_tg: res.mentor_tg,
              telegram: res.telegram,
              birthday: res.birthday,
              middleName: res.middleName,
              post: res.post,
            })
          )
        )
      )
      .then(() => navigate(`/${DASHBOARD_URI}`))
      .catch((error) => setError(error.response.status));
  };

  return (
    <>
      <AuthContainer>
        <div style={{ fontSize: '3em', padding: '0 0 20px 0', fontWeight: 600 }}>Boardy</div>
        <div style={{ fontSize: '1.5em', padding: '0 0 40px 0' }}>
          Для доступа к сервису требуется авторизация
        </div>
        <LoginForm
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label={<Label>Email</Label>}
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label={<Label>Password</Label>}
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
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              <p style={{ color: 'white' }}>Войти</p>
            </Button>
          </Form.Item>
          {error ? <ErrorMessage>{errorHandler(error)}</ErrorMessage> : null}
        </LoginForm>
      </AuthContainer>
    </>
  );
};
