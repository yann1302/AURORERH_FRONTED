import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSessionFormComponent } from './modal-session-form.component';

describe('ModalSessionFormComponent', () => {
  let component: ModalSessionFormComponent;
  let fixture: ComponentFixture<ModalSessionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSessionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
