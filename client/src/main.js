import Vue from "vue";
import VueRecord from "@codekraft-studio/vue-record";
// eslint-disable-next-line
import VueGeolocation from "vue-browser-geolocation";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.use(VueGeolocation);
Vue.use(VueRecord);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
