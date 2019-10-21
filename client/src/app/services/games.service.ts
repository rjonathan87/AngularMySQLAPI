import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Games } from '../models/Games';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }
  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }
  saveGame(game: Games) {
    return this.http.post(`${this.API_URI}/games`, game);
  }
  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
  updateGame(game: Games) {
    return this.http.put(`${this.API_URI}/games/${game.id}`, game);
  }
  updateGames(id: string, game: Games): Observable<any> {
    return this.http.put(`${this.API_URI}/games/${id}`, game);
  }
}
