import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorKHNavbarComponent } from './gestor-khnavbar.component';

describe('GestorKHNavbarComponent', () => {
  let component: GestorKHNavbarComponent;
  let fixture: ComponentFixture<GestorKHNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorKHNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorKHNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
