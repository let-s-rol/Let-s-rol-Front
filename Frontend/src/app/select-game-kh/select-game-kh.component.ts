import { Component, OnInit } from '@angular/core';
import { Run } from '../inferfaces/run';

@Component({
  selector: 'app-select-game-kh',
  templateUrl: './select-game-kh.component.html',
  styleUrls: ['./select-game-kh.component.css']
})
export class SelectGameKHComponent implements OnInit {

  cards: Run[];

    constructor() {
      const UserJSON: string = `{
        "runs": [{ 
  
           000000
  
        } 
      ]
        }`;
  
      const userDict: any = JSON.parse(UserJSON);
      this.cards = userDict['runs'];
    }

    
    
   

  ngOnInit(): void {
  }

}
