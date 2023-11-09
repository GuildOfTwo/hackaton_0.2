import React from 'react'
import { CourseContainer } from './style'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { requestSoloCourses } from '../../api/requestSoloCourse';
import Markdown from 'react-markdown';
import { TSelectCourse } from '../../utils/types/types';

export const CoursePage = () => {

   const {id} = useParams()

   console.log(id);
   
   const [course, setCourse] = useState<TSelectCourse | null>()

   useEffect(() => {
    requestSoloCourses(id).then((res) => setCourse(res.data))
   }, [])


 
   if (!course) return null

 const content = JSON.parse(course?.CourseContent[0]?.content)


console.log(content);
 
return (

    <CourseContainer>
        <p>{course.courseName}</p>
        <Markdown>123</Markdown>
    </CourseContainer>

  )
}

