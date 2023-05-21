import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from '../../inferfaces/fullCharacter';

@Component({
  selector: 'app-show-character-info',
  templateUrl: './show-character-info.component.html',
  styleUrls: ['./show-character-info.component.css'],
})
export class ShowCharacterInfoComponent implements OnInit {
  character!: FullCharacter[];

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
        }
      );
    });
  }
}
