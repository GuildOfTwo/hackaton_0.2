import { backendInstance } from '../ApiConfig';
import { TUser } from '../../utils/types/types';

export const changeUserData = (data: TUser) => {
    return backendInstance.patch(`/users/${data.id}`, {
        lastName: data.lastName,
        firstName: data.firstName,
        department: data.department,
        mentor: data.mentor,
        email: data.email,
    })
}