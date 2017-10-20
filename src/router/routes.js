import Index from 'components/Index';

export default [
  {
    path: '*',
    redirect: '',
  },
  {
    path: '',
    name: 'index',
    component: Index,
  },
];
