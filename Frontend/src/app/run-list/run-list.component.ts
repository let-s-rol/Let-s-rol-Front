import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.css'],
})
export class RunListComponent implements OnInit {
  rute: string = '../../assets/runCards/hollowed-boxes (';
  name: string = 'nombre';

  NewImg: string = this.rute + this.getRandomInt() + ').svg';

  constructor() {}

  getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  ngOnInit(): void {}
}
