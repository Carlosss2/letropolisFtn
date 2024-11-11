import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWorkComponent } from './content-work.component';

describe('ContentWorkComponent', () => {
  let component: ContentWorkComponent;
  let fixture: ComponentFixture<ContentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
