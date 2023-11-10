/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card } from 'antd';
import {
  CorseCardDoneDiv,
  CourseCard,
  CourseCardButtonContainer,
  CourseTitle,
  DashContainer,
} from './style';
import { useEffect, useState } from 'react';
import { requestCourses } from '../../api/requestAllCourses/requestCourses';
import { Link } from 'react-router-dom';
import { TSelectCourse } from '../../utils/types/types';
import { CheckOutlined } from '@ant-design/icons';
// import { useAppDispatch, useAppSelector } from '../../hooks';

export const CoursesList = () => {
  // const dispatch = useAppDispatch()

  const [allCourses, setAllCourses] = useState([]);

  // Ниже надо получить все курсы юзера
  // const userCourses = useAppSelector((store) => store.user.user) as unknown as number[]

  const userCourses = [38, 39, 40];

  //ниже добавить отправку времени на начало курса
  const addCourse = (id: number) => {
    console.log(id);
  };
  useEffect(() => {
    requestCourses().then((res) => setAllCourses(res.data));
  }, []);

  if (allCourses.length < 1) return null;

  return (
    <>
      <DashContainer>
        {allCourses?.map((item: TSelectCourse) => {
          return (
            <CourseCard key={item.id}>
              <Card title={<CourseTitle>{item.courseName}</CourseTitle>} bordered={false}>
                <img
                  src={item.CourseContent[0]?.image}
                  style={{ objectFit: 'contain', width: '100%' }}
                  alt=''
                />
              </Card>
              <CourseCardButtonContainer>
                <Button
                  onClick={() => addCourse(item.id)}
                  type={'primary'}
                  disabled={userCourses.includes(item.id)}
                >
                  добавить курс
                </Button>
                {userCourses.includes(item.id) && (
                  <CorseCardDoneDiv>
                    Пройден
                    <CheckOutlined />
                  </CorseCardDoneDiv>
                )}
              </CourseCardButtonContainer>
            </CourseCard>
          );
        })}
      </DashContainer>
    </>
  );
};
