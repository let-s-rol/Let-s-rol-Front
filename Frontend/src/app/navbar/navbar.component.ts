import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// hace de flag en caso de haber algun usuario conectado muestra el boton "mi cuenta" en caso de no ser asi muestra los botones para registrarse y loguearse

  log:boolean = true; 
  constructor() { }

  ngOnInit(): void {
  }

}
