import { useEffect, useState } from 'react';
import { requestCourses } from '../../api/requestAllCourses/requestCourses';
import { CardContainer, SelectedContainer } from './styled';
import { TSelectCourse } from '../../utils/types/types';
import { CorseCardDoneDiv, CourseCard, CourseTitle } from '../CoursesList/style';
import { Link } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons';

export const SelectedCourses = () => {
  const [allCourses, setAllCourses] = useState([]);
  useEffect(() => {
    requestCourses().then((res) => setAllCourses(res.data));
  }, []);

  // Ниже надо получить все курсы юзера
  // const userCourses = useAppSelector((store) => store.user.user) as unknown as number[]

  const userCourses = [41, 42, 43, 44];

  return (
    <SelectedContainer>
      {allCourses?.map((item: TSelectCourse) => {
        if (userCourses.includes(item.id))
          return (
            <CourseCard key={item.id}>
              {!userCourses.includes(item.id) ? (
                <Link to={`/course/${item.id}`}>
                  <CardContainer
                    title={<CourseTitle>{item.courseName}</CourseTitle>}
                    bordered={false}
                  >
                    <img
                      src={item.CourseContent[0]?.image}
                      style={{ objectFit: 'contain', width: '100%' }}
                      alt=''
                    />
                  </CardContainer>
                </Link>
              ) : (
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%' }}
                    alt=''
                  />
                </CardContainer>
              )}
              {userCourses.includes(item.id) && (
                <CorseCardDoneDiv>
                  Пройден
                  <CheckOutlined />
                </CorseCardDoneDiv>
              )}
            </CourseCard>
          );
      })}
    </SelectedContainer>
  );
};
