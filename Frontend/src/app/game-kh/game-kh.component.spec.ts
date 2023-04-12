import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameKhComponent } from './game-kh.component';

describe('GameKhComponent', () => {
  let component: GameKhComponent;
  let fixture: ComponentFixture<GameKhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameKhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
