import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/Games';
import { NgForm } from '@angular/forms';

import { GamesService } from 'src/app/services/games.service';

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-games-form",
  templateUrl: './games-form.component.html',
  styleUrls: ['./games-form.component.css']
})
export class GamesFormComponent implements OnInit {

  game: Games = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor(private gamesService: GamesService) { }

  ngOnInit() { }

  onSubmit(frm: NgForm) {
    console.log(frm.value); // { first: '', last: '' }
    console.log(frm.valid); // false

    if (frm.valid) {
      this.gamesService.saveGame(this.game)
        .subscribe(
          res => {
            console.log(res);
          },
          err => console.log(err)
        );
    }
  }
}
