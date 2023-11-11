import React, { useEffect, useState } from 'react';

import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { Label } from './styled';
import { TCreateUser } from '../../utils/types/types';
import { createUserRequest } from '../../api/CreateUserApi';
import { requestCategoriesCourse } from '../../api/requstCategories';

export const CreateUser: React.FC = () => {
  const onFinish = (values: TCreateUser) => {
    createUserRequest(values);
    form.resetFields();
  };

  const [form] = Form.useForm();

  const [categoriesCourse, setCategoriesCourse] = useState([
    { id: 1, name: 'Общие' },
    { id: 2, name: 'IT' },
  ]);

  useEffect(() => {
    requestCategoriesCourse().then((res) => setCategoriesCourse(res.data));
  }, []);

  if (categoriesCourse.length < 1) return null;

  return (
    <div style={{ margin: '0 auto' }}>
      <Form
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 10 }}
        style={{ width: 900 }}
        onFinish={onFinish}
        form={form}
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
          label={<Label>Логин</Label>}
        >
          <Input placeholder='Логин(Email)' />
        </Form.Item>
        <Form.Item
          name={['user', 'password']}
          rules={[{ required: true, message: 'Password is required' }]}
          label={<Label>Пароль</Label>}
        >
          <Input placeholder='Пароль' />
        </Form.Item>
        <Form.Item
          name={['user', 'firstName']}
          rules={[{ required: true, message: 'FirstName is required' }]}
          label={<Label>Имя</Label>}
        >
          <Input placeholder='имя' />
        </Form.Item>
        <Form.Item
          name={['user', 'lastName']}
          rules={[{ required: true, message: 'LastName is required' }]}
          label={<Label>Фамилия</Label>}
        >
          <Input placeholder='фамилия' />
        </Form.Item>
        <Form.Item name={['user', 'middleName']} label={<Label>Отчество</Label>}>
          <Input placeholder='отчество' />
        </Form.Item>
        <Form.Item name={['user', 'departament']} label={<Label>Департамент</Label>}>
          <Input placeholder='департамент' />
        </Form.Item>
        <Form.Item name={['user', 'phone']} label={<Label>Телефон</Label>}>
          <Input placeholder='+7' />
        </Form.Item>
        <Form.Item name={['user', 'mentor']} label={<Label>Наставник</Label>}>
          <Input placeholder='наставник' />
        </Form.Item>
        <Form.Item name={['user', 'role']} label={<Label>Категории назначенных курсов</Label>}>
          <Checkbox.Group>
            <Row>
              {categoriesCourse?.map((i) => (
                <Col span={10} key={i.id}>
                  <Checkbox value={i.name} style={{ lineHeight: '32px' }}>
                    {i.name}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='primary' htmlType='submit'>
            Сохранить
          </Button>
        </div>
      </Form>
    </div>
  );
};
