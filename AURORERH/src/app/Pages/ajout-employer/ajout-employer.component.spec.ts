import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEmployerComponent } from './ajout-employer.component';

describe('AjoutEmployerComponent', () => {
  let component: AjoutEmployerComponent;
  let fixture: ComponentFixture<AjoutEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
