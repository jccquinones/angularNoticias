import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './component/home/home.component';
import {ErrorComponent} from './component/error/error.component';
import {ArticlesListComponent} from './component/articles-list/articles-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'listado', component: ArticlesListComponent}
  { path: '**', component: ErrorComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
