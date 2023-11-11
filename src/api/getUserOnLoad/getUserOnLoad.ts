import { backendInstance } from '../ApiConfig';

export const getUserOnLoad = () => {
  return backendInstance.get('/users/me ');
};
