import { backendInstance } from '../ApiConfig';

export const changeUserData = (data) => {
    return backendInstance.patch(`/users/${data.id}`, {
        lastName: data.lastName,
        firstName: data.firstName,
        department: data.department,
        mentor: data.mentor,
        email: data.email,
    })
}