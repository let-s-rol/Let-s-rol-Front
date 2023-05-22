import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorKHComponent } from './gestor-kh.component';

describe('GestorKHComponent', () => {
  let component: GestorKHComponent;
  let fixture: ComponentFixture<GestorKHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestorKHComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestorKHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
