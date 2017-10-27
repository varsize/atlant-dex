import api from './api';

export const getChart = ({period, pair}) => api.get('/trade/chart', {params: {period, pair}});
export const getDesktop = ({limit, pair}) => api.get('/trade/getDesktop?', {params: {limit, pair}});
