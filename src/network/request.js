import axios from 'axios'

export function request(config){
 
    const instance1 = axios.create({
      baseURL:'http://152.136.185.210:8000/api/z8',
      timeout: 5000
    })
    //2.axios的拦截器
    //2.1 请求拦截的要求
    instance1.interceptors.request.use(config => {
      // console.log(config);
      //比如 config 中的一些信息不符合服务器要求

      //比如每次发送网络请求时，都希望在界面中显示一个请求动画

      //某些网络请求（比如登陆（token），必须携带一些特殊的信息
      return config
    },err => {
      
    })
    //2.2 响应拦截
    instance1.interceptors.response.use(res => {
      return res.data
    },err => {
    })

    return instance1(config)
}





// export function request(config){
//   return new Promise((resolve, reject) => {
//     const instance1 = axios.create({
//       baseURL:'http://152.136.185.210:8000/api/z8',
//       timeout: 5000
//     })
  
  
//     //发送真正的网络请求
//     instance1(config).then(
//       value =>　{
//         resolve(value)
//       }
//     ).catch(
//       reason => {
//         reject(reason)
//       }
//     )
//   })
// }




// export function request(config){
//   const instance1 = axios.create({
//     baseURL:'http://152.136.185.210:8000/api/z8',
//     timeout: 5000
//   })


//   //发送真正的网络请求
//   instance1(config.baseConfig).then(
//     value =>　{
//       // console.log(value);
//       config.success(value)
//     }
//   ).catch(
//     reason => {
//       // console.log(reason);
//       config.failure(reason)
//     }
//   )
// }



// export function request(config,success,failure){
//   const instance1 = axios.create({
//     baseURL:'http://152.136.185.210:8000/api/z8',
//     timeout: 5000
//   })


//   //发送真正的网络请求
//   instance1(config).then(
//     value =>　{
//       console.log(value);
//       success(value)
//     }
//   ).catch(
//     reason => {
//       console.log(reason);
//       failure(reason)
//     }
//   )
// }