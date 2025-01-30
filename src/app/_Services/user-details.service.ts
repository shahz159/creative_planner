import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProjecttypeDTO } from '../../app/_Models/projecttype-dto';
import { ApiurlService } from './apiurl.service';
import { UserDetailsDTO } from '../../app/_Models/user-details-dto';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  user_DetailList:UserDetailsDTO[];
  userDTO:UserDetailsDTO;

  constructor(private http: HttpClient, private commonUrl: ApiurlService) { 
    this.userDTO = new UserDetailsDTO();
  }
  readonly rootUrl = this.commonUrl.apiurl;
  NewGetUserDetails(username) {
    debugger
    this.userDTO.UserName = username;
    return this.http.post(this.rootUrl + "TestAPI/NewGetUserDetails", this.userDTO);
      // .subscribe(data => {
      //   this.user_DetailList = data as UserDetailsDTO[];
      // });
  }

}
