import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from 'src/app/_Services/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  _CurrentUser: string;
  _fullname: string;
  _EmpNo: string;
  OrganizationId:any;
  _CompNo:string;
  constructor(private router: Router,
    private authService: AuthService,
    public loadingBarServce:LoadingBarService) { }
  loadingBar_state = this.loadingBarServce.useRef('http');
  ngOnInit(): void {
    this._CurrentUser = localStorage.getItem('_Currentuser');
    this._fullname = localStorage.getItem('UserfullName');
    this._EmpNo = localStorage.getItem('EmpNo');
    this.OrganizationId=localStorage.getItem('OrganizationId');
    this._CompNo=sessionStorage.getItem("EmpCompNo");

    $(document).ready(function() {  
      // import('../../../assets/js/test.js');
      $('<script/>',{type:'text/javascript', src:'assets/js/test.js'}).appendTo('head');
    });
  }
  // AfterViewInit():void{
  //   alert('ok');  
  // }
  // ngAfterViewInit() {
    //We loading the player script on after view is loaded
    // import('node_modules/jquery/dist/jquery.min.js');
    // import('../../../assets/plugins/global/plugins.bundle.js');
  //  import('../../../assets/js/test.js');
   // alert("test");
  // }
  menuopen(){ 
    //document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--open-dropdown");
    // document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--hover");
    // document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--open");
  }
  logout() {
    this.loadingBar_state.stop();
    //console.log('logout');
    this.authService.logout();
    sessionStorage.clear();
    localStorage.clear();
    // console.log(this.authService.logout()); 
    this.router.navigate(['login']);
    // window.sessionStorage.clear();
    
    //localStorage.removeItem('EmpNo');
   //window.localStorage.clear();
    //console.log("local Storage----->", localStorage.getItem('EmpNo'));
    
  }
  clearSession(): void {
    localStorage.clear();
    sessionStorage.clear();
  }
  Btn_AssignTask() {
    let name: string = "AssignTask";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }
  Btn_UnplannedTask() {
    let name: string = "UnplannedTask";
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }
  
    
  // }
  // ngOnDestroy(){
  //   this.logout();
  // }
}
