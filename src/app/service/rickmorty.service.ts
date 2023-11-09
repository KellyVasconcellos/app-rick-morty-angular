import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../shared/interface/character';
import { Episode } from '../shared/interface/episode';
import { Location } from '../shared/interface/location';

@Injectable({
  providedIn: 'root'
})

export class RickmortyService {
  private url = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient, private router: Router) { }

  getCharacters() {
    return this.http.get<Character>(`${this.url}/character`)
  }

  getLocation() {
    return this.http.get<Array<Location>>(`${this.url}/location`)
  }

  getEpisode() {
    return this.http.get<Array<Episode>>(`${this.url}/episode`)
  }
}
