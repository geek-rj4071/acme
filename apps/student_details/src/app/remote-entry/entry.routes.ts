import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { StudentBiodata } from '../student-details/student-biodata';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntry,
    children: [
      {
        path: '',
        component: StudentBiodata,
      },
    ],
  },
];
