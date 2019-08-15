import axios from  'axios'

const MyhttpServe={}

MyhttpServe.install= (Vue)=>{
  axios.defaults.baseURL = 'http://localhost:8080';
  axios.defaults.withCredentials=true;  //设置默认携带cookies
  //axios.defaults.headers.common[]
  //拦截器
  axios.interceptors.request.use(function(config){
    console.log("拦截器触发")
    if(config.url!==''){
      sessionStorage.setItem("username","djy")
    }
    return config;
  },function (error) {
      return Promise.reject(error);
  });
  Vue.prototype.$http=axios;
}

export default MyhttpServe
