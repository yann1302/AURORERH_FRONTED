import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingNoteProfessionnelleComponent } from './listing-note-professionnelle.component';

describe('ListingNoteProfessionnelleComponent', () => {
  let component: ListingNoteProfessionnelleComponent;
  let fixture: ComponentFixture<ListingNoteProfessionnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingNoteProfessionnelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingNoteProfessionnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
