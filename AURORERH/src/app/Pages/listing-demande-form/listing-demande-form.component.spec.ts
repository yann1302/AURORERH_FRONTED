import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDemandeFormComponent } from './listing-demande-form.component';

describe('ListingDemandeFormComponent', () => {
  let component: ListingDemandeFormComponent;
  let fixture: ComponentFixture<ListingDemandeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDemandeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDemandeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
