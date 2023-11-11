import { backendInstance } from '../ApiConfig';

const now = new Date();

export const addCourseUser = (id: number, userId: number | undefined) => {
  return backendInstance.post('/user-courses', {
    courseId: id,
    userId: userId,
    startDate: now,
    required: false,
    done: false,
  });
};
