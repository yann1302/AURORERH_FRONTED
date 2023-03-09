import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSanctionComponent } from './modal-sanction.component';

describe('ModalSanctionComponent', () => {
  let component: ModalSanctionComponent;
  let fixture: ComponentFixture<ModalSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSanctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
