import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSanctionComponent } from './listing-sanction.component';

describe('ListingSanctionComponent', () => {
  let component: ListingSanctionComponent;
  let fixture: ComponentFixture<ListingSanctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSanctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSanctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
