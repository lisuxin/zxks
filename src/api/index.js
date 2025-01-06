import instance from "../utils/request";
import base from "./path";

const api = {
  getselect() {
    return instance.get(base.select);
  },
  getdengluid(data){
    return instance.post(base.dengluid,data)
  },
  getgengxin(data){
    return instance.put(base.gengxinid,data)
  },
  getinsert(data){
    return instance.post(base.insertid,data)
  },
  getsancuid(id){
    return instance.delete(base.shancuid+id)
  }
}

export default api;