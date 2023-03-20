import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.css'],
})
export class RunListComponent implements OnInit {
  rute: string = '../../assets/runCards/hollowed-boxes (';
  name: string = 'nombre';
  img: string = '';
  maxFoto: number = 10;
  num: number = 0;
  constructor() {}

  selectImg(): string {
    this.num = this.getRandomInt();
    this.img = this.rute + this.num + ').svg';

    return this.img;
  }
  getRandomInt() {
    return Math.floor(Math.random() * this.maxFoto);
  }

  ngOnInit(): void {}
}
