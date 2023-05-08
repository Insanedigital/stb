import axios from "axios";


const stabApi = axios.create({
    withCredentials: true,
    baseURL: 'https://stbgalaxia.com/api/app/',
    headers: { "Accept-Encoding": "gzip,deflate,compress" } 
})
stabApi.defaults.headers.post["Accept"] = [
    "application/json",
    "multipart/form-data",
];
stabApi.defaults.headers.put["Accept"] = [
    "application/json",
    "multipart/form-data",
];

export default stabApi;