import axios from 'axios'

import qs from 'qs'

// import {
//   getToken
// } from '@/utils/auth'
const service = axios.create({

  timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 请求分为get/post
// axios对于get和post的参数的处理方式是不同的
function http(config) {
  if (config.method.toLowerCase() === 'post') {
    // 针对对象 是无法直接处理的 ; qs是一个js库,可以方便的对对象进行序列化处理
    // myAjax  {name:'zx',age:20} ==> name=zs&age=20
    config.data = qs.stringify(config.data, {
      arrayFormat: 'repeat',
      allowDots: true
    });
  } else {
    config.params = config.data;
  }
  return service(config);
}


export default http