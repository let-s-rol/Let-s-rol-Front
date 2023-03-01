import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { GameCardButtonComponent } from './game-card-button/game-card-button.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { AbautUSComponent } from './abaut-us/abaut-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    UserPanelComponent,
    ChangeInfoComponent,
    StudentMenuComponent,
    GameCardButtonComponent,
    NavLinksComponent,
    AbautUSComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
