import axios from  'axios'

const MyhttpServe={}

MyhttpServe.install= (Vue)=>{
  axios.defaults.baseURL = 'http://localhost:8079';
  Vue.prototype.$http=axios;
}

export default MyhttpServe
