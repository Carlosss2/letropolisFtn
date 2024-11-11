import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedTaskComponent } from './contened-task.component';

describe('ContenedTaskComponent', () => {
  let component: ContenedTaskComponent;
  let fixture: ComponentFixture<ContenedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
