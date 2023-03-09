import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichContratComponent } from './affich-contrat.component';

describe('AffichContratComponent', () => {
  let component: AffichContratComponent;
  let fixture: ComponentFixture<AffichContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
