import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCharacterInfoComponent } from './show-character-info.component';

describe('ShowCharacterInfoComponent', () => {
  let component: ShowCharacterInfoComponent;
  let fixture: ComponentFixture<ShowCharacterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCharacterInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowCharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
