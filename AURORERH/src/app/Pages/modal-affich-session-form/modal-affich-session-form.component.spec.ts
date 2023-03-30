import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAffichSessionFormComponent } from './modal-affich-session-form.component';

describe('ModalAffichSessionFormComponent', () => {
  let component: ModalAffichSessionFormComponent;
  let fixture: ComponentFixture<ModalAffichSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAffichSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAffichSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
