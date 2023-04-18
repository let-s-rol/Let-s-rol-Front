import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCharacterPannelComponent } from './new-character-pannel.component';

describe('NewCharacterPannelComponent', () => {
  let component: NewCharacterPannelComponent;
  let fixture: ComponentFixture<NewCharacterPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCharacterPannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCharacterPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
