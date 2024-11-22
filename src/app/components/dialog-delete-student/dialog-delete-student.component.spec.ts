import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteStudentComponent } from './dialog-delete-student.component';

describe('DialogDeleteStudentComponent', () => {
  let component: DialogDeleteStudentComponent;
  let fixture: ComponentFixture<DialogDeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDeleteStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
