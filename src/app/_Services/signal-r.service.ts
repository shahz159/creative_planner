// signalr.service.ts
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { ApiurlService } from './apiurl.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor(private http: HttpClient, private commonUrl: ApiurlService) { 
  }
  private hubConnection: signalR.HubConnection;
  readonly rootUrl = this.commonUrl.signalUrl;
  
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('http://localhost:1221/signalr')
    .configureLogging(signalR.LogLevel.Information)
    .build();

this.hubConnection.start().then(() => {
    console.log('Connection started');
}).catch((err) => {
    console.error('Error while establishing connection: ' + err);
});
 }

  public send = (name: string, message: string) => {
    this.hubConnection.invoke('Send', name, message)
      .catch(err => console.error(err));
  }

  public addBroadcastMessageListener = (onBroadcastMessage: (name: string, message: string) => void) => {
    this.hubConnection.on('broadcastMessage', onBroadcastMessage);
  }
}
