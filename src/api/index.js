//import instance from "../utils/request"
import axios from 'axios';
import base from "./path";
const instance = axios.create({
  baseURL: 'http://localhost:5173/api', // 替换为您的 API 基础 URL
  headers: {
    'Content-Type': 'application/json' // 设置 Content-Type 为 JSON
  }
});

const api = {
  getselect() {
    return instance.get(base.select);
  }
  get() {
    return instance.get(base.select);
  }
  getselect() {
    return instance.get(base.select);
  }
getselect() {
    return instance.get(base.select);
  }
getselect() {
    return instance.get(base.select);
  }
}

export default api;