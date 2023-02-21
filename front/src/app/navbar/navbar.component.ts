import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Este booleano sirve para comprobar si hay alguien "logueado" o no.
  //Sino hay nadie, la barra de navegación mostrará los botones de login y registro.

  log:boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
