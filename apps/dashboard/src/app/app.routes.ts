import { Route } from '@angular/router';
import { App } from './app';
import { loadRemoteModule } from '@nx/angular/mf';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { Homepage } from './home/homepage';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Homepage,
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'biodata',
    loadChildren: () =>
      import('student_details/Routes').then((m) => m!.remoteRoutes),
  },
];
