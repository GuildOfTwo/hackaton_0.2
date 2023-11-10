import { TCourse } from '../../utils/types/types';
import { backendInstance } from '../ApiConfig';

export const createNewCourse = (item: TCourse) => {

  return backendInstance.post('/courses', {
    courseName: item.course.name,
    categoryId: item.course.type[0],
    courseDuration: +item.course.courseDuration
  });
};

export const сreateNewCourseContent = (item: any, values: TCourse) => {
   
    return backendInstance.post('/course-content', {
        courseId: +item.id,
        image: "https://i.ytimg.com/vi/Syjy3--JyvQ/maxresdefault.jpg",
        content: JSON.stringify(values.course.CourseContent)
      });
}
