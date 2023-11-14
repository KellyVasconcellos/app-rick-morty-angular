import { Component } from '@angular/core';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Character } from 'src/app/shared/interface/character';
import { Results } from 'src/app/shared/interface/results';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(
    private rickmortyService: RickmortyService
  ) {}

}
