import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichEmployerComponent } from './affich-employer.component';

describe('AffichEmployerComponent', () => {
  let component: AffichEmployerComponent;
  let fixture: ComponentFixture<AffichEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
