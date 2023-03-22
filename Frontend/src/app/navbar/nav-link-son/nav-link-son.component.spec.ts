import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkSonComponent } from './nav-link-son.component';

describe('NavLinkSonComponent', () => {
  let component: NavLinkSonComponent;
  let fixture: ComponentFixture<NavLinkSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLinkSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLinkSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
