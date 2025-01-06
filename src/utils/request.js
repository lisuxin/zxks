import axios from 'axios';

const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.error("语义错误");
            break;
        case 401:
            console.error("服务器认证失败");
            break;
        case 403:
            console.error("服务器拒绝访问");
            break;
        case 404:
            console.error("地址错误");
            break;
        case 500:
            console.error("服务器报出异常");
            break;
        case 502:
            console.error("服务器无响应");
            break;
        default:
            console.error(`未知错误: ${status}`, info);
    }
};

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    config => {
        if (config.method === 'post') {
        }
        // if (config.method === 'put') {
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
export default instance;