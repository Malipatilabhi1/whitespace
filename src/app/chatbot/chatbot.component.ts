import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  userInput: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
widgetVisible = false;
toggleWidgetVisibility(){
  this.widgetVisible = !this.widgetVisible;
}
sendMessage() {
  const requestBody = {
    text: this.userInput
  };

  this.http.post<any>('http://localhost:5000/dialogflow/rest/text', requestBody)
    .subscribe(response => {
      const result = response.text;
      // Process the result and update the chat messages
      // You can append the result to the chat-messages div
    });
}
}
