import { Component } from '@angular/core';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Character } from 'src/app/shared/interface/character';
import { Results } from 'src/app/shared/interface/results';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent {
  character!: Character;
  results: Array<Results> = []

  nextUrl: string = '';

  constructor(
    private rickmortyService: RickmortyService,
  ) {}

  ngOnInit(): void {
    this.episodes()
  }

  episodes() {
    this.rickmortyService.getEpisode().subscribe({
      next: (response) => {
        this.character = response;
        this.nextUrl = response.info.next;
      },
    });
  }

  onScroll() {
    this.rickmortyService.getEpisode(this.nextUrl).subscribe({
      next: (response) => {
        this.nextUrl = response.info.next;
        this.results = this.results.concat(
          response.results
        );
      },
    });
  }

  onScrollUp() {
    this.episodes()
  }
}
