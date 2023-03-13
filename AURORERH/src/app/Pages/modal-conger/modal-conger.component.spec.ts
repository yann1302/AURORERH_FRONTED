import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCongerComponent } from './modal-conger.component';

describe('ModalCongerComponent', () => {
  let component: ModalCongerComponent;
  let fixture: ComponentFixture<ModalCongerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCongerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
