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
// import { GenreDropdownComponent } from './shared/components/genre-dropdown/genre-dropdown.component';
// import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    MovieCardComponent,
    HeaderComponent,
    // GenreDropdownComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
