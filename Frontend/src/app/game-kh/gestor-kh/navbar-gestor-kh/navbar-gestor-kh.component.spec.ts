import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGestorKhComponent } from './navbar-gestor-kh.component';

describe('NavbarGestorKhComponent', () => {
  let component: NavbarGestorKhComponent;
  let fixture: ComponentFixture<NavbarGestorKhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarGestorKhComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarGestorKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
