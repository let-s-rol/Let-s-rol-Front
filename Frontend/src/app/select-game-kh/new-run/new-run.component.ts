import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(public router: Router, private newRunService: newRunService,
  ) {
    this.newRun = new FormGroup({

      run_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      run_description: new FormControl('', []),

    });

  }
  save(): any {

    console.log(this.newRun.value);

    const gameId = 1;
    this.newRunService.addNewRun(this.newRun.value, gameId).then((response: any) => {
      // Handle the response from the backend
      console.log('New run created:', response);

      // Check if the response contains the password field
      if (response.status === 1 && response.msg === '¡Partida creada con éxito!' && response.password) {
        // Show an alert with the password
        alert('Password: ' + response.password);
      }
    })
    .catch(error => {
      // Handle errors, if any
      console.error('Error creating new run:', error);
    });
 
    
  }

  ngOnInit(): void {
  }

}
