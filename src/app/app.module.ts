import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './public/movie-details/movie-details.component';
import { CastDetailsComponent } from './public/cast-details/cast-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { LoginComponent } from './account/login/login.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenreComponent } from './shared/components/genre/genre.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    MovieCardComponent,
    HeaderComponent,
    LoginComponent,
    GenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
