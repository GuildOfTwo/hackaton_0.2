import { backendInstance } from '../ApiConfig';

export const requestCategoriesCourse = () => {
  return backendInstance.get('/categories');
};
