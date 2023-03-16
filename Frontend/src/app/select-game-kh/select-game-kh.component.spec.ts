import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGameKHComponent } from './select-game-kh.component';

describe('SelectGameKHComponent', () => {
  let component: SelectGameKHComponent;
  let fixture: ComponentFixture<SelectGameKHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectGameKHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectGameKHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
