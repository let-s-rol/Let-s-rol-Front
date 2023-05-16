import { Component, OnInit } from '@angular/core';
import { Run } from '../../inferfaces/run';
import { WantToEnterRankingServiceService } from '../../want-to-enter-ranking-service.service'

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.css'],
})
export class RunListComponent implements OnInit {
  rute: string = '../../assets/runCards/hollowed-boxes (';
  name: string = 'nombre';

  NewImg: string = this.rute + this.getRandomInt() + ').svg';

  runs!: Run [];

  constructor( private wantToEnterRankingService: WantToEnterRankingServiceService) {
    
  }

  getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  ngOnInit(): void {


  }
}
