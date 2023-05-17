import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-character-pannel',
  templateUrl: './new-character-pannel.component.html',
  styleUrls: ['./new-character-pannel.component.css']
})
export class NewCharacterPannelComponent implements OnInit {
  [x: string]: any;

  token: any = "token";
  binding: any = false;
  character: FormGroup;
  regLog = false;



  constructor(public router: Router) {
    this.character = new FormGroup({
      name: new FormControl('', [Validators.required]),
      race: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),

    });
  }


  send(): any {

  }

  checkCheckbox() {
    // TODO hacer que cambie el check entre registro y login
    this.regLog = false;
  }

  ngOnInit(): void {}
}
