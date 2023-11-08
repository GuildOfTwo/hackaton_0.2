import { BACKEND_URL } from '../../utils/constants/api';
// import { backendInstance } from '../ApiConfig';
// import { backendInstance } from '../ApiConfig';

export const loginRequest = (email: string, password: string) => {
  console.log(email, password);

  return fetch(`${BACKEND_URL}signin`, {
    method: 'POST',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => {
      response.headers.getSetCookie();
    })
    .catch((error) => {
      console.error('Request failed', error);
    });
};
