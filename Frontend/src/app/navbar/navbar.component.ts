import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// hace de flag en caso de haber algun usuario conectado muestra el boton "mi cuenta" en caso de no ser asi muestra los botones para registrarse y loguearse

// TODO hacer que esta flag cambie cuando hay alguien logueado.
  log:boolean = true; 

  token:any;
  constructor() {

  }

  ngOnInit(): void {
  }

}
