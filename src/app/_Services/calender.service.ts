import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalenderDTO } from '../_Models/calender-dto';
import { ApiurlService } from './apiurl.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  obj_CalenderDTO: CalenderDTO;

  constructor(private http: HttpClient, private commonUrl: ApiurlService) {
    this.obj_CalenderDTO = new CalenderDTO;
  }
  readonly rootUrl = this.commonUrl.apiurl;
  readonly rootUrlcore = this.commonUrl.apiurlcore;
  
  GetCalenderProjectandsubList(obj: CalenderDTO) {  
    let EmpNo = localStorage.getItem('EmpNo');
    this.obj_CalenderDTO.EmpNo = EmpNo;
    this.obj_CalenderDTO.Project_Code = obj.Project_Code;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetProjectandsubtaskDrp", this.obj_CalenderDTO);

  }


  // starttime:string;
  // min:number;
  // endtime:string;

  GetTimeslabcalender(obj: CalenderDTO){
    this.obj_CalenderDTO.minutes=obj.minutes;
    this.obj_CalenderDTO.StartTime=obj.StartTime;
    this.obj_CalenderDTO.EndTime=obj.EndTime;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGettimeslabs", this.obj_CalenderDTO);
  }

  NewGetScheduledtimejson(obj:CalenderDTO){
    this.obj_CalenderDTO.EmpNo = obj.EmpNo;
    this.obj_CalenderDTO.User_Type=obj.User_Type
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetScheduledtimejson", this.obj_CalenderDTO);
  }


   GetUserTeam(obj:CalenderDTO){
    this.obj_CalenderDTO.EmpNo = obj.EmpNo;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetUserTeam", this.obj_CalenderDTO);
   }



  NewGetPending_request(obj:CalenderDTO){
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetPending_requests1", this.obj_CalenderDTO);
  }



  NewDashboardScheduled(obj:CalenderDTO){
    this.obj_CalenderDTO.EmpNo = localStorage.getItem('EmpNo');
    return this.http.post(this.rootUrl + "CalenderAPI/NewDashboardScheduledjson", this.obj_CalenderDTO);
  }


  async getSasUrl(filePath: string, expiryTime: Date): Promise<string> {
    const expiryTimeString = expiryTime.toISOString(); // Convert to UTC string
    const response = await this.http.get<{ sasUrl: string }>(
      `${this.rootUrlcore}Azure/NewGenerateSASTokenUrl?filePath=${encodeURIComponent(filePath)}&expiryTime=${expiryTimeString}`
    ).toPromise();
   
    return response.sasUrl;
  }



  NewGetDelay_actions(obj:CalenderDTO){
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetDelay_actions", this.obj_CalenderDTO);
  }
  NewClickEventJSON(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetClickEventJSON", this.obj_CalenderDTO);
  }
  NewGetSearchResults(obj:CalenderDTO){
    this.obj_CalenderDTO.EmpNo = obj.EmpNo;
    this.obj_CalenderDTO.Search_text = obj.Search_text;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetSearchResults", this.obj_CalenderDTO);
  }
  NewGetcompleted_meeting(obj:CalenderDTO){ debugger
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;

    return this.http.post(this.rootUrl + "CalenderAPI/NewGetcomplte_meeting", this.obj_CalenderDTO);
  }

  Newinsertuser_meetingreport(obj:CalenderDTO){  debugger
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    this.obj_CalenderDTO.User_list = obj.User_list.toString();
    // this.obj_CalenderDTO.flagid=obj.flagid;
    return this.http.post(this.rootUrl + "CalenderAPI/Newinsertuser_meetingreportco", this.obj_CalenderDTO);
  }

  NewAdmin_meetingreport(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    this.obj_CalenderDTO.IsAdmin = obj.IsAdmin;
    return this.http.post(this.rootUrl + "CalenderAPI/NewAdmin_meetingco", this.obj_CalenderDTO);
  }
  NewPrevious_meetingreport(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;

    return this.http.post(this.rootUrl + "CalenderAPI/NewGet_prevmeetingbinddata", this.obj_CalenderDTO);
  }





  NewGet_previousMeetingNotes(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGet_previousMeetingNotes", this.obj_CalenderDTO);
  }

  Newdateandtime_meetingreport(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Scheduled_date = obj.Scheduled_date;
    this.obj_CalenderDTO.StartTime = obj.StartTime;
    this.obj_CalenderDTO.EndTime = obj.EndTime;
    return this.http.post(this.rootUrl + "CalenderAPI/Newupdatetimeanddate_meetingreportco", this.obj_CalenderDTO);
  }
  NewGetMeeting_report(obj:CalenderDTO){ debugger
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Note = obj.Note;
    this.obj_CalenderDTO.Action_item = obj.Action_item;
    this.obj_CalenderDTO.User_list=obj.User_list;
   this.obj_CalenderDTO.Dms=obj.Dms;
   this.obj_CalenderDTO.Portfolio=obj.Portfolio;
   this.obj_CalenderDTO.Project=obj.Project;

    return this.http.post(this.rootUrl + "CalenderAPI/NewInsertmeeting_reports1", this.obj_CalenderDTO);
  }
  NewTaskUncomplete(sc_id){
    this.obj_CalenderDTO.Schedule_ID = sc_id;
    return this.http.post(this.rootUrl + "CalenderAPI/NewUpdateCalendarTaskUncomplete", this.obj_CalenderDTO);
  }
  NewTImerMeeting_report(obj:CalenderDTO){
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Status = obj.Status;
  //   this.obj_CalenderDTO.Scheduled_date=obj.Scheduled_date;
  //  this.obj_CalenderDTO.EventNumber=obj.EventNumber;
   this.obj_CalenderDTO.User_Type=obj.User_Type;

    return this.http.post(this.rootUrl + "CalenderAPI/Newinsert_timerrecordco", this.obj_CalenderDTO);
  }
  NewGetMeeting_notes(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    this.obj_CalenderDTO.Meeting_notes = obj.Meeting_notes;
    this.obj_CalenderDTO.AgendaId=obj.AgendaId
    this.obj_CalenderDTO.Status_type = obj.Status_type;

    return this.http.post(this.rootUrl + "CalenderAPI/NewInsertmeeting_notes1", this.obj_CalenderDTO);
  }


  InsertAgendameeting_notes(obj:CalenderDTO){ debugger
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    this.obj_CalenderDTO.Meeting_notes = obj.Meeting_notes;
    this.obj_CalenderDTO.AgendaId=obj.AgendaId
    this.obj_CalenderDTO.Status_type = obj.Status_type;

    return this.http.post(this.rootUrl + "CalenderAPI/NewInsertAgendameeting_notes", this.obj_CalenderDTO);
  }


  NewAddAgendas(obj:CalenderDTO){ debugger

    this.obj_CalenderDTO.json = obj.json;
    this.obj_CalenderDTO.flagid=obj.flagid;
    this.obj_CalenderDTO.Emp_No=obj.Emp_No;
    this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID

    return this.http.post(this.rootUrl + "CalenderAPI/NewAddMeetingAgendas", this.obj_CalenderDTO);
  }

  NewEditsAgendas(obj:CalenderDTO){ debugger

    this.obj_CalenderDTO.json = obj.json;
    this.obj_CalenderDTO.flagid=obj.flagid;
    this.obj_CalenderDTO.Emp_No=obj.Emp_No;
    this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID

    return this.http.post(this.rootUrl + "CalenderAPI/NewAddMeetingAgendas", this.obj_CalenderDTO);
  }


  NewDeleteAgendas(obj:CalenderDTO){ debugger

    this.obj_CalenderDTO.flagid = obj.flagid;
    this.obj_CalenderDTO.json = obj.json;
    this.obj_CalenderDTO.Emp_No=obj.Emp_No;
    this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID

    return this.http.post(this.rootUrl + "CalenderAPI/NewAddMeetingAgendas", this.obj_CalenderDTO);
  }



  NewGetMeeting_darftdata(obj:CalenderDTO){
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGet_darftmeetdatacon", this.obj_CalenderDTO);
  }



  Newdraft_Meetingnotes(obj:CalenderDTO){ debugger
    this.obj_CalenderDTO.draftid=obj.draftid;
    this.obj_CalenderDTO.Dms = obj.Dms;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;
    this.obj_CalenderDTO.Task_Name = obj.Task_Name;
    this.obj_CalenderDTO.Portfolio = obj.Portfolio;
    this.obj_CalenderDTO.location = obj.location;
    this.obj_CalenderDTO.loc_status = obj.loc_status;
    this.obj_CalenderDTO.Note = obj.Note;
    this.obj_CalenderDTO.Schedule_type = obj.Schedule_type;
    this.obj_CalenderDTO.User_list = obj.User_list;
    this.obj_CalenderDTO.Project_Code = obj.Project_Code;
    this.obj_CalenderDTO.DraftAgendas = obj.DraftAgendas;
    this.obj_CalenderDTO.Link_details=obj.Link_details;
    this.obj_CalenderDTO.Recurrence=obj.Recurrence;
    this.obj_CalenderDTO.Rec_values=obj.Rec_values;
    this.obj_CalenderDTO.Rec_EndDate=obj.Rec_EndDate;
  
    console.log(this.rootUrl + "CalenderAPI/Newinsertdarft_meetingco",'url')
    return this.http.post(this.rootUrl + "CalenderAPI/Newinsertdarft_meetingco", this.obj_CalenderDTO);
  }
  NewGetrequeat_Accpect(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.EventNumber = obj.EventNumber;
    this.obj_CalenderDTO.flagid = obj.flagid;
    this.obj_CalenderDTO.EmpNo =  localStorage.getItem('EmpNo');

    return this.http.post(this.rootUrl + "CalenderAPI/NewGetAcceptedRequeste", this.obj_CalenderDTO);
  }
  NewGetproposenewtime(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.propose_date = obj.propose_date;
    this.obj_CalenderDTO.propose_stt = obj.propose_stt;
    this.obj_CalenderDTO.propose_edt = obj.propose_edt;

    return this.http.post(this.rootUrl + "CalenderAPI/NewGetProposenewdate", this.obj_CalenderDTO);
  }
  NewGetPendingAvailability(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Scheduled_date = obj.Scheduled_date;

    return this.http.post(this.rootUrl + "CalenderAPI/NewGetPendingAvailabilty", this.obj_CalenderDTO);
  }
  NewGetMeetingDuration(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;

    return this.http.post(this.rootUrl + "CalenderAPI/NewGetMeetingDuration", this.obj_CalenderDTO);
  }
  NewGetEvent_request(obj:CalenderDTO){
    this.obj_CalenderDTO.Emp_No = obj.Emp_No;

    return this.http.post(this.rootUrl + "CalenderAPI/NewGetEvent_request", this.obj_CalenderDTO);
  }
  NewDelete_table(obj:CalenderDTO){ debugger
  this.obj_CalenderDTO.Schedule_ID=  obj.Schedule_ID;
  this.obj_CalenderDTO.flag_id= obj.flag_id;
  return this.http.post(this.rootUrl + "CalenderAPI/NewGetRessheduling_table", this.obj_CalenderDTO);
}
NewPending_table(obj:CalenderDTO){ debugger
  this.obj_CalenderDTO.Schedule_ID=  obj.Schedule_ID;

  return this.http.post(this.rootUrl + "CalenderAPI/NewGetPending_tables", this.obj_CalenderDTO);
}

  NewInsertCalender(obj: CalenderDTO){
    debugger
    this.obj_CalenderDTO.ScheduleJson = obj.ScheduleJson;
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.draftid=obj.draftid;
    this.obj_CalenderDTO.attachment= obj.attachment;
    return this.http.post(this.rootUrl + "TestAPI/NewInsertSchedule_CalenderUpdated", this.obj_CalenderDTO);
  }

  NewDeleteDraft(obj: CalenderDTO){
    this.obj_CalenderDTO.draftid=obj.draftid;
    this.obj_CalenderDTO.Emp_No=obj.Emp_No;
    return this.http.post(this.rootUrl + "TestAPI/NewDeleteDraft", this.obj_CalenderDTO);
  }

  UploadCalendarAttachmenst(data) {
    console.log(this.rootUrl + "TestAPI/NewAddCalendarAttachment",'url')
    return this.http.post(this.rootUrl + "TestAPI/NewAddCalendarAttachment", data
      , {
        reportProgress: true,
        observe: 'events'
      }).pipe(
      );
  }

  UploadCalendarAttachmenstCore(data) {
  
    return this.http.post(this.rootUrlcore + "Notification/NewAddCalendarAttachmentCore", data
      , {
        reportProgress: true,
        observe: 'events'
      }).pipe(
      );
  }

  _AzureUploadCalendarAttachments(data) {
   
   
    console.log(this.rootUrlcore + "Azure/NewAddCalendarAttachmentCore",'attachment url2')
    return this.http.post(this.rootUrlcore + "Azure/NewAddCalendarAttachmentCore", data
      , {
        reportProgress: true,
        observe: 'events'
      }).pipe(
      );
  }

  EditUploadCalendarAttachmenst(data) {
    return this.http.post(this.rootUrl + "TestAPI/NewAddNewfileCalendarDocuments", data
      , {
        reportProgress: true,
        observe: 'events'
      }).pipe(
      );
  }

  EditUploadCalendarAttachmenstCore(data) {
    return this.http.post(this.rootUrlcore + "Notification/NewEditCalendarAttachmentCore", data
      , {
        reportProgress: true,
        observe: 'events'
      }).pipe(
      );
  }

  _AzureUpdateCalendarAttachments(data) {
    return this.http.post(this.rootUrlcore + "Azure/NewEditCalendarAttachmentCore", data
      , {
        reportProgress: true,
        observe: 'events'
      }).pipe(
      );
  }

  NewUpdateCalender(obj: CalenderDTO){
debugger
    this.obj_CalenderDTO.ScheduleJson = obj.ScheduleJson;
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    this.obj_CalenderDTO.flagid = obj.flagid;
    this.obj_CalenderDTO.attachment= obj.attachment;
    this.obj_CalenderDTO.type= obj.type;
    return this.http.post(this.rootUrl + "TestAPI/NewupdateSchedule_Calender", this.obj_CalenderDTO);
  }

  NewGetcheckdateandtime(obj: CalenderDTO){
    this.obj_CalenderDTO.json=obj.json;
    this.obj_CalenderDTO.EmpNo=obj.EmpNo;

    return this.http.post(this.rootUrl + "CalenderAPI/NewGetcheckdatetimetable", this.obj_CalenderDTO);

}
NewGetScheduledtime(obj: CalenderDTO){
  this.obj_CalenderDTO.EmpNo=obj.EmpNo;
  this.obj_CalenderDTO.Scheduled_date=obj.Scheduled_date;
  return this.http.post(this.rootUrl + "CalenderAPI/NewGetScheduleddatetime", this.obj_CalenderDTO);

}
NewGetMeetingdata_notes(obj: CalenderDTO){

  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  return this.http.post(this.rootUrl + "CalenderAPI/NewGetMeetingnotes_datas", this.obj_CalenderDTO);

}


  GetAgendaMeetingnotes_data(obj: CalenderDTO){   

  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.AgendaId=obj.AgendaId;
  // console.log(this.rootUrl + "CalenderAPI/NewGetAgendaMeetingnotes_data", this.obj_CalenderDTO);
  return this.http.post(this.rootUrl + "CalenderAPI/NewGetAgendaMeetingnotes_data", this.obj_CalenderDTO);
}


