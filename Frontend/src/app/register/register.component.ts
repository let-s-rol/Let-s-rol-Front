import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  token: any = "token";
  binding: any = false; 
  user: FormGroup;
  loginForm: FormGroup;
  regLog = false;

 

  constructor(public router: Router, private UsersService: UsersService) {
    this.user = new FormGroup({
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  send(): any {
    console.log(this.user.value);
    this.UsersService.addUser(this.user.value);
    
    
    this.checkCheckbox();

    // TODO Rediriguir al login

  }

  login(): any {

    console.log(JSON.stringify(this.loginForm.value));
    this.UsersService.login(this.loginForm.value).subscribe((resp: any) => {
      console.log(resp);

      // Almacena el Acces Token en el Local Storage
      localStorage.setItem('access_token', resp.access_token);
   
      this.token = resp.access_token;
     
      this.router.navigate(['']);
      
    });
  }
  
  checkCheckbox() {
    // TODO hacer que cambie el check entre registro y login
    this.regLog = false;
  }

  ngOnInit(): void {}
}
