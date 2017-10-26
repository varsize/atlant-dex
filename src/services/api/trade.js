import api from './api';

export const getChart = ({period, pair}) => api.get('/trade/chart', {params: {period: period, pair: pair}});
