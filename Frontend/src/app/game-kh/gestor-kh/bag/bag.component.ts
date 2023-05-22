import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompleteRunManagamentService } from 'src/app/service/complete-run-managament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FullCharacter } from '../../../inferfaces/fullCharacter';
import { cards } from 'src/app/inferfaces/cards';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css'],
})
export class BagComponent implements OnInit {
  inventory!: any[];
  character!: FullCharacter[];
  id!: number;

  constructor(
    private CompleteRunManagamentService: CompleteRunManagamentService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number.parseInt(params['id']);
      if (Number.isNaN(this.id)) {
        console.error('Invalid id:', params['id']);
        return;
      }

      console.log('ID from route params:', this.id);
      this.CompleteRunManagamentService.getCharacterTable(this.id).subscribe(
        (response: FullCharacter[]) => {
          this.character = response;
          console.log('Character:', this.character);

          this.fetchInventoryData();
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    });
  }

  fetchInventoryData(): void {
    this.CompleteRunManagamentService.getInventory(
      this.character[0].id_player_character,
      this.id
    ).subscribe(
      (response: any) => {
        this.inventory = response.inventory;
        console.log('Inventory:', this.inventory);
        this.cdr.detectChanges(); // Detect changes after receiving inventory data
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  markAsDeck(idCardInventory: number): void {
    this.CompleteRunManagamentService.markAsDeck(idCardInventory)
      .then(() => {
        console.log('Card marked as deck successfully');
        // Perform any additional actions if needed
        this.fetchInventoryData(); // Update the inventory data after marking the card as deck
      })
      .catch((error) => {
        console.error('Error marking card as deck:', error);
      });
  }
}
