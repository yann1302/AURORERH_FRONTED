import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingContratComponent } from './listing-contrat.component';

describe('ListingContratComponent', () => {
  let component: ListingContratComponent;
  let fixture: ComponentFixture<ListingContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
