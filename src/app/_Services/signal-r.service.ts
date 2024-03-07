import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;

  constructor() { 
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://your-server-url/myHub")
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.startConnection();
  }

  private startConnection() {
    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public sendMessage(message: string) {
    this.hubConnection.invoke('SendMessage', message)
      .catch(err => console.error(err));
  }

  public addReceiveMessageListener(callback: (message: string) => void) {
    this.hubConnection.on('ReceiveMessage', callback);
  }
}
