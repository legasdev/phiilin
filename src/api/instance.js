import Axios from 'axios';

const Instance = Axios.create({
    baseURL: 'http://127.0.0.1:8080/api/',
    withCredentials: true,
});

export default Instance;