import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
 /* Creamos la variable Login y hacemos que no pueda ser Nula. La variable es del tipo
 FormGroup.*/
  Login!: FormGroup;

  /* En el constructor del LoginComponent definimos la variable Login como un nuevo
     FormGroup y definimos los Campos como tipo FormControl; dejamos que el primer campo
     permanezca vacío y hacemos que sean campos obligatorios con el Validator.required.
  */
  constructor() {

    //
    this.Login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }


  ngOnInit() {
   
  }

  send(): any {
    console.log(this.Login.value);
  }
}

