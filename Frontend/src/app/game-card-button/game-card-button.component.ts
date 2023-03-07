import { Component, OnInit } from '@angular/core';
import { GameCards } from '../inferfaces/GameCards';

@Component({
  selector: 'app-game-card-button',
  templateUrl: './game-card-button.component.html',
  styleUrls: ['./game-card-button.component.css']
})
export class GameCardButtonComponent implements OnInit {
  usersList: GameCards;

  constructor() {
    const UserJSON: string = `{
      "users": [{ 
      "id":"1",
      "name":"Manolo",
      "lastName":"Rodriguez",
      "email":"manolor@correo.com",
      "date":"14/12/1999",
      "rol":"student",
      "img":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"
      } 
    ]
      }`;

    const userDict: any = JSON.parse(UserJSON);
    this.usersList = userDict['users'];
   }

  ngOnInit(): void {
  }

}
