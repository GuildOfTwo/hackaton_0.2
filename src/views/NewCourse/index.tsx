/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button, Card, Checkbox, Col, Form, Input, Row, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { CloseOutlined } from '@ant-design/icons';
import { BlackLabel, FormList, FormSubText, Label } from './styled';
import { TCreateNewCourse } from '../../utils/types/types';

// type MarkComponentProps = {
//   value: any;
//   language: any;
// };

export const NewCoursePage = () => {
  // const [markdownInput, setMarkdownInput] = useState<string>();

  const onFinish = (values: TCreateNewCourse) => {
    console.log(values);
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
          rules={[{ required: true, message: 'Course name is required' }]}
          label={<Label>Название курса</Label>}
        >
          <Input placeholder='Название курса' />
        </Form.Item>

        <Form.Item name={['course', 'type']} label={<Label>Тип курса</Label>}>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value='Общие' style={{ lineHeight: '32px' }}>
                  Общие
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='Дизайнер' style={{ lineHeight: '32px' }}>
                  Дизайнер
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='IT' style={{ lineHeight: '32px' }}>
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

        <Form.Item
          name={['course', 'content']}
          label={
            <Label>
              Контент курса
              <p>Вводится по правилам markdown</p>
              <a
                href='https://texterra.ru/blog/ischerpyvayushchaya-shpargalka-po-sintaksisu-razmetki-markdown-na-zametku-avtoram-veb-razrabotchikam.html'
                target='_blank'
                rel='noreferrer'
              >
                Шпаргалка
              </a>
            </Label>
          }
        >
          <TextArea rows={10} />
        </Form.Item>
        <FormSubText>
          Перевести Wrod файл в marcdown, поможет сервис{' '}
          <a href='https://www.wordize.com/word-to-markdown/' target='_blank' rel='noreferrer'>
            WORDIZE
          </a>
        </FormSubText>

        <Form.List name={['course', 'question']}>
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
                                label={<Label>Укажите верный</Label>}
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// const MarkComponent: FC<MarkComponentProps> = ({ value, language }) => {
//   return (
//     <SyntaxHighlighter language={language ?? null} style={docco}>
//       {value ?? ''}
//     </SyntaxHighlighter>
//   );
// };
