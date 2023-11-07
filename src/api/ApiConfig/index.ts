import axios from 'axios';
import { BACKEND_URL } from '../../utils/constants/api';

export const backendInstance = axios.create({
  // baseURL:BACKEND_URL,
  baseURL: `https://cors-anywhere.herokuapp.com/${BACKEND_URL}`,
  headers: {
    // 'Content-Type': 'multipart/form-data',
    // 'X-ACCESS-TOKEN': REACT_APP_BACKEND_API_TOKEN
  },
});
