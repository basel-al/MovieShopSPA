import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { HomeComponent } from './home/home.component';
import { CastDetailsComponent } from './public/cast-details/cast-details.component';
import { MovieDetailsComponent } from './public/movie-details/movie-details.component';
import { GenreComponent } from './shared/components/genre/genre.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'cast/:id', component: CastDetailsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {path: 'Movies/genre/:id', component: GenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
