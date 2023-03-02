import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  user: FormGroup;

  constructor(public router: Router, private UsersService: UsersService) {
    this.user = new FormGroup({
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
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

    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
