import base from "./path";
import instance from "../utils/request"

const api = {
  getselect() {
    return instance.get(base.select);
  },
  getdengluid(data){
    return instance.post(base.dengluid,data)
  },
  getgengxin(data){
    return instance.put(base.gengxinid,data)
  }
}

export default api;