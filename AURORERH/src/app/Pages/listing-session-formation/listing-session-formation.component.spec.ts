import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSessionFormationComponent } from './listing-session-formation.component';

describe('ListingSessionFormationComponent', () => {
  let component: ListingSessionFormationComponent;
  let fixture: ComponentFixture<ListingSessionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSessionFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
