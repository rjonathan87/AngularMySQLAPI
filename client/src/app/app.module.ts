import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesFormComponent } from './components/pages/games/games-form/games-form.component';
import { GamesListComponent } from './components/pages/games/games-list/games-list.component';

import { GamesService } from './services/games.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesFormComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
