import { backendInstance } from '../ApiConfig';

export const createNewCourse = () => {

  return backendInstance.post('/signup', {
    // email: item.user.email,
    // password: item.user.password,
    // firstName: item.user.firstName,
    // department: item.user.departament,
  });
};
