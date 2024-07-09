import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'cocktails',
    loadChildren: () => import('./cocktails/cocktail-container.routing').then(m => m.COCKTAIL_ROUTES)
  },
  {
    path: '**',
    redirectTo: '/cocktails',
    pathMatch: "full"
  }
];
