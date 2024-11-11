import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedNumberComponent } from './contened-number.component';

describe('ContenedNumberComponent', () => {
  let component: ContenedNumberComponent;
  let fixture: ComponentFixture<ContenedNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
