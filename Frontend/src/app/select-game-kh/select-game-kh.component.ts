import { Component, OnInit } from '@angular/core';
import { Run } from '../inferfaces/run';

@Component({
  selector: 'app-select-game-kh',
  templateUrl: './select-game-kh.component.html',
  styleUrls: ['./select-game-kh.component.css'],
})
export class SelectGameKHComponent implements OnInit {
  cards: Run[];

  constructor() {
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

  ngOnInit(): void {}
}
