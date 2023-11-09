/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Card } from 'antd';
import Markdown from 'react-markdown';
import { MARKDOWN_TEMPLATE } from '../../utils/markdown/markdown';
import { CourseCard, CourseCardImg, CourseCardText, DashContainer } from './style';
import { useEffect, useState } from 'react';
import { requestCourses } from '../../api/requestAllCourses/requestCourses';
import { Link } from 'react-router-dom';
import { TCourseContent, TSelectCourse } from '../../utils/types/types';



export const CoursesList = () => {




  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    requestCourses().then((res) => setAllCourses(res.data))
  }, [])


  if (allCourses.length < 1) return null

  console.log(allCourses);
  

  return (
    <><DashContainer>

      {allCourses?.map((item: TSelectCourse) => {
        return (<CourseCard key={item.id}><Link to={`/course/${item.id}`}>
          <Card title={item.courseName} bordered={false}>
            <CourseCardImg><img src={item.CourseContent[0]?.image} alt="" /></CourseCardImg>
          </Card>
        </Link>
        <Button>добавить курс</Button>

        </CourseCard>)
      })}

    </DashContainer>
    </>
  );
};