NewGetMeetingnote_comp(obj: CalenderDTO){

  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;

  return this.http.post(this.rootUrl + "CalenderAPI/NewGetMeetingnotes_dataco", this.obj_CalenderDTO);

}



NewGetAttendeesMeetingnotes(obj: CalenderDTO){
  this.obj_CalenderDTO.AgendaId=obj.AgendaId
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  return this.http.post(this.rootUrl + "CalenderAPI/NewGetAttendeesMeetingnotes", this.obj_CalenderDTO);

}


NewInsertInsertSmartMeetingType(obj: CalenderDTO){
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Status_type=obj.Status_type;
  return this.http.post(this.rootUrl + "CalenderAPI/NewInsertInsertSmartMeetingType", this.obj_CalenderDTO);

}




GetInsertAttendeeMeetingTime(obj:CalenderDTO){  
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Status=obj.Status;
  this.obj_CalenderDTO.StartTime=obj.StartTime;
  this.obj_CalenderDTO.Start_time=obj.Start_time;
  this.obj_CalenderDTO.EndTime=obj.EndTime;


  return this.http.post(this.rootUrl+"CalenderAPI/NewInsertAttendeeMeetingTime",this.obj_CalenderDTO);
}


NewinsertDMS_meetingreport(obj: CalenderDTO){ 
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Dms=obj.Dms;
  this.obj_CalenderDTO.flagid=obj.flagid;

  return this.http.post(this.rootUrl + "CalenderAPI/NewLinkDMSInMeetingDetails", this.obj_CalenderDTO);
}



