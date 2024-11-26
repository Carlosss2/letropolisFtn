import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPremiumComponent } from './dialog-premium.component';

describe('DialogPremiumComponent', () => {
  let component: DialogPremiumComponent;
  let fixture: ComponentFixture<DialogPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogPremiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
