import Index from 'components/Index';
import Main from 'components/routes/main/Index';

export default [
  {
    path: '*',
    redirect: '',
  },
  {
    path: '',
    component: Index,
    children: [
      {
        path: '',
        name: 'main',
        component: Main,
      },
    ],
  },
];
