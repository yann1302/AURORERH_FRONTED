import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAffichSanctionComponent } from './modal-affich-sanction.component';

describe('ModalAffichSanctionComponent', () => {
  let component: ModalAffichSanctionComponent;
  let fixture: ComponentFixture<ModalAffichSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAffichSanctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAffichSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
