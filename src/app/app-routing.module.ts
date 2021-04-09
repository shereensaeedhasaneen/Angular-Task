import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryComponent } from './Components/delivery/delivery.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { PopularMoviesComponent } from './Components/popular-movies/popular-movies.component';
import { TopRatedComponent } from './Components/top-rated/top-rated.component';


const routes: Routes = [
  
  { path: 'Home', component: HomepageComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path: 'movie/:idPopularMovie', component: MovieDetailsComponent },
  {path:'topRateMovie/:idTopRatedMovie',component:MovieDetailsComponent},
  {path:'movies/popular',component:PopularMoviesComponent},
  {path:'movies/topRated',component:TopRatedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
