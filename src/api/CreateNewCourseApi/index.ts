import { TCourse, TSelectCourse } from '../../utils/types/types';
import { backendInstance } from '../ApiConfig';

export const createNewCourse = (item: TCourse) => {
  return backendInstance.post('/courses', {
    courseName: item.course.name,
    categoryId: item.course.type[0],
    courseDuration: +item.course.courseDuration,
  });
};

export const сreateNewCourseContent = (item: TSelectCourse, values: TCourse) => {
  return backendInstance.post('/course-content', {
    courseId: +item.id,
    image: values.course.CourseContent[0].image,
    content: JSON.stringify(values.course.CourseContent),
  });
};
