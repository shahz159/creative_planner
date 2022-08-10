import { Component, ElementRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SubTaskDTO } from 'src/app/_Models/sub-task-dto';
import { LinkService } from 'src/app/_Services/link.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ParameterService } from 'src/app/_Services/parameter.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
//import { CalendarOptions } from '@fullcalendar/angular';
import * as moment from 'moment';
import 'moment/locale/pt-br';

import * as _ from 'underscore';




@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit,OnDestroy {

  constructor(public service: ProjectTypeService,
    public _LinkService: LinkService,
    private notifyService: NotificationService,
    private ShareParameter_Service: ParameterService,
    private route: ActivatedRoute,
    private elementRef: ElementRef) {

  }
  @Input() inputFromParent: string;

  projectCode: string;

  ProjectInfo_List: any;
  Subtask_List: SubTaskDTO[];

  subtaskNotFoundMsg: string;
  _TotalSubtaskCount: number;
  TotalWork_Hours: any;
  ProjectPercentage: any; ProjectStatus: string;
  standardDuration: any;
  _MainProjectStatus: string;
  _subtaskDiv: boolean;
  Current_user_ID: string;

  _LinkSideBar: boolean = true;
  _openInfoSideBar: boolean = false;
  interval: any;
  MoreDetailsList: any;
  ngOnInit() {
    //alert('12345')
    this.Current_user_ID = localStorage.getItem('EmpNo');
    this.route.paramMap.subscribe(params => {
      var Pcode = params.get('projectcode');
      this.projectCode = Pcode;
      // alert("From Info" + Pcode)
      this.fun_LoadProjectDetails();
    });
  }
  // ngAfterViewInit(){

  // }
  initials: string;
  Project_Responsible;
  dateResut: any;
  Difference_In_Days: number;
  date1: any;
  date2: any;
  CompletedList: any;
  AssigntaskList: any;

  ifcategoryZero: any;
  fun_LoadProjectDetails() {
   
    this.service.SubTaskDetailsService(this.projectCode).subscribe(
      (data) => {
        //console.log("Project Details---->", data);
        debugger
        if (data != null && data != undefined) {
          this.ProjectInfo_List = JSON.parse(data[0]['ProjectInfo']);

         // this.ifcategoryZero = this.ProjectInfo_List['CompleteReportType'];
         
          // if (Object.keys(data).length > 0) {
          this.Subtask_List = JSON.parse(data[0]['SubtaskDetails_Json']);
          this.CompletedList = JSON.parse(data[0]['CompletedTasks_Json']);
         
          this.AssigntaskList = JSON.parse(data[0]['AssigntaskDetails_Json']);
          
          // this.CompletedList.push(this.Subtask_List);
          console.log("subtask Details--->",this.Subtask_List);
          console.log("Assign Details--->",this.AssigntaskList);
          this.TotalWork_Hours = data[0]['TotalHours'];
          this.ProjectPercentage = data[0]['ProjectPercentage'] + '%';
          this.ProjectStatus = data[0]['ProjectStatus'];
          this._MainProjectStatus = data[0]['MainProjectStatus'];

          //console.log("ProjectDetails-->", this.ProjectInfo_List);
          this.date1 = this.ProjectInfo_List[0]['DPG'];
          this.date2 = this.ProjectInfo_List[0]['DeadLine'];

          //console.log("Date In ----->", this.date1, this.date2)
          this.Project_Responsible = this.ProjectInfo_List[0]['Team_Res'];

          // Date Diff In Days...
          this.date1 = moment(this.date1);
          this.date2 = moment(this.date2);
          this.Difference_In_Days = Math.abs(this.date1.diff(this.date2, 'days'));

          this.subtaskNotFoundMsg = "";
          this._subtaskDiv = false;
          // For  More Details Component...
          this.MoreDetailsList = [
            { ProjectCode: this.ProjectInfo_List[0]['Project_Code'] },
            { ProjectName: this.ProjectInfo_List[0]['Project_Name'] },
            { Description: this.ProjectInfo_List[0]['Project_Description'] },
            { StartDate: this.ProjectInfo_List[0]['DPG'] },
            { EndDate: this.ProjectInfo_List[0]['DeadLine'] },
            { Cost: this.ProjectInfo_List[0]['Project_Cost'] },
            {Client:this.ProjectInfo_List[0]['Client_Name']},
            { Owner: this.ProjectInfo_List[0]['Project_Owner'] },
            { Responsible: this.ProjectInfo_List[0]['Team_Res'] },
            { Authority: this.ProjectInfo_List[0]['Team_Autho'] },
            { Coordinator: this.ProjectInfo_List[0]['Team_Coor'] },
            { Informer: this.ProjectInfo_List[0]['Team_Informer'] },
            { Support: this.ProjectInfo_List[0]['Team_Support'] },
            { ProjectType: this.ProjectInfo_List[0]['Project_Block'] },
            { Authorty_EmpNo: this.ProjectInfo_List[0]['Authority'] },
            { Responisble_EmpNo: this.ProjectInfo_List[0]['Responsible'] },
            {Category:this.ProjectInfo_List[0]['ReportType']},
            { Owner_EmpNo: this.ProjectInfo_List[0]['OwnerEmpNo'] },

          ]
          let List_string: any = JSON.stringify(this.MoreDetailsList);
          localStorage.setItem("moreDetails", List_string);

          const fullName = this.Project_Responsible.split(' ');
          this.initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
          this.initials= this.initials.toUpperCase();
        }
        else {
          this._subtaskDiv = true;
          this.subtaskNotFoundMsg = "No Subtask found";
        }
      });

    this._OpenMemosInfo(this.projectCode);

  }
  ngOnDestroy() {
  }
  closeInfo() {
    document.getElementById("mysideInfobar").style.width = "0";
    document.getElementById("rightbar-overlay").style.display = "none";
    this.ngOnDestroy();
  }
  AddDms() {
    this._openInfoSideBar = true;
    this._LinkSideBar = false;
    this._onRowClick(this.projectCode);
  }
  _dbMemoIdList: any;
  _SelectedIdsfromDb: any;
  _JsonString: string;
  Selected_Projectcode: string;
  Memos_List: any;
  _ActualMemoslist: any;
  _totalMemos: number;
  _mappedMemos: number;

  dropdownSettings_Memo: IDropdownSettings = {};
  ngDropdwonMemo: any;
  GetMemosByEmployeeId() {
    this._LinkService.GetMemosByEmployeeCode(this.Current_user_ID).
      subscribe((data) => {

        this.Memos_List = JSON.parse(data['JsonData']);
        this._ActualMemoslist = JSON.parse(data['JsonData']);
        // console.log("Actual Memo List By EmpId--->", this._ActualMemoslist)
        this._totalMemos = this._ActualMemoslist.length;
        // console.log("Memos List", JSON.parse(data['JsonData']));
        this.dropdownSettings_Memo = {
          singleSelection: false,
          idField: 'MailId',
          textField: 'Subject',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 1,
          allowSearchFilter: true
        };
      });
  }
  Empty_MemoDropdown: any;
  _SelectedMemos: any;
  Mail_Id: number;
  Memo_Select(selecteditems) {
    //console.log("Selected Item---->",selecteditems)
    let arr = [];
    this.Empty_MemoDropdown = selecteditems;
    // console.log("Before ForEach data Selected Memos---->",this.Empty_MemoDropdown,)
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
    //console.log("Selected Memos In Array--->", arr)
  }
  Memo_Deselect() {
    let arr = [];
    this.Empty_MemoDropdown = this.ngDropdwonMemo;
    this.Empty_MemoDropdown.forEach(element => {
      arr.push({ MailId: element.MailId })
      this._SelectedMemos = arr;
    });
    //console.log("Deselect Memos--->", this._SelectedMemos)
  }

  _onRowClick(projectCode) {
    this._SelectedIdsfromDb = [];
    this.Selected_Projectcode = projectCode;
    // console.log("projt Code------->",projectCode);
    // this._displayProjName = ProjName;
    this.GetMemosByEmployeeId();
    this._LinkService._GetOnlyMemoIdsByProjectCode(projectCode).
      subscribe((data) => {
        let Table_data: any = data;

        // console.log("Memos Id Form DB--->", data);
        if (Table_data.length > 0) {
          this._JsonString = JSON.stringify(data[0]['JsonData']);
          //console.log("Memos Ids-------->", (this._JsonString));
          this._dbMemoIdList = JSON.parse(data[0]['JsonData']);
          let arr1: any = this._ActualMemoslist;
          // console.log("Actula Memo List On Row Click--->", this._ActualMemoslist);
          let arr2: any = this._dbMemoIdList;
          this._SelectedIdsfromDb = _.map(arr2, (d) => { return d.MailId });
          //Rejecting Same Ids 
          this.Memos_List = _.reject(arr1, (d) => {
            var findId = _.find(this._SelectedIdsfromDb, (sId) => { return sId === d.MailId });
            if (findId) {
              return true;
            }
            else {
              return false;
            }
          })
          let arr = [];
          this._SelectedIdsfromDb.forEach(item => {
            arr.push({ MailId: item })
            this._SelectedIdsfromDb = arr;
          });
          if (this._dbMemoIdList == undefined) {
            this._mappedMemos = 0;
          }
          else {
            this._mappedMemos = this._dbMemoIdList.length;
          }
          //   // console.log("On Row Click----selectedIdfrom DB---->",this._SelectedIdsfromDb);
        }
        else {
          this._mappedMemos = 0;
          console.log("No Memos linked For This Project...")
        }
      });
    document.getElementById("LinkSideBar").style.width = "100%";
  }
  moreDetails() {
    let name: string = 'MoreDetails';
    var url = document.baseURI + name;
    var myurl = `${url}/${this.projectCode}`;
    var myWindow = window.open(myurl, this.projectCode);
    myWindow.focus();
  }
  _raciDetails: boolean = true;
  bttn_RACI() {
    this._raciDetails = !this._raciDetails;
  }

  _displayProjName: string;
  _MemosSubjectList: any;
  _MemosNotFound: string;
  _DBMemosIDList: any;
  _OpenMemosInfo(_projectCode) {
    this._dbMemoIdList = [];
    // this._displayProjName = _projectName;
    this._LinkService._GetOnlyMemoIdsByProjectCode(_projectCode).
      subscribe((data) => {
        let Table_data: any = data;
        // console.log("---->Table Data", Table_data);

        // let Dbdata: any = JSON.parse(data[0]['JsonData']);

        // if (Dbdata == '[]') {
        //   this._MemosSubjectList = [];
        //   this._MemosNotFound = "No memos linked";
        // }
        if (Table_data.length > 0 && data[0]['JsonData'] != '[]') {
          // alert("Table Data > 0")
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              // console.log("------------>", data);
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              //console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
    //Displaying Right Side Bar... 
    //document.getElementById("MemosSideBar").style.width = "350px";
  }

  memoId: any;
  deleteMemos(memoId, pcode) {
    this._MemosSubjectList = [];
    let _DeleteSelectedMemo = [];
    _DeleteSelectedMemo.push({ MailId: memoId })
    //_DeleteList.push(pcode);
    //console.log("---->Delete Memo",_DeleteSelectedMemo);
    let arr1: any = this._DBMemosIDList;
    let arr2: any = _DeleteSelectedMemo;
    let result = arr1.filter(o1 => !arr2.some(o2 => o1.MailId === o2.MailId));
    //console.log("Final Result ----->",result);
    this._DBMemosIDList = _.map(arr2, (d) => { return d.MailId });
    this.memoId = JSON.stringify(result);
    //console.log("-----Final O/p--->", this.memoId);
    let appId: number = 101;
    let UserId = this.Current_user_ID;
    this._LinkService.InsertMemosOn_ProjectCode(pcode, appId, this.memoId, UserId).
      subscribe((data) => {
        // this._OpenMemosInfo(pcode,this.pName);
        //this.GetProjectsByUserName();
        let Returndata: any = data['Message'];
        this.UpdateMemos(pcode);
        this.notifyService.showInfo("", Returndata);
      });
  }

  UpdateMemos(pcode) {
    this._LinkService._GetOnlyMemoIdsByProjectCode(pcode).
      subscribe((data) => {
        let Table_data: any = data;
        //console.log("Linked Db Memos Data---->",data[0]['JsonData']);
        if (Table_data.length > 0) {
          this._MemosNotFound = "";
          this._DBMemosIDList = JSON.parse(data[0]['JsonData']);
          // console.log("List----->",this._dbMemoIdList)
          this._JsonString = data[0]['JsonData'];
          this._LinkService._GetMemosSubject(this._JsonString).
            subscribe((data) => {
              //console.log("------------>", data);
              this._MemosSubjectList = JSON.parse(data['JsonData']);
              //console.log("Subject Name ------------>", this._MemosSubjectList);
            });
        }
        else {
          this._MemosSubjectList = [];
          this._MemosNotFound = "No memos linked";
        }
      });
  }

  _AddLink() {
    let _ProjectCode: string = this.Selected_Projectcode;
    //alert(this.Global_Projectcode);
    let appId: number = 101;//this._ApplicationId;
    //console.log("selected Memos From Dropdown-->", this._SelectedMemos);
    if (this._SelectedIdsfromDb > 0 || this._SelectedIdsfromDb != undefined) {
      // console.log("Table Ids-->", this._SelectedIdsfromDb);
      this.memoId = JSON.stringify(this._SelectedIdsfromDb.concat(this._SelectedMemos));
      console.log("After Joins Final Output=======>", this.memoId);
    }
    else {
      this.memoId = JSON.stringify(this._SelectedMemos);
      console.log("Ëlse Block...Executed---->", this.memoId);
    }
    let UserId = this.Current_user_ID;
    if (this._SelectedMemos.length > 0) {
      this._LinkService.InsertMemosOn_ProjectCode(_ProjectCode, appId, this.memoId, UserId).
        subscribe((data) => {
          this.UpdateMemos(this.projectCode)
          this.GetMemosByEmployeeId();
          //this.GetProjectsByUserName();
          let Returndata: any = data['Message'];
          this.notifyService.showSuccess("", Returndata);
          this.ngDropdwonMemo = [];
          this._SelectedMemos = [];
        });
    }
    else {
      this.notifyService.showInfo("Request Cancelled", "Please select memo(s) to link");
    }
    this.closeLinkSideBar();
    this._openInfoSideBar = false;
    // this._LinkSideBar=true;
  }
  closeLinkSideBar() {
    document.getElementById("LinkSideBar").style.width = "0";
    this._LinkSideBar = true;
    this._openInfoSideBar = false;
  }
  openUrl(memo_Url) {
    const Url = memo_Url;
    window.open(Url);
  }
}
