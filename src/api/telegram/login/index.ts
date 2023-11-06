import axios from 'axios'
import { API_URL } from '../../../global-config';

export const LoginApi = () => {
    if (API_URL) {
        axios.get(API_URL)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        console.error('API_URL is not defined');
    }
}