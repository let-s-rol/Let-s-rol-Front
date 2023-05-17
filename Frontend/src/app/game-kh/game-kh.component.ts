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
  
  characterName!:string;

  constructor(
    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Obtiene el ranking de estudiantes del servidor a través del servicio InputService/StudentRankingManagament
    this.route.params.subscribe((params) => {
      let id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        console.error('Invalid id:', params['id']);
        return;
      }
      console.log('ID from route params:', id);
      this.CompleteRunManagamentService.getCharacterTable(id).subscribe(
        (response: FullCharacter[]) => {
          this.character = response;
          console.log('Character: ', this.character);
          console.log('Name', this.character[0].name);
          
          if (this.character[0] && this.character[0].name !== null && this.character[0].name !== undefined) {
            console.log('El Nombre:', this.character[0].name);
            this.createCharacter = false;
          } else {
            console.log('Name property does not exist or has null/undefined value');
          }
        }
      );
    });


    this.CompleteRunManagamentService.getBaseCharacters().subscribe(
      (response: FullCharacter[]) => {
        this.baseCharacter = response;
        console.log('Personajes Base: ', this.baseCharacter);
        console.log('Personajes Base Nombre: ', this.baseCharacter[0].name);
      });


      



  }

  proofCharacterExist() {}
}
