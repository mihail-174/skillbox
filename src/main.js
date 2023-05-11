import Vue from 'vue';
import App from './App.vue';

// import { hello, name } from './constants';
// import sayHello from './utils';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// sayHello(name);
// sayHello(hello);
