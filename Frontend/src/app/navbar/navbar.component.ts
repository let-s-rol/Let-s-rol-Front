import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';

import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  log: boolean;
  servze: any;

  constructor(public router: Router, public service: UsersService) {
    this.log = service.isAuthenticated();
    this.servze = service;
  }

  logout() {
    let w = window as any;
    localStorage.removeItem('access_token');
    // w.location.reload();
  }

  ngOnInit(): void {}
}
