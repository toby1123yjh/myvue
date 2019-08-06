import axios from  'axios'

const MyhttpServe={}

MyhttpServe.install= (Vue)=>{

  Vue.prototype.$http=axios;
}

export default MyhttpServe
