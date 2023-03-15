import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

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

    this.service.logout();
    w.location.reload();
  }

  ngOnInit(): void {}
}
