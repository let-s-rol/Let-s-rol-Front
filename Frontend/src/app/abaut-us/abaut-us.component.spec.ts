import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbautUSComponent } from './abaut-us.component';

describe('AbautUSComponent', () => {
  let component: AbautUSComponent;
  let fixture: ComponentFixture<AbautUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbautUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbautUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
