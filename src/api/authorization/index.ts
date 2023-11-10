import { backendInstance } from '../ApiConfig';

export const loginRequest = (email: string, password: string) => {
  return backendInstance.post(
    '/signin',
    {
      email: email,
      password: password,
    },
    { withCredentials: true }
  );
};


export const getMe = () => {
  return backendInstance.get('/users/me ')
}