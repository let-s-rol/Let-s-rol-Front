import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachGameKHComponent } from './seach-game-kh.component';

describe('SeachGameKHComponent', () => {
  let component: SeachGameKHComponent;
  let fixture: ComponentFixture<SeachGameKHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachGameKHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeachGameKHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
