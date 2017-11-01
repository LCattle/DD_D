// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import resource from 'vue-resource'
import store from './store/pulice'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(resource)
// Vue.http.options.credentials = true //全局携带cookie

new Vue({
  el: '#app',
  router,
  resource,
  store,
  template: '<App/>',
  components: { App }
})
