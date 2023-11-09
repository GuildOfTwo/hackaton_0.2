/* eslint-disable @typescript-eslint/no-unused-vars */
import { backendInstance } from '../ApiConfig';

export const firstSignInPatch = (userID:number, phone: string, telegram: string) => {
  return backendInstance.patch(`/users/${userID}`, {
    firstSignIn: false,
    phone: phone,
    // telegram: telegram
  });
};
