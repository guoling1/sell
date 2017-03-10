// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import 'common/less/index.less'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller},
]

const router = new VueRouter({
  linkActiveClass:'active', //修改激活时的默认class
  routes
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

