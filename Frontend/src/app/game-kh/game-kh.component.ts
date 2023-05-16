import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from '../service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from '../inferfaces/fullCharacter';

@Component({
  selector: 'app-game-kh',
  templateUrl: './game-kh.component.html',
  styleUrls: ['./game-kh.component.css']
})
export class GameKhComponent implements OnInit {

// TODO hacer enlace
  createCharacter : boolean = false
  constructor(
    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  FullCharacter!: FullCharacter [];

  ngOnInit(): void {

             // Obtiene el ranking de estudiantes del servidor a través del servicio InputService/StudentRankingManagament
             this.route.params.subscribe((params) => {
              let id = Number.parseInt(params['id']);
              if (Number.isNaN(id)) {
                console.error('Invalid id:', params['id']);
                return;
              }
              console.log('ID from route params:', id);
              this.CompleteRunManagamentService.getCharacterTable(id).subscribe((response: FullCharacter[]) => {
                this.FullCharacter = response;
              });
            });
    

  }

  proofCharacterExist() {

  
 


}
}
