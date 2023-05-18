import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from '../../inferfaces/fullCharacter';

@Component({
  selector: 'app-new-character-pannel',
  templateUrl: './new-character-pannel.component.html',
  styleUrls: ['./new-character-pannel.component.css'],
})
export class NewCharacterPannelComponent implements OnInit {
  [x: string]: any;

  token: any = 'token';
  binding: any = false;
  character: FormGroup;
  regLog = false;
  baseCharacter!: FullCharacter[];

  selectedOption: any;
  name: string = '';
  race: string = '';
  description: string = '';

  constructor(
    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.character = new FormGroup({
      name: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }



  checkCheckbox() {
    // TODO hacer que cambie el check entre registro y login
    this.regLog = false;
  }

  ngOnInit(): void {
    //GET DE BASE CHARACTERS
    this.CompleteRunManagamentService.getBaseCharacters().subscribe(
      (response: FullCharacter[]) => {
        this.baseCharacter = response;
        console.log('Personajes Base: ', this.baseCharacter);
        console.log('Personajes Base Nombre: ', this.baseCharacter[0].name);
      }
    );
  }
  actualizarValores(event: any) {

console.log(event.target.value);

    let seleccionado = this.baseCharacter.find(
      (opcionSeleccionada) => opcionSeleccionada === opcionSeleccionada
    );

    console.log(seleccionado);
    

    if (seleccionado) {
      this.name = seleccionado.name;
      this.race = seleccionado.race;
      this.description = seleccionado.description;
      console.log(this.name, this.race, this.description);
    } else {
      this.name = '';
      this.race = '';
      this.description = '';
      console.log('No se encontró ninguna opción con el nombre seleccionado.');
    }
  }

  send(): any {

    let URLid: number = 0;

            //GUARDA EN UNA VARIABLE LA ID DE LA RUN QUE ESTÁ EN LA URL
            this.route.params.subscribe((params) => {
              let URLid = Number.parseInt(params['id']);
              if (Number.isNaN(URLid)) {
                console.error('Invalid id:', params['id']);
                return;
              }
              

    this.CompleteRunManagamentService.addFullCharacter(this.character.value, URLid)
    console.log('Id por URL', URLid);
  });
    
  }
}
