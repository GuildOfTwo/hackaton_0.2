import { backendInstance } from '../ApiConfig';

export const profileEditPatch = (
  Telegram: string | undefined,
  Phone: string | undefined,
  DateOfBirth: Date | undefined,
  userID: number
) => {
  return backendInstance.patch(`/users/${userID}`, {
    ...(Telegram != undefined && { telegram: Telegram }),
    ...(Phone != undefined && { phone: Phone }),
    ...(DateOfBirth != undefined && { birthday: DateOfBirth }),
  });
};
