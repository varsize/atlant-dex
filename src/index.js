import Vue from 'vue';
import i18n from 'i18n';
import store from 'store';
import router from 'router';
// import hub from 'services/hub';
import Vuelidate from 'vuelidate';
// import {hubURL, hubName} from 'config';

Vue.use(Vuelidate);
// Vue.use(hub, {
//   url: hubURL,
//   name: hubName,
// });

new Vue({
  el: '#app',
  store,
  i18n,
  router,
  beforeCreate() {
    // this.$hub.init();

    const icons = require.context('assets/icons', true, /\.(svg)$/);
    icons.keys().forEach(icons);
  },
});
