import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedReadComponent } from './contened-read.component';

describe('ContenedReadComponent', () => {
  let component: ContenedReadComponent;
  let fixture: ComponentFixture<ContenedReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
