import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestor-false-chat',
  templateUrl: './gestor-false-chat.component.html',
  styleUrls: ['./gestor-false-chat.component.css']
})
export class GestorFalseChatComponent implements OnInit {
  userMessages: string[] = [];
  userInput: string = ''; // Initialize the userInput property

  saveUserMessage() {
    this.userMessages.push(this.userInput);
    this.userInput = ''; // Clear the userInput after saving the message
  }

  ngOnInit(): void {
  }
}
