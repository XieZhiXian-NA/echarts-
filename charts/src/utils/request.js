import axios from 'axios'

const instance = axios.create({
  baseURL:'https://apis.immoc.com',
  timeout:5000
})

instance.interceptors.response.use(
  response=>{
   if(response.status === '200' && response.data){
    return response.data

   }else{
     return Promise.reject(new Error('请求失败'))
   }
  },
  error=>{
    return Promise.reject(error)
  }
)

export default instance
