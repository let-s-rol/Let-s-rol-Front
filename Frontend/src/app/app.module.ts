import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GameCardButtonComponent } from './home/game-card-button/game-card-button.component';
import { AboutUSComponent } from './home/about-us/about-us.component';


import { SelectGameKHComponent } from './select-game-kh/select-game-kh.component';
import { OptionGameSearchListComponent } from './select-game-kh/option-game-search-list/option-game-search-list.component';
import { RunListComponent } from './select-game-kh/run-list/run-list.component';
import { CharacterBaseComponent } from './character-base/character-base.component';
import { NavLinkSonComponent } from './navbar/nav-link-son/nav-link-son.component';
import { NewRunComponent } from './select-game-kh/new-run/new-run.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    GameCardButtonComponent,
    AboutUSComponent,
    SelectGameKHComponent,
    OptionGameSearchListComponent,
    RunListComponent,
    CharacterBaseComponent,
    NavLinkSonComponent,
    NewRunComponent,

  ],
  imports: [BrowserModule, HttpClientModule ,ReactiveFormsModule, AppRoutingModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
