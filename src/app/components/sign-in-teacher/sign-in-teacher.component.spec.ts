import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInTeacherComponent } from './sign-in-teacher.component';

describe('SignInTeacherComponent', () => {
  let component: SignInTeacherComponent;
  let fixture: ComponentFixture<SignInTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
