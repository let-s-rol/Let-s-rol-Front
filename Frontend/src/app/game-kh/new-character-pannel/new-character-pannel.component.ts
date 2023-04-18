import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-character-pannel',
  templateUrl: './new-character-pannel.component.html',
  styleUrls: ['./new-character-pannel.component.css']
})
export class NewCharacterPannelComponent implements OnInit {
  [x: string]: any;

  token: any = "token";
  binding: any = false;
  user: FormGroup;
  loginForm: FormGroup;
  regLog = false;



  constructor(public router: Router) {
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
   
  }

  login(): any {

  }

  checkCheckbox() {
    // TODO hacer que cambie el check entre registro y login
    this.regLog = false;
  }

  ngOnInit(): void {}
}
