import Vue from 'vue'
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

import App from './App.vue'
import {router} from './router'
import { store } from './store';


// install rules 
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);


// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
