import { Routes } from '@angular/router';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), title: 'Home | HBFuller', data:{'pageTitle': 'Home'}},
    {path: 'deal-manager', loadComponent: () => import('./components/deal-manager/deal-manager.component').then(m => m.DealManagerComponent), title: 'Deal Manager | HBFuller', data: {'pageTitle': 'Deal Manager'}},
    {path: '**', loadComponent: () => import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}

];
