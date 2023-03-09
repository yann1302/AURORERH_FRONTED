import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCongerComponent } from './listing-conger.component';

describe('ListingCongerComponent', () => {
  let component: ListingCongerComponent;
  let fixture: ComponentFixture<ListingCongerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingCongerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
