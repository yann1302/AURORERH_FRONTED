import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingFormationComponent } from './listing-formation.component';

describe('ListingFormationComponent', () => {
  let component: ListingFormationComponent;
  let fixture: ComponentFixture<ListingFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