Newinsertportfolio_meetingreport(obj: CalenderDTO){
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Portfolio=obj.Portfolio;
  this.obj_CalenderDTO.flagid=obj.flagid ;
  return this.http.post(this.rootUrl + "CalenderAPI/NewLinkPortfolioInMeetingDetails", this.obj_CalenderDTO);
}



Newinsertproject_meetingreport(obj: CalenderDTO){

  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Project_Code=obj.Project_Code;
  this.obj_CalenderDTO.flagid=obj.flagid;
  return this.http.post(this.rootUrl + "CalenderAPI/NewLinkProjectInMeetingDetails", this.obj_CalenderDTO);
}

DeletePortfoliosOfMeeting(obj: CalenderDTO) { debugger
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Portfolio=obj.Portfolio;
  this.obj_CalenderDTO.Dms=null;
  this.obj_CalenderDTO.Project_Code=null;
  this.obj_CalenderDTO.flagid=obj.flagid;
  return this.http.post(this.rootUrl + "CalenderAPI/NewUnLinkInMeetingDetails", this.obj_CalenderDTO)
}


DeleteAttachmentOfMeeting(obj: CalenderDTO) { 
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.fileid=obj.fileid;
  this.obj_CalenderDTO.flagid=obj.flagid;
  console.log(this.obj_CalenderDTO,'PPPPPPPPPPPPPPPPPPPPPPP')
  return this.http.post(this.rootUrl + "CalenderAPI/NewDeleteMeetingAttachments", this.obj_CalenderDTO)
}

