/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AddCourseDiv,
  CardContainer,
  CategoryContainer,
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

export type TAllCourses = {
  allCourses: TSelectCourse[];
};

export const AllCoursesList = () => {
  const location = useLocation();
  // console.log(location.pathname);

  const [allCourses, setAllCourses] = useState([]);

  // Ниже надо получить все курсы юзера и юзер айди
  // const userCourses = useAppSelector((store) => store.user.user) as unknown as number[]

  const userId = useAppSelector((store) => store.user.user?.id);

  const userCourses = [38, 39, 40];

  //ниже добавить отправку времени на начало курса
  const addCourse = (id: number) => {
    console.log(id);
    console.log(userId);
    addCourseUser(id, userId);
  };
  useEffect(() => {
    requestCourses().then((res) => setAllCourses(res.data));
  }, []);

  if (allCourses.length < 1) return null;

  // console.log(allCourses);
  const getCategoryName = (categoryId: number): string => {
    switch (categoryId) {
      case 2:
        return 'Управление';
      case 3:
        return 'Engineering';
      case 4:
        return 'client-service';
      case 4:
        return 'Дизайн';
      default:
        return 'Другое';
    }
  };

  const coursesByCategory = allCourses.reduce<{ [key: string]: TSelectCourse[] }>(
    (acc, item: any) => {
      const categoryName = getCategoryName(item.categoryId as number);

      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }

      acc[categoryName].push(item);

      return acc;
    },
    {}
  );

  return (
    <DashContainer>
      {Object.entries(coursesByCategory).map(([categoryName, courses], i) => (
        <CategoryContainer key={i}>
          <h2 style={{ padding: '0 0 0 25px' }}>{categoryName}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1500px' }}>
            {courses.map((item: TSelectCourse) => (
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
                  {!userCourses.includes(item.id) && (
                    <AddCourseDiv
                      onClick={() => {
                        !userCourses.includes(item.id) ? addCourse(item.id) : '';
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {userCourses.includes(item.id) && (
                    <CorseCardDoneDiv>
                      Пройден
                      <CheckOutlined />
                    </CorseCardDoneDiv>
                  )}
                </CourseCardButtonContainer>
              </CourseCard>
            ))}
          </div>
        </CategoryContainer>
      ))}
    </DashContainer>
  );
};
