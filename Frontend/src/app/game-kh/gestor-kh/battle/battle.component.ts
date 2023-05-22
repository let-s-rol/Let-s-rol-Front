import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from 'src/app/inferfaces/fullCharacter';
import { Renderer2 } from '@angular/core';


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
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2

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


  atacarMonstruo(card_type:any, id:number, lvl:number) {

  
console.log("Carta Tipo: ", card_type);
console.log("Carta Id: ", id);
console.log("Carta LVL: ", lvl);
const monsterCard = Math.random();
const index = this.deck.findIndex(deck => deck.id === id);

if(index !== -1) {
this.deck.splice(index, 1);
}




    const enemyImage = document.querySelector('.enemy-image') as HTMLElement;
    if (enemyImage) {
      enemyImage.classList.add('tremble');
      setTimeout(() => {
        enemyImage.classList.remove('tremble');
      }, 200); // Adjust the duration of the animation
    }

    if (card_type === "llavespada" && monsterCard < lvl) {
      const damage = this.character[0].player_str;
      const monster = this.enemies[0]; // Assuming there's only one monster
    
      monster.life -= damage;

    } else if (card_type === "hechizo" && monsterCard < lvl) {
      const damage = this.character[0].player_mag;
      const monster = this.enemies[0]; // Assuming there's only one monster
    
      monster.life -= damage;

    } else {

      const enemyImageDefense = document.querySelector('.enemy-image') as HTMLElement;
      if (enemyImageDefense) {
        enemyImage.classList.add('glow');
        setTimeout(() => {
          enemyImageDefense.classList.remove('glow');
        }, 1000); // Adjust the duration of the animation
      }

    }

    const damageMonster = this.enemies[0].strength;
    //const charcaterLife = this.character[0].player_hp; // Assuming there's only one monster
  
   this.completeRunManagamentService.reduceCharacterLife(damageMonster);

    

  }
  


}