DeleteDMSOfMeeting(obj: CalenderDTO) {  debugger
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Dms=obj.Dms;
  this.obj_CalenderDTO.flagid=obj.flagid;
  this.obj_CalenderDTO.Project_Code=null;
  this.obj_CalenderDTO.Portfolio=null;

  return this.http.post(this.rootUrl + "CalenderAPI/NewUnLinkInMeetingDetails", this.obj_CalenderDTO)
}


DeleteProjectsOfMeeting(obj: CalenderDTO) { debugger

  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID;
  this.obj_CalenderDTO.Emp_No=obj.Emp_No;
  this.obj_CalenderDTO.Project_Code=obj.Project_Code;
  this.obj_CalenderDTO.flagid=obj.flagid;
  this.obj_CalenderDTO.Dms=null;
  this.obj_CalenderDTO.Portfolio=null;
  return this.http.post(this.rootUrl + "CalenderAPI/NewUnLinkInMeetingDetails", this.obj_CalenderDTO)
}
NewUpdateCompleteAgenda(obj:CalenderDTO){
  this.obj_CalenderDTO.Emp_No=obj.Emp_No,
  this.obj_CalenderDTO.AgendaId=obj.AgendaId

  return this.http.post(this.rootUrl + "CalenderAPI/NewUpdateCompleteAgenda",this.obj_CalenderDTO)
}


