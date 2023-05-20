
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from'../../../inferfaces/fullCharacter';
import { cards } from 'src/app/inferfaces/cards';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  character!: FullCharacter[];
  message!: string;

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

        })}
  
    )};


    compra(tipo: string) {

      this.route.params.subscribe((params) => {
        let id = Number.parseInt(params['id']);
        if (Number.isNaN(id)) {
          console.error('Invalid id:', params['id']);
          return;
        }
     
      
      // Aquí puedes agregar la lógica para procesar la compra del objeto
      // Puedes utilizar el nombre del objeto para realizar operaciones específicas
      console.log(`Has comprado el objeto: ${tipo}`);

      this.message = this.character[0].name + " ha comprado un pack del tipo " + tipo;

      console.log(this.message);
      
  
      this.CompleteRunManagamentService.buyCardPack(this.character[0].id_player_character, tipo);
      this.CompleteRunManagamentService.saveMessage(id, this.message)
  
      });
    }
  }


