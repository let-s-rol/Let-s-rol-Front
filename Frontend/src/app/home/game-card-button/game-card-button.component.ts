import { Component, OnInit } from '@angular/core';
import { GameCards } from '../../inferfaces/GameCards';

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

        "img_background":"../../assets/gameCards/bg_kh.webp",

        "img_game":"../../assets/gameCards/kh.webp",

        "online":"true"

      }
      ,{

        "name":"Dungeon & Dragons",

        "img_background":"../../assets/gameCards/bg_d&d.webp",

        "img_game":"../../assets/gameCards/d&d.png",

        "online":"false"

      } ,
      {

        "name":"Warhammer 40K",

        "img_background":"../../assets/gameCards/bg_wh40k.webp",

        "img_game":"../../assets/gameCards/wh40k.png",

        "online":"false"

      }
    ]
      }`;

    const userDict: any = JSON.parse(UserJSON);
    this.cards = userDict['gameCards'];
  }

  ngOnInit(): void {}
}
