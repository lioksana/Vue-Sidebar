import Vue from 'vue';
import Router from 'vue-router';
import Users from './views/Users.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/views/groups',
      name: 'groups',
      component: ()=>import('./views/Groups.vue')
    }
  ]
})