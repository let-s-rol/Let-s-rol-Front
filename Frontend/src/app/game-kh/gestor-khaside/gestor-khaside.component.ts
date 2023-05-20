
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestor-khaside',
  templateUrl: './gestor-khaside.component.html',
  styleUrls: ['./gestor-khaside.component.css']
})
export class GestorKHasideComponent implements OnInit {
  


  messages!: any[];


  constructor(    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      let id = Number.parseInt(params['id']);
      if (Number.isNaN(id)) {
        console.error('Invalid id:', params['id']);
        return;
      }

      //GET CON EL CONTENIDO DEL PERSONAJE COMPLETO
      console.log('ID from route params:', id);
      this.CompleteRunManagamentService.getMessages(id)
      .then((response: any[]) => {
        this.messages = response;
        console.log('Messages: ', this.messages);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  });
}

}
