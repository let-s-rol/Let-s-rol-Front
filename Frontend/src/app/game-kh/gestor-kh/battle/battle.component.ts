import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from 'src/app/inferfaces/fullCharacter';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  deck!: any[];

  constructor(
    private completeRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  character!: FullCharacter[];

  enemies: any[] = [
  {
    name: "Sombra",
    imagePath: "../../../../assets/gameCards/Shadow_Card.png",
    // Add more properties as needed
    life: 30,
    strength: 5,
    agility: 3
  },

];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        console.error('Invalid id:', params['id']);
        return;
      }

      console.log('ID from route params:', id);
      this.completeRunManagamentService.getCharacterTable(id).subscribe((response: FullCharacter[]) => {
        this.character = response;
        console.log('Character:', this.character);

        if (this.character.length > 0) {
          this.completeRunManagamentService.getDeck(this.character[0].id_player_character).then((response: any[]) => {
            this.deck = response;
            console.log('Deck:', this.deck);
          }).catch((error) => {
            console.log('Error in getDeck:', error);
          });
        } else {
          console.log('No character found.');
        }
      });
    });
  }


  atacarMonstruo(card_type:any) {

    if (card_type === "llavespada") {
      const damage = this.character[0].player_str;
      const monster = this.enemies[0]; // Assuming there's only one monster
    
      monster.life -= damage;

    } else if (card_type === "hechizo") {
      const damage = this.character[0].player_mag;
      const monster = this.enemies[0]; // Assuming there's only one monster
    
      monster.life -= damage;

    }

    const damageMonster = this.enemies[0].strength;
    //const charcaterLife = this.character[0].player_hp; // Assuming there's only one monster
  
   this.completeRunManagamentService.reduceCharacterLife(damageMonster);

    

  }
  


}
