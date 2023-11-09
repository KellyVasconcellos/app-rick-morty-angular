import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-rick-morty';

  public rickandmorty$!: Observable<any>;

  constructor(private http: HttpClient){}

  ngOnInit(){

    this.http.get("https://rickandmortyapi.com/api").subscribe(d=> console.log(d));

    this.rickandmorty$ = this.http.get("https://rickandmortyapi.com/api")
  }
}
