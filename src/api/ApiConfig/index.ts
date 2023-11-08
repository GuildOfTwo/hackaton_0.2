import axios from 'axios';
import { BACKEND_URL } from '../../utils/constants/api';

axios.defaults.withCredentials = true
export const backendInstance = axios.create({
  baseURL: BACKEND_URL,
});
