import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

  Authority_json:any;
  Category_json:any;
  Client_json:any;
  ProjectType_json:any;
  Responsible_json:any;
  Team_json:any;
  allUser_json:any;
  owner_json:any;

  todayDate: Date = new Date();






  PrjName:string='';
  Prjtype:string;
  PrjClient:string;
  PrjDes:string;
  PrjCategory:string;
  PrjVersion:string;
  PrjLocation:string;
  Prjstartdate:number;
  Prjenddate:number;
  Prjduration:number;
  _inputAttachments:any='';






  constructor(private router: Router,private createProjectService:CreateprojectService) {
  }


  ngOnInit(): void {
      this.createProjectService.NewGetProjectCreationDetails().subscribe((res)=>{
           console.log("NewGetProjectCreationDetails:",res);
           if(res)
           {

              this.Authority_json=JSON.parse(res[0].Authority_json);
              this.Category_json=JSON.parse(res[0].Category_json);
              console.log(this.Category_json,"category json");
              this.Client_json=JSON.parse(res[0].Client_json);
              console.log( this.Client_json,"clientjson");
              this.ProjectType_json=JSON.parse(res[0].ProjectType_json);
              console.log(this.ProjectType_json,"ProjectType_json");
              this.Responsible_json=JSON.parse(res[0].Responsible_json);
              this.Team_json=JSON.parse(res[0].Team_json);
              this.allUser_json=JSON.parse(res[0].allUser_json);
              this.owner_json=JSON.parse(res[0].owner_json);

           }
      });

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

  // Back_to_project_details_tab(){
  //   $('.add_tema_tab').hide();
  //   $('.Project_details_tab').show();
  //   $('.sbs--basic .active').removeClass('finished');
  //   $('.sbs--basic li').addClass('active');
  //   $('.sbs--basic li:nth-child(2)').removeClass('active');
  //   $('.sbs--basic li:nth-child(3)').removeClass('active');
  // }


  Move_to_Add_action_tab(){
    $('.action-left-view').removeClass('d-none');
    $('.Add_action_tab').show();
    $('.Project_details_tab,.add_tema_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(3)').addClass('active');
  }

  // back_to_add_team(){
  //   $('.add_tema_tab').show();
  //   $('.Project_details_tab,.Add_action_tab').hide();
  //   $('.sbs--basic .active').remove('finished');
  //   $('.sbs--basic li').removeClass('active');
  //   $('.sbs--basic li:nth-child(2)').removeClass('finished');
  //   $('.sbs--basic li:nth-child(2)').addClass('active');
  //   $('.sbs--basic li:nth-child(3)').removeClass('active');
  // }



}
