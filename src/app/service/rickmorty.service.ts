import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../shared/interface/character';
import { Results } from '../shared/interface/results';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RickmortyService {
  private url = 'https://rickandmortyapi.com/api'

  subjectResult: Subject<Character> = new Subject<Character>()

  constructor(private http: HttpClient, private router: Router) { }

  getCharacters(apiUrl: string = `${this.url}/character`) {
    return this.http.get<Character>(apiUrl)
  }
}
