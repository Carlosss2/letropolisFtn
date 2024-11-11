import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePostWorkComponent } from './table-post-work.component';

describe('TablePostWorkComponent', () => {
  let component: TablePostWorkComponent;
  let fixture: ComponentFixture<TablePostWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePostWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePostWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
