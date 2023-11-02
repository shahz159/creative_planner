import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from 'src/app/_Services/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotificationService } from 'src/app/_Services/notification.service';
import tippy from 'node_modules/tippy.js';

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
    private authService: AuthService,private notifyService: NotificationService,
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
      $('<script/>',{type:'text/javascript', src:'/assets/js/test.js'}).appendTo('head');
    });

    tippy('#dashboard', {
      content: "Dashboard",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#performance', {
      content: "Performance dashboard",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#Portfolio', {
      content: "Portfolios",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#summary', {
      content: "Project summary",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,  
      placement:'right'
    });
    tippy('#timeline', {
      content: "Timeline",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#moredetpage', {
      content: "MoreInfo",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#todo', {
      content: "Process details",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#assign', {
      content: "Assign projects",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#runway', {
      content: "Runway tasks",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#settins', {
      content: "Settings",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#logout', {
      content: "Logout",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
    });
    tippy('#creative', {
      content: "Creative Planner",
      arrow: true,
      animation: 'scale-extreme',
      theme: 'gradient',
      animateFill: true,
      inertia: true,
      placement:'right'
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
    document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--open-dropdown");
    document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--hover");
    document.getElementById("kt-menu__item--submenu1").classList.toggle("kt-menu__item--open");
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
  
  Btn_Moreinfo() {
    let name: string = "Details/4001234"; 
    var url = document.baseURI + name;
    var myurl = `${url}`;
    var myWindow = window.open(myurl);
    myWindow.focus();
  }

  notinAction() {
    this.notifyService.showError("Development Under Maintainance", 'Failed');
  }

  
  menutoggle(){    
    document.getElementById("kt-bodyc").classList.toggle("kt-aside--show");
    document.getElementById("kt-bodyc").classList.toggle("kt-aside--minimize");
  }


  // }
  // ngOnDestroy(){
  //   this.logout();
  // }
}
