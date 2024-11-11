import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedWriteComponent } from './contened-write.component';

describe('ContenedWriteComponent', () => {
  let component: ContenedWriteComponent;
  let fixture: ComponentFixture<ContenedWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedWriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
