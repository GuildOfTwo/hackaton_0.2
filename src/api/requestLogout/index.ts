import { backendInstance } from '../ApiConfig';

export const requestLogout = () => {
  return backendInstance.post('/signout', { withCredentials: true });
};
