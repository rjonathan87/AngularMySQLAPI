import { Component, OnInit, Input } from '@angular/core';
import { Games } from 'src/app/models/Games';

@Component({
  selector: 'app-games-preview',
  templateUrl: './games-preview.component.html',
  styleUrls: ['./games-preview.component.css']
})
export class GamesPreviewComponent implements OnInit {
  @Input() game: Games;

  constructor() { }

  ngOnInit() {
  }

}
