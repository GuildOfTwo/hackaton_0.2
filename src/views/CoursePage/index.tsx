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

type TQuestionValues = [string, boolean];

type TValues = {
  questions: { [key: string]: TQuestionValues };
};

export const CoursePage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const { Item } = Form;
  const { Group } = Radio;
  const [course, setCourse] = useState<TSelectCourse | null>();
  const [seconds, setSeconds] = useState(180);

  useEffect(() => {
    requestSoloCourses(id).then((res) => setCourse(res.data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  const onFinish = (values: TValues) => {
    let correctAnswers = 0;
    for (const key in values.questions) {
      if (values.questions[key][1] === true) {
        correctAnswers++;
      }
    }
  };

  if (!course) return null;

  const content = JSON.parse(course?.CourseContent[0]?.content) as TCourseContent;

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
            <Item
              key={index}
              name={['questions', `question${index + 1}`]}
              rules={[{ required: true, message: 'Выберите ответ' }]}
              label={<Label>{item.name}</Label>}
            >
              <Group>
                {item.answers.map((answ, ind) => (
                  <Radio key={ind} value={[answ.answer, answ.correct]}>
                    {answ.answer}
                  </Radio>
                ))}
              </Group>
            </Item>
          ))}
          {seconds === 0 ? '' : <p>Кнопка будет активна через {seconds} секунд</p>}
          <Button type='primary' htmlType='submit' disabled={seconds === 0 ? false : true}>
            <p style={{ color: 'white' }}>Завершить курс</p>
          </Button>
        </Form>
      </CourseQuestionDiv>
    </CourseContainer>
  );
};
