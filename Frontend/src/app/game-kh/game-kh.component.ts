import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from '../service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from '../inferfaces/fullCharacter';

@Component({
  selector: 'app-game-kh',
  templateUrl: './game-kh.component.html',
  styleUrls: ['./game-kh.component.css'],
})
export class GameKhComponent implements OnInit {
  // TODO hacer enlace
  createCharacter: boolean = true;
  character!: FullCharacter[];
  baseCharacter!: FullCharacter[];

  characterName!: string;

  constructor(
    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //GUARDA EN UNA VARIABLE LA ID DE LA RUN QUE ESTÁ EN LA URL
    this.route.params.subscribe((params) => {
      let id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        console.error('Invalid id:', params['id']);
        return;
      }

      //GET CON EL CONTENIDO DEL PERSONAJE COMPLETO
      console.log('ID from route params:', id);
      this.CompleteRunManagamentService.getCharacterTable(id).subscribe(
        (response: FullCharacter[]) => {
          this.character = response;
          console.log('Character: ', this.character);
          if (
            this.character[0] &&
            this.character[0].name !== null &&
            this.character[0].name !== undefined
          ) {
            console.log('El Nombre:', this.character[0].name);
            this.createCharacter = false;
          } else {
            console.log(
              'Name property does not exist or has null/undefined value'
            );
          }
        }
      );
    });
  }
}
