import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/Games';
import { NgForm } from '@angular/forms';

import { GamesService } from 'src/app/services/games.service';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const Id = this.route.snapshot.paramMap.get('id');

    if (Id !== null) {
      this.llenarForm(Id);
    }

  }

  llenarForm(Id: string) {

    this.gamesService.getGame(Id)
      .subscribe(
        res => {
          this.game = res;
        },
        err => {
          console.error(err);
        }
      );
  }

  onSubmit(frm: NgForm) {
    // console.log(frm.value);
    // { first: '', last: '' }

    if (frm.valid) {
      if (frm.value.id !== 0) {
        this.gamesService.updateGame(frm.value)
          .subscribe(
            res => {
              console.log(res);
              this.toastrService.info('Juego actualizado correctamente.');
              this.router.navigate(['/']);
            },
            err => {
              console.error(err);
            }
          );
      } else {
        this.gamesService.saveGame(this.game)
          .subscribe(
            res => {
              this.toastrService.success('Juego guardado correctamente.');
              this.router.navigate(['/']);
            },
            err => console.error(err)
          );
      }
    }
  }
}
