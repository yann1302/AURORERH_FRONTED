import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingArchiveComponent } from './listing-archive.component';

describe('ListingArchiveComponent', () => {
  let component: ListingArchiveComponent;
  let fixture: ComponentFixture<ListingArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
