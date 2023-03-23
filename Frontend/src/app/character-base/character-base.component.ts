import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import {CharactersService} from '../characters.service';
import { BaseCharacter } from '../inferfaces/baseCharacter';

@Component({
  selector: 'app-character-base',
  templateUrl: './character-base.component.html',
  styleUrls: ['./character-base.component.css'],
})
export class CharacterBaseComponent implements OnInit {
  baseCharacter: FormGroup;

  constructor(public router: Router, private CharactersService: CharactersService) {
    this.baseCharacter = new FormGroup({
      race: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', []),
      img: new FormControl('', []),
    });

  }
  send(): any {
    
    console.log(this.baseCharacter.value);
    // TODO llamar a la función para enviar las cosas
    this.CharactersService.addBaseCharacter(this.baseCharacter.value);

    // TODO Rediriguir al menu de juego
  }


  ngOnInit(): void {}
}
