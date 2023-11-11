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
import { RootState } from '../../store';

export type TAllCourses = {
  allCourses: TSelectCourse[];
};

export const AllCoursesList = () => {
  const location = useLocation();
  console.log(location.pathname);

  const [allCourses, setAllCourses] = useState<TSelectCourse[]>([]);

  const user = useAppSelector((store: RootState) => store.user.user);

  const addCourse = (id: number) => {
    console.log(id);
    addCourseUser(id, user?.id);
  };
  useEffect(() => {
    requestCourses().then((res) => setAllCourses(res.data));
  }, []);

  if (allCourses.length < 1) return null;
  if (user?.UserCourses === undefined) return null;

  const getCategoryName = (categoryId: number): string => {
    switch (categoryId) {
      case 2:
        return 'Управление';
      case 3:
        return 'Engineering';
      case 4:
        return 'client-service';
      case 5:
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
      console.log('acc', acc);
      return acc;
    },
    {}
  );
  console.log('user', user);
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
                    style={{ objectFit: 'contain', width: '100%', height: '120px' }}
                    alt=''
                  />
                </CardContainer>
                <CourseCardButtonContainer>
                  {user && !user?.UserCourses.find((ele) => ele.courseId === item.id) && (
                    <AddCourseDiv
                      onClick={() => {
                        user?.UserCourses.find((ele) => ele.courseId === item.id)
                          ? addCourse(item.id)
                          : '';
                      }}
                    >
                      Добавить курс
                    </AddCourseDiv>
                  )}

                  {user && user.UserCourses.find((ele) => ele.courseId === item.id) && (
                    <CorseCardDoneDiv>
                      Добавлен
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
