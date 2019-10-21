import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './components/pages/games/games-list/games-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GamesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
