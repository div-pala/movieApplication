import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';

const routes: Routes = [
  // add the routing here
  {path: 'HomePage', component:HomePageComponent},
  {path: 'movieDetail/:movieId', component:MovieDetailComponent},
  {path: 'MyWatchList', component:WatchListComponent},
  {path: '', redirectTo:'/HomePage', pathMatch:'full'}
  //TODO
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
