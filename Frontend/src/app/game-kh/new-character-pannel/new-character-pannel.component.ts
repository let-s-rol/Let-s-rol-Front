
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from '../../service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from '../../inferfaces/fullCharacter';


@Component({
  selector: 'app-new-character-pannel',
  templateUrl: './new-character-pannel.component.html',
  styleUrls: ['./new-character-pannel.component.css']
})
export class NewCharacterPannelComponent implements OnInit {
  [x: string]: any;

  token: any = "token";
  binding: any = false;
  user: FormGroup;
  loginForm: FormGroup;
  regLog = false;
  baseCharacter!: FullCharacter[];


  constructor(    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) {
    this.user = new FormGroup({
      nick: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  send(): any {
   
  }

  login(): any {

  }

  checkCheckbox() {
    // TODO hacer que cambie el check entre registro y login
    this.regLog = false;
  }

  ngOnInit(): void {

       //GET DE BASE CHARACTERS
       this.CompleteRunManagamentService.getBaseCharacters().subscribe(
        (response: FullCharacter[]) => {
          this.baseCharacter = response;
          console.log('Personajes Base: ', this.baseCharacter);
          console.log('Personajes Base Nombre: ', this.baseCharacter[0].name);
        });
  }
}
