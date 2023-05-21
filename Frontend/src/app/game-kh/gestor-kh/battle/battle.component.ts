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
    life: 50,
    strength: 5,
    agility: 3
  },
  {
    name: "Sombra 2",
    imagePath: "../../../../assets/gameCards/Shadow_Card.png",
    life: 50,
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
}
