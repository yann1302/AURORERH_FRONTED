import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichStagiaireComponent } from './affich-stagiaire.component';

describe('AffichStagiaireComponent', () => {
  let component: AffichStagiaireComponent;
  let fixture: ComponentFixture<AffichStagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichStagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
