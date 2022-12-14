import Vue from "vue";
import { BootstrapVue, IconsPlugin } from  'bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/js/components';

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
