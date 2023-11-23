import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LinkDTO } from '../_Models/link-dto';
import { ApiurlService } from './apiurl.service';
import { AttachmentsDTO } from "../_Models/attachments-dto";

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  ObjLinkDTO: LinkDTO;
  ObjAttachmentsDTO:AttachmentsDTO;

  readonly DMS_URL = "https://cswebapps.com/dmsapi/api/";

  constructor(private http: HttpClient, private commonUrl: ApiurlService) {
    this.ObjLinkDTO = new LinkDTO();
    this.ObjAttachmentsDTO=new AttachmentsDTO();
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
    this.ObjLinkDTO.Project_Code = projectCode;
    // url console.log(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode",'ggggggggggggggggggg')
    // body console.log(this.ObjLinkDTO,"ggggggggggggggggg")
    return this.http.post(this.rootUrl + "ApplicationLinkAPI/NewGetOnlyMemoIdsByProjectCode", this.ObjLinkDTO);
    
  }
  _GetMemosSubject(JsonString) {
    //console.log("Sending JsonFormat----->",JsonString);
    this.ObjLinkDTO.MemosJSON = JsonString;
   // console.log("ObjLinkDTO----->",this.ObjLinkDTO);
    //let Url="https://cswebapps.com/dmsapi/api/LatestCommunicationAPI/NewGetMemosSubject"
    return this.http.post(this.DMS_URL + "LatestCommunicationAPI/NewGetMemosSubject", this.ObjLinkDTO);
  }
  
  _GetAttachments(EmpNo,ProjCode,ProjBlock){
    this.ObjAttachmentsDTO.EmpNo=EmpNo;
    this.ObjAttachmentsDTO.ProjectCode=ProjCode;
    this.ObjAttachmentsDTO.ProjectType=ProjBlock;
    return this.http.post(this.rootUrl+"Notification/NewGetAttachmentsFiles",this.ObjAttachmentsDTO);
  }



  GetAttachements(EmpNo,ProjCode,sorttype){  
    this.ObjAttachmentsDTO.EmpNo=EmpNo
    this.ObjAttachmentsDTO.ProjectCode=ProjCode;
    this.ObjAttachmentsDTO.sorttype=sorttype;

    return this.http.post(this.rootUrl+"Notification/NewGetProjectFiles",this.ObjAttachmentsDTO);
  }

}
