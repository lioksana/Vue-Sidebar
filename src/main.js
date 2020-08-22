import Vue from 'vue'
import App from './PortalApp.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
