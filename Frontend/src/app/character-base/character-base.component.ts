import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { BaseCharacter } from '../inferfaces/baseCharacter';

@Component({
  selector: 'app-character-base',
  templateUrl: './character-base.component.html',
  styleUrls: ['./character-base.component.css'],
})
export class CharacterBaseComponent implements OnInit {
  baseCharacter: FormGroup;

  constructor(public router: Router, private UsersService: UsersService) {
    this.baseCharacter = new FormGroup({
      race: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', []),
      img: new FormControl('', []),
    });

  }
  save(): any {
    // console.log(this.baseCharacter.value);

    // TODO llamar a la función para enviar las cosas
    // this.UsersService.addUser(this.user.value);

  

    // TODO Rediriguir al menu de juego
  }


  ngOnInit(): void {}
}
