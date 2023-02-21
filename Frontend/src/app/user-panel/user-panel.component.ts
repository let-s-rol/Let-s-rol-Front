import { Component, OnInit } from '@angular/core';
import { UsersList } from '../inferfaces/UsersList';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'],
})
export class UserPanelComponent implements OnInit {
  userId: number = 1;
  usersList!: UsersList[];
  constructor() {
    // TODO:recoger usuario desde el Laravel al logear
    const UserJSON: string = `{
      "users": [{
      "id":"1",
      "name":"Manolo",
      "lastName":"Rodriguez",
      "email":"manolor@correo.com",
      "date":"14/12/1999",
      "rol":"student"
      }
    ]
      }`;

    const userDict: any = JSON.parse(UserJSON);
    this.usersList = userDict['users'];
  }

  ngOnInit(): void {
    console.log(this.usersList);
  }
}


