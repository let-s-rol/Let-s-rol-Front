import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { GameCardButtonComponent } from './game-card-button/game-card-button.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { SlectGameComponent } from './slect-game/slect-game.component';
import { SeachGameKHComponent } from './seach-game-kh/seach-game-kh.component';
import { SelectGameKHComponent } from './select-game-kh/select-game-kh.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    ChangeInfoComponent,
    GameCardButtonComponent,
    NavLinksComponent,
    AboutUSComponent,
    SlectGameComponent,
    SeachGameKHComponent,
    SelectGameKHComponent,
 
    
  ],
  imports: [BrowserModule, HttpClientModule ,ReactiveFormsModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
