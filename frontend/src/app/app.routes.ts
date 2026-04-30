import { Routes } from '@angular/router';
import HomePageComponent from './features/home-page-component/home-page-component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home-page-component/home-page-component'),
  },
  {
    path: '**', redirectTo: 'home',
  }
];
