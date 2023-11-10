/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AddCourseDiv,
  CardContainer,
  CorseCardDoneDiv,
  CourseCard,
  CourseCardButtonContainer,
  CourseTitle,
  DashContainer,
} from './style';
import { useEffect, useState } from 'react';
import { requestCourses } from '../../api/requestAllCourses/requestCourses';
import { TSelectCourse } from '../../utils/types/types';
import { CheckOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router';
// import { useAppDispatch, useAppSelector } from '../../hooks';

export const CoursesList = () => {
  // const dispatch = useAppDispatch()

  const location = useLocation();
  console.log(location.pathname);

  const [allCourses, setAllCourses] = useState([]);

  // Ниже надо получить все курсы юзера и юзер айди
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
              <CardContainer title={<CourseTitle>{item.courseName}</CourseTitle>} bordered={false}>
                <img
                  src={item.CourseContent[0]?.image}
                  style={{ objectFit: 'contain', width: '100%', height: '141.75px' }}
                  alt=''
                />
              </CardContainer>
              <CourseCardButtonContainer>
                <AddCourseDiv
                  onClick={() => {
                    userCourses.includes(item.id) ? addCourse(item.id) : '';
                  }}
                >
                  Добавить курс
                </AddCourseDiv>
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
