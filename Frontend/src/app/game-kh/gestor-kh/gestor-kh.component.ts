import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestor-kh',
  templateUrl: './gestor-kh.component.html',
  styleUrls: ['./gestor-kh.component.css'],
})
export class GestorKHComponent implements OnInit {
  status: string = 'bag';
  constructor() {}
  recibirValor(valor: string) {
    this.status = valor;
  }
  ngOnInit(): void {}
}
