import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingEmployerComponent } from './listing-employer.component';

describe('ListingEmployerComponent', () => {
  let component: ListingEmployerComponent;
  let fixture: ComponentFixture<ListingEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
