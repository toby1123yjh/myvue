import axios from  'axios'

const MyhttpServe={}

MyhttpServe.install= (Vue)=>{
  //axios.defaults.baseURL = 'https://api.example.com';
  Vue.prototype.$http=axios;
}

export default MyhttpServe
