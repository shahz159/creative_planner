import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalenderDTO } from '../_Models/calender-dto';
import { ApiurlService } from './apiurl.service';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  obj_CalenderDTO: CalenderDTO;

  constructor(private http: HttpClient, private commonUrl: ApiurlService) {
    this.obj_CalenderDTO = new CalenderDTO;
  }
  readonly rootUrl = this.commonUrl.apiurl;
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
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetScheduledtimejson", this.obj_CalenderDTO);
  }
  NewClickEventJSON(obj:CalenderDTO){
    this.obj_CalenderDTO.Schedule_ID = obj.Schedule_ID;
    return this.http.post(this.rootUrl + "CalenderAPI/NewGetClickEventJSON", this.obj_CalenderDTO);
  }

  NewInsertCalender(obj: CalenderDTO){
    
    this.obj_CalenderDTO.ScheduleJson = obj.ScheduleJson;
  
    return this.http.post(this.rootUrl + "TestAPI/NewInsertSchedule_Calender", this.obj_CalenderDTO);
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
}