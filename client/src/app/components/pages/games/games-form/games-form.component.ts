import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/Games';

@Component({
  selector: 'app-games-form',
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

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('sss');

  }

}
