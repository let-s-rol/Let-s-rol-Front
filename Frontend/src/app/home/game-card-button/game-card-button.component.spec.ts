import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardButtonComponent } from './game-card-button.component';

describe('GameCardButtonComponent', () => {
  let component: GameCardButtonComponent;
  let fixture: ComponentFixture<GameCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCardButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
