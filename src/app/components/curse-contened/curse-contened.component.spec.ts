import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurseContenedComponent } from './curse-contened.component';

describe('CurseContenedComponent', () => {
  let component: CurseContenedComponent;
  let fixture: ComponentFixture<CurseContenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurseContenedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurseContenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
