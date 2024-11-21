import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedVideogameComponent } from './contened-videogame.component';

describe('ContenedVideogameComponent', () => {
  let component: ContenedVideogameComponent;
  let fixture: ComponentFixture<ContenedVideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedVideogameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenedVideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
