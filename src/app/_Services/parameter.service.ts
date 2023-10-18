import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ShareDto } from "../_Models/share-dto";

@Injectable({
  providedIn: 'root'
})
export class ParameterService {
  message: string;
  private shareMessage = new BehaviorSubject("Empty Message");
  newMessage = this.shareMessage.asObservable();
  constructor() { this.objShareDTO = new ShareDto; }
  projectCode: string;
  loadComponent: boolean;

  objShareDTO: ShareDto;
  Sharemethod(pCode, loadComponent) {
    debugger
    alert("Service---->" + pCode + " " + loadComponent);
    this.projectCode = pCode;
    this.loadComponent = loadComponent;
    console.log("Service------->", this.projectCode, this.loadComponent);
    return this.objShareDTO;
  }
}
