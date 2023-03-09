import { Component, OnInit } from '@angular/core';
import { GameCards } from '../inferfaces/GameCards';

@Component({
  selector: 'app-game-card-button',
  templateUrl: './game-card-button.component.html',
  styleUrls: ['./game-card-button.component.css'],
})
export class GameCardButtonComponent implements OnInit {
  cards: GameCards[];


  constructor() {
    const UserJSON: string = `{
      "gameCards": [{ 

        "name":"kingdom Hearts",

        "bg":"https://imgs.search.brave.com/kEUdx-VW5WT7RDeeCbMgVAT6sX4lsqgHajSc60zl4uY/rs:fit:1200:1200:1/g:ce/aHR0cDovL2Nkbi53/YWxscGFwZXJzYWZh/cmkuY29tLzk0LzMv/WTdWNGwwLmpwZw",

        "img":"https://imgs.search.brave.com/Wt2sdEpSRr9rzDciZmT6BA3C5PkUg2sQSuAdemfr350/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NjctNTY3NzAy/MV9raW5nZG9tLWhl/YXJ0cy0xLWFydHdv/cmstY2xpcGFydC5w/bmc"

      },{ 

        "name":"Dungeon & Dragons",

        "bg":"https://i.pinimg.com/736x/2b/b0/62/2bb06297906fd0759245abbca5168173.jpg",

        "img":"https://cdn.pixabay.com/photo/2021/01/28/14/47/druid-5958196_1280.png",
        "height":"20px"

      } ,{ 

        "name":"Dungeon & Dragons",

        "bg":"https://i.pinimg.com/736x/2b/b0/62/2bb06297906fd0759245abbca5168173.jpg",

        "img":"https://cdn.pixabay.com/photo/2021/01/28/14/47/druid-5958196_1280.png",
        "height":"20px"

      } 
    ]
      }`;

    const userDict: any = JSON.parse(UserJSON);
    this.cards = userDict['gameCards'];
  }

  ngOnInit(): void {}
}
