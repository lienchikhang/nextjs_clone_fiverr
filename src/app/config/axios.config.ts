import axios from "axios";

const http = axios.create({
    baseURL: `http://localhost:8080`,
    withCredentials: true,
});

export default http;