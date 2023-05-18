import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorKHNavComponent } from './gestor-khnav.component';

describe('GestorKHNavComponent', () => {
  let component: GestorKHNavComponent;
  let fixture: ComponentFixture<GestorKHNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestorKHNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorKHNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
