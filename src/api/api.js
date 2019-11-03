import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://127.0.0.1:8080',
    withCredentials: true,
});

export const authAPI = {

    async getAuthData() {
        return await instance.get('/auth/me');
    }

}