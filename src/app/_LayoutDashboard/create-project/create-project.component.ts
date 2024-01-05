import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Router} from '@angular/router';
import { CreateprojectService } from 'src/app/_Services/createproject.service';
import { MatCalendar, MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CalendarOptions } from '@fullcalendar/angular';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import {  DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

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
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],

})
export class CreateProjectComponent implements OnInit {
  Current_user_ID:string;


  Authority_json:any;
  Category_json:any;
  Client_json:any;
  ProjectType_json:any;

  Team_json:any;


  owner_json:any;
  SubmissionType:any
  Responsible_json:any;

  allUser_json:any;






  PrjOwner:string;
  PrjResp:string;
  PrjAuth:string;
  PrjCrdtr:string;
  PrjInformer:string;
  PrjAuditor:string;
  PrjSupport:{Emp_Name:string,Emp_No:string}[]=[];


  todayDate: Date = new Date();






  PrjName:string='';
  Prjtype:string;
  PrjClient:string;
  PrjDes:string;
  PrjCategory:string;
  PrjVersion:string;
  PrjLocation:string;
  Prjstartdate:any
  Prjenddate:any
  Prjduration:number;
  prjsubmission:any
  _inputAttachments:any='';



  Daily_array: any = [];
  Week_array: any = [];
  Month_array: any = [];
  Quarter_array: any = [];
  Halfyear_array: any = [];
  Annual_array: any = [];
  Allocated_Hours:any=[]
  Allocated:any
  Annual_date:any
  maxlimit: boolean = true;
  _message: string;
  maxAllocation: number;
  _allocated:any
  maxDate:any

  constructor(private router: Router,private createProjectService:CreateprojectService) {


  }


  ngOnInit(): void {

    this.Current_user_ID = localStorage.getItem('EmpNo');
      this.createProjectService.NewGetProjectCreationDetails().subscribe((res)=>{
           console.log("NewGetProjectCreationDetails:",res);
           if(res)
           {

              this.Authority_json=JSON.parse(res[0].Authority_json);
              this.Category_json=JSON.parse(res[0].Category_json);
              this.Client_json=JSON.parse(res[0].Client_json);
              this.ProjectType_json=JSON.parse(res[0].ProjectType_json);
              this.Responsible_json=JSON.parse(res[0].Responsible_json);
              this.Team_json=JSON.parse(res[0].Team_json);
              this.allUser_json=JSON.parse(res[0].allUser_json);
              this.owner_json=JSON.parse(res[0].owner_json);
              this.SubmissionType=JSON.parse(res[0].SubmissionType)


              console.log("##=>",this.Team_json);

               this.PrjOwner=this.Responsible_json[0].OwnerEmpNo.trim();
               this.PrjResp=this.Responsible_json[0].ResponsibleNo.trim();
               this.PrjAuth=this.Responsible_json[0].ResponsibleNo.trim();
               this.PrjCrdtr=this.Team_json[0].CoordinatorNo.trim();
               this.PrjInformer=this.Team_json[0].InformerNo.trim();
               this.PrjSupport=[{Emp_Name:this.Team_json[0].SupportName.trim(),Emp_No:this.Team_json[0].SupportNo.trim()}];
           }


      });

  }


  setMaxAllocation() {

    if(this.Prjstartdate&&this.Prjenddate){
      this.Prjstartdate=new Date(this.Prjstartdate);
      this.Prjenddate=new Date(this.Prjenddate);
      const dffinsec=this.Prjstartdate.getTime()-this.Prjenddate.getTime()
      const Difference_In_Days=Math.abs(dffinsec)/(1000*3600*24);
      this.maxAllocation=(Difference_In_Days+1)*9;
    }
    else
    this._message = "Start Date/End date missing!!"

  }


  setMaxDate(){
    const d=new Date(this.Prjstartdate);
    d.setDate(d.getDate()+2);
    this.maxDate=d;

  }




