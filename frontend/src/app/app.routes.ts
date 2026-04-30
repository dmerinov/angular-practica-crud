import { Routes } from '@angular/router';
import HomePageComponent from './features/home-page-component/home-page-component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/layout.component/layout.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home-page-component/home-page-component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
