import axios from 'axios';
import store from 'store';
import {baseURL, timeout} from 'config';

const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const isLoggedIn = store.getters['membership/isLoggedIn'];
  const token = (isLoggedIn) ? store.state.membership.token : null;
  config.headers.Authorization = 'token ' + token;
  return config;
});

instance.interceptors.response.use((response) => {
    return response;
}, ({response}) => {
  const {status} = response;
  if (status === 401) {
    store.commit('membership/dropUser');
  }
  return Promise.reject(response);
});

export default instance;
