import { Component, Input, OnInit } from '@angular/core';
import { Results } from '../../interface/results';
import { Router } from '@angular/router';
import { Character } from '../../interface/character';
import { RickmortyService } from 'src/app/service/rickmorty.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})

export class CardDetailsComponent implements OnInit {
  state: any;
  results!: Results;

  constructor(
    private router: Router,
    private rickmortyService: RickmortyService  )
  {
    const route = this.router.getCurrentNavigation();
    this.state = route?.extras.state;
  }

  ngOnInit(): void {

    this.rickmortyService
      .getDetailsIdCard(this.state.id)
      .subscribe((response: Results) => {
        this.results = response;
      });
  }
}


