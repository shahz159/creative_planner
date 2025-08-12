import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LinkDTO } from '../_Models/link-dto';
import { ApiurlService } from './apiurl.service';
import { AttachmentsDTO } from "../_Models/attachments-dto";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  ObjLinkDTO: LinkDTO;
  ObjAttachmentsDTO: AttachmentsDTO;

  readonly DMS_URL = "https://cswebapps.com/dmsapi/api/";

  constructor(private http: HttpClient, private commonUrl: ApiurlService) {
    this.ObjLinkDTO = new LinkDTO();
    this.ObjAttachmentsDTO = new AttachmentsDTO();
  }
  //readonly DMS_URL = sessionStorage.getItem("_AppUrl");
  //EP Common URL
  readonly rootUrl = this.commonUrl.apiurl;

  GetApplicationDetails() {
    return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetApplication_Details", this.ObjLinkDTO);
  }
  GetMemosByEmployeeCode(CurrentUser) {

    this.ObjLinkDTO.EmployeeCode = CurrentUser;

    return this.http.post(this.DMS_URL + "LatestCommunicationAPI/NewGetMemosByEmployeeCode", this.ObjLinkDTO);
  }
  InsertMemosOn_ProjectCode(projCode, appId, memoId, UserId) {
    // console.log("In Service ---->",projCode,appId,memoId,UserId);
    this.ObjLinkDTO.Project_Code = projCode;
    this.ObjLinkDTO.Application_Id = appId;
    this.ObjLinkDTO.JsonData = memoId;
    this.ObjLinkDTO.Created_By = UserId;
    // console.log("Details Parameters--->",projCode,appId,memoId,UserId);
    return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewInsertMemobyProjectCode", this.ObjLinkDTO);
  }

  _GetOnlyMemoIdsByProjectCode(projectCode) {
    
    const body1 = {
      "userId": "400162",
      "OldPassWord": "Waseem##912"
    };
     
    return this.http.post<any>("https://cswebapps.com/dmscoretestapi/api/Login/StreamLoginAPI", body1, {
      withCredentials: true
    })
      .pipe(map(user => {

        var _json = JSON.parse(user["Data"]["UserId"]);
        const token = user.token;

        const body = {
          UserId: 1780,
          pageSize: 30,
          pageNumber: 1,
          OrderBy: 'DESC',
          OrganizationId: 1020,
          lastCreatedDate: '',
          UnRead: false
        };
        const options = {
          withCredentials: true  // ✅ Enables sending cookies/auth headers
        };
        // url console.log(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode",'ggggggggggggggggggg')
        // body console.log(this.ObjLinkDTO,"ggggggggggggggggg")
        // return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode", this.ObjLinkDTO);
        this.http.post("https://cswebapps.com/dmscoretestapi/api/CommunicationAPI/InboxMailV2", body, { withCredentials: true });

      }));

    // this.ObjLinkDTO.Project_Code = projectCode;
    // debugger
    // const body = {
    //   UserId: 31,
    //   pageSize: 30,
    //   pageNumber: 1,
    //   OrderBy: 'DESC',
    //   OrganizationId: 1016,
    //   lastCreatedDate: '',
    //   UnRead: 0
    // };
    // const options = {
    //   withCredentials: true  // ✅ Enables sending cookies/auth headers
    // };
    // // url console.log(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode",'ggggggggggggggggggg')
    // // body console.log(this.ObjLinkDTO,"ggggggggggggggggg")
    // // return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode", this.ObjLinkDTO);
    // return this.http.post("https://cswebapps.com/dmscoretestapi/api/CommunicationAPI/InboxMailV2", body, { withCredentials: true });


  }
  _GetMemosSubject(JsonString) {

    this.ObjLinkDTO.MemosJSON = JsonString;
    this.ObjLinkDTO.EmployeeCode = localStorage.getItem('EmpNo');
    // console.log("Sending JsonFormat----->",this.ObjLinkDTO.EmployeeCode);
    //  console.log("ObjLinkDTO----->",this.ObjLinkDTO);
    //let Url="https://cswebapps.com/dmsapi/api/LatestCommunicationAPI/NewGetMemosSubject"
    // console.log(  this.ObjLinkDTO,'JsonString')
    return this.http.post(this.DMS_URL + "LatestCommunicationAPI/NewGetMemosSubject", this.ObjLinkDTO);
  }

  _GetAttachments(EmpNo, ProjCode, ProjBlock) {
    this.ObjAttachmentsDTO.EmpNo = EmpNo;
    this.ObjAttachmentsDTO.ProjectCode = ProjCode;
    this.ObjAttachmentsDTO.ProjectType = ProjBlock;
    return this.http.post(this.rootUrl + "Notification/NewGetAttachmentsFiles", this.ObjAttachmentsDTO);
  }



  GetAttachements(EmpNo, ProjCode, sorttype) {
    this.ObjAttachmentsDTO.EmpNo = EmpNo
    this.ObjAttachmentsDTO.ProjectCode = ProjCode;
    this.ObjAttachmentsDTO.sorttype = sorttype;

    return this.http.post(this.rootUrl + "Notification/NewGetProjectFiles", this.ObjAttachmentsDTO);
  }

}
