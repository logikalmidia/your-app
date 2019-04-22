
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';

import Swal from 'sweetalert2'
window.swal = swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import dashboard from './components/Dashboard.vue'
import users from './components/Users.vue'
import profile from './components/Profile.vue'
import VueRouter from 'vue-router'
import { createDecipher } from 'crypto';
Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
})

let routes = [
    { path: '/dashboard', component: dashboard },
    { path: '/users', component: users },
    { path: '/profile', component: profile },
    { path: '/dashboard', component:  require('./components/Dashboard.vue') },
    { path: '/users', component:  require('./components/Users.vue') },
    { path: '/profile', component:  require('./components/Profile.vue') }
    
  ]

  const router = new VueRouter({
      mode: 'history',
    routes // short for `routes: routes`
  })

  Vue.filter('upText', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  });

  Vue.filter('myDate', function(created) {
    return moment(created).format('MMMM Do YYYY');
  });
  

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
