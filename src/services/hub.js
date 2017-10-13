import {hubConnection} from 'signalr-no-jquery';

export default {
  install(Vue, {url, name}) {
    Vue.prototype.$hub = {
      connection: hubConnection(url),
      proxy: null,
      init() {
        const connection = this.connection;
        this.proxy = connection.createHubProxy(name);
        connection.logging = false;
        connection.disconnected(() => {
          return this.start();
        });
      },
      start() {
        return new Promise((resolve, reject) => {
          this.connection.start().done((status) => {
            return resolve(status);
          }).fail((error) => {
            return reject(error);
          });
        });
      },
      setToken(token) {
        this.connection.qs = {token};
        this.proxy.invoke('setAuthToken', token);
      },
    };
  },
};
