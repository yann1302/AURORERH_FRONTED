import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichSessionFormComponent } from './affich-session-form.component';

describe('AffichSessionFormComponent', () => {
  let component: AffichSessionFormComponent;
  let fixture: ComponentFixture<AffichSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
