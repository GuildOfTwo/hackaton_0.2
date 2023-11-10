import { CourseContainer, CourseQuestionDiv, CourseText, CourseTitle, Label } from './style';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { requestSoloCourses } from '../../api/requestSoloCourse';
import Markdown from 'react-markdown';
import { TCourseQuestions, TSelectCourse } from '../../utils/types/types';
import { Button, Form, Radio } from 'antd';

type TCourseContent = {
  text: string;
  question: TCourseQuestions[];
};

type TQuestionValues = {
  question1?: string;
  question2?: string;
  question3?: string;
  question4?: string;
  question5?: string;
  question6?: string;
};

type TValues = {
  question: TQuestionValues[];
};

export const CoursePage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();

  const [course, setCourse] = useState<TSelectCourse | null>();

  useEffect(() => {
    requestSoloCourses(id).then((res) => setCourse(res.data));
  }, []);

  // Ниже отправить ответы пользователя

  const onFinish = (values: TValues) => {
    console.log(values);
  };

  if (!course) return null;

  const content = JSON.parse(course?.CourseContent[0]?.content) as TCourseContent;

  console.log(content);

  return (
    <CourseContainer>
      <CourseTitle>{course.courseName}</CourseTitle>
      <CourseText>
        <Markdown>{content.text ? content.text : ''}</Markdown>
      </CourseText>
      <CourseQuestionDiv>
        <Form
          labelCol={{ span: 100 }}
          wrapperCol={{ span: 20 }}
          style={{ width: 900, margin: '0 auto' }}
          onFinish={onFinish}
          form={form}
        >
          {content.question.map((item, index) => (
            <Form.Item
              key={index}
              name={['questions', `question${index + 1}`]}
              rules={[{ required: true, message: 'Выберите один из ответов' }]}
              label={<Label>{item.name}</Label>}
            >
              <Radio.Group>
                {item.answers.map((answ, ind) => (
                  <Radio key={ind} value={answ.answer}>
                    {answ.answer}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          ))}
          <Button type='primary' htmlType='submit'>
            <p style={{ color: 'white' }}>Завершить курс</p>
          </Button>
        </Form>
      </CourseQuestionDiv>
    </CourseContainer>
  );
};
