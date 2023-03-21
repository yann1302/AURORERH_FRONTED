import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDemandeFormComponent } from './modal-demande-form.component';

describe('ModalDemandeFormComponent', () => {
  let component: ModalDemandeFormComponent;
  let fixture: ComponentFixture<ModalDemandeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDemandeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDemandeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
