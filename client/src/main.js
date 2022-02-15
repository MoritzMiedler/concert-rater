import Vue from "vue";
import VueRecord from "@codekraft-studio/vue-record";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.use(VueRecord);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
