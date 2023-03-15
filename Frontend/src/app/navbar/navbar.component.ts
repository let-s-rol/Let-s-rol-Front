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
  log: boolean = true;

  constructor(public router: Router, service: UsersService) {
    this.log = service.isAuthenticated();
  }

  logout(service: UsersService) {
    service.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}
