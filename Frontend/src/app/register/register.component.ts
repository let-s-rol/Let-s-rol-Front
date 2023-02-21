import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  //Definimos la variable User cómo variable del tipo FormGroup
  user: FormGroup;

  //Definimos la variable isTeacher cómo variable del tipo boolean, en "false" de base.
  isTeacher: boolean = false;


  /* El constructor del Componente Registro la variable User cómo un new FormGroup y sus campos
     cómo un new FormControl. Los hacemos campos obligatorios son el Validators.Required y algunas
     especificaciones adicionales (cómo los minLength, etc).*/
  constructor() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      passwordRepeat: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]), //TODO hacer que se comprueben que las contraseñas son iguales
    });

    /* Este if sirve para controlar si el Usuario quiere ser Alumno o Profesor. En caso de ser profesor
    se añade un campo School y, de ser otra cosa (en este caso Alumno), se añade el campo Date (Fecha). */
    if (this.isTeacher) {
      this.user.addControl('school', new FormControl('', Validators.required));
    } else {
      this.user.addControl('date', new FormControl('', Validators.required)); //TODO: mirar de hacer que comprueba una fecha razonable
    }
  }

  /* */
  send(): any {
    //TODO: Usar esta funcion para mandar los datos al back

    if (this.passwordRepeatValidatos()) {
      let form = this.user.value;

      if (this.isTeacher) {
        form['rol'] = 'teacher';
      } else {
        form['rol'] = 'student';
      }

      console.log(form);
    }
  }

  passwordRepeatValidatos() {
    
    return true;

    // TODO arreglar esto
    // if (this.user.value.password === this.user.value.passwordRepeat ){
    //   return true;

    // }else{
    //   return false;
    // }
  }

  changeRol(): void {
    this.isTeacher = !this.isTeacher;

    this.selectTypeUser();
  }

  selectTypeUser() {
    if (this.isTeacher) {
      this.user.removeControl('date');
      this.user.addControl('school', new FormControl('Validators.required'));
    } else {
      this.user.removeControl('school');
      this.user.addControl('date', new FormControl('Validators.required')); //TODO: mirar de hacer que comprueba una fecha razonable
    }
  }
  ngOnInit(): void {}
}
