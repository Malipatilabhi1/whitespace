import { Component } from '@angular/core';

interface Message {
  content: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: Message[] = [];
  userMessage = '';

  sendMessage(): void {
    if (this.userMessage.trim() === '') {
      return;
    }

    this.messages.push({ content: this.userMessage, sender: 'user' });

    // Simulate bot response
    setTimeout(() => {
      this.messages.push({ content: 'This is a bot response.', sender: 'bot' });
    }, 500);

    this.userMessage = '';
  }
}
