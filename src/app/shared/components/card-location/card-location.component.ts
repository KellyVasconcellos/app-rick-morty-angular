import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Results } from '../../interface/results';
import { RickmortyService } from 'src/app/service/rickmorty.service';
import { Locationn } from '../../interface/location';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.scss']
})

export class CardLocationComponent implements OnChanges {

  @Input() url!: string
  @Input() results!: Results

  location?: Locationn

  constructor(
    private rickmortyService: RickmortyService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['results']) {
      this.rickmortyService.getLocation(this.url).subscribe({
        next: (response) => {
          this.results = response.location;
        },
      });
    }
  }
}
