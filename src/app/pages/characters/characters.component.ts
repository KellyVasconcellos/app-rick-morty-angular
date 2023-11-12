import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Character } from 'src/app/shared/interface/character';
import { Episode } from 'src/app/shared/interface/episode';
import { Results } from 'src/app/shared/interface/results';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  character!: Character;
  episode!: Episode;
  location!: Location;
  results: Array<Results> = []

  nextUrl: string = '';

  constructor(
    private rickmortyService: RickmortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //characters

    this.rickmortyService.getCharacters().subscribe({
      next: (response) => {
        this.results = response.results;
        this.nextUrl = response.info.next;
      },
    });
  }

  //episode
  episodes() {
    this.rickmortyService.getEpisode().subscribe({
      next: (response) => {
        this.character = response;
        this.nextUrl = response.info.next;
      },
    });
  }

  //location
  locations() {
    this.rickmortyService.getLocation().subscribe({
      next: (response) => {
        this.character = response;
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
    this.rickmortyService.getCharacters().subscribe({
      next: (response) => {
        this.results = response.results;
        this.nextUrl = response.info.next;
      },
    });
  }

}
