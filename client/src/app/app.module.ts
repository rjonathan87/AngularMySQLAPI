import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesFormComponent } from './components/pages/games/games-form/games-form.component';
import { GamesListComponent } from './components/pages/games/games-list/games-list.component';

import { GamesService } from './services/games.service';
import { HttpClientModule } from '@angular/common/http';
import { GamesPreviewComponent } from './components/pages/games/games-preview/games-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesFormComponent,
    GamesListComponent,
    GamesPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
