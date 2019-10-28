import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './components/pages/games/games-list/games-list.component';
import { GamesFormComponent } from './components/pages/games/games-form/games-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'add',
    component: GamesFormComponent
  },
  {
    path: 'add/:id',
    component: GamesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
