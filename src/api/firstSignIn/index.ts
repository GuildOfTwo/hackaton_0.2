import { backendInstance } from '../ApiConfig';

export const firstSignInPatch = (userID:number, phone: string, telegram: string) => {
  return backendInstance.post(`/users/:${userID}`, {
    firstSignIn: false,
    phone: phone,
    telegram: telegram
  });
};
