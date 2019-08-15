// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MyhttpServer from '@/plugins/http'
import moment from 'moment'  //处理日期格式的moment库
import BreadCrumb from '@/components/GlobalComponent/BreadCrumb'  //面包屑组件作为全局组件

//导入样式
import '@/css/reset.css'

Vue.config.productionTip = false

//全局过滤器
//日期格式处理
Vue.filter('datefmt',function(value,formatStr='YYYY-MM-DD HH:mm:ss'){
  if(value===null){
    return null
  }
  return moment(value).format(formatStr)
})

Vue.use(MyhttpServer)
Vue.use(ElementUI)
/* eslint-disable no-new */

//定义全局面包屑组件
Vue.component(BreadCrumb.name,BreadCrumb)



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
