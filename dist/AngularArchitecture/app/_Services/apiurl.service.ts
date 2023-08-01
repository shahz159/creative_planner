import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiurlService {
  baseUrl = environment.baseUrl;
  constructor() { }
  readonly apiurl = this.baseUrl;
}
