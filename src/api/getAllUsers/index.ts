import { backendInstance } from '../ApiConfig';

export const getAllUsers = () => {
    return backendInstance.get('/users')
}