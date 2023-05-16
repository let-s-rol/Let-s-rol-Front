import { Component, Input, OnInit } from '@angular/core';
import { Run } from '../../inferfaces/run';
import { WantToEnterRankingServiceService } from '../../want-to-enter-ranking-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-run-list',
  templateUrl: './run-list.component.html',
  styleUrls: ['./run-list.component.css'],
})
export class RunListComponent implements OnInit {
  rute: string = '../../assets/runCards/hollowed-boxes (';

  NewImg: string = this.rute + this.getRandomInt() + ').svg';
  @Input() inputValue!: Run;
  name: string = this.inputValue ? this.inputValue.run_name : '-';

  constructor() {}

  getRandomInt() {
    return Math.floor(Math.random() * 10);
  }

  ngOnInit(): void {

    console.log(this.inputValue?.run_name);
    if (this.inputValue) {
      this.name = this.inputValue.run_name;
    }
  }
}
