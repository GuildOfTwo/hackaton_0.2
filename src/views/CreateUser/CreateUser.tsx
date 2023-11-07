import React from 'react';

import { Button, Checkbox, Col, Form, Input, Row } from 'antd';

export const CreateUser: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Form
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 10 }}
        style={{ width: 900 }}
        onFinish={onFinish}
      >
        <Form.Item
          name={['user', 'email']}
          rules={[{ required: true, message: 'Login is required' }]}
          // label={<p style={{color: `${(props) => props.theme.color}`}}>Login</p>}
          label={<p>Login</p>}
        >
          <Input placeholder='email' />
        </Form.Item>
        <Form.Item
          name={['user', 'password']}
          rules={[{ required: true, message: 'Password is required' }]}
          label='Password'
        >
          <Input placeholder='password' />
        </Form.Item>
        <Form.Item
          name={['user', 'firstName']}
          rules={[{ required: true, message: 'FirstName is required' }]}
          label='Имя'
        >
          <Input placeholder='имя' />
        </Form.Item>
        <Form.Item
          name={['user', 'lastName']}
          rules={[{ required: true, message: 'LastName is required' }]}
          label='Фамилия'
        >
          <Input placeholder='фамилия' />
        </Form.Item>
        <Form.Item name={['user', 'middleName']} label='Отчество'>
          <Input placeholder='отчество' />
        </Form.Item>
        <Form.Item name={['user', 'departament']} label='Департамент'>
          <Input placeholder='департамент' />
        </Form.Item>
        <Form.Item name={['user', 'phone']} label='Телефон'>
          <Input placeholder='+7' />
        </Form.Item>
        <Form.Item name={['user', 'mentor']} label='Ментор'>
          <Input placeholder='наставник' />
        </Form.Item>
        <Form.Item name={['user', 'role']} label='Назначенные курсы'>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value='A' style={{ lineHeight: '32px' }}>
                  Общие
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='B' style={{ lineHeight: '32px' }}>
                  Дизайнер
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='C' style={{ lineHeight: '32px' }}>
                  IT
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='D' style={{ lineHeight: '32px' }}>
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='E' style={{ lineHeight: '32px' }}>
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='F' style={{ lineHeight: '32px' }}>
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};