  generateTimeIntervals(duration: number, interval: number, maxLimit: number): string[] {
    const timeArray: string[] = [];

    for (let i = 1; i <= duration; i++) {
      const hours: number = Math.floor(i * interval / 60);
      const minutes: number = i * interval % 60;

      // Check if the time exceeds the specified maximum limit
      if (hours < maxLimit || (hours === maxLimit && minutes === 0)) {
        const timeStr: string = `${hours.toString().padStart(2, '0')} Hr : ${minutes.toString().padStart(2, '0')} Mins`;
        timeArray.push(timeStr);
      } else {
        break;  // Exit the loop once the maximum limit is reached
      }
    }

    return timeArray;
  }

  timearrays() {
    this.Daily_array = this.generateTimeIntervals(4, 15, 1);
    console.log(this.Daily_array,"daily array")
    this.Week_array = this.generateTimeIntervals(8, 15, 2);
    this.Month_array = this.generateTimeIntervals(16, 15, 4);
    this.Quarter_array = this.generateTimeIntervals(32, 15, 8);
    this.Halfyear_array = this.generateTimeIntervals(40, 15, 10);
    console.log(this.Halfyear_array,"half year")
    this.Annual_array = this.generateTimeIntervals(64, 15, 16);
  }














 onFileChanged(e:any){
   this._inputAttachments=e.target.files[0].name;
 }

  Action_view(){
    document.getElementsByClassName("Adv-option")[0].classList.add("d-none");
    document.getElementsByClassName("Adv-option")[1].classList.add("d-none");
    document.getElementsByClassName("act-view-btns")[0].classList.remove("d-none");
    document.getElementsByClassName("my-crd")[0].classList.remove("d-none");
    document.getElementById("bc_pot").style.display = "block";
  }




  Back_Option(){

    document.getElementsByClassName("Adv-option")[0].classList.remove("d-none");
    document.getElementsByClassName("Adv-option")[1].classList.remove("d-none");
    document.getElementsByClassName("act-view-btns")[0].classList.add("d-none");
    document.getElementsByClassName("my-crd")[0].classList.add("d-none");
    document.getElementById("bc_pot").style.display = "none";
  }
  APPV_view(){
    document.getElementsByClassName("kt-assd-pds")[0].classList.add("d-none");
    document.getElementsByClassName("kt-prd-dtl")[0].classList.remove("d-none");
  }
  Add_actions(){
    document.getElementsByClassName("Add-Act-Move")[0].classList.add("container-fluid");
    document.getElementsByClassName("Add-Act-Move")[0].classList.remove("container");
    document.getElementsByClassName("kt-action-list")[1].classList.remove("d-none");
    document.getElementsByClassName("open-Action-Form")[0].classList.remove("d-none");
    document.getElementsByClassName("kt-portlet__foot")[1].classList.remove("d-none");
    document.getElementById("Action_btn_hide").style.display = "None";
    document.getElementsByClassName("add-w9")[0].classList.add("col-lg-7");
     document.getElementsByClassName("Add-Act-Move")[1].classList.remove("VW_60");
     document.getElementsByClassName("hide-act-btns")[0].classList.remove("d-none");
     document.getElementsByClassName("Project-Ct-full")[0].classList.remove("col-lg-12");
     $('.Add-Act-Move').addClass('container-fluid');
     $('.Add-Act-Move').removeClass('container');
     $('#act_bd_box').addClass('d-none');
     $('.kt-portlet__body').addClass('add-vhd-h');
  }
  Back_Option_Act(){
    document.getElementsByClassName("Add-Act-Move")[0].classList.remove("container-fluid");
    document.getElementsByClassName("Add-Act-Move")[0].classList.add("container");
    document.getElementsByClassName("kt-action-list")[1].classList.add("d-none");
    document.getElementsByClassName("open-Action-Form")[0].classList.add("d-none");
    document.getElementsByClassName("kt-portlet__foot")[1].classList.add("d-none");
    document.getElementById("Action_btn_hide").style.display = "block";
    document.getElementsByClassName("add-w9")[0].classList.remove("col-lg-7");
    $('#act_bd_box').addClass('d-none');
    $('.kt-portlet__body').removeClass('add-vhd-h');
  }
  Close_action(){
    // $('#act_bd_box').show();
    // document.getElementById("act_bd_box").style.display="block";
    $('#act_bd_box').removeClass('d-none');

    document.getElementById("act_bd_box").classList.remove("d-none");
    document.getElementsByClassName("Add-Act-Move")[1].classList.remove("container-fluid");
    document.getElementsByClassName("Add-Act-Move")[1].classList.add("container");
    document.getElementsByClassName("Add-Act-Move")[1].classList.add("VW_60");
    document.getElementsByClassName("open-Action-Form")[0].classList.add("d-none");
    document.getElementsByClassName("add-w9")[0].classList.remove("col-lg-7");
    document.getElementsByClassName("hide-act-btns")[0].classList.add("d-none");
    document.getElementsByClassName("Project-Ct-full")[0].classList.add("col-lg-12");
    document.getElementsByClassName("Project-Ct-full")[1].classList.remove("col-lg-7");
  }

