import { Observable } from 'rxjs';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { nextFrame } from '@amcharts/amcharts4/core';

@Injectable({
  providedIn: 'root'
})
export class BsServiceService {

  constructor() { }

  private _Pcode = new BehaviorSubject<any>(null);
  private _PName = new BehaviorSubject<any>(null);

  private _Scode = new BehaviorSubject<any>(null);

  private _catId = new BehaviorSubject<any>(null);
  private _catName = new BehaviorSubject<any>(null);

  private _AssignId = new BehaviorSubject<any>(null);
  private _TaskName = new BehaviorSubject<any>(null);

  private _typeoftask = new BehaviorSubject<any>(null);
  private _projectCode = new BehaviorSubject<any>(null);

  private _Authority = new BehaviorSubject<any>(null);

  private _SummaryType = new BehaviorSubject<any>(null);
  private _portId = new BehaviorSubject<any>(null);
  public _templAction = new BehaviorSubject<any>(null);
  
  ProjectCreatedEvent:EventEmitter<undefined>=new EventEmitter<undefined>();


  
  bs_projectCode = this._Pcode.asObservable();
  bs_ProjectName = this._PName.asObservable();

  bs_standardid = this._Scode.asObservable();

  bs_AssignId = this._AssignId.asObservable();
  bs_TaskName = this._TaskName.asObservable();

  bs_catId = this._catId.asObservable();
  bs_catName = this._catName.asObservable();

  bs_TypeofTask = this._typeoftask.asObservable();

  bs_SelectedProjectCode = this._projectCode.asObservable();
  bs_Authority = this._Authority.asObservable();

  bs_SummaryType = this._SummaryType.asObservable();
  bs_SelectedPortId = this._portId.asObservable();
  bs_templAction = this._templAction.asObservable();
 

  SetNewPojectCode(NewPCode) {
    this._Pcode.next(NewPCode);
  }

  SetNewPojectName(ProjName) {
    this._PName.next(ProjName);
  }

  SetNewStandardId(standarid) {
    this._Scode.next(standarid);
  }

  SetNewAssignId(assignId) {
    this._AssignId.next(assignId);
  }
  SetNewAssignedName(taskname) {
    this._TaskName.next(taskname);
  }

  setNewCategoryID(catid){
    this._catId.next(catid);
  }

  setNewCategoryName(catname){
    this._catName.next(catname);
  }

  setNewTypeofTask(typoftask) {
    this._typeoftask.next(typoftask);
  }

  setSelectedProjectCodeFromRunwayTask(pcode) {
    this._projectCode.next(pcode);
  }
  setProjectAuthoity(auth){
    this._Authority.next(auth);
  }

  setProjectSummaryType(type){
    this._SummaryType.next(type);
  }

  setSelectedPortId(portid) {
    this._portId.next(portid);
  }

  setSelectedTemplAction(tmAction:{name:string,description:string,assignedTo:string}) {
    this._templAction.next(tmAction);
  }


}
