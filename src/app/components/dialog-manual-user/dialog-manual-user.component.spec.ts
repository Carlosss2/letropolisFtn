import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogManualUserComponent } from './dialog-manual-user.component';

describe('DialogManualUserComponent', () => {
  let component: DialogManualUserComponent;
  let fixture: ComponentFixture<DialogManualUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogManualUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogManualUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
