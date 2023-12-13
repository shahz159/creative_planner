import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {


    
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

  Move_to_add_team(){
    $('.add_tema_tab').show();
    $('.Project_details_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(2)').addClass('active');
  }
  Back_to_project_details_tab(){
    $('.add_tema_tab').hide();
    $('.Project_details_tab').show();
    $('.sbs--basic .active').removeClass('finished');
    $('.sbs--basic li').addClass('active');
    $('.sbs--basic li:nth-child(2)').removeClass('active');
    $('.sbs--basic li:nth-child(3)').removeClass('active');
  }


  Move_to_Add_action_tab(){
    $('.Add_action_tab').show();
    $('.Project_details_tab,.add_tema_tab').hide();
    $('.sbs--basic .active').addClass('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(3)').addClass('active');
  }

  back_to_add_team(){
    $('.add_tema_tab').show();
    $('.Project_details_tab,.Add_action_tab').hide();
    $('.sbs--basic .active').remove('finished');
    $('.sbs--basic li').removeClass('active');
    $('.sbs--basic li:nth-child(2)').removeClass('finished');
    $('.sbs--basic li:nth-child(2)').addClass('active');
    $('.sbs--basic li:nth-child(3)').removeClass('active');
  }


}
