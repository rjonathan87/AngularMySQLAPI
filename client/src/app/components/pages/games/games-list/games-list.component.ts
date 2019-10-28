import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GamesService } from 'src/app/services/games.service';
import { Games } from 'src/app/models/Games';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: any = [];

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gamesService.getGames()
      .subscribe(
        res => {
          this.games = res;
        },
        err => {
          return console.error(err);
        }
      );
  }

  editGame(id: string) {
    this.router.navigate(['/add', id]);
  }

  deleteGame(id: string) {
    if (confirm('Desea eliminar este juego?')) {
      this.gamesService.deleteGame(id)
        .subscribe(
          res => {
            console.log(res);
            this.getGames();
          },
          err => {
            return console.error(err);
          }
        );
    }
  }
}
