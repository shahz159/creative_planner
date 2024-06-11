// import { flatten } from '@angular/compiler';
import { Component, OnInit,ViewChild,ViewChildren,QueryList } from '@angular/core';
import { FormControl } from '@angular/forms'
import { AssigntaskDTO } from 'src/app/_Models/assigntask-dto';
import { CompletedProjectsDTO } from 'src/app/_Models/completed-projects-dto';
import { BsServiceService } from 'src/app/_Services/bs-service.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { ProjectTypeService } from 'src/app/_Services/project-type.service';
import { ProjectUnplannedTaskComponent } from 'src/app/_LayoutDashboard/project-unplanned-task/project-unplanned-task.component'
import { rgbToHsl } from '@amcharts/amcharts4/.internal/core/utils/Colors';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { PortfolioDTO } from 'src/app/_Models/portfolio-dto';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete'
import { MeetingReportComponent } from '../meeting-report/meeting-report.component';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS,MAT_DATE_LOCALE} from '@angular/material/core';
import { MeetingDetailsComponent } from '../meeting-details/meeting-details.component';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};




@Component({
  selector: 'app-action-to-assign',
  templateUrl: './action-to-assign.component.html',
  styleUrls: ['./action-to-assign.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},

  ]
})

export class ActionToAssignComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;
  fileAttachment: any;
  file: File | null = null;
  selectedProjectType: string = "";
  ProjectTypelist: any;
  _description: string = "";
  _StartDate: Date = null;
  _EndDate: Date = null;
  _SelectedEmpNo: string = "";
  selectedProjectCode: string;
  SelectedEmplList: any[];
  SelectedinformlList:any[]
  SelectedcordlList:any[]
  port_id:any;
  selectedProjectCodelist: any[];
  public EmployeeList: any;
  public PortfolioList: any;
  disablePreviousDate = new Date();
  SelectedSubmissionType: any;
  _taskName: string = "";
  dropdownSettings_Employee = {};
  public task_id: number;
  public cat_id: any;
  cat_name: any = "";
  public txtdisabled: boolean = false;
  buttondisable: boolean = true;
  _ObjAssigntaskDTO: AssigntaskDTO;
  _remarks: string = "";
  CurrentUser_ID: string;
  _inputAttachments: any = [];
  selectedFile: any = null;
  typeoftask: any = "";
  Difference_In_Time: any;
  Difference_In_Days: any;
  _Urlid:any;
  formFieldsRequired:boolean=false;

  constructor(private notifyService: NotificationService,private route: ActivatedRoute,
    public ProjectTypeService: ProjectTypeService,
    private dateAdapter: DateAdapter<Date>,
    public datepipe: DatePipe,
    public router: Router,
    public BsService: BsServiceService,
    public _projectunplanned: ProjectUnplannedTaskComponent,
    public _meetingreport: MeetingReportComponent,
    public _meetingDetails:MeetingDetailsComponent
    ) {
    this._ObjAssigntaskDTO = new AssigntaskDTO();
    this._ObjCompletedProj = new CompletedProjectsDTO();
    this.BsService.bs_AssignId.subscribe(i => this.task_id = i);
    this.BsService.bs_TaskName.subscribe(t => {
      this._taskName = t
      if (this._taskName == null) {
        this.txtdisabled = false;
        this._taskName = null;
      }
      else {
        this.txtdisabled = true;
      }
    });

    this._inputAttachments = [];
  }

  ngOnInit(): void {
    this.CurrentUser_ID = localStorage.getItem('EmpNo');
    this._Urlid = this.route.snapshot.params['id'];
    this.getProjectTypeList();
    this.GetAssignFormEmployeeDropdownList();
    this.BsService.bs_catId.subscribe(c =>{this.cat_id = c} );
    this.BsService.bs_catName.subscribe(d =>{ this.cat_name = d});
    this.ProjectTypeService.GetPortfoliosForAssignTask().subscribe(
      (data) => {
        this.PortfolioList = data as PortfolioDTO;
        console.log(this.PortfolioList,"portfoliosubn;");
      }
    )


const TEsb: HTMLElement = document.getElementById('Action2Assign-body') as HTMLElement;
TEsb.addEventListener('scroll', (ac:any) => {
  this.autocompletes.forEach((ac: any) => {
    if (ac.panelOpen)
      ac.updatePosition();
  });
});



  }




  _ObjCompletedProj: CompletedProjectsDTO;

  getProjectTypeList() {

    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.ProjectTypelist = JSON.parse(data[0]['ProjectTypeList']);
      });
  }


  selectedEmployee: string = "";

  EmployeeOnSelect(obj) {
    this._SelectedEmpNo = obj;
    this.selectedEmployee = this._SelectedEmpNo;
  }

  EmployeeOnDeselect(obj) {
    this._SelectedEmpNo = null;
    this.selectedEmployee = this._SelectedEmpNo;
  }

  onFileChangeATP(e) {
    // this._inputAttachments = <File>e.target.files[0];
    this._inputAttachments = [...this._inputAttachments, {
      FileName: e.target.files[0].name,
      Size: e.target.files[0].size,
      Files: e.target.files[0]
    }];
  }

  noStartDate: boolean = false;
  noEndDate: boolean = false;

  datesCheck() {
    this.noEndDate = false;
  }

  OnAssignTask_Submit() {
debugger
this.isPrjNameValid = this.isValidString(this._taskName,3);
this.isPrjDesValid = this.isValidString(this._description, 5)

if(this.isPrjNameValid ==="VALID"&&this._taskName.length<=100&&this.isPrjDesValid==="VALID"&&this._description.length<=200){
  this.formFieldsRequired = false
}
else {
  this.formFieldsRequired =true
  return
}




    // check whether all mandatory fields provided
    if(!((this._taskName)&&this.SelectedEmplList)){
      this.formFieldsRequired=true;
      return;
    }
    else this.formFieldsRequired=false;
    // check whether all mandatory fields provided







    // debugger
    if (this._StartDate == null && this._EndDate != null) {
      this.noStartDate = true;
      this.noEndDate = false;
    }
    else if (this._StartDate != null && this._EndDate == null) {
      this.noEndDate = true;
      this.noStartDate = false;
    }
    else {
      this._ObjAssigntaskDTO.TaskName = this._taskName;
      this._ObjAssigntaskDTO.TaskDescription = this._description;


      var datestrStart;
      var datestrEnd;

      if (this._StartDate != null && this._EndDate != null) {
        // current_Date: any = this.datepipe.transform(new Date(), 'yyyy/MM/dd');
        // datestrStart = (new Date(this._StartDate)).toUTCString();
        // datestrEnd = (new Date(this._EndDate)).toUTCString();
        // datestrStart = this.datepipe.transform(this._StartDate, 'yyyy/MM/dd HH:MM:SS');
        // datestrEnd = this.datepipe.transform(this._EndDate, 'yyyy/MM/dd HH:MM:SS');

        datestrStart = moment(this._StartDate).format();
        datestrEnd = moment(this._EndDate).format();

        this._ObjAssigntaskDTO.StartDate = datestrStart;
        this._ObjAssigntaskDTO.EndDate = datestrEnd;
      }
      else {
        // datestrStart = this.datepipe.transform(new Date(), 'yyyy/MM/dd HH:MM:SS');
        // datestrEnd = this.datepipe.transform(new Date(), 'yyyy/MM/dd HH:MM:SS');

        datestrStart = moment(new Date()).format();
        datestrEnd = moment(new Date()).format();

        this._ObjAssigntaskDTO.StartDate = datestrStart;
        this._ObjAssigntaskDTO.EndDate = datestrEnd;
      }


      if (this._StartDate instanceof Date && this._EndDate instanceof Date) {
        // Check if both _StartDate and _EndDate are valid Date objects
        const differenceInTime = this._EndDate.getTime() - this._StartDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        this._ObjAssigntaskDTO.ProjectDays = -differenceInDays;
      }
      else {
        this._ObjAssigntaskDTO.ProjectDays = 0;
      }
      //for hours Un-Comment Below Line
      //this._ObjAssigntaskDTO.ProjectDays = this._ObjAssigntaskDTO.ProjectDays * 8 / 1;
      this.BsService.bs_TypeofTask.subscribe(t => {
        this.typeoftask = t;
      });
      this._ObjAssigntaskDTO.TypeOfTask = this.typeoftask;
      this._ObjAssigntaskDTO.AssignTo = this.selectedEmployee;
      this._ObjAssigntaskDTO.Assigned_By = this.CurrentUser_ID;
      this._ObjAssigntaskDTO.AssignId = this.task_id;
      this._ObjAssigntaskDTO.ProjectType = this.selectedProjectType;
      this._ObjAssigntaskDTO.Remarks = this._remarks;
      // console.log(this.selectedProjectType);
      if (this._inputAttachments != null) {
        if (this._inputAttachments.length > 0) {
          this._ObjAssigntaskDTO.Reference = this._inputAttachments[0].Files;
        }
      }
      //console.log("Sending Obj..",this._ObjAssigntaskDTO)
      const fd = new FormData();
      fd.append("AssignTo", this._ObjAssigntaskDTO.AssignTo);
      if (this._inputAttachments != null) {
        if (this._inputAttachments.length > 0) {
          fd.append("Attachment", "true");
          fd.append('file', this._inputAttachments[0].Files);
          console.log(this._inputAttachments, 'files')
        }
      }
      else {
        fd.append("Attachment", "false");
        fd.append('file', "");
      }
      fd.append("TaskName", this._taskName);
      fd.append("Desc", this._description);
      fd.append("StartDate", datestrStart);
      fd.append("EndDate", datestrEnd);
      fd.append("ProjectDays", this._ObjAssigntaskDTO.ProjectDays.toString());
      fd.append("TypeofTask", this.typeoftask);
      fd.append("Remarks", this._remarks);
      fd.append("ProjectType", this.selectedProjectType);
      if (this.task_id != null) {
        fd.append("AssignId", this.task_id.toString());
      }
      fd.append("AssignedBy", this.CurrentUser_ID); debugger
      if(this.port_id!=null && this.port_id!=undefined && this.port_id!=''){
        this.port_id=this.port_id;
      }
      else{
        this.port_id=0;
      }
      fd.append("Portfolio_Id", this.port_id);

      this.ProjectTypeService._InsertAssignTaskServie(fd).subscribe(
        (data) => {
          if (this._Urlid == 1) {
            this._projectunplanned.getCatid();
            this.router.navigate(["UnplannedTask/"]);
            let message: string = data['Message'];
            this.notifyService.showSuccess("Task sent to assign projects", message);

            this.clearFeilds();
            this.closeInfo();
            this._inputAttachments = [];
          }
          else if(this._Urlid == 2){

            this._meetingreport.getScheduleId();
            this._meetingreport.GetAssigned_SubtaskProjects();
            let message: string = data['Message'];
            this.notifyService.showSuccess("Task sent to assign projects", message);

            this.clearFeilds();
            this.closeInfo();
            this._inputAttachments = [];
          }
          else if(this._Urlid == 3){

            this._meetingDetails.getDetailsScheduleId();
            this._meetingDetails.GetAssigned_SubtaskProjects();
            let message: string = data['Message'];
            this.notifyService.showSuccess("Task sent to assign projects", message);

            this.clearFeilds();
            this.closeInfo();
            this._inputAttachments = [];
          }

        });
    }
  }
  // this.OnCategoryClick(this._Categoryid, this._CategoryName);
  // this._TodoList = JSON.parse(data['TodoList']);
  // this._CompletedList = JSON.parse(data['CompletedList']);

  closeInfo() {
    this.clearFeilds();
    if(this._Urlid==1){
      this.router.navigate(["UnplannedTask/"]);
    document.getElementById("Project_info_slider_bar").classList.remove("kt-action-panel--on");

    }
    else if(this._Urlid==2){
      this._meetingreport.getScheduleId();
    document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");

    }
    else if(this._Urlid==3){

      this._meetingDetails.getDetailsScheduleId();
    document.getElementById("mysideInfobar").classList.remove("kt-action-panel--on");
    }
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    document.getElementById("rightbar-overlay").style.display = "none";
    // document.getElementById("mysideInfobar_NewSubtask").classList.remove("kt-quick-panel--on");
    //document.getElementById("mysideInfobar").classList.remove("kt-quick-panel--on");
  }

  clearFeilds() {
    this._description = "";
    this._StartDate = null;
    this._remarks = null;
    this._inputAttachments = null;
    (<HTMLInputElement>document.getElementById("uploadFile")).value = "";
    //document.getElementById("uploadFile").Value = null;
    this._EndDate = null;
    this._SelectedEmpNo = "";
    this.selectedProjectType = null;
    this.selectedProjectCode = "";
    this.SelectedEmplList = [];
    this.selectedProjectCodelist = [];
    this.noStartDate=false;
    this.noEndDate=false;
  }

  GetAssignFormEmployeeDropdownList() {
    this._ObjCompletedProj.PageNumber = 1;
    this._ObjCompletedProj.Emp_No = this.CurrentUser_ID;
    this._ObjCompletedProj.Mode = 'AssignedTask';
    this.ProjectTypeService._GetCompletedProjects(this._ObjCompletedProj).subscribe(
      (data) => {
        this.EmployeeList = JSON.parse(data[0]['EmployeeList']);
        console.log(this.EmployeeList,'EmployeeList');
        this.dropdownSettings_Employee = {
          singleSelection: true,
          idField: 'Emp_No',
          textField: 'DisplayName',
          itemsShowLimit: 3,
          allowSearchFilter: true,
          closeDropDownOnSelection: true
        };
      });
  }

  startdatechecker(){
    this.noStartDate=false;
    this.noEndDate=true;
    this._EndDate=null;
  }
  myFilter:any;
  enddateChecker(){
    this.noStartDate=true;
    this.myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4 && day !== 5 && day !== 6 && day !== 7;
    };
  }
  maxDate:any
  setMaxDate(){
    const d=new Date(this._StartDate);
    d.setDate(d.getDate()+2);
    this.maxDate=d;

  }


  selectFile() {
    this.fileInput.nativeElement.click();
  }

  onFileChanged(event: any) {
    const files: File[] = event.target.files;

    if (files && files.length > 0) {
      this.file = files[0];
      this.fileAttachment = this.file;
    } else {
      this.file = null;
      this.fileAttachment = null;
    }
    // Reset file input value to allow selecting the same file again
    this.fileInput.nativeElement.value = '';
  }


