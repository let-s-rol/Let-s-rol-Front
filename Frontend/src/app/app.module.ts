import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { GameKhComponent } from './game-kh/game-kh.component';
import { NewCharacterPannelComponent } from './game-kh/new-character-pannel/new-character-pannel.component';
import { ChatComponent } from './game-kh/chat/chat.component';
import { GestorKHComponent } from './game-kh/gestor-kh/gestor-kh.component';
import { GestorKHNavComponent } from './game-kh/gestor-khnav/gestor-khnav.component';
import { GestorKHasideComponent } from './game-kh/gestor-khaside/gestor-khaside.component';
import { ShowCharacterInfoComponent } from './game-kh/show-character-info/show-character-info.component';
import { ShowCharacterInfoLeftComponent } from './game-kh/show-character-info-left/show-character-info-left.component';
import { GestorFalseChatComponent } from './game-kh/gestor-false-chat/gestor-false-chat.component';
import { NavbarGestorKhComponent } from './game-kh/gestor-kh/navbar-gestor-kh/navbar-gestor-kh.component'; //este
import { BattleComponent } from './game-kh/gestor-kh/battle/battle.component';
import { BagComponent } from './game-kh/gestor-kh/bag/bag.component';
import { ShopComponent } from './game-kh/gestor-kh/shop/shop.component';



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
    GameKhComponent,
    NewCharacterPannelComponent,
    ChatComponent,
    GestorKHComponent,
    GestorKHNavComponent,
    GestorKHasideComponent,
    ShowCharacterInfoComponent,
    ShowCharacterInfoLeftComponent,
    GestorFalseChatComponent,
    NavbarGestorKhComponent,
    BattleComponent,
    BagComponent,
    ShopComponent

  ],
  imports: [BrowserModule, HttpClientModule ,ReactiveFormsModule, AppRoutingModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
