import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOptionStudentComponent } from './cards-option-student.component';

describe('CardsOptionStudentComponent', () => {
  let component: CardsOptionStudentComponent;
  let fixture: ComponentFixture<CardsOptionStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsOptionStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsOptionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
