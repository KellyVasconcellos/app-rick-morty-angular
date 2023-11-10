import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Character } from 'src/app/shared/interface/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})

export class CharactersComponent implements OnInit {

  character!: Character;
  episode: Array<any> = [];
  location: Array<any> = [];

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

  // //episode
  // episodes(){
  //   this.rickmortyService.getEpisode().subscribe({
  //     next: (response) => {
  //       this.character = response.results;
  //       this.nextUrl = response.info.next;
  //     }
  //   })
  // }

  // //location



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
    console.log('Llegaste al inicio')
  }


  trackByCharacterId: TrackByFunction<any> = (index: number, character: any) => character.id


}
