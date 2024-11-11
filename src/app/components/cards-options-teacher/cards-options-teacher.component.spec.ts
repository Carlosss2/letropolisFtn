import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOptionsTeacherComponent } from './cards-options-teacher.component';

describe('CardsOptionsTeacherComponent', () => {
  let component: CardsOptionsTeacherComponent;
  let fixture: ComponentFixture<CardsOptionsTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsOptionsTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsOptionsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
