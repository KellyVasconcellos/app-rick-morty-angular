import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Character } from 'src/app/shared/interface/character';
import { Results } from 'src/app/shared/interface/results';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  character!: Character;
  results: Array<Results> = []

  nextUrl: string = '';

  constructor(
    private rickmortyService: RickmortyService
  ) {}

  ngOnInit(): void {
    this.rickmortyService.subjectResult.subscribe(value => {
      this.results = value.results
      this.nextUrl = value.info.next
    })
    this.characters()
  }

  characters() {
    this.rickmortyService.getCharacters().subscribe({
      next: (response) => {
        this.rickmortyService.subjectResult.next(response)
        this.nextUrl = response.info.next;
      },
    });
  }

  onScroll() {
    this.rickmortyService.getCharacters(this.nextUrl).subscribe({
      next: (response) => {
        this.nextUrl = response.info.next;
        this.results = this.results.concat(
          response.results
        );
      },
    });
  }

  onScrollUp() {
    this.characters()
  }
}
