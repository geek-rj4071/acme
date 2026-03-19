import { Route } from '@angular/router';
import { App } from './app';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: App,
  },
];
