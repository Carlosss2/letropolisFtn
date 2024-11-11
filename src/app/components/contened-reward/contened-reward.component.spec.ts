import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedRewardComponent } from './contened-reward.component';

describe('ContenedRewardComponent', () => {
  let component: ContenedRewardComponent;
  let fixture: ComponentFixture<ContenedRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedRewardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
