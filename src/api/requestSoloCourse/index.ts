import { backendInstance } from '../ApiConfig';

export const requestSoloCourses = (id: string | undefined) => {
  return backendInstance.get(`/courses/${id}`);
};
