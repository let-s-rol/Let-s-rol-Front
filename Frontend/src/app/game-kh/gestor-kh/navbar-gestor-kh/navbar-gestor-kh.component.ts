import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-gestor-kh',
  templateUrl: './navbar-gestor-kh.component.html',
  styleUrls: ['./navbar-gestor-kh.component.css'],
})
export class NavbarGestorKhComponent implements OnInit {
  status: string = 'bag';

  constructor() {}
  @Output() valorEnviado: EventEmitter<string> = new EventEmitter<string>();

  enviarValor() {
    this.valorEnviado.emit(this.status);
  }
  changeStatus(status: number) {
    switch (status) {
      case 1:
        this.status = 'bag';
        this.enviarValor();
        break;
      case 2:
        this.status = 'battle';
        this.enviarValor();
        break;
      default:
        this.status = 'shop';
        this.enviarValor();
        break;
    }
  }

  ngOnInit(): void {}
}
