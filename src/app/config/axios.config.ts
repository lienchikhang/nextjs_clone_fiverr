import axios from "axios";
import { cookies } from 'next/headers';


const http = axios.create({
    baseURL: `http://localhost:8080`,
    withCredentials: true,
});

http.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    console.log('error in response:: ', error.response.data)

    const cookie = cookies().get('refreshToken');

    if (error.response.data.mess == 'TokenExpiredError') {
        const newToken = await http.post('auth/refresh', null, {
            headers: {
                'Authorization': `Bearer ${cookie?.value}`,
            }
        });

        console.log({ newToken });

        cookies().set('accessToken', newToken.data.content);

        const originalRequest = error.config;
        originalRequest.headers['Authorization'] = `Bearer ${newToken.data.content}`;

        return http(originalRequest);
    }
    return Promise.reject(error);
});

export default http;