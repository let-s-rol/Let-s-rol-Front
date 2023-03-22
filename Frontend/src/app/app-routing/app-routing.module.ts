import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';

import { RegisterComponent } from '../register/register.component';
import { SelectGameKHComponent } from '../select-game-kh/select-game-kh.component';
import { CharacterBaseComponent } from '../character-base/character-base.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'selectGame', component: SelectGameKHComponent},
  { path: 'baseCharacter', component: CharacterBaseComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {



}


