
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from'../../../inferfaces/fullCharacter';
import { cards } from 'src/app/inferfaces/cards';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  inventory!:any [];
  character!: FullCharacter[];


  constructor(
    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

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

          this.CompleteRunManagamentService.getInventory(this.character[0].id_player_character, id).subscribe(
            (response: any) => {
              this.inventory = response.inventory;
              console.log('Inventory:', this.inventory);
            },
            (error: any) => {
              console.error('Error:', error);
            }
                  );

        })}
  
    )};


    
  
  }

  
