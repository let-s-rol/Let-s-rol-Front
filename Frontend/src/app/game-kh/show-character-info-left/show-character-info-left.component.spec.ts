import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCharacterInfoLeftComponent } from './show-character-info-left.component';

describe('ShowCharacterInfoLeftComponent', () => {
  let component: ShowCharacterInfoLeftComponent;
  let fixture: ComponentFixture<ShowCharacterInfoLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCharacterInfoLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCharacterInfoLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
