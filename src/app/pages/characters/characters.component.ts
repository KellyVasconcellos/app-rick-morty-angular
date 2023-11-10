import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Character } from 'src/app/shared/interface/character';
import { Episode } from 'src/app/shared/interface/episode';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})

export class CharactersComponent implements OnInit {

  character!: Character;
  episode!: Episode;
  location!: Location;

  nextUrl: string = '';


  constructor(
    private rickmortyService: RickmortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //characters
    this.rickmortyService.getCharacters().subscribe({
      next: (response) => {
        this.character = response;
        this.nextUrl = response.info.next;
      },
    });
  }

  //episode
  episodes(){
    this.rickmortyService.getEpisode().subscribe({
      next: (response) => {
        this.character = response;
        this.nextUrl = response.info.next;
      }
    })
  }

  //location
  locations(){
    this.rickmortyService.getLocation().subscribe({
      next: (response) => {
        this.character = response;
        this.nextUrl = response.info.next;
      }
    })
  }

  onScroll() {
    this.rickmortyService.getCharacters(this.nextUrl).subscribe({
      next: (response) => {
        if (response.info.next && response.info.next !== null) {
          this.nextUrl = response.info.next;
          Array.from(response.results).forEach((element) => {
            this.character.results = [...this.character.results, element];
          });
        }
      },
    });
  }

  onScrollUp() {
    console.log('')
  }

  trackByCharacterId: TrackByFunction<any> = (index: number, character: any) => character.id
}
