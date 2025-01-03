const base ={
    //请求前公共部分
    baseUrl:"http://localhost:5173/api",
    //查询全部
    select:"/zxks/select",
    //更具id查询
    selectid:"/zxks/selectid",
    //新增
    insertid:"/zxks/insert",
    //修改
    updateid:"/zxks/update",
    //删除
    delectid:"/zxks/delect",
    //登录
    dengluid:"/zxks/denglu/{}"
}


export default base;