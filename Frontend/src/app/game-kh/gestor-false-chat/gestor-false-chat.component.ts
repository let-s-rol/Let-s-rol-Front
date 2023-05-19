
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from '../../inferfaces/fullCharacter';

@Component({
  selector: 'app-gestor-false-chat',
  templateUrl: './gestor-false-chat.component.html',
  styleUrls: ['./gestor-false-chat.component.css']
})
export class GestorFalseChatComponent implements OnInit {
  userMessages: string[] = [];
  userInput: string = ''; // Initialize the userInput property
  character!: FullCharacter[];

    constructor(
    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }

  saveUserMessage() {
    if (this.character && this.character.length > 0) {
      const characterName = this.character[0].name;
  
  +
      this.userMessages.push(this.userInput);
    }
  
    this.userInput = ''; // Clear the userInput after saving the message
  }
  
  
  
  
  ngOnInit(): void {

        //GUARDA EN UNA VARIABLE LA ID DE LA RUN QUE ESTÁ EN LA URL
        this.route.params.subscribe((params) => {
          let id = Number.parseInt(params['id']);
          if (Number.isNaN(id)) {
            console.error('Invalid id:', params['id']);
            return;
          }
    

    console.log('ID from route params:', id);
    this.CompleteRunManagamentService.getCharacterTable(id).subscribe(
      (response: FullCharacter[]) => {
        this.character = response;
        console.log('Character: ', this.character);
 
      }
    );
  }
)};

}