NewUpdateUndoCompleteAgenda(obj:CalenderDTO){
  this.obj_CalenderDTO.Emp_No=obj.Emp_No,
  this.obj_CalenderDTO.AgendaId=obj.AgendaId

  return this.http.post(this.rootUrl+"CalenderAPI/NewUpdateUndoCompleteAgenda",this.obj_CalenderDTO)
}


NewGetProjectandsubtaskDrp(prjName:string,filtertype:any=undefined){
  // prjName is mandatory.  filtertype is optional.
     this.obj_CalenderDTO.Search_text=prjName.trim();
     this.obj_CalenderDTO.filterbyCompany=filtertype['bycompany']?filtertype['bycompany']:null;
     this.obj_CalenderDTO.filterbyUser=filtertype['byuser']?filtertype['byuser']:null;
     this.obj_CalenderDTO.filterbyStatus=filtertype['bystatus']?filtertype['bystatus']:null;
     return this.http.post(this.rootUrl+"CalenderAPI/NewGetProjectandsubtaskDrp",this.obj_CalenderDTO);
}


GetRecurrenceMeetingsService(obj:CalenderDTO){

  this.obj_CalenderDTO.Emp_No=obj.Emp_No,
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID,
  this.obj_CalenderDTO.Status_type=obj.Status_type

  return this.http.post(this.rootUrl+'CalenderAPI/NewGetRecurrenceMeetingsService',this.obj_CalenderDTO)
}


NewUpdateMeetingBookmark(obj:CalenderDTO){
debugger
  this.obj_CalenderDTO.Schedule_ID=obj.Schedule_ID,
  this.obj_CalenderDTO.Emp_No=obj.Emp_No,
  this.obj_CalenderDTO.flagid=obj.flagid

  return this.http.post(this.rootUrl+'CalenderAPI/NewUpdateMeetingBookmark',this.obj_CalenderDTO)
}




NewUsersDashboard(){   
   let createdby;
   let dmsUserinfo:any=localStorage.getItem('DMS_UserInfo');
   if(dmsUserinfo){
    dmsUserinfo=JSON.parse(dmsUserinfo);
    createdby=dmsUserinfo.createdby;
   }
   this.obj_CalenderDTO.UserId=createdby;
   return this.http.post('https://cswebapps.com/dmsapi/api/DashboardAPI/NewUsersDashboard', this.obj_CalenderDTO);
}



GetBookmarkMeetingsList(obj:CalenderDTO){

  this.obj_CalenderDTO.Emp_No=obj.Emp_No
 
  return this.http.post(this.rootUrl+'CalenderAPI/NewGetBookmarkMeetings',this.obj_CalenderDTO)
}


}
