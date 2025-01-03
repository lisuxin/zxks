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
  },
  getinsert() {
    return instance.post(base.insertid);
  },
  getupdate() {
    return instance.put(base.updateid);
  },
getselectid() {
    return instance.get(base.selectid);
  },
getdelectid() {
    return instance.delect(base.delectid);
  },
  getddengluid() {
    return instance.post(base.dengluid);
  }
}

export default api;