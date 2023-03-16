import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAffichCongerComponent } from './modal-affich-conger.component';

describe('ModalAffichCongerComponent', () => {
  let component: ModalAffichCongerComponent;
  let fixture: ComponentFixture<ModalAffichCongerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAffichCongerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAffichCongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
