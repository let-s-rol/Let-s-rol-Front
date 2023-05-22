import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorKHasideComponent } from './gestor-khaside.component';

describe('GestorKHasideComponent', () => {
  let component: GestorKHasideComponent;
  let fixture: ComponentFixture<GestorKHasideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestorKHasideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestorKHasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
