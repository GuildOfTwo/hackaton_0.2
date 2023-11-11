import { backendInstance } from '../ApiConfig';

export const changeUserData = (data: {
  id: number;
  lastName: string;
  firstName: string;
  department: string;
  mentor: string;
  email: string;
}) => {
  return backendInstance.patch(`/users/${data.id}`, {
    lastName: data.lastName,
    firstName: data.firstName,
    department: data.department,
    mentor: data.mentor,
    email: data.email,
  });
};
