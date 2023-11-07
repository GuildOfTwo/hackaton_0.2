/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { Label } from './styled';

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
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            { required: true, message: 'Login is required' },
          ]}
          // label={<p style={{color: `${(props) => props.theme.color}`}}>Login</p>}
          label={<Label>Login</Label>}
        >
          <Input placeholder='email' />
        </Form.Item>
        <Form.Item
          name={['user', 'password']}
          rules={[{ required: true, message: 'Password is required' }]}
          label={<Label>Password</Label>}
        >
          <Input placeholder='password' />
        </Form.Item>
        <Form.Item
          name={['user', 'firstName']}
          rules={[{ required: true, message: 'FirstName is required' }]}
          label={<Label>Name</Label>}
        >
          <Input placeholder='имя' />
        </Form.Item>
        <Form.Item
          name={['user', 'lastName']}
          rules={[{ required: true, message: 'LastName is required' }]}
          label={<Label>FirstName</Label>}
        >
          <Input placeholder='фамилия' />
        </Form.Item>
        <Form.Item name={['user', 'middleName']} label={<Label>second name</Label>}>
          <Input placeholder='отчество' />
        </Form.Item>
        <Form.Item name={['user', 'departament']} label={<Label>Department</Label>}>
          <Input placeholder='департамент' />
        </Form.Item>
        <Form.Item name={['user', 'phone']} label={<Label>Phone</Label>}>
          <Input placeholder='+7' />
        </Form.Item>
        <Form.Item name={['user', 'mentor']} label={<Label>Mentor</Label>}>
          <Input placeholder='наставник' />
        </Form.Item>
        <Form.Item name={['user', 'role']} label={<Label>Courses</Label>}>
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
