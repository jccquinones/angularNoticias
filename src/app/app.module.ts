import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatGridListModule} from '@angular/material/grid-list';
import 'hammerjs';

import {
  MatListModule,
  MatInputModule,
  MatChipsModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatTabsModule,
  MatIconModule
} from '@angular/material';

// Components
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { ArticlesListComponent } from './component/articles-list/articles-list.component';

// Rutas
import {routing, AppRoutingProviders} from './app.routing';

// Servicios
import {GlobalService} from './service/global.service';
import {ArticlesService} from './service/articles.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ArticlesListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTabsModule,
    MatToolbarModule,
    routing
  ],
  providers: [AppRoutingProviders, GlobalService, ArticlesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
