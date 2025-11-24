import { Routes } from '@angular/router';

export const routes: Routes = [
  //   {
  //     path: '',
  //     redirectTo: '',
  //     pathMatch: 'full',
  //   },
  {
    path: '',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
