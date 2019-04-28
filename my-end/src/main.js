// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import './config/rem'
import store from './store/index'
// import { Button, Select } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"
Vue.prototype.axios=axios;
Vue.config.productionTip = false
// import echarts from 'echarts'
// Vue.prototytotype.$echarts=echarts
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'; 
// })
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
  // store
}).$mount("#app")

