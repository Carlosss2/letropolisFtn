import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPostWorkComponent } from './content-post-work.component';

describe('ContentPostWorkComponent', () => {
  let component: ContentPostWorkComponent;
  let fixture: ComponentFixture<ContentPostWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPostWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPostWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
