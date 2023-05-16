import { Component, OnInit } from '@angular/core';
import { Run } from '../inferfaces/run';
import { WantToEnterRankingServiceService } from '../want-to-enter-ranking-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-game-kh',
  templateUrl: './select-game-kh.component.html',
  styleUrls: ['./select-game-kh.component.css'],
})
export class SelectGameKHComponent implements OnInit {
  cards: Run[];
  runs!: Run [];
  sendCode: FormGroup;

  constructor(
    private wantToEnterRankingService: WantToEnterRankingServiceService
  ) {
    this.sendCode = new FormGroup({
      run_password: new FormControl('', []),
    });
    const UserJSON: string = `{
        "runs": [
          { 

            "name" : "panas",
            "id" : "001", 
            "idGame" : "001",
           "description": "una gean Partida con illojuan"

        } ,

          { 

            "name" : "xavi te falta calle",
            "id" : "002", 
            "idGame" : "001",
           "description": "una gean Partida con illojuan"

        } ,
          { 

            "name" : "albino",
            "id" : "003", 
            "idGame" : "001",
           "description": "una gean Partida con illojuan"

        } 

      ]
        }`;

    const userDict: any = JSON.parse(UserJSON);
    this.cards = userDict['runs'];
  }
  searchNewRanking() {
    console.log(this.sendCode.value);
    const code = this.sendCode.value;
    this.wantToEnterRankingService.sendCode(this.sendCode.value);
  }

  ngOnInit(): void {

    this.wantToEnterRankingService.getRuns().subscribe(
      (response: Run[]) => {
        this.runs = response;
        console.log(response);
    
      }
    );
  }
}
