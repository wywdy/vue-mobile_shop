//封装axios

import axios from 'axios'

export function request(config) {
     //1.创建axios实例
    const instance=axios.create({
       // baseURL:"http://localhost:8091",
        timeout:5000
    })
    //2.axios拦截器
       //2.1 请求拦截
    instance.interceptors.request.use(config=>{
         return config
    },error => {
        console.log(error);
    })
       //2.2 响应拦截
    instance.interceptors.response.use(res=>{
        return res.data
    },error => {
        console.log(error);
    })
     //3. 发送真正的网络请求
    return instance(config)  //返回Promise

}