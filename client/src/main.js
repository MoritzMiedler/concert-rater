import Vue from "vue";
import VueRecord from "@codekraft-studio/vue-record";
import VueGeolocation from "vue-browser-geolocation";
import AudioVisual from "vue-audio-visual";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.use(AudioVisual);
Vue.use(VueGeolocation);
Vue.use(VueRecord);
Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyA1AQ2uRN2iQbotNBzzrE5FutPW7zSMu8Q",
    libraries: "places",
  },
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
