
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
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
  character: FormGroup;
  regLog = false;
  baseCharacter!: FullCharacter[];



  constructor(    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
    ) {
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
