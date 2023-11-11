import { useEffect, useState } from 'react';
import { requestCourses } from '../../api/requestAllCourses/requestCourses';
import { CardContainer, SelectedContainer } from './styled';
import { TSelectCourse } from '../../utils/types/types';
import { CorseCardDoneDiv, CourseCard, CourseTitle } from '../CoursesList/style';
import { Link } from 'react-router-dom';
import { CheckOutlined } from '@ant-design/icons';
import { RootState } from '../../store';
import { useAppSelector } from '../../hooks';

export const SelectedCourses = () => {
  const [allCourses, setAllCourses] = useState<TSelectCourse[]>([]);
  useEffect(() => {
    requestCourses().then((res) => setAllCourses(res.data));
  }, []);

  const user = useAppSelector((store: RootState) => store.user.user);
  const userCoursesId = user?.UserCourses.map((i) => i.courseId);
  const allCoursesId = allCourses.map((i) => i.id);

  if (allCourses.length < 1) return null;
  if (userCoursesId == undefined) return null;

  return (
    <SelectedContainer>
      {allCourses?.map((item: TSelectCourse) => {
        const final = user?.UserCourses.find((ele) => ele.courseId === item.id);
        return final ? (
          <CourseCard key={item.id}>
            {allCoursesId.filter((val) => userCoursesId.includes(val)).includes(item.id) ? (
              <Link to={`/course/${item.id}`}>
                <CardContainer
                  title={<CourseTitle>{item.courseName}</CourseTitle>}
                  bordered={false}
                >
                  <img
                    src={item.CourseContent[0]?.image}
                    style={{ objectFit: 'contain', width: '100%', height: '140px' }}
                    alt=''
                  />
                </CardContainer>
              </Link>
            ) : (
              <CardContainer title={<CourseTitle>{item.courseName}</CourseTitle>} bordered={false}>
                <img
                  src={item.CourseContent[0]?.image}
                  style={{ objectFit: 'contain', width: '100%', height: '140px' }}
                  alt=''
                />
              </CardContainer>
            )}
            {final?.done && (
              <CorseCardDoneDiv>
                Пройден
                <CheckOutlined />
              </CorseCardDoneDiv>
            )}
          </CourseCard>
        ) : (
          ''
        );
      })}
    </SelectedContainer>
  );
};
