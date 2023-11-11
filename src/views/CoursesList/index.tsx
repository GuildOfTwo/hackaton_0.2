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
import { useAppSelector } from '../../hooks';
import { addCourseUser } from '../../api/addCourseUser';
import { RootState } from '../../store';

export type TAllCourses = {
  allCourses: TSelectCourse[];
};

export const CoursesList = () => {
  // const dispatch = useAppDispatch()
  const [allCourses, setAllCourses] = useState<TSelectCourse[]>([]);
  useEffect(() => {
    requestCourses().then((res) => setAllCourses(res.data));
  }, []);

  const location = useLocation();

  const user = useAppSelector((store: RootState) => store.user.user);

  const userCourses = user?.UserCourses.map((i) => i.courseId);

  const allCoursesId = allCourses.map((i) => i.id);

  const addCourse = (id: number) => {
    addCourseUser(id, user?.id);
  };

  if (allCourses.length < 1) return null;
  if (userCourses == undefined) return null;

  return (
    <>
      <DashContainer>
        {allCourses?.map((item: TSelectCourse) => {
          if (location.pathname === '/managment' && item.categoryId === 2) {
            const final = user?.UserCourses.find((ele) => ele.courseId === item.id);

            return (
              <CourseCard key={item.id}>
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%', height: '141.75px' }}
                    alt=''
                  />
                </CardContainer>
                <CourseCardButtonContainer>
                  {!allCoursesId.filter((val) => userCourses.includes(val)).includes(item.id) && (
                    <AddCourseDiv
                      onClick={() => {
                        addCourse(item.id);
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {final?.done && (
                    <CorseCardDoneDiv>
                      Пройден
                      <CheckOutlined />
                    </CorseCardDoneDiv>
                  )}
                </CourseCardButtonContainer>
              </CourseCard>
            );
          }
          if (location.pathname === '/engineering' && item.categoryId === 3) {
            const final = user?.UserCourses.find((ele) => ele.courseId === item.id);

            console.log(final?.done);
            return (
              <CourseCard key={item.id}>
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%', height: '141.75px' }}
                    alt=''
                  />
                </CardContainer>
                <CourseCardButtonContainer>
                  {!allCoursesId.filter((val) => userCourses.includes(val)).includes(item.id) && (
                    <AddCourseDiv
                      onClick={() => {
                        userCourses.includes(item.id) ? addCourse(item.id) : '';
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {!final?.done && (
                    <CorseCardDoneDiv>
                      Пройден
                      <CheckOutlined />
                    </CorseCardDoneDiv>
                  )}
                </CourseCardButtonContainer>
              </CourseCard>
            );
          }
          if (location.pathname === '/client-service' && item.categoryId === 4) {
            const final = user?.UserCourses.find((ele) => ele.courseId === item.id);

            console.log(final?.done);

            return (
              <CourseCard key={item.id}>
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%', height: '141.75px' }}
                    alt=''
                  />
                </CardContainer>
                <CourseCardButtonContainer>
                  {!allCoursesId.filter((val) => userCourses.includes(val)).includes(item.id) && (
                    <AddCourseDiv
                      onClick={() => {
                        addCourse(item.id);
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {final?.done && (
                    <CorseCardDoneDiv>
                      Пройден
                      <CheckOutlined />
                    </CorseCardDoneDiv>
                  )}
                </CourseCardButtonContainer>
              </CourseCard>
            );
          }
          if (location.pathname === '/design' && item.categoryId === 5) {
            const final = user?.UserCourses.find((ele) => ele.courseId === item.id);

            console.log(final?.done);

            return (
              <CourseCard key={item.id}>
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%', height: '141.75px' }}
                    alt=''
                  />
                </CardContainer>
                <CourseCardButtonContainer>
                  {!allCoursesId.filter((val) => userCourses.includes(val)).includes(item.id) && (
                    <AddCourseDiv
                      onClick={() => {
                        userCourses.includes(item.id) ? addCourse(item.id) : '';
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {final?.done && (
                    <CorseCardDoneDiv>
                      Пройден
                      <CheckOutlined />
                    </CorseCardDoneDiv>
                  )}
                </CourseCardButtonContainer>
              </CourseCard>
            );
          }
          if (location.pathname === '/product-managment' && item.categoryId === 1) {
            const final = user?.UserCourses.find((ele) => ele.courseId === item.id);

            console.log(final?.done);

            return (
              <CourseCard key={item.id}>
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%', height: '141.75px' }}
                    alt=''
                  />
                </CardContainer>
                <CourseCardButtonContainer>
                  {!allCoursesId.filter((val) => userCourses.includes(val)).includes(item.id) && (
                    <AddCourseDiv
                      onClick={() => {
                        userCourses.includes(item.id) ? addCourse(item.id) : '';
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {final?.done && (
                    <CorseCardDoneDiv>
                      Пройден
                      <CheckOutlined />
                    </CorseCardDoneDiv>
                  )}
                </CourseCardButtonContainer>
              </CourseCard>
            );
          }
          if (location.pathname === '/courses-for-all' && item.categoryId === 6) {
            const final = user?.UserCourses.find((ele) => ele.courseId === item.id);

            console.log(final?.done);
            return (
              <CourseCard key={item.id}>
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%', height: '141.75px' }}
                    alt=''
                  />
                </CardContainer>
                <CourseCardButtonContainer>
                  {allCoursesId.filter((val) => userCourses.includes(val)) && (
                    <AddCourseDiv
                      onClick={() => {
                        userCourses.includes(item.id) ? addCourse(item.id) : '';
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {final?.done && (
                    <CorseCardDoneDiv>
                      Пройден
                      <CheckOutlined />
                    </CorseCardDoneDiv>
                  )}
                </CourseCardButtonContainer>
              </CourseCard>
            );
          }
        })}
      </DashContainer>
    </>
  );
};
