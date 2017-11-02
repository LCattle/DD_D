// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import vueAxios from 'vue-axios'
//import resource from 'vue-resource'
//import store from './store/pulice'
import store from './store/index'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
//Vue.use(resource)
// Vue.http.options.credentials = true //全局携带cookie
Vue.use(vueAxios, axios)
new Vue({
  el: '#app',
  router,
  //resource,
  store,
  template: '<App/>',
  components: { App }
})
