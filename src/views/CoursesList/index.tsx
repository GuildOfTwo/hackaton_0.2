/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from 'antd';
import Markdown from 'react-markdown';
import { MARKDOWN_TEMPLATE } from '../../utils/markdown/markdown';
import { CourseCard, CourseCardText, DashContainer } from './style';
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
            <img src={item.CourseContent[0]?.image} alt="" />
          </Card>
        </Link>

        </CourseCard>)
      })}

    </DashContainer>
      {/* <DashContainer>
        <BorderColors><CourseCard>
          <Card title='Card title' bordered={false}>
            <CourseCardText><Markdown>{MARKDOWN_TEMPLATE}</Markdown></CourseCardText>
          </Card>
        </CourseCard>
         
        </BorderColors>
        <Card title='Card title' bordered={true} style={{ width: 300, marginRight: 40 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title='Card title' bordered={true} style={{ width: 300, marginRight: 40 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </DashContainer> */}
    </>
  );
};
