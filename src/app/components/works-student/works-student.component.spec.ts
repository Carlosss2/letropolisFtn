import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksStudentComponent } from './works-student.component';

describe('WorksStudentComponent', () => {
  let component: WorksStudentComponent;
  let fixture: ComponentFixture<WorksStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
