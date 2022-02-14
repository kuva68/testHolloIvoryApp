import axios from 'axios';

const BASE_URL = 'https://prodapi.ivorysoft.co'

const Api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});


Api.interceptors.response.use(
    (request) => {
        return request;
    },
    (error) => {
        throw error.response;
    }
);

export default Api;