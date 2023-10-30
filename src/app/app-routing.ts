import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'switch-map',
    title: 'Switch Map',
    loadComponent: () => import('./features/switch-map/switch-map.component').then(m => m.SwitchMapComponent),
  },
  {
    path: 'merge-map',
    title: 'Merge Map',
    loadComponent: () => import('./features/merge-map/merge-map.component').then(m => m.MergeMapComponent),
  },
  {
    path: 'concat-map',
    title: 'Concat Map',
    loadComponent: () => import('./features/concat-map/concat-map.component').then(m => m.ConcatMapComponent),
  },
  {
    path: 'exhaust-map',
    title: 'Exhaust Map',
    loadComponent: () => import('./features/exhaust-map/exhaust-map.component').then(m => m.ExhaustMapComponent),
  },
  {
    path: 'configuration',
    title: 'Configuration',
    loadComponent: () => import('./features/configuration/configuration.component').then(m => m.ConfigurationComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
