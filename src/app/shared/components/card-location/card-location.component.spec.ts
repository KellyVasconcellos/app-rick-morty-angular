import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLocationComponent } from './card-location.component';

describe('CardLocationComponent', () => {
  let component: CardLocationComponent;
  let fixture: ComponentFixture<CardLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLocationComponent]
    });
    fixture = TestBed.createComponent(CardLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
