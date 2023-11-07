/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { AuthContainer, LoginForm } from './styled';
import { loginRequest } from '../../api/authorization';

export const Authorization: FC = () => {
  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const handleLogin = (values: any) => {
    loginRequest(values.username, values.password).then((res) => console.log(res));
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
          onFinishFailed={onFinishFailed}
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
        </LoginForm>
      </AuthContainer>
    </>
  );
};