  closeInfo() {

    document.getElementById("New_project_Add").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("actyInfobar_header").classList.remove("open_sidebar");
    //document.getElementById("sumdet").classList.remove("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["/backend/ProjectsSummary/"]);
  }

  Scratech_btn(){
    $('.np-step-2').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }
  back_to_options(){
    $('.np-step-1').removeClass('d-none');
    $('.np-step-2').addClass('d-none');
    $('.Assigned-projects-list').addClass('d-none');
  }

  Assigned_projects(){
    $('.Assigned-projects-list').removeClass('d-none');
    $('.np-step-1').addClass('d-none');
  }


  Move_to_add_team(){
    $('.right-side-dv').removeClass('d-none');
    $('.add_tema_tab').show();
    $('.Project_details_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(2)').addClass('active');
  }

  Back_to_project_details_tab(){
    $('.right-side-dv').addClass('d-none');
    $('.Project_details_tab').show();
    $('.add_tema_tab').hide();

    $('.sbs--basic .active').removeClass('finished');
    $('.sbs--basic li').addClass('active');
    $('.sbs--basic li:nth-child(2)').removeClass('active');
    $('.sbs--basic li:nth-child(3)').removeClass('active');
  }


  Move_to_Add_action_tab(){
    $('.action-left-view').removeClass('d-none');
    $('.Add_action_tab').show();
    $('.Project_details_tab,.add_tema_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(3)').addClass('active');
  }

  back_to_add_team(){
    $('.action-left-view').addClass('d-none');
    $('.right-side-dv').show();
    $('.Project_details_tab,.Add_action_tab').hide();
    $('.add_tema_tab').show();

    $('.sbs--basic .active').remove('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(2)').removeClass('finished');
    $('.sbs--basic li:nth-child(2)').addClass('active');
    $('.sbs--basic li:nth-child(3)').removeClass('active');
  }




// add Prj support mat autocomplete drpdwn code start here
@ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
isPrjSprtDrpDwnOpen:boolean=false;


  openPrjSprtDrpDwn(){
    this.isPrjSprtDrpDwnOpen = true;
    requestAnimationFrame(() => this.customTrigger.openPanel()); // open the panel
  }

  closePrjSprtDrpDwn(){
    this.isPrjSprtDrpDwnOpen = false;
    requestAnimationFrame(() => this.customTrigger.closePanel()); // close the panel
  }

  onPrjSprtSelected(e:any){

    const sprtChoosed=this.allUser_json.find((p:any)=>p.Emp_No===e.option.value);
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
    this.openPrjSprtDrpDwn();
  }

  removeSelectedPrjSprt(sprt:{Emp_No:string,Emp_Name:string}){
    const index=this.PrjSupport.indexOf(sprt);
    if(index!==-1){
      this.PrjSupport.splice(index,1);
    }
  }

// add Prj support mat autocomplete drpdwn code end here




// responsible field start
onResponsibleChanged(){
  if(this.PrjResp.trim()===this.PrjOwner.trim())
  {
    const selectedowr=this.owner_json.find((item)=>item.EmpNo===this.PrjOwner);
    const newowr=this.owner_json[this.owner_json.indexOf(selectedowr)+1];
    this.PrjOwner=newowr.EmpNo;
  }
  this.PrjAuth=this.Responsible_json[0].ResponsibleNo;

}

onProjectOwnerChanged(){
  if(this.PrjOwner.trim()===this.PrjResp.trim())
  {
    this.PrjResp=this.Responsible_json[0].ResponsibleNo;
  }
}

// responsible field end






}
