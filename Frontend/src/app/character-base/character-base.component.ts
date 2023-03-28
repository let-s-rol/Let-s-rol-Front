import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharactersService } from '../service/character/characters.service';


@Component({
  selector: 'app-character-base',
  templateUrl: './character-base.component.html',
  styleUrls: ['./character-base.component.css'],
})
export class CharacterBaseComponent implements OnInit {
  baseCharacter: FormGroup;

  constructor(public router: Router, private CharactersService: CharactersService) {
    this.baseCharacter = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      race: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', []),
      img: new FormControl('', []),
    });

  }
  save(): any {

    console.log(JSON.stringify(this.baseCharacter.value));
    // TODO llamar a la función para enviar las cosas
    this.CharactersService.addBaseCharacter(this.baseCharacter.value);

    // TODO Rediriguir al menu de juego
  }


  ngOnInit(): void {}
}
