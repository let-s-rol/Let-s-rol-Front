import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newRunService } from 'src/app/service/new-run.service';

@Component({
  selector: 'app-new-run',
  templateUrl: './new-run.component.html',
  styleUrls: ['./new-run.component.css']
})
export class NewRunComponent implements OnInit {

  newRun: FormGroup;

  constructor(public router: Router, private newRunService: newRunService) {
    this.newRun = new FormGroup({

      run_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      run_description: new FormControl('', []),
      run_password: new FormControl('', [Validators.required, Validators.minLength(4)]),

    });

  }
  save(): any {

    console.log(this.newRun.value);

    const gameId = 1;
    this.newRunService.addNewRun(this.newRun.value, gameId)
 
    
  }

  ngOnInit(): void {
  }

}
