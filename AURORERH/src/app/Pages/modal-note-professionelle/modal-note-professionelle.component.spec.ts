import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNoteProfessionelleComponent } from './modal-note-professionelle.component';

describe('ModalNoteProfessionelleComponent', () => {
  let component: ModalNoteProfessionelleComponent;
  let fixture: ComponentFixture<ModalNoteProfessionelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNoteProfessionelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNoteProfessionelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
