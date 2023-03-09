import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { GameCardButtonComponent } from './game-card-button/game-card-button.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { AboutUSComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    UserPanelComponent,
    ChangeInfoComponent,
    StudentMenuComponent,
    GameCardButtonComponent,
    NavLinksComponent,
    AboutUSComponent,
    
  ],
  imports: [BrowserModule, HttpClientModule ,ReactiveFormsModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
