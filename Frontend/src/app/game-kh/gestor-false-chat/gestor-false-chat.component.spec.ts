import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorFalseChatComponent } from './gestor-false-chat.component';

describe('GestorFalseChatComponent', () => {
  let component: GestorFalseChatComponent;
  let fixture: ComponentFixture<GestorFalseChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestorFalseChatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestorFalseChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
