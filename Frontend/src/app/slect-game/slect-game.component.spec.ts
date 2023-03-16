import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectGameComponent } from './slect-game.component';

describe('SlectGameComponent', () => {
  let component: SlectGameComponent;
  let fixture: ComponentFixture<SlectGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlectGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlectGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
