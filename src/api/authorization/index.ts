import { backendInstance } from '../ApiConfig';

export const loginRequest = (email: string, password: string) => {
  console.log(email, password);
  return backendInstance.post('/signin', {
    email: email,
    password: password,
  });
};
