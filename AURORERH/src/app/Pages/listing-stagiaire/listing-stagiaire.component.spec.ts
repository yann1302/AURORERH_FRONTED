import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingStagiaireComponent } from './listing-stagiaire.component';

describe('ListingStagiaireComponent', () => {
  let component: ListingStagiaireComponent;
  let fixture: ComponentFixture<ListingStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