//   isPrjNameValid:boolean=true;
// isPrjDesValid:boolean=true;

//   isValidString(inputString: string, maxWords: number): boolean {

//     let rg=new RegExp('(\\b\\w+\\b\\s+){' + (maxWords - 1) + '}\\b\\w+\\b');
//     const valid=rg.test(inputString);
//     return valid;
// }

  todo() {
    if (this.selectedProjectType == '011') {
      this._EndDate = null
    }
  }


 // mat-autocomplete dropdowns code start.
 @ViewChildren(MatAutocompleteTrigger) autocompletes: QueryList<MatAutocompleteTrigger>;
 openAutocompleteDrpDwn(Acomp: string) {
   const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
   requestAnimationFrame(() => autoCompleteDrpDwn.openPanel());
 }

 closeAutocompleteDrpDwn(Acomp: string) {
   const autoCompleteDrpDwn = this.autocompletes.find((item) => item.autocomplete.ariaLabel === Acomp);
   requestAnimationFrame(() => autoCompleteDrpDwn.closePanel());
 }


  // Portfolio: any = [];
  isPortfolioDrpDwnOpen: boolean = false;
  onPortfolioSelected(e: any) {
    debugger
    const portfolioChoosed: any = this.PortfolioList.find((p: any) => p.Portfolio_ID === e.option.value);
    console.log(portfolioChoosed);
    if (portfolioChoosed) {
      if (!this.port_id)   // if Portfolio is null,undefined,''
        this.port_id = [];
      const index = this.port_id.indexOf(portfolioChoosed.Portfolio_ID);
      if (index === -1) {
        // if not present then add it
        this.port_id.push(portfolioChoosed.Portfolio_ID);
      }
      else { //  if item choosed is already selected then remove it.
        this.port_id.splice(index, 1);
      }
    }
    this.openAutocompleteDrpDwn('PortfolioDrpDwn');
  }


  removeSelectedPortfolio(item) {
    const index = this.port_id.indexOf(item);
    if (index !== -1) {
      this.port_id.splice(index, 1);
    }
  }


  getObjOf(arr, id, idName) {
    const obj = arr.find(item => item[idName] == id);
    return obj;
  }









  PrjSupport:{DisplayName:string,Emp_No:string}[]=[];
  isPrjSprtDrpDwnOpen:boolean=false;
  PrjResp:string;



  onPrjSprtSelected(e:any){
    const sprtChoosed=this.EmployeeList.find((p:any)=>p.Emp_No===e.option.value);
    if(sprtChoosed){
         const index=this.PrjSupport.indexOf(sprtChoosed);
         if(index===-1){
            // if not present then add it
            this.PrjSupport.push(sprtChoosed);
         }
         else{ //  if item choosed is already selected then remove it.
          this.PrjSupport.splice(index,1);
         }
    }
    this.openAutocompleteDrpDwn('PrjSprtDrpDwn');
  }

  removeSelectedPrjSprt(sprt:{Emp_No:string,DisplayName:string}){
    const index=this.PrjSupport.indexOf(sprt);
    if(index!==-1){
      this.PrjSupport.splice(index,1);
    }
  }

  isPrjNameValid:'TOOSHORT'|'VALID'='VALID';
  isPrjDesValid:'TOOSHORT'|'VALID'='VALID';


  isValidString(inputString: string, minWrds: number): 'TOOSHORT'|'VALID'  {
   if(inputString){

   let rg = new RegExp('^(?:\\S+\\s+){' + (minWrds - 1) + '}\\S+');
   const x=rg.test(inputString);

  return x ? 'VALID' : 'TOOSHORT';
   }
  return 'TOOSHORT'
  }

}






