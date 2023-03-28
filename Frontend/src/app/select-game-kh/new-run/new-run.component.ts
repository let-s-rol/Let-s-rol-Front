import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharactersService } from 'src/app/service/character/characters.service';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css']
})
export class NewRunComponent implements OnInit {

  newRun: FormGroup;

  constructor(public router: Router, private CharactersService: CharactersService) {
    this.newRun = new FormGroup({

      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', []),

    });

  }
  save(): any {

    console.log(this.newRun.value);
    // TODO llamar a la función para enviar las cosas
   // this.CharactersService.newRun(this.newRun.value);

    // TODO Rediriguir al menu de juego
  }

  ngOnInit(): void {
  }

}
