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
      {
        name: 'programsBySearch',
        path: '/programs-by-search/:id/:typeId',
        component: ProgramsBySearch
      },
      {
        name: 'signup',
        path: '/signup',
        component: Signup
      },
      {
        name: 'personnalPage',
        path: '/personnal-page',
        component: PersonnalPage
      },
    ]

  }
)

import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import PersonnalPage from './views/PersonnalPage.vue';
import ProgramsBySearch from './views/ProgramsBySearch.vue';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
