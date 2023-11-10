import { backendInstance } from '../ApiConfig';

export const requestCourses = () => {
    return backendInstance.get('/courses')
}