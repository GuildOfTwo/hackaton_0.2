/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button, Card, Checkbox, Col, Form, Input, Row, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { CloseOutlined } from '@ant-design/icons';
type MarkComponentProps = {
  value: any;
  language: any;
};
export const NewCoursePage = () => {
  const [markdownInput, setMarkdownInput] = useState<string>();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const [form] = Form.useForm();

  return (
    <div>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20 }}
        style={{ width: 900, margin: '0 auto' }}
        onFinish={onFinish}
        form={form}
        initialValues={{ items: [{}] }}
      >
        <Form.Item
          name={['course', 'name']}
          rules={[{ required: true, message: 'Course name is required' }]}
          label='Название курса'
        >
          <Input placeholder='Название курса' />
        </Form.Item>

        <Form.Item name={['course', 'type']} label='Тип курса'>
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

        <Form.Item name={['course', 'content']} label='Контент курса'>
          <TextArea rows={10} />
        </Form.Item>

        <Form.List name={['course', 'question']}>
          {(fields, { add, remove }) => (
            <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
              {fields.map((field) => (
                <Card
                  size='small'
                  title={`Вопрос к курсу № ${field.name + 1}`}
                  key={field.key}
                  extra={
                    <CloseOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  }
                >
                  <Form.Item label='Вопрос' name={[field.name, 'name']}>
                    <Input />
                  </Form.Item>

                  <Form.Item label='Варианты ответов'>
                    <Form.List name={[field.name, 'answers']}>
                      {(subFields, subOpt) => (
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                          {subFields.map((subField) => (
                            <Space key={subField.key}>
                              <Form.Item noStyle name={[subField.name, 'answer']}>
                                <Input placeholder='Вариант ответа' style={{ width: 300 }} />
                              </Form.Item>
                              <Form.Item
                                label='Укажите верный'
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
                            + Добавить варианты ответов
                          </Button>
                        </div>
                      )}
                    </Form.List>
                  </Form.Item>
                </Card>
              ))}

              <Button type='dashed' onClick={() => add()} block>
                + Добавить вопрос к курсу
              </Button>
            </div>
          )}
        </Form.List>

        {/* 
        <Form.Item
          label="Добавить еще 1 вопрос">
          <Button
            >Button</Button>
        </Form.Item> */}

        <Form.Item style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div>
        <textarea
          autoFocus
          className='textarea'
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
        />
      </div>

      <Markdown
        children={markdownInput}
        components={{
          // @ts-ignore
          code: MarkComponent,
        }}
      />
    </div>
  );
};

const MarkComponent: FC<MarkComponentProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};
