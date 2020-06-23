import Vue from 'vue';
import Router  from 'vue-router'

import Home from './components/Home'
import Users from './components/Users'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
  { name: 'Home', path: '/', component: Home },
  { name: 'Users', path: '/users', component: Users, props: false },
  { name: 'Login', path: '/login', component: Login },
  { name: 'Register', path: '/register', component: Register }
]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})