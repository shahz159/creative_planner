import { Component, OnInit } from '@angular/core';
import { Router, RouterLink , ActivatedRoute} from '@angular/router';
import { CreateprojectService } from 'src/app/_Services/createproject.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { ProjectMoreDetailsService } from 'src/app/_Services/project-more-details.service';
import { BsServiceService } from 'src/app/_Services/bs-service.service'
import { ProjectTypeService } from 'src/app/_Services/project-type.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
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



  constructor(private router: Router,
    private createProjectService:CreateprojectService ,
     private notifyService: NotificationService,
     public BsService: BsServiceService,
     public service: ProjectTypeService,
     
     ) {  }

  ngOnInit(): void {
    //console.log('assigntask_json',this.rejectm)
    this.GetAssignedTaskDetails()
      this.createProjectService.NewGetProjectCreationDetails().subscribe((res)=>{
          // console.log("NewGetProjectCreationDetails:",res);
           if(res)
           {
              this.Authority_json=JSON.parse(res[0].Authority_json);
              this.Category_json=JSON.parse(res[0].Category_json);
              this.Client_json=JSON.parse(res[0].Client_json)
              this.ProjectType_json=JSON.parse(res[0].ProjectType_json);
              this.Responsible_json=JSON.parse(res[0].Responsible_json);
              this.Team_json=JSON.parse(res[0].Team_json);
              this.allUser_json=JSON.parse(res[0].allUser_json);
              this.owner_json=JSON.parse(res[0].owner_json);
           }
      }) 

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


  closeInfos(){
    document.getElementById("Project_Details_Edit_forms").classList.remove("kt-quick-Project_edit_form--on");
  }

  closeInfo() {
    document.getElementById("New_project_Add").classList.remove("open_sidebar");
    document.getElementById("rightbar-overlay-create").style.display = "none";
    document.getElementById("rightbar-overlay").style.display = "none";
    document.getElementById("mysideInfobar12").classList.remove("kt-action-panel--on");
    document.getElementById("sumdet").classList.remove("position-fixed");
    document.getElementsByClassName("side_view")[0].classList.remove("position-fixed");
    this.router.navigate(["/backend/ProjectsSummary/"]);
  }

  Scratech_btn(){
    $('.Assigned-projects-list').addClass('d-none');
    $('.np-step-1').removeClass('d-none');
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



  /////////////////////////////////////////assign task start/////////////////////////////
  rejectm:any

  assigntask_json:any
  GetAssignedTaskDetails(){

    this.createProjectService.NewGetAssignedTaskDetails().subscribe
    ((res)=>{
      this.assigntask_json=JSON.parse(res[0].Assigntask_json)

      console.log('lllooooop',this.assigntask_json)
     
    })
  }

  notifyAssign(){
    this.notifyService.showInfo("You don't have any assigned project", "Please add a project!");
   
  }


  bind_Project:any
  start_Date:any
  date_str:any
  duration:any
  end_Date:any
  date_End:any
  task_Name:any
  CreateName:any
  unique_id:number
  projectType:any
  onButtonClick(value:any,id:number){
    this.bind_Project = [value]
    this.duration=this.bind_Project[0].Duration
    this.start_Date=this.bind_Project[0].Start_Date
    this.date_str = moment(this.start_Date).format("MM/DD/YYYY");
    this.end_Date=this.bind_Project[0].End_Date
    this.date_End = moment(this.end_Date).format("MM/DD/YYYY");
    this.task_Name=this.bind_Project[0].Task_Name
    this.CreateName=this.bind_Project[0].Created_Name
    this.unique_id=id
    this.projectType=this.bind_Project[0].Project_Type
  }


   /////////////////////////////////////////assign task End/////////////////////////////

  /////////////////////////////////////////add Project End/////////////////////////////


  showSideBar() {
   
    // this.BsService.SetNewPojectCode('CRS184037');
    this.router.navigate(["./backend/ProjectsSummary/createproject/ActionToProject/5"]);

    document.getElementById("mysideInfobar12").classList.add("kt-action-panel--on");
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
    document.getElementById("rightbar-overlay-create").style.display = "block";
    $("#mysideInfobar12").scrollTop(0);
  }
  /////////////////////////////////////////add Project End/////////////////////////////

   ///////////////////////////////////////// Project Edit start /////////////////////////////
  

  Project_details_edit() {
    document.getElementById("Project_Details_Edit_forms").classList.add("kt-quick-Project_edit_form--on");
    document.getElementById("rightbar-overlay").style.display = "block";
    document.getElementsByClassName("side_view")[0].classList.add("position-fixed");
   
    $("#mysideInfobar12").scrollTop(0);
  //  this.getResponsibleActions();
  //  this.initializeSelectedValue()
  }

 ///////////////////////////////////////// Project Edit End /////////////////////////////
}
