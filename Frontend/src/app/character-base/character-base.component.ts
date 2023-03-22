import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseCharacter } from '../inferfaces/baseCharacter';

@Component({
  selector: 'app-character-base',
  templateUrl: './character-base.component.html',
  styleUrls: ['./character-base.component.css'],
})
export class CharacterBaseComponent implements OnInit {
  newCharacterBase!: BaseCharacter;

  constructor() {
    this.newCharacterBase = new FormGroup({
      nick: new FormControl(null, Validators.required),
      race: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      img: new FormControl(null, Validators.required)
    });

  }

  ngOnInit(): void {}
  save() {}
}
