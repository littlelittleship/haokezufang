//用于封装公共路径
import Axios from 'axios'

export const axios = Axios.create({
    baseURL:'http://hkzf.zbztb.cn'
})

// 使用拦截器简化返回值，因为返回值里面都包含了一层data，所以我们拦截返回值，请求成功直接返回response.data,在使用的时候就不用写data
axios.interceptors.response.use(function (response) {
  // return 了什么 回去 那么   在其他的请求成功的 then中的res 就是什么 
  return response.data;  
}, function (error) {
  return Promise.reject(error);
});
