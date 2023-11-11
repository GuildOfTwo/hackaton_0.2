/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button, Card, Checkbox, Col, Form, Input, Radio, Row, Space, Tabs, TabsProps } from 'antd';

import { CloseOutlined } from '@ant-design/icons';
import { BlackLabel, FormList, FormSubText, Label, TextAreaZone } from './styled';
import { TCourse } from '../../utils/types/types';
import { FC, useEffect, useState } from 'react';
import { requestCategoriesCourse } from '../../api/requstCategories';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import Markdown from 'react-markdown';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { createNewCourse, сreateNewCourseContent } from '../../api/CreateNewCourseApi';

const MarkComponent: FC<MarkComponentProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};
type MarkComponentProps = {
  value: any;
  language: any;
};

export type TCateegoriesCourse = {
  id: string;
  name: string;
};

export type TObjCourses = {
  courses: TCateegoriesCourse[];
};

export const NewCoursePage = () => {
  const [markdownInput, setMarkdownInput] = useState<string>();
  const [categoriesCourse, setCategoriesCourse] = useState([
    { id: 1, name: 'Общие' },
    { id: 2, name: 'IT' },
  ]);

  useEffect(() => {
    requestCategoriesCourse().then((res) => setCategoriesCourse(res.data));
  }, []);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Черновик',
      children: <TextAreaZone rows={10} onChange={(e) => setMarkdownInput(e.target.value)} />,
    },
    {
      key: '2',
      label: 'Предпросмотр',

      children: (
        <Markdown
          children={markdownInput}
          components={{
            // @ts-ignore
            code: MarkComponent,
          }}
        />
      ),
    },
  ];

  const onFinish = (values: TCourse) => {
    createNewCourse(values).then((res: any) => сreateNewCourseContent(res.data, values));
    form.resetFields();
  };

  const [form] = Form.useForm();

  return (
    <div>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 20 }}
        style={{ width: 900, margin: '0 auto' }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name={['course', 'name']}
          rules={[{ required: true, message: 'Название курса обязательно' }]}
          label={<Label>Название курса</Label>}
        >
          <Input placeholder='Название курса' />
        </Form.Item>

        <Form.Item
          name={['course', 'CourseContent', 'image']}
          rules={[{ required: true, message: 'Ссылка на картинку курса обязательна' }]}
          label={<Label>Ссылка на картинку для курса</Label>}
        >
          <Input placeholder='Ссылка на картинку для курса' />
        </Form.Item>

        <Form.Item
          name={['course', 'type']}
          label={<Label>Тип курса</Label>}
          rules={[{ required: true, message: 'Тип курса обязательный' }]}
        >
          <Checkbox.Group>
            <Row>
              {categoriesCourse?.map((i) => (
                <Col span={8} key={i.id}>
                  <Checkbox value={i.id} style={{ lineHeight: '32px' }}>
                    {i.name}
                  </Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label={<Label>Время на выполнение курса</Label>}
          rules={[{ required: true, message: 'Время на выполнение курса обязательный параметр' }]}
          name={['course', 'courseDuration']}
        >
          <Radio.Group>
            <Radio value='1'> 1 неделя </Radio>
            <Radio value='2'> 2 недели </Radio>
            <Radio value='3'> месяц </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name={['course', 'CourseContent', 'text']}
          rules={[{ required: true, message: 'Контент курса обязательный параметр' }]}
          label={
            <Label style={{ marginTop: 40 }}>
              Контент курса
              <p>Вводится по правилам markdown</p>
              <a
                href='https://texterra.ru/blog/ischerpyvayushchaya-shpargalka-po-sintaksisu-razmetki-markdown-na-zametku-avtoram-veb-razrabotchikam.html'
                target='_blank'
                rel='noreferrer'
                style={{ textDecoration: 'underline' }}
              >
                Шпаргалка(ссылка)
              </a>
            </Label>
          }
        >
          <div style={{ margin: '0 auto' }}>
            <Tabs defaultActiveKey='1' items={items} />
          </div>
        </Form.Item>

        <FormSubText>
          Перевести Word файл в markdown, поможет сервис{' '}
          <a
            href='https://www.wordize.com/word-to-markdown/'
            style={{ textDecoration: 'underline' }}
            target='_blank'
            rel='noreferrer'
          >
            WORDIZE(ссылка)
          </a>
        </FormSubText>

        <Form.List name={['course', 'CourseContent', 'question']}>
          {(fields, { add, remove }) => (
            <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
              {fields.map((field) => (
                <Card
                  style={{ backgroundColor: 'transparent' }}
                  size='small'
                  title={<Label>Вопрос к курсу № {field.name + 1}</Label>}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item label={<Label>Вопрос</Label>} name={[field.name, 'name']}>
                    <Input />
                  </Form.Item>

                  <Form.Item label={<Label>Варианты ответов</Label>}>
                    <Form.List name={[field.name, 'answers']}>
                      {(subFields, subOpt) => (
                        <FormList>
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Form.Item noStyle name={[subField.name, 'answer']}>
                                <Input placeholder='Вариант ответа' style={{ width: 300 }} />
                              </Form.Item>
                              <Form.Item
                                label={<Label>Укажите верный ответ</Label>}
                                name={[subField.name, 'correct']}
                                valuePropName='checked'
                                style={{ marginBottom: '0' }}
                              >
                                <Checkbox />
                              </Form.Item>
                              <CloseOutlined
                                onClick={() => {
                                  subOpt.remove(subField.name);
                                }}
                              />
                            </Space>
                          ))}
                          <Button type='dashed' onClick={() => subOpt.add()} block>
                            <BlackLabel>+ Добавить варианты ответов</BlackLabel>
                          </Button>
                        </FormList>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button type='dashed' onClick={() => add()} block>
                <BlackLabel>+ Добавить вопрос к курсу</BlackLabel>
              </Button>
            </div>
          )}
        </Form.List>

        <Form.Item style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Button type='primary' htmlType='submit'>
            <p style={{ color: 'white' }}>Загрузить курс</p>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
