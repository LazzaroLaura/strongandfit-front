import Vue from 'vue'
import App from './App.vue'



import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter(
  {

    mode: 'history',
    base: '/',
    //base: document.location.pathname,
    routes: [
      {
        name: 'home',
        path: '/',
        component: Home
      },
      {
        name: 'login',
        path: '/login',
        component: Login
      },
    ]

  }
)

import Login from './views/Login.vue';
import Home from './views/Home.vue';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
