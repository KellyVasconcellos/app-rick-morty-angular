import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { RickmortyService } from 'src/app/service/rickmorty.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  queryField = new FormControl();
  results!: Observable<any>;
  total!: number;
  url= 'https://rickandmortyapi.com/api/character/';
  readonly FIELDS = 'name,status,species,gender';

  constructor(private rickmortyService: RickmortyService) {}

  ngOnInit() {
    this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length >= 3),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(value => this.rickmortyService.getCharacters(
        `${this.url}?name=${value}`
        )),
      map((res: any) => res)
    ).subscribe(res => this.rickmortyService.subjectResult.next(res))
  }


}
