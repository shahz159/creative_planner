import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
}) 
export class ApiurlService {
  baseUrl = environment.baseUrl;
  baseurlcore = environment.baseUrlCore;
  NewbaseUrl= environment.NewbaseUrl;
  readonly apiurlNew=this.NewbaseUrl;
  // signalUrl = environment.SignalUrl;
  constructor() { }
  readonly apiurl = this.baseUrl;
  readonly apiurlcore=this.baseurlcore;
}
