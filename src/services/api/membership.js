import api from './api';

export const login = ({email, password}) =>
  api.post('member/login', {email, password});
