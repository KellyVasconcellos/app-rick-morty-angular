import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Character } from 'src/app/shared/interface/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  character!: Character

  constructor(
    private rickmortyService: RickmortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rickmortyService
      .getCharacters()
      .subscribe((resposta: Character) => {
        this.character = resposta
        console.log(this.character);
      });
  }

  onScroll() {
    console.log("scrolled!!");
  }
}
