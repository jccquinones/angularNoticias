import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './component/home/home.component';
import {ErrorComponent} from './component/error/error.component';
import {ArticlesListComponent} from './component/articles-list/articles-list.component';
import {ArticleDetailComponent} from './component/article-detail/article-detail.component';
import {FavoritesListComponent} from './component/favorites-list/favorites-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'listado', component: ArticlesListComponent},
  { path: 'article-detail/:id', component: ArticleDetailComponent},
  { path: 'favorites', component: FavoritesListComponent},
  { path: '**', component: ErrorComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
