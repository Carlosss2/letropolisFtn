import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStudemtComponent } from './home-studemt.component';

describe('HomeStudemtComponent', () => {
  let component: HomeStudemtComponent;
  let fixture: ComponentFixture<HomeStudemtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStudemtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeStudemtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
