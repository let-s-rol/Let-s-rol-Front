import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGameSearchListComponent } from './option-game-search-list.component';

describe('OptionGameSearchListComponent', () => {
  let component: OptionGameSearchListComponent;
  let fixture: ComponentFixture<OptionGameSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionGameSearchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionGameSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
