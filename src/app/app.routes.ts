import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register-minimal/register-minimal.component').then(m => m.RegisterMinimalComponent)
  },  {
    path: 'career-tips',
    loadComponent: () => import('./career-tips/career-tips.component').then(m => m.CareerTipsComponent)
  },
  {
    path: 'career-tips/:id',
    loadComponent: () => import('./career-tips/career-tip-detail.component').then(m => m.CareerTipDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
