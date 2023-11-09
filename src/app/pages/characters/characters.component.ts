import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { RickmortyService } from 'src/app/service/rickmorty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  character: Array<any> = [];
  nextUrl: string = '';

  constructor(
    private rickmortyService: RickmortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rickmortyService.getCharacters().subscribe({
      next: (response) => {
        this.character = response.results;
        this.nextUrl = response.info.next;
      },
    });
  }

  onScroll() {
    this.rickmortyService.getCharacters(this.nextUrl).subscribe({
      next: (response) => {
        if (response.info.next && response.info.next !== null) {
          this.nextUrl = response.info.next;
          Array.from(response.results).forEach((element) => {
            this.character = [...this.character, element];
          });
        }
      },
    });
  }


  onScrollUp() {
    alert('Llegaste al inicio')
  }


  trackByCharacterId: TrackByFunction<any> = (index: number, character: any) => character.id


}
