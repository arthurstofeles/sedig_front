import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMask from "v-mask";
import Hotjar from "vue-hotjar";

Vue.use(Hotjar, {
  id: process.env.VUE_APP_HOTJAR_KEY,
  isProduction: true,
});

Vue.use(VueMask);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
