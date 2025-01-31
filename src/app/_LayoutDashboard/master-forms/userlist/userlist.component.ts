
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { event } from 'jquery';
import { Subject } from 'rxjs';
import { UserRegistrationDTO } from '../../../_Models/user-registration-dto';
import { UserRegistrationService } from '../../../_Services/user-registration.service';
import { ConfirmDialogComponent } from '../confirmdialog/confirmdialog.component';
import { UserDTO } from '../../../_Models/user-dto';
import { BehaviorSubject, Observable } from 'rxjs';
import tippy from 'node_modules/tippy.js';
import * as $ from 'jquery';
import { UserPolicyMasterDTO } from '../../../_Models/user-policy-master-dto';
import { UserPolicyMasterServiceService } from '../../../_Services/user-policy-master-service.service';
import { Console } from 'console';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  currentUserSubject: any;
  currentUser: any;
  public get currentUserValue(): UserDTO {
    this.currentUserSubject = new BehaviorSubject<UserDTO>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();   
    return this.currentUserSubject.value[0];
  }
  dtTrigger: Subject<any> = new Subject<any>();
  UserList: any[];
  dtOptions: any = {};
  returnUrl: string;
  UserId: number;
  email: string;
  _obj: UserRegistrationDTO;
  UserDetailsarray: [];
  ObjgetCompanyList: any;
  ObjgetDepartmentList: any;
  ObjgetRoleList: any;
  ObjgetDesignationList: any;
  ObjgetReportingUser: any;
  ObjgetcountryList: any;
  ObjCountryCode: string;
  GlobalUsers: any;
  lstCities: any;
  Fname: string;
  mname: string;
  lname: string;
  Display: string;
  phonenum: number;
  address: string;
  cunname: number;
  cty: number;
  code: number;
  tele1: any;
  tele2: any;

  _CurrentpageRecords: number
  countrycode: string = "";
  companyid: number;
  Positionid: number;
  dept: number;
  role: number;
  login: string;
  Empid: number;
  Repuser: number;
  desig: number;
  global: boolean;
  iner: boolean;
  IsArchiveApproval: boolean;
  IsArchiveDownload: boolean;
  IsStreamPlannerDownload:boolean
  IsCommunication: boolean;
  status: boolean;
  SelectedUserId: number;
  String_status: string;
  MinFirstNameLength: boolean;
  MinLastNameLength: boolean;
  MinPhoneLength: boolean;
  MinAddressLength: boolean;
  MinPinLength = true;
  Usersearch: string = '';
  IsActive: any;
  activePage: number;
  FirstPage: number
  TotalrecordsList: any;
  TotalRecords: number;
  PageNumber: number;
  PageSize: number;
  LastPage: number;
  NextPage: Boolean = false;
  _Search: string;
  closeIcon: boolean;
  CompanyId: any;
  ReportingUserId: number;
  IsCommunicationDownload: any;
  _OrderBy: number;
  // _roleid: number;
  lastPagerecords: number;
  _obj1: UserPolicyMasterDTO;
  CompanyDropdownList: any;
  DepartmentDropdownList: any;
  DesignationDropdownList: any;
  CheckCompany = [];
  CheckDepartment = [];
  CheckDesignation = [];
  _globalsers: any[] = [];
  txtSearch: string;
  currentLang:"ar"|"en"="ar";
  UserSearch:string;
  FiltersSelected: boolean;
  FilterSearch:string;
  SelectGlobalUsers:string;
  constructor(public _services: UserRegistrationService
    , private route: ActivatedRoute,
    public service: UserPolicyMasterServiceService,
    private router: Router, private _snackBar: MatSnackBar, private dialog: MatDialog,
    // public services: UserRegistrationService,
    private translate:TranslateService,
    private renderer: Renderer2,
   @Inject(DOCUMENT) private document: Document,
  ) {
    this.UserList = [];
    this._obj = new UserRegistrationDTO();
    this.PageSize = 10;
    this._Search = "";
    this.CompanyDropdownList = [];
    this.DepartmentDropdownList = [];
    this.DesignationDropdownList = [];
    HeaderComponent.languageChanged.subscribe((lang)=>{
      localStorage.setItem('language',lang);
      this.translate.use(lang);
      this.currentLang = lang ? lang : 'en';
    this.document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    this.UserSearch = lang === 'en' ? 'Search' : 'يبحث';
    this.FilterSearch = lang === 'en' ? 'Search Company, Department, Designation...' : 'البحث عن الشركة، القسم، المسمى الوظيفي...';
    this.SelectGlobalUsers = lang === 'en' ? 'Select Global Users' : 'حدد المستخدمين العالميين';
    })

  }
  //private currentUserSubject: BehaviorSubject<UserDTO>;

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void { 
 const lang:any = localStorage.getItem('language');
    this.translate.use(lang)
    this.currentLang = lang ? lang : 'en';
    this.document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
    this.UserSearch = lang === 'en' ? 'Search' : 'يبحث';
    this.FilterSearch = lang === 'en' ? 'Search Company, Department, Designation...' : 'البحث عن الشركة، القسم، المسمى الوظيفي...';
    this.SelectGlobalUsers = lang === 'en' ? 'Select Global Users' : 'حدد المستخدمين العالميين';
    if(lang == 'ar'){
      this.renderer.addClass(document.body, 'kt-body-arabic');
    }else if (lang == 'en'){
      this.renderer.removeClass(document.body, 'kt-body-arabic');
    }
    this._OrderBy = 2;
    //alert(this.currentUserValue.RoleId);
    // this._roleid = this..RoleId;
    ;
    setTimeout(function () { $("#hideDiv").fadeOut(1500); }, 3000);
    this._CurrentpageRecords = 0;
    this.activePage = 1;
    this.FirstPage = 1;
    this.countrycode = "+1"
    this.MinFirstNameLength = true;
    this.MinPhoneLength = true;
    this.MinAddressLength = true;
    this.MinPinLength = true;
    this.MinLastNameLength = true;
    this.NextPage = false;
    // this.closeIcon=false;
    // this.GetUserList();
    this.GetUserList();
    this.CompanyandDepartmenrandDesignation();
    tippy('.tips', {
      arrow: true,
      animation: 'scale-extreme',
      //animation: 'tada',
      animateFill: true,
      inertia: true,
    });

    $(document).on('ready', function () {
      if ($('#option-two').is(":checked")) {
        $('.radio-group').addClass("br-dr");
      } else {
        $('.radio-group').removeClass("br-dr");
      }
    });

    $(document).ready(function () {
      $(".close-icn").hide();
      $("#txtMainSearch").on("keyup", function () {
        $(".close-icn").show();
      });
    });
    // $('.radio-group').on('click', function() {
    //   if ($('#option-two').prop('checked')) {
    //   $('.radio-group').addClass("bg-danger");
    //   }
    //   else{
    //     return;
    //   }
    // });

  }
  getcities(CountryId) {
    this._obj.CountryId = CountryId;
    this._services.GetCities(this._obj)
      .subscribe(data => {
        this.lstCities = data;
      })
  }
  CompanyandDepartmenrandDesignation() {
    this.service.GetCompanyList()
      .subscribe(data => {
        this._obj1 = data as UserPolicyMasterDTO;
        this.CompanyDropdownList = this._obj1.Data["CompanyList"];
        this.DepartmentDropdownList = this._obj1.Data["JDepartmentList"];
        this.DesignationDropdownList = this._obj1.Data["JDesignationList"];
      })
  }
  SortUsers(value) {
    this._OrderBy = value;
    this.GetUserList();
  }


  GetUserList() {     debugger
    this._obj.message = this.Usersearch
    this._obj.PageSize = this.PageSize;
    this._obj.PageNumber = this.activePage;
    this._obj.Sortby = this._OrderBy;
    this.CheckCompany = [];
    this.CheckDepartment = [];
    this.CheckDesignation = [];
    this.FiltersSelected = false;
    this.CompanyDropdownList.forEach(element => {
      if (element.isChecked) {
        this.FiltersSelected = true;
        this.CheckCompany.push(element.CompanyId)
      }
    });
    this.DepartmentDropdownList.forEach(element => {
      if (element.isChecked) {
        this.FiltersSelected = true;
        this.CheckDepartment.push(element.DepartmentId)
      }
    });
    this.DesignationDropdownList.forEach(element => {
      if (element.isChecked) {
        this.FiltersSelected = true;
        this.CheckDesignation.push(element.DesignationId);
      }
    });
    this._obj.CompanyIds = this.CheckCompany.toString();
    this._obj.DepartmentIds = this.CheckDepartment.toString();
    this._obj.DesignationIds = this.CheckDesignation.toString();

    console.log("createdby:",this.currentUserValue.createdby);
    console.log('organizationid',this.currentUserValue.organizationid);
    this._services.GetUserListByPagination(this._obj, this.currentUserValue.createdby, this.currentUserValue.organizationid).subscribe(data => {
      this._obj = data as UserRegistrationDTO;    debugger
      this.UserList = this._obj.Data["UserList"];
      // console.log(this.UserList, "user list");
      this.TotalrecordsList = this._obj.Data["TotalRecords"];
      this.TotalRecords = this.TotalrecordsList[0].TotalRecords;
      this._CurrentpageRecords = this.UserList.length;
      if (this.activePage == this.LastPage) {
        this.lastPagerecords = 10;
      }
      let _vl = this.TotalRecords / this.PageSize;
      let _vl1 = _vl % 1;
      if (_vl1 > 0.000) {
        this.LastPage = Math.trunc(_vl) + 1;
      }
      else {
        this.LastPage = Math.trunc(_vl);
      }
      this.txtSearch = "";

    });
  }
  OnRest() {
    this.CompanyDropdownList.forEach(element => {
      element.isChecked = false;
    });
    this.DepartmentDropdownList.forEach(element => {
      element.isChecked = false;
    });
    this.DesignationDropdownList.forEach(element => {
      element.isChecked = false;
    });
  }
  ClearFilters() {
    this._obj.Sortby = 2;
    this._obj.message = "";
    this._obj.PageSize = 10;
    this._obj.PageNumber = 1;
    this.CheckCompany = [];
    this.CheckDepartment = [];
    this.CheckDesignation = [];
    this.FiltersSelected = false;
    this.CompanyDropdownList.forEach(element => {
      element.isChecked = false;
    });
    this.DepartmentDropdownList.forEach(element => {
      element.isChecked = false;
    });
    this.DesignationDropdownList.forEach(element => {
      element.isChecked = false;
    });

    this.CompanyDropdownList.forEach(element => {
      if (element.isChecked) {
        this.CheckCompany.push(element.CompanyId)
      }
    });
    this.DepartmentDropdownList.forEach(element => {
      if (element.isChecked) {
        this.CheckDepartment.push(element.DepartmentId)
      }
    });
    this.DesignationDropdownList.forEach(element => {
      if (element.isChecked) {
        this.CheckDesignation.push(element.DesignationId);
      }
    });
    this._obj.CompanyIds = this.CheckCompany.toString();
    this._obj.DepartmentIds = this.CheckDepartment.toString();
    this._obj.DesignationIds = this.CheckDesignation.toString();
    this._services.GetUserListByPagination(this._obj, this.currentUserValue.createdby, this.currentUserValue.organizationid).subscribe(data => {
      this._obj = data as UserRegistrationDTO;
      this.UserList = this._obj.Data["UserList"]
      this.TotalrecordsList = this._obj.Data["TotalRecords"];
      this.TotalRecords = this.TotalrecordsList[0].TotalRecords;

      this._CurrentpageRecords = this.UserList.length;
        this.Usersearch = "";
      if (this.activePage == this.LastPage) {
        this.lastPagerecords = 10;
      }
      let _vl = this.TotalRecords / this.PageSize;
      let _vl1 = _vl % 1;
      if (_vl1 > 0.000) {
        this.LastPage = Math.trunc(_vl) + 1;
      }
      else {
        this.LastPage = Math.trunc(_vl);
      }
    });
  }

  oncompanycheck(event) {
    this.CompanyDropdownList.forEach(element => {
      if (element.CompanyId == event.target.value) {
        element.isChecked = event.target.checked;
      }
    });

  }
  removeCompany(CompanyId) {
    this.CompanyDropdownList.forEach(element => {
      if (element.CompanyId == CompanyId) {
        element.isChecked = false
      }
    });
  }
  onDepartmentcheck(event) {
    this.DepartmentDropdownList.forEach(element => {
      if (element.DepartmentId == event.target.value) {
        element.isChecked = event.target.checked;
      }
    });
  }
  removeDepartment(DepartmentId) {
    this.DepartmentDropdownList.forEach(element => {
      if (element.DepartmentId == DepartmentId) {
        element.isChecked = false;
      }
    });
  }
  onDesignation(event) {

    this.DesignationDropdownList.forEach(element => {
      if (element.DesignationId == event.target.value) {
        element.isChecked = event.target.checked;
      }
    });
  }
  RemoveDesignation(DesignationId) {
    this.DesignationDropdownList.forEach(element => {
      if (element.DesignationId == DesignationId) {
        element.isChecked = false;
      }
    });
  }
  
  Search() {
    var newValue = (<HTMLInputElement>document.getElementById("txtMainSearch")).value;
    this._Search = newValue;
    this.activePage = 1;
    this.GetUserList();
  }

  handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Backspace' && !this.Usersearch) {
      this.GetUserList();
    }
  }


  ReBindData() {
    // this.closeIcon=true;
    this.Usersearch = "";
    // this.GetUserList();
    this.GetUserList();

    // console.log(this.GetUserList,'123')
  }

  onCountryChange(event) {
    this.countrycode = "+" + event.dialCode.toString();

  }
  closeInfo() {
    document.getElementById("proview").classList.remove("kt-quick-panel--on");
    document.getElementById("scrd").classList.remove("position-fixed");
    document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.remove("d-block");
  }
  editprof() {
    document.getElementById("proset").classList.toggle("pronew");
    document.getElementById("prodetails").classList.toggle("pronew");
    var procla = document.getElementById("proset");
    var data = document.getElementById("editpro");
    if ($(procla).hasClass("pronew")) {
      data.innerHTML = "View Profile";
    }
    else {
      data.innerHTML = "Edit Profile";
    }
    // if (data.innerHTML === "Edit Profile") {
    //   data.innerHTML = "View Profile";
    // } else {
    //   data.innerHTML = "Edit Profile";
    // }
    document.querySelector("tabs_li").classList.toggle("tab_one");


  }
 
  sidev(UserId) {
    document.getElementById("proview").classList.add("kt-quick-panel--on");
    document.getElementById("scrd").classList.add("position-fixed");
    document.getElementsByClassName("kt-aside-menu-overlay")[0].classList.add("d-block");
    this.SelectedUserId = UserId;
    this._obj.UserId = UserId;

// waste testing 

const data:any={
  "Status": true,
  "Message": "Success.",
  "Data": {
      "UserDetails": [
          {
              "UserId": 2320,
              "UserName": "555666",
              "FirstName": "Rohit ",
              "MiddleName": "",
              "LastName": "Sharma",
              "Email": "Rohit78@gmail.com",
              "Telephone1": "0",
              "Telephone2": "0",
              "Phone": "8932828",
              "CountryCode": "+1",
              "Address": "Mumbai",
              "CompanyId": 13,
              "RoleId": 662,
              "CountryId": 101,
              "CityId": 5313,
              "Country": "India",
              "City": "24 Parganas (s)",
              "PinCode": 233232,
              "IsActive": true,
              "DepartmentId": 154,
              "EmployeeId": 23232,
              "ReportingUserId": 31,
              "ReportingUserName": "Administrator",
              "DesignationId": 825,
              "PositionId": 3,
              "IsGlobalUser": false,
              "IsInterCompany": false,
              "CompanyName": "Company 1",
              "departmentname": "Angular",
              "RoleName": "Angular 12",
              "DesignationName": "Ang_DMS",
              "IsArchiveApproval": false,
              "DisplayName": "Rohit ",
              "IsCommunicationDownload": false,
              "IsArchiveDownload": false,
              "IsStreamPlannerDownload": false,
              "OutOfNetworkUsersJson": "[]"
          }
      ],
      "City": [
          {
              "City": "24 Parganas (n)",
              "CityId": 5312
          },
          {
              "City": "24 Parganas (s)",
              "CityId": 5313
          },
          {
              "City": "Abhayapuri",
              "CityId": 316
          },
          {
              "City": "Abiramam",
              "CityId": 3551
          },
          {
              "City": "Abohar",
              "CityId": 3127
          },
          {
              "City": "Abrama",
              "CityId": 779
          },
          {
              "City": "Abu Road",
              "CityId": 3294
          },
          {
              "City": "Achabal",
              "CityId": 1273
          },
          {
              "City": "Achalpur",
              "CityId": 2474
          },
          {
              "City": "Achampet",
              "CityId": 4442
          },
          {
              "City": "Achampudur",
              "CityId": 3552
          },
          {
              "City": "Acharapakkam",
              "CityId": 3553
          },
          {
              "City": "Acharipallam",
              "CityId": 3554
          },
          {
              "City": "Achhalda",
              "CityId": 4531
          },
          {
              "City": "Achhnera",
              "CityId": 4532
          },
          {
              "City": "Achipatti",
              "CityId": 3555
          },
          {
              "City": "Adalaj",
              "CityId": 780
          },
          {
              "City": "Adampur",
              "CityId": 3128
          },
          {
              "City": "Adari",
              "CityId": 4533
          },
          {
              "City": "Addanki",
              "CityId": 5
          },
          {
              "City": "Adikaratti",
              "CityId": 3556
          },
          {
              "City": "Adilabad",
              "CityId": 4443
          },
          {
              "City": "Adimaly",
              "CityId": 1843
          },
          {
              "City": "Adiramapattinam",
              "CityId": 3557
          },
          {
              "City": "Adityana",
              "CityId": 781
          },
          {
              "City": "Adityanagar",
              "CityId": 1518
          },
          {
              "City": "Adityapatna",
              "CityId": 1519
          },
          {
              "City": "Adityapur",
              "CityId": 1350
          },
          {
              "City": "Adivivaram",
              "CityId": 6
          },
          {
              "City": "Adoni",
              "CityId": 7
          },
          {
              "City": "Adoor",
              "CityId": 1844
          },
          {
              "City": "Adra",
              "CityId": 5314
          },
          {
              "City": "Adur",
              "CityId": 1845
          },
          {
              "City": "Aduturai",
              "CityId": 3558
          },
          {
              "City": "Advana",
              "CityId": 782
          },
          {
              "City": "Adyar",
              "CityId": 3559
          },
          {
              "City": "Afzalgarh",
              "CityId": 4534
          },
          {
              "City": "Afzalpur",
              "CityId": 1520
          },
          {
              "City": "Aganampudi",
              "CityId": 8
          },
          {
              "City": "Agar",
              "CityId": 2070
          },
          {
              "City": "Agaram",
              "CityId": 3560
          },
          {
              "City": "Agartala",
              "CityId": 4508
          },
          {
              "City": "Agarwal Mandi",
              "CityId": 4535
          },
          {
              "City": "Agasthiswaram",
              "CityId": 3561
          },
          {
              "City": "Agethi",
              "CityId": 2065
          },
          {
              "City": "Agra",
              "CityId": 4536
          },
          {
              "City": "Agra Cantonment",
              "CityId": 4537
          },
          {
              "City": "Aheri",
              "CityId": 2475
          },
          {
              "City": "Ahiwara",
              "CityId": 595
          },
          {
              "City": "Ahmadnagar Cantonment",
              "CityId": 2476
          },
          {
              "City": "Ahmadpur",
              "CityId": 2477
          },
          {
              "City": "Ahmadpur",
              "CityId": 5315
          },
          {
              "City": "Ahmedabad",
              "CityId": 783
          },
          {
              "City": "Ahmedgarh",
              "CityId": 3129
          },
          {
              "City": "Ahmednagar",
              "CityId": 2478
          },
          {
              "City": "Ahraura",
              "CityId": 4538
          },
          {
              "City": "Ahwa",
              "CityId": 784
          },
          {
              "City": "Aiho",
              "CityId": 5316
          },
          {
              "City": "Ailum",
              "CityId": 4539
          },
          {
              "City": "Air Force Area",
              "CityId": 4540
          },
          {
              "City": "Aistala",
              "CityId": 5317
          },
          {
              "City": "Aizawl",
              "CityId": 2935
          },
          {
              "City": "Ajaigarh",
              "CityId": 2071
          },
          {
              "City": "Ajhuwa",
              "CityId": 4541
          },
          {
              "City": "Ajjampur",
              "CityId": 1521
          },
          {
              "City": "Ajjaram",
              "CityId": 9
          },
          {
              "City": "Ajmer",
              "CityId": 3295
          },
          {
              "City": "Ajnala",
              "CityId": 3130
          },
          {
              "City": "Ajra",
              "CityId": 2479
          },
          {
              "City": "Akalgarh",
              "CityId": 3131
          },
          {
              "City": "Akalkot",
              "CityId": 2480
          },
          {
              "City": "Akaltara",
              "CityId": 596
          },
          {
              "City": "Akathiyur",
              "CityId": 1846
          },
          {
              "City": "Akbarpur",
              "CityId": 4542
          },
          {
              "City": "Akhnur",
              "CityId": 1274
          },
          {
              "City": "Akividu",
              "CityId": 10
          },
          {
              "City": "Akkalkuwa",
              "CityId": 2481
          },
          {
              "City": "Akkaraipettai",
              "CityId": 3562
          },
          {
              "City": "Akkarampalle",
              "CityId": 11
          },
          {
              "City": "Akkayapalle",
              "CityId": 12
          },
          {
              "City": "Akkireddipalem",
              "CityId": 13
          },
          {
              "City": "Aklera",
              "CityId": 3296
          },
          {
              "City": "Akoda",
              "CityId": 2072
          },
          {
              "City": "Akodia",
              "CityId": 2073
          },
          {
              "City": "Akola",
              "CityId": 2482
          },
          {
              "City": "Akot",
              "CityId": 2483
          },
          {
              "City": "Alagappapuram",
              "CityId": 3563
          },
          {
              "City": "Alagapuri",
              "CityId": 3564
          },
          {
              "City": "Alampalayam",
              "CityId": 3565
          },
          {
              "City": "Alampur",
              "CityId": 14
          },
          {
              "City": "Alampur",
              "CityId": 2074
          },
          {
              "City": "Aland",
              "CityId": 1522
          },
          {
              "City": "Alandi",
              "CityId": 2484
          },
          {
              "City": "Alandur",
              "CityId": 3566
          },
          {
              "City": "Alang",
              "CityId": 785
          },
          {
              "City": "Alangad",
              "CityId": 1847
          },
          {
              "City": "Alanganallur",
              "CityId": 3567
          },
          {
              "City": "Alangayam",
              "CityId": 3568
          },
          {
              "City": "Alangudi",
              "CityId": 3569
          },
          {
              "City": "Alangulam",
              "CityId": 3570
          },
          {
              "City": "Alanthurai",
              "CityId": 3571
          },
          {
              "City": "Alapakkam",
              "CityId": 3572
          },
          {
              "City": "Alappuzha",
              "CityId": 1848
          },
          {
              "City": "Alapur",
              "CityId": 4543
          },
          {
              "City": "Alawalpur",
              "CityId": 3132
          },
          {
              "City": "Aldona",
              "CityId": 708
          },
          {
              "City": "Alibag",
              "CityId": 2485
          },
          {
              "City": "Aliganj",
              "CityId": 4544
          },
          {
              "City": "Aligarh",
              "CityId": 4545
          },
          {
              "City": "Alipur Duar",
              "CityId": 5318
          },
          {
              "City": "Alipur Duar Railway Junction",
              "CityId": 5319
          },
          {
              "City": "Alirajpur",
              "CityId": 2075
          },
          {
              "City": "Allahabad",
              "CityId": 4546
          },
          {
              "City": "Allahabad Cantonment",
              "CityId": 4547
          },
          {
              "City": "Allahganj",
              "CityId": 4548
          },
          {
              "City": "Allapalli",
              "CityId": 2486
          },
          {
              "City": "Allapuram",
              "CityId": 3573
          },
          {
              "City": "Almatti Sitimani",
              "CityId": 1523
          },
          {
              "City": "Almora",
              "CityId": 5219
          },
          {
              "City": "Almora Cantonment",
              "CityId": 5220
          },
          {
              "City": "Alnavar",
              "CityId": 1524
          },
          {
              "City": "Along",
              "CityId": 299
          },
          {
              "City": "Alore",
              "CityId": 2487
          },
          {
              "City": "Alot",
              "CityId": 2076
          },
          {
              "City": "Alpur",
              "CityId": 5320
          },
          {
              "City": "Altinho",
              "CityId": 709
          },
          {
              "City": "Alur",
              "CityId": 1525
          },
          {
              "City": "Alur",
              "CityId": 3574
          },
          {
              "City": "Aluva",
              "CityId": 1849
          },
          {
              "City": "Alwar",
              "CityId": 3297
          },
          {
              "City": "Alwar Tirunagari",
              "CityId": 3575
          },
          {
              "City": "Alwarkurichi",
              "CityId": 3576
          },
          {
              "City": "Amalapuram",
              "CityId": 15
          },
          {
              "City": "Amalhara",
              "CityId": 5321
          },
          {
              "City": "Amalner",
              "CityId": 2488
          },
          {
              "City": "Amanganj",
              "CityId": 2077
          },
          {
              "City": "Amanpur",
              "CityId": 4549
          },
          {
              "City": "Amarkantak",
              "CityId": 2078
          },
          {
              "City": "Amarpatan",
              "CityId": 2079
          },
          {
              "City": "Amarpur",
              "CityId": 448
          },
          {
              "City": "Amarpur",
              "CityId": 4509
          },
          {
              "City": "Amarwara",
              "CityId": 2080
          },
          {
              "City": "Ambad",
              "CityId": 2489
          },
          {
              "City": "Ambada",
              "CityId": 2081
          },
          {
              "City": "Ambagarh Chauki",
              "CityId": 597
          },
          {
              "City": "Ambah",
              "CityId": 2082
          },
          {
              "City": "Ambahta",
              "CityId": 4550
          },
          {
              "City": "Ambaji",
              "CityId": 786
          },
          {
              "City": "Ambajogai",
              "CityId": 2490
          },
          {
              "City": "Ambala",
              "CityId": 1096
          },
          {
              "City": "Ambala Cantt",
              "CityId": 1097
          },
          {
              "City": "Ambaliyasan",
              "CityId": 787
          },
          {
              "City": "Ambasamudram",
              "CityId": 3577
          },
          {
              "City": "Ambassa",
              "CityId": 4510
          },
          {
              "City": "Ambernath",
              "CityId": 2491
          },
          {
              "City": "Ambikanagara",
              "CityId": 1526
          },
          {
              "City": "Ambikapur",
              "CityId": 317
          },
          {
              "City": "Ambikapur",
              "CityId": 598
          },
          {
              "City": "Ambivali Tarf Wankhal",
              "CityId": 2492
          },
          {
              "City": "Ambur",
              "CityId": 3578
          },
          {
              "City": "Amet",
              "CityId": 3298
          },
          {
              "City": "Amethi",
              "CityId": 4551
          },
          {
              "City": "Amgaon",
              "CityId": 2493
          },
          {
              "City": "Amguri",
              "CityId": 318
          },
          {
              "City": "Amila",
              "CityId": 4552
          },
          {
              "City": "Amilo",
              "CityId": 4553
          },
          {
              "City": "Aminagar Sarai",
              "CityId": 4554
          },
          {
              "City": "Aminagar Urf Bhurbaral",
              "CityId": 4555
          },
          {
              "City": "Amini",
              "CityId": 2066
          },
          {
              "City": "Amkula",
              "CityId": 5322
          },
          {
              "City": "Amla",
              "CityId": 2083
          },
          {
              "City": "Amlabad",
              "CityId": 1351
          },
          {
              "City": "Amlagora",
              "CityId": 5323
          },
          {
              "City": "Amlai",
              "CityId": 2084
          },
          {
              "City": "Amli",
              "CityId": 702
          },
          {
              "City": "Amloh",
              "CityId": 3133
          },
          {
              "City": "Ammainaickanur",
              "CityId": 3579
          },
          {
              "City": "Ammaparikuppam",
              "CityId": 3580
          },
          {
              "City": "Ammapettai",
              "CityId": 3581
          },
          {
              "City": "Ammavarikuppam",
              "CityId": 3582
          },
          {
              "City": "Ammur",
              "CityId": 3583
          },
          {
              "City": "Amod",
              "CityId": 788
          },
          {
              "City": "Amodghata",
              "CityId": 5324
          },
          {
              "City": "Amraudha",
              "CityId": 4556
          },
          {
              "City": "Amravati",
              "CityId": 2494
          },
          {
              "City": "Amreli",
              "CityId": 789
          },
          {
              "City": "Amritsar",
              "CityId": 3134
          },
          {
              "City": "Amritsar Cantonment",
              "CityId": 3135
          },
          {
              "City": "Amroha",
              "CityId": 4557
          },
          {
              "City": "Amroli",
              "CityId": 790
          },
          {
              "City": "Amtala",
              "CityId": 5325
          },
          {
              "City": "Amudalavalasa",
              "CityId": 16
          },
          {
              "City": "Amur",
              "CityId": 17
          },
          {
              "City": "Anaimalai",
              "CityId": 3584
          },
          {
              "City": "Anaiyur",
              "CityId": 3585
          },
          {
              "City": "Anakapalle",
              "CityId": 18
          },
          {
              "City": "Anakaputhur",
              "CityId": 3586
          },
          {
              "City": "Anand",
              "CityId": 791
          },
          {
              "City": "Anand Nagar",
              "CityId": 319
          },
          {
              "City": "Anandapur",
              "CityId": 2966
          },
          {
              "City": "Anandnagar",
              "CityId": 4558
          },
          {
              "City": "Anandpur Sahib",
              "CityId": 3136
          },
          {
              "City": "Anantapur",
              "CityId": 19
          },
          {
              "City": "Ananthapuram",
              "CityId": 3587
          },
          {
              "City": "Anantnag",
              "CityId": 1275
          },
          {
              "City": "Ancharakandy",
              "CityId": 1850
          },
          {
              "City": "Andada",
              "CityId": 792
          },
          {
              "City": "Andanappettai",
              "CityId": 3588
          },
          {
              "City": "Andipalayam",
              "CityId": 3589
          },
          {
              "City": "Andippatti",
              "CityId": 3590
          },
          {
              "City": "Andole",
              "CityId": 20
          },
          {
              "City": "Andro",
              "CityId": 2884
          },
          {
              "City": "Androth Island",
              "CityId": 2067
          },
          {
              "City": "Andul",
              "CityId": 5326
          },
          {
              "City": "Anekal",
              "CityId": 1527
          },
          {
              "City": "Angamaly",
              "CityId": 1851
          },
          {
              "City": "Angarpathar",
              "CityId": 1352
          },
          {
              "City": "Angul",
              "CityId": 2967
          },
          {
              "City": "Anjad",
              "CityId": 2085
          },
          {
              "City": "Anjangaon",
              "CityId": 2495
          },
          {
              "City": "Anjar",
              "CityId": 793
          },
          {
              "City": "Anjugramam",
              "CityId": 3591
          },
          {
              "City": "Anklav",
              "CityId": 794
          },
          {
              "City": "Ankleshwar",
              "CityId": 795
          },
          {
              "City": "Anklesvar INA",
              "CityId": 796
          },
          {
              "City": "Ankola",
              "CityId": 1528
          },
          {
              "City": "Anksa",
              "CityId": 5327
          },
          {
              "City": "Ankurhati",
              "CityId": 5328
          },
          {
              "City": "Annamalainagar",
              "CityId": 3592
          },
          {
              "City": "Annavasal",
              "CityId": 3593
          },
          {
              "City": "Annigeri",
              "CityId": 1529
          },
          {
              "City": "Annur",
              "CityId": 3594
          },
          {
              "City": "Anpara",
              "CityId": 4559
          },
          {
              "City": "Antah",
              "CityId": 3299
          },
          {
              "City": "Antaliya",
              "CityId": 797
          },
          {
              "City": "Anthiyur",
              "CityId": 3595
          },
          {
              "City": "Antri",
              "CityId": 2086
          },
          {
              "City": "Antu",
              "CityId": 4560
          },
          {
              "City": "Anup Nagar",
              "CityId": 5329
          },
          {
              "City": "Anupgarh",
              "CityId": 3300
          },
          {
              "City": "Anuppur",
              "CityId": 2087
          },
          {
              "City": "Anupshahr",
              "CityId": 4561
          },
          {
              "City": "Aonla",
              "CityId": 4562
          },
          {
              "City": "Appakudal",
              "CityId": 3596
          },
          {
              "City": "Aquem",
              "CityId": 710
          },
          {
              "City": "Ara",
              "CityId": 449
          },
          {
              "City": "Ara",
              "CityId": 1353
          },
          {
              "City": "Arachalur",
              "CityId": 3597
          },
          {
              "City": "Arakandanallur",
              "CityId": 3598
          },
          {
              "City": "Arakonam",
              "CityId": 3599
          },
          {
              "City": "Aralvaimozhi",
              "CityId": 3600
          },
          {
              "City": "Arambagh",
              "CityId": 5330
          },
          {
              "City": "Arambhada",
              "CityId": 798
          },
          {
              "City": "Arang",
              "CityId": 599
          },
          {
              "City": "Arani",
              "CityId": 3601
          },
          {
              "City": "Arani Road",
              "CityId": 3602
          },
          {
              "City": "Arantangi",
              "CityId": 3603
          },
          {
              "City": "Araria",
              "CityId": 450
          },
          {
              "City": "Arasiramani",
              "CityId": 3604
          },
          {
              "City": "Aravakurichi",
              "CityId": 3605
          },
          {
              "City": "Aravankadu",
              "CityId": 3606
          },
          {
              "City": "Arcot",
              "CityId": 3607
          },
          {
              "City": "Areraj",
              "CityId": 451
          },
          {
              "City": "Argari",
              "CityId": 5331
          },
          {
              "City": "Ariankuppam",
              "CityId": 3119
          },
          {
              "City": "Arimalam",
              "CityId": 3608
          },
          {
              "City": "Ariyalur",
              "CityId": 3609
          },
          {
              "City": "Ariyappampalayam",
              "CityId": 3610
          },
          {
              "City": "Ariyur",
              "CityId": 3611
          },
          {
              "City": "Arkalgud",
              "CityId": 1530
          },
          {
              "City": "Arki",
              "CityId": 1205
          },
          {
              "City": "Armapur Estate",
              "CityId": 4563
          },
          {
              "City": "Armoor",
              "CityId": 4444
          },
          {
              "City": "Arni",
              "CityId": 3612
          },
          {
              "City": "Arnia",
              "CityId": 1276
          },
          {
              "City": "Aron",
              "CityId": 2088
          },
          {
              "City": "Aroor",
              "CityId": 1852
          },
          {
              "City": "Arpora",
              "CityId": 711
          },
          {
              "City": "Arsha",
              "CityId": 5332
          },
          {
              "City": "Arsikere",
              "CityId": 1531
          },
          {
              "City": "Arukutti",
              "CityId": 1853
          },
          {
              "City": "Arulmigu Thirumuruganpundi",
              "CityId": 3613
          },
          {
              "City": "Arumanai",
              "CityId": 3614
          },
          {
              "City": "Arumbavur",
              "CityId": 3615
          },
          {
              "City": "Arumuganeri",
              "CityId": 3616
          },
          {
              "City": "Aruppukkottai",
              "CityId": 3617
          },
          {
              "City": "Arvi",
              "CityId": 2496
          },
          {
              "City": "Asan Khurd",
              "CityId": 1098
          },
          {
              "City": "Asandh",
              "CityId": 1099
          },
          {
              "City": "Asansol",
              "CityId": 5333
          },
          {
              "City": "Asarganj",
              "CityId": 452
          },
          {
              "City": "Asarma",
              "CityId": 799
          },
          {
              "City": "Ashokapuram",
              "CityId": 3618
          },
          {
              "City": "Ashoknagar",
              "CityId": 2089
          },
          {
              "City": "Ashoknagar Kalyangarh",
              "CityId": 5334
          },
          {
              "City": "Ashokpuram",
              "CityId": 4564
          },
          {
              "City": "Ashrafpur Kichhauchha",
              "CityId": 4565
          },
          {
              "City": "Ashta",
              "CityId": 2090
          },
          {
              "City": "Ashta",
              "CityId": 2497
          },
          {
              "City": "Ashti",
              "CityId": 2498
          },
          {
              "City": "Asifabad",
              "CityId": 4445
          },
          {
              "City": "Asind",
              "CityId": 3301
          },
          {
              "City": "Aska",
              "CityId": 2968
          },
          {
              "City": "Atarra",
              "CityId": 4566
          },
          {
              "City": "Atasu",
              "CityId": 4567
          },
          {
              "City": "Ateli",
              "CityId": 1100
          },
          {
              "City": "Athani",
              "CityId": 3619
          },
          {
              "City": "Athanur",
              "CityId": 3620
          },
          {
              "City": "Athgarh",
              "CityId": 2969
          },
          {
              "City": "Athimarapatti",
              "CityId": 3621
          },
          {
              "City": "Athipattu",
              "CityId": 3622
          },
          {
              "City": "Athmallik",
              "CityId": 2970
          },
          {
              "City": "Athni",
              "CityId": 1532
          },
          {
              "City": "Athur",
              "CityId": 3623
          },
          {
              "City": "Atmakur",
              "CityId": 21
          },
          {
              "City": "Atrauli",
              "CityId": 4568
          },
          {
              "City": "Atraulia",
              "CityId": 4569
          },
          {
              "City": "Attayyampatti",
              "CityId": 3624
          },
          {
              "City": "Attili",
              "CityId": 22
          },
          {
              "City": "Attingal",
              "CityId": 1854
          },
          {
              "City": "Attur",
              "CityId": 3625
          },
          {
              "City": "Atul",
              "CityId": 800
          },
          {
              "City": "Aurad",
              "CityId": 1533
          },
          {
              "City": "Auraiya",
              "CityId": 4570
          },
          {
              "City": "Aurangabad",
              "CityId": 453
          },
          {
              "City": "Aurangabad",
              "CityId": 2499
          },
          {
              "City": "Aurangabad",
              "CityId": 4571
          },
          {
              "City": "Aurangabad",
              "CityId": 5335
          },
          {
              "City": "Aurangabad Bangar",
              "CityId": 4572
          },
          {
              "City": "Aurangabad Cantonment",
              "CityId": 2500
          },
          {
              "City": "Auras",
              "CityId": 4573
          },
          {
              "City": "Auroville",
              "CityId": 3626
          },
          {
              "City": "Ausa",
              "CityId": 2501
          },
          {
              "City": "Avadattur",
              "CityId": 3627
          },
          {
              "City": "Avadi",
              "CityId": 3628
          },
          {
              "City": "Avalpundurai",
              "CityId": 3629
          },
          {
              "City": "Avaniapuram",
              "CityId": 3630
          },
          {
              "City": "Avanigadda",
              "CityId": 23
          },
          {
              "City": "Avinashi",
              "CityId": 3631
          },
          {
              "City": "Avinissery",
              "CityId": 1855
          },
          {
              "City": "Awagarh",
              "CityId": 4574
          },
          {
              "City": "Awantipora",
              "CityId": 1277
          },
          {
              "City": "Ayakudi",
              "CityId": 3632
          },
          {
              "City": "Ayanadaippu",
              "CityId": 3633
          },
          {
              "City": "Aygudi",
              "CityId": 3634
          },
          {
              "City": "Ayodhya",
              "CityId": 4575
          },
          {
              "City": "Ayothiapattinam",
              "CityId": 3635
          },
          {
              "City": "Ayyalur",
              "CityId": 3636
          },
          {
              "City": "Ayyampalayam",
              "CityId": 3637
          },
          {
              "City": "Ayyampettai",
              "CityId": 3638
          },
          {
              "City": "Azamgarh",
              "CityId": 4576
          },
          {
              "City": "Azhagiapandiapuram",
              "CityId": 3639
          },
          {
              "City": "Azhikode North",
              "CityId": 1856
          },
          {
              "City": "Azhikode South",
              "CityId": 1857
          },
          {
              "City": "Azhiyur",
              "CityId": 1858
          },
          {
              "City": "Azizpur",
              "CityId": 4577
          },
          {
              "City": "Azmatgarh",
              "CityId": 4578
          },
          {
              "City": "Babai",
              "CityId": 2091
          },
          {
              "City": "Babarpur Ajitmal",
              "CityId": 4579
          },
          {
              "City": "Baberu",
              "CityId": 4580
          },
          {
              "City": "Babhulgaon",
              "CityId": 2502
          },
          {
              "City": "Babina",
              "CityId": 4581
          },
          {
              "City": "Babiyal",
              "CityId": 1101
          },
          {
              "City": "Bablari Dewanganj",
              "CityId": 5336
          },
          {
              "City": "Babra",
              "CityId": 801
          },
          {
              "City": "Babrala",
              "CityId": 4582
          },
          {
              "City": "Babua Kalan",
              "CityId": 1354
          },
          {
              "City": "Babugarh",
              "CityId": 4583
          },
          {
              "City": "Bachhiowan",
              "CityId": 4584
          },
          {
              "City": "Bachhraon",
              "CityId": 4585
          },
          {
              "City": "Bad",
              "CityId": 4586
          },
          {
              "City": "Bada Malhera",
              "CityId": 2092
          },
          {
              "City": "Badagaon",
              "CityId": 2093
          },
          {
              "City": "Badagavettu",
              "CityId": 1534
          },
          {
              "City": "Badagoan",
              "CityId": 2094
          },
          {
              "City": "Badami",
              "CityId": 1535
          },
          {
              "City": "Badami Bagh",
              "CityId": 1278
          },
          {
              "City": "Badarpur",
              "CityId": 320
          },
          {
              "City": "Badarpur Railway Town",
              "CityId": 321
          },
          {
              "City": "Badarwas",
              "CityId": 2095
          },
          {
              "City": "Badaun",
              "CityId": 4587
          },
          {
              "City": "Badawada",
              "CityId": 2096
          },
          {
              "City": "Baddi",
              "CityId": 1206
          },
          {
              "City": "Bade Bacheli",
              "CityId": 600
          },
          {
              "City": "Badepalli",
              "CityId": 24
          },
          {
              "City": "Badepally",
              "CityId": 4446
          },
          {
              "City": "Badhagachhi",
              "CityId": 5337
          },
          {
              "City": "Badharghat",
              "CityId": 4511
          },
          {
              "City": "Badhni Kalan",
              "CityId": 3137
          },
          {
              "City": "Badi",
              "CityId": 2097
          },
          {
              "City": "Badkuhi",
              "CityId": 2098
          },
          {
              "City": "Badlapur",
              "CityId": 2503
          },
          {
              "City": "Badnagar",
              "CityId": 2099
          },
          {
              "City": "Badnawar",
              "CityId": 2100
          },
          {
              "City": "Badod",
              "CityId": 2101
          },
          {
              "City": "Badoda",
              "CityId": 2102
          },
          {
              "City": "Badra",
              "CityId": 2103
          },
          {
              "City": "Badrinathpuri",
              "CityId": 5221
          },
          {
              "City": "Baduria",
              "CityId": 5338
          },
          {
              "City": "Badvel",
              "CityId": 25
          },
          {
              "City": "Bagaha",
              "CityId": 454
          },
          {
              "City": "Bagalkot",
              "CityId": 1536
          },
          {
              "City": "Bagar",
              "CityId": 3302
          },
          {
              "City": "Bagasara",
              "CityId": 803
          },
          {
              "City": "Bagbahara",
              "CityId": 601
          },
          {
              "City": "Bagbahra",
              "CityId": 1355
          },
          {
              "City": "Bag-e-Firdosh",
              "CityId": 802
          },
          {
              "City": "Bagepalli",
              "CityId": 1537
          },
          {
              "City": "Bageshwar",
              "CityId": 5222
          },
          {
              "City": "Bagh",
              "CityId": 2104
          },
          {
              "City": "Bagh Purana",
              "CityId": 3138
          },
          {
              "City": "Baghdogra",
              "CityId": 5339
          },
          {
              "City": "Baghmara",
              "CityId": 2919
          },
          {
              "City": "Baghpat",
              "CityId": 4588
          },
          {
              "City": "Bagli",
              "CityId": 2105
          },
          {
              "City": "Bagnan",
              "CityId": 5340
          },
          {
              "City": "Bagra",
              "CityId": 5341
          },
          {
              "City": "Bagru",
              "CityId": 3303
          },
          {
              "City": "Bagula",
              "CityId": 5342
          },
          {
              "City": "Bah",
              "CityId": 4589
          },
          {
              "City": "Bah Bazar",
              "CityId": 5223
          },
          {
              "City": "Bahadarpar",
              "CityId": 804
          },
          {
              "City": "Bahadurganj",
              "CityId": 455
          },
          {
              "City": "Bahadurganj",
              "CityId": 4590
          },
          {
              "City": "Bahadurgarh",
              "CityId": 1102
          },
          {
              "City": "Baharampur",
              "CityId": 5343
          },
          {
              "City": "Bahbari Gaon",
              "CityId": 322
          },
          {
              "City": "Baheri",
              "CityId": 4591
          },
          {
              "City": "Bahirgram",
              "CityId": 5344
          },
          {
              "City": "Bahjoi",
              "CityId": 4592
          },
          {
              "City": "Bahraich",
              "CityId": 4593
          },
          {
              "City": "Bahror",
              "CityId": 3304
          },
          {
              "City": "Bahsuma",
              "CityId": 4594
          },
          {
              "City": "Bahua",
              "CityId": 4595
          },
          {
              "City": "Bahula",
              "CityId": 5345
          },
          {
              "City": "Baidyabati",
              "CityId": 5346
          },
          {
              "City": "Baihar",
              "CityId": 2106
          },
          {
              "City": "Baikunthpur",
              "CityId": 602
          },
          {
              "City": "Baikunthpur",
              "CityId": 2107
          },
          {
              "City": "Bailhongal",
              "CityId": 1538
          },
          {
              "City": "Baindur",
              "CityId": 1539
          },
          {
              "City": "Bairabi",
              "CityId": 2936
          },
          {
              "City": "Bairatisal",
              "CityId": 5347
          },
          {
              "City": "Bairgania",
              "CityId": 456
          },
          {
              "City": "Baj Baj",
              "CityId": 5348
          },
          {
              "City": "Bajala",
              "CityId": 1540
          },
          {
              "City": "Bajipura",
              "CityId": 805
          },
          {
              "City": "Bajna",
              "CityId": 4596
          },
          {
              "City": "Bajpe",
              "CityId": 1541
          },
          {
              "City": "Bajva",
              "CityId": 806
          },
          {
              "City": "Bakani",
              "CityId": 3305
          },
          {
              "City": "Bakewar",
              "CityId": 4597
          },
          {
              "City": "Bakhtiyarpur",
              "CityId": 457
          },
          {
              "City": "Bakiabad",
              "CityId": 4598
          },
          {
              "City": "Bakloh",
              "CityId": 1207
          },
          {
              "City": "Bakreswar",
              "CityId": 5349
          },
          {
              "City": "Bakswaha",
              "CityId": 2108
          },
          {
              "City": "Balachaur",
              "CityId": 3139
          },
          {
              "City": "Balaghat",
              "CityId": 2109
          },
          {
              "City": "Balagoda",
              "CityId": 2971
          },
          {
              "City": "Balakrishnampatti",
              "CityId": 3640
          },
          {
              "City": "Balakrishnapuram",
              "CityId": 3641
          },
          {
              "City": "Balangir",
              "CityId": 2972
          },
          {
              "City": "Balapallam",
              "CityId": 3642
          },
          {
              "City": "Balapur",
              "CityId": 26
          },
          {
              "City": "Balapur",
              "CityId": 2504
          },
          {
              "City": "Balaram Pota",
              "CityId": 5350
          },
          {
              "City": "Balarampur",
              "CityId": 5351
          },
          {
              "City": "Balasamudram",
              "CityId": 3643
          },
          {
              "City": "Balasinor",
              "CityId": 807
          },
          {
              "City": "Balasore",
              "CityId": 2973
          },
          {
              "City": "Baldeo",
              "CityId": 4599
          },
          {
              "City": "Baldeogarh",
              "CityId": 2110
          },
          {
              "City": "Baleshwar",
              "CityId": 2974
          },
          {
              "City": "Bali",
              "CityId": 3306
          },
          {
              "City": "Bali Chak",
              "CityId": 5352
          },
          {
              "City": "Baliapur",
              "CityId": 1356
          },
          {
              "City": "Baliari",
              "CityId": 1357
          },
          {
              "City": "Balimeta",
              "CityId": 2975
          },
          {
              "City": "Balkundra",
              "CityId": 1358
          },
          {
              "City": "Ballabgarh",
              "CityId": 1103
          },
          {
              "City": "Ballarpur",
              "CityId": 2505
          },
          {
              "City": "Ballavpur",
              "CityId": 5353
          },
          {
              "City": "Ballia",
              "CityId": 4600
          },
          {
              "City": "Bally",
              "CityId": 5354
          },
          {
              "City": "Balod",
              "CityId": 603
          },
          {
              "City": "Baloda",
              "CityId": 604
          },
          {
              "City": "Baloda Bazar",
              "CityId": 605
          },
          {
              "City": "Balotra",
              "CityId": 3307
          },
          {
              "City": "Balrampur",
              "CityId": 4601
          },
          {
              "City": "Balugaon",
              "CityId": 2976
          },
          {
              "City": "Balurghat",
              "CityId": 5355
          },
          {
              "City": "Balussery",
              "CityId": 1859
          },
          {
              "City": "Bamaniya",
              "CityId": 2111
          },
          {
              "City": "Bambolim",
              "CityId": 712
          },
          {
              "City": "Bamhani",
              "CityId": 2112
          },
          {
              "City": "Bamor",
              "CityId": 2113
          },
          {
              "City": "Bamora",
              "CityId": 2114
          },
          {
              "City": "Bamun Sualkuchi",
              "CityId": 323
          },
          {
              "City": "Bamunari",
              "CityId": 5356
          },
          {
              "City": "Banapur",
              "CityId": 2977
          },
          {
              "City": "Banarhat Tea Garden",
              "CityId": 5357
          },
          {
              "City": "Banarsi",
              "CityId": 606
          },
          {
              "City": "Banaskantha",
              "CityId": 808
          },
          {
              "City": "Banat",
              "CityId": 4602
          },
          {
              "City": "Banaur",
              "CityId": 3140
          },
          {
              "City": "Banavar",
              "CityId": 1542
          },
          {
              "City": "Banbasa",
              "CityId": 5224
          },
          {
              "City": "Banda",
              "CityId": 2115
          },
          {
              "City": "Banda",
              "CityId": 4603
          },
          {
              "City": "Bandarulanka",
              "CityId": 27
          },
          {
              "City": "Bandel",
              "CityId": 5358
          },
          {
              "City": "Bandhgora",
              "CityId": 1359
          },
          {
              "City": "Bandia",
              "CityId": 5225
          },
          {
              "City": "Bandikui",
              "CityId": 3308
          },
          {
              "City": "Bandipur",
              "CityId": 1279
          },
          {
              "City": "Bandora",
              "CityId": 713
          },
          {
              "City": "Banga",
              "CityId": 3141
          },
          {
              "City": "Banganapalle",
              "CityId": 28
          },
          {
              "City": "Bangaon",
              "CityId": 5359
          },
          {
              "City": "Bangarapet",
              "CityId": 1543
          },
          {
              "City": "Bangarmau",
              "CityId": 4604
          },
          {
              "City": "Bangawan",
              "CityId": 2116
          },
          {
              "City": "Bangramanjeshwar",
              "CityId": 1860
          },
          {
              "City": "Bangura",
              "CityId": 2978
          },
          {
              "City": "Banihal",
              "CityId": 1280
          },
          {
              "City": "Banjar",
              "CityId": 1208
          },
          {
              "City": "Banka",
              "CityId": 458
          },
          {
              "City": "Bankapura",
              "CityId": 1544
          },
          {
              "City": "Banki",
              "CityId": 2979
          },
          {
              "City": "Banki",
              "CityId": 4605
          },
          {
              "City": "Bankra",
              "CityId": 5360
          },
          {
              "City": "Bankura",
              "CityId": 5361
          },
          {
              "City": "Banmankhi",
              "CityId": 459
          },
          {
              "City": "Bannur",
              "CityId": 1545
          },
          {
              "City": "Banposh",
              "CityId": 2980
          },
          {
              "City": "Bansatar Kheda",
              "CityId": 2117
          },
          {
              "City": "Bansbaria",
              "CityId": 5362
          },
          {
              "City": "Bansda",
              "CityId": 809
          },
          {
              "City": "Bansdih",
              "CityId": 4606
          },
          {
              "City": "Bansgaon",
              "CityId": 4607
          },
          {
              "City": "Banshra",
              "CityId": 5363
          },
          {
              "City": "Bansi",
              "CityId": 4608
          },
          {
              "City": "Banswada",
              "CityId": 4447
          },
          {
              "City": "Banswara",
              "CityId": 3309
          },
          {
              "City": "Bantva",
              "CityId": 810
          },
          {
              "City": "Bantwal",
              "CityId": 1546
          },
          {
              "City": "Banupur",
              "CityId": 5364
          },
          {
              "City": "Banur",
              "CityId": 3142
          },
          {
              "City": "Bapatla",
              "CityId": 29
          },
          {
              "City": "Bapulapadu",
              "CityId": 30
          },
          {
              "City": "Bar Bigha",
              "CityId": 460
          },
          {
              "City": "Bara Bamonia",
              "CityId": 5365
          },
          {
              "City": "Barabanki",
              "CityId": 4609
          },
          {
              "City": "Baragaon",
              "CityId": 4610
          },
          {
              "City": "Baraily",
              "CityId": 2118
          },
          {
              "City": "Barajamda",
              "CityId": 1360
          },
          {
              "City": "Barakpur",
              "CityId": 5366
          },
          {
              "City": "Barakpur Cantonment",
              "CityId": 5367
          },
          {
              "City": "Baramati",
              "CityId": 2506
          },
          {
              "City": "Baramula",
              "CityId": 1281
          },
          {
              "City": "Baramulla",
              "CityId": 1282
          },
          {
              "City": "Baran",
              "CityId": 3310
          },
          {
              "City": "Baranagar",
              "CityId": 5368
          },
          {
              "City": "Barasat",
              "CityId": 5369
          },
          {
              "City": "Barauli",
              "CityId": 461
          },
          {
              "City": "Barauni Oil Township",
              "CityId": 462
          },
          {
              "City": "Baraut",
              "CityId": 4611
          },
          {
              "City": "Barbari",
              "CityId": 324
          },
          {
              "City": "Barbil",
              "CityId": 2981
          },
          {
              "City": "Barddhaman",
              "CityId": 5370
          },
          {
              "City": "Bardez",
              "CityId": 714
          },
          {
              "City": "Bardoli",
              "CityId": 811
          },
          {
              "City": "Bareilly",
              "CityId": 4612
          },
          {
              "City": "Bareilly Cantonment",
              "CityId": 4613
          },
          {
              "City": "Barela",
              "CityId": 2119
          },
          {
              "City": "Baretta",
              "CityId": 3143
          },
          {
              "City": "Bargarh",
              "CityId": 2982
          },
          {
              "City": "Barghat",
              "CityId": 2120
          },
          {
              "City": "Bargi",
              "CityId": 2121
          },
          {
              "City": "Bargur",
              "CityId": 3644
          },
          {
              "City": "Barh",
              "CityId": 463
          },
          {
              "City": "Barhalganj",
              "CityId": 4614
          },
          {
              "City": "Barhani",
              "CityId": 4615
          },
          {
              "City": "Barhapur",
              "CityId": 4616
          },
          {
              "City": "Barhi",
              "CityId": 1361
          },
          {
              "City": "Barhi",
              "CityId": 2122
          },
          {
              "City": "Barhiya",
              "CityId": 464
          },
          {
              "City": "Bari",
              "CityId": 3311
          },
          {
              "City": "Bari Brahmana",
              "CityId": 1283
          },
          {
              "City": "Bari Sadri",
              "CityId": 3312
          },
          {
              "City": "Bariapur",
              "CityId": 465
          },
          {
              "City": "Barigarh",
              "CityId": 2123
          },
          {
              "City": "Barijhati",
              "CityId": 5371
          },
          {
              "City": "Baripada",
              "CityId": 2983
          },
          {
              "City": "Bariwala",
              "CityId": 3144
          },
          {
              "City": "Barjora",
              "CityId": 5372
          },
          {
              "City": "Barka Kana",
              "CityId": 1362
          },
          {
              "City": "Barkhera",
              "CityId": 4617
          },
          {
              "City": "Barki Saraiya",
              "CityId": 1363
          },
          {
              "City": "Barkot",
              "CityId": 5226
          },
          {
              "City": "Barmer",
              "CityId": 3313
          },
          {
              "City": "Barnala",
              "CityId": 3145
          },
          {
              "City": "Barpali",
              "CityId": 2984
          },
          {
              "City": "Barpathar",
              "CityId": 325
          },
          {
              "City": "Barpeta",
              "CityId": 326
          },
          {
              "City": "Barpeta Road",
              "CityId": 327
          },
          {
              "City": "Barrackpore",
              "CityId": 5373
          },
          {
              "City": "Barsana",
              "CityId": 4618
          },
          {
              "City": "Barshi",
              "CityId": 2507
          },
          {
              "City": "Barughutu",
              "CityId": 1364
          },
          {
              "City": "Baruihuda",
              "CityId": 5374
          },
          {
              "City": "Baruipur",
              "CityId": 5375
          },
          {
              "City": "Barunda",
              "CityId": 5376
          },
          {
              "City": "Baruni",
              "CityId": 466
          },
          {
              "City": "Barva Sagar",
              "CityId": 4619
          },
          {
              "City": "Barwadih",
              "CityId": 1365
          },
          {
              "City": "Barwaha",
              "CityId": 2124
          },
          {
              "City": "Barwala",
              "CityId": 812
          },
          {
              "City": "Barwala",
              "CityId": 1104
          },
          {
              "City": "Barwani",
              "CityId": 2125
          },
          {
              "City": "Barwar",
              "CityId": 4620
          },
          {
              "City": "Basar",
              "CityId": 300
          },
          {
              "City": "Basaria",
              "CityId": 1366
          },
          {
              "City": "Basavakalyan",
              "CityId": 1547
          },
          {
              "City": "Basavana Bagevadi",
              "CityId": 1548
          },
          {
              "City": "Bashohli",
              "CityId": 1284
          },
          {
              "City": "Basi",
              "CityId": 3314
          },
          {
              "City": "Basirhat",
              "CityId": 5377
          },
          {
              "City": "Baska",
              "CityId": 5378
          },
          {
              "City": "Basmat",
              "CityId": 2508
          },
          {
              "City": "Basna",
              "CityId": 607
          },
          {
              "City": "Basni Belima",
              "CityId": 3315
          },
          {
              "City": "Basoda",
              "CityId": 2126
          },
          {
              "City": "Bassi Pathana",
              "CityId": 3146
          },
          {
              "City": "Basti",
              "CityId": 4621
          },
          {
              "City": "Basudebpur",
              "CityId": 2985
          },
          {
              "City": "Basugaon",
              "CityId": 328
          },
          {
              "City": "Basukinath",
              "CityId": 1367
          },
          {
              "City": "Baswa",
              "CityId": 3316
          },
          {
              "City": "Batala",
              "CityId": 3147
          },
          {
              "City": "Bathinda",
              "CityId": 3148
          },
          {
              "City": "Batote",
              "CityId": 1285
          },
          {
              "City": "Baudh",
              "CityId": 2986
          },
          {
              "City": "Bawal",
              "CityId": 1105
          },
          {
              "City": "Bawani Khera",
              "CityId": 1106
          },
          {
              "City": "Bayad",
              "CityId": 813
          },
          {
              "City": "Bayana",
              "CityId": 3317
          },
          {
              "City": "Bazpur",
              "CityId": 5227
          },
          {
              "City": "Beawar",
              "CityId": 3318
          },
          {
              "City": "Bechar",
              "CityId": 814
          },
          {
              "City": "Bedi",
              "CityId": 815
          },
          {
              "City": "Beed",
              "CityId": 2509
          },
          {
              "City": "Begamganj",
              "CityId": 2127
          },
          {
              "City": "Begampur",
              "CityId": 5379
          },
          {
              "City": "Begowal",
              "CityId": 3149
          },
          {
              "City": "Begumabad Budhana",
              "CityId": 4622
          },
          {
              "City": "Begun",
              "CityId": 3319
          },
          {
              "City": "Begusarai",
              "CityId": 467
          },
          {
              "City": "Behat",
              "CityId": 4623
          },
          {
              "City": "Behea",
              "CityId": 468
          },
          {
              "City": "Behrampur",
              "CityId": 3150
          },
          {
              "City": "Behta Hajipur",
              "CityId": 4624
          },
          {
              "City": "Bela",
              "CityId": 4625
          },
          {
              "City": "Belagachhia",
              "CityId": 2987
          },
          {
              "City": "Belagula",
              "CityId": 1549
          },
          {
              "City": "Belaguntha",
              "CityId": 2988
          },
          {
              "City": "Belakavadiq",
              "CityId": 1550
          },
          {
              "City": "Belampalli",
              "CityId": 31
          },
          {
              "City": "Beldanga",
              "CityId": 5380
          },
          {
              "City": "Beldubi",
              "CityId": 5381
          },
          {
              "City": "Belebathan",
              "CityId": 5382
          },
          {
              "City": "Belgaum",
              "CityId": 1551
          },
          {
              "City": "Belgaum Cantonment",
              "CityId": 1552
          },
          {
              "City": "Beliator",
              "CityId": 5383
          },
          {
              "City": "Bellampalli",
              "CityId": 4448
          },
          {
              "City": "Bellary",
              "CityId": 1553
          },
          {
              "City": "Belluru",
              "CityId": 1554
          },
          {
              "City": "Belonia",
              "CityId": 4512
          },
          {
              "City": "Belpahar",
              "CityId": 2989
          },
          {
              "City": "Belsand",
              "CityId": 469
          },
          {
              "City": "Beltangadi",
              "CityId": 1555
          },
          {
              "City": "Belthara",
              "CityId": 4626
          },
          {
              "City": "Belur",
              "CityId": 1556
          },
          {
              "City": "Belur",
              "CityId": 3645
          },
          {
              "City": "Belvata",
              "CityId": 1557
          },
          {
              "City": "Bemetra",
              "CityId": 608
          },
          {
              "City": "Benaulim",
              "CityId": 715
          },
          {
              "City": "Bengaluru",
              "CityId": 1558
          },
          {
              "City": "Beniganj",
              "CityId": 4627
          },
          {
              "City": "Beohari",
              "CityId": 2128
          },
          {
              "City": "Berasia",
              "CityId": 2129
          },
          {
              "City": "Berhampur",
              "CityId": 2990
          },
          {
              "City": "Berhatty",
              "CityId": 3646
          },
          {
              "City": "Beri",
              "CityId": 1107
          },
          {
              "City": "Bermo",
              "CityId": 1368
          },
          {
              "City": "Bestavaripeta",
              "CityId": 32
          },
          {
              "City": "Beswan",
              "CityId": 4628
          },
          {
              "City": "Betamcherla",
              "CityId": 33
          },
          {
              "City": "Betma",
              "CityId": 2130
          },
          {
              "City": "Betora",
              "CityId": 716
          },
          {
              "City": "Bettiah",
              "CityId": 470
          },
          {
              "City": "Betul",
              "CityId": 2131
          },
          {
              "City": "Betul Bazar",
              "CityId": 2132
          },
          {
              "City": "Bewar",
              "CityId": 4629
          },
          {
              "City": "Beypur",
              "CityId": 1861
          },
          {
              "City": "Beyt",
              "CityId": 816
          },
          {
              "City": "Bhabat",
              "CityId": 3151
          },
          {
              "City": "Bhabua",
              "CityId": 471
          },
          {
              "City": "Bhachau",
              "CityId": 817
          },
          {
              "City": "Bhadarsa",
              "CityId": 4630
          },
          {
              "City": "Bhadasar",
              "CityId": 3320
          },
          {
              "City": "Bhaderwah",
              "CityId": 1286
          },
          {
              "City": "Bhadohi",
              "CityId": 4631
          },
          {
              "City": "Bhadra",
              "CityId": 3321
          },
          {
              "City": "Bhadrachalam",
              "CityId": 4449
          },
          {
              "City": "Bhadrak",
              "CityId": 2991
          },
          {
              "City": "Bhadravati",
              "CityId": 1559
          },
          {
              "City": "Bhadravati",
              "CityId": 2510
          },
          {
              "City": "Bhadreswar",
              "CityId": 5384
          },
          {
              "City": "Bhadur",
              "CityId": 3152
          },
          {
              "City": "Bhagalpur",
              "CityId": 472
          },
          {
              "City": "Bhagatdih",
              "CityId": 1369
          },
          {
              "City": "Bhagur",
              "CityId": 2511
          },
          {
              "City": "Bhagwantnagar",
              "CityId": 4632
          },
          {
              "City": "Bhainsa",
              "CityId": 4450
          },
          {
              "City": "Bhainsdehi",
              "CityId": 2133
          },
          {
              "City": "Bhalariya",
              "CityId": 3322
          },
          {
              "City": "Bhalki",
              "CityId": 1560
          },
          {
              "City": "Bhamodi",
              "CityId": 2134
          },
          {
              "City": "Bhandara",
              "CityId": 2512
          },
          {
              "City": "Bhandardaha",
              "CityId": 5385
          },
          {
              "City": "Bhander",
              "CityId": 2135
          },
          {
              "City": "Bhangar Raghunathpur",
              "CityId": 5386
          },
          {
              "City": "Bhangri Pratham Khanda",
              "CityId": 5387
          },
          {
              "City": "Bhanjanagar",
              "CityId": 2992
          },
          {
              "City": "Bhankharpur",
              "CityId": 3153
          },
          {
              "City": "Bhanowara",
              "CityId": 5388
          },
          {
              "City": "Bhanpura",
              "CityId": 2136
          },
          {
              "City": "Bhanpuri",
              "CityId": 609
          },
          {
              "City": "Bhanvad",
              "CityId": 818
          },
          {
              "City": "Bharatganj",
              "CityId": 4633
          },
          {
              "City": "Bharatpur",
              "CityId": 3323
          },
          {
              "City": "Bhargain",
              "CityId": 4634
          },
          {
              "City": "Bharoli Kalan",
              "CityId": 3154
          },
          {
              "City": "Bharthana",
              "CityId": 4635
          },
          {
              "City": "Bharuch",
              "CityId": 819
          },
          {
              "City": "Bharuch INA",
              "CityId": 820
          },
          {
              "City": "Bharuhana",
              "CityId": 4636
          },
          {
              "City": "Bharveli",
              "CityId": 2137
          },
          {
              "City": "Bharwari",
              "CityId": 4637
          },
          {
              "City": "Bhasawar",
              "CityId": 3324
          },
          {
              "City": "Bhatapara",
              "CityId": 610
          },
          {
              "City": "Bhatgaon",
              "CityId": 611
          },
          {
              "City": "Bhatkal",
              "CityId": 1561
          },
          {
              "City": "Bhatni Bazar",
              "CityId": 4638
          },
          {
              "City": "Bhatpar Rani",
              "CityId": 4639
          },
          {
              "City": "Bhatpara",
              "CityId": 5389
          },
          {
              "City": "Bhattiprolu",
              "CityId": 34
          },
          {
              "City": "Bhaurah",
              "CityId": 1370
          },
          {
              "City": "Bhaurasa",
              "CityId": 2138
          },
          {
              "City": "Bhavani",
              "CityId": 3647
          },
          {
              "City": "Bhavnagar",
              "CityId": 821
          },
          {
              "City": "Bhavra",
              "CityId": 2139
          },
          {
              "City": "Bhawan Bahadurnagar",
              "CityId": 4640
          },
          {
              "City": "Bhawani Mandi",
              "CityId": 3325
          },
          {
              "City": "Bhawanigarh",
              "CityId": 3155
          },
          {
              "City": "Bhawanipatna",
              "CityId": 2993
          },
          {
              "City": "Bhawanisagar",
              "CityId": 3648
          },
          {
              "City": "Bhawri",
              "CityId": 3326
          },
          {
              "City": "Bhayavadar",
              "CityId": 822
          },
          {
              "City": "Bhedaghat",
              "CityId": 2140
          },
          {
              "City": "Bhestan",
              "CityId": 823
          },
          {
              "City": "Bhigvan",
              "CityId": 2513
          },
          {
              "City": "Bhikangaon",
              "CityId": 2141
          },
          {
              "City": "Bhikhi",
              "CityId": 3156
          },
          {
              "City": "Bhikhiwind",
              "CityId": 3157
          },
          {
              "City": "Bhilai",
              "CityId": 612
          },
          {
              "City": "Bhilakhedi",
              "CityId": 2142
          },
          {
              "City": "Bhilwara",
              "CityId": 3327
          },
          {
              "City": "Bhim Tal",
              "CityId": 5228
          },
          {
              "City": "Bhimarayanagudi",
              "CityId": 1562
          },
          {
              "City": "Bhimavaram",
              "CityId": 35
          },
          {
              "City": "Bhimnagar",
              "CityId": 473
          },
          {
              "City": "Bhimunipatnam",
              "CityId": 36
          },
          {
              "City": "Bhind",
              "CityId": 2143
          },
          {
              "City": "Bhindar",
              "CityId": 3328
          },
          {
              "City": "Bhinga",
              "CityId": 4641
          },
          {
              "City": "Bhingar",
              "CityId": 2514
          },
          {
              "City": "Bhinmal",
              "CityId": 3329
          },
          {
              "City": "Bhisiana",
              "CityId": 3158
          },
          {
              "City": "Bhitarwar",
              "CityId": 2144
          },
          {
              "City": "Bhiwadi",
              "CityId": 3330
          },
          {
              "City": "Bhiwandi",
              "CityId": 2515
          },
          {
              "City": "Bhiwani",
              "CityId": 1108
          },
          {
              "City": "Bhogadi",
              "CityId": 1563
          },
          {
              "City": "Bhogpur",
              "CityId": 3159
          },
          {
              "City": "Bhojpur",
              "CityId": 474
          },
          {
              "City": "Bhojpur Dharampur",
              "CityId": 4642
          },
          {
              "City": "Bhojudih",
              "CityId": 1371
          },
          {
              "City": "Bhokarhedi",
              "CityId": 4643
          },
          {
              "City": "Bhokhardan",
              "CityId": 2516
          },
          {
              "City": "Bholar Dabri",
              "CityId": 5390
          },
          {
              "City": "Bhongaon",
              "CityId": 4644
          },
          {
              "City": "Bhongir",
              "CityId": 4451
          },
          {
              "City": "Bhopal",
              "CityId": 2145
          },
          {
              "City": "Bhor",
              "CityId": 2517
          },
          {
              "City": "Bhosari",
              "CityId": 2518
          },
          {
              "City": "Bhota",
              "CityId": 1209
          },
          {
              "City": "Bhowali",
              "CityId": 5229
          },
          {
              "City": "Bhuban",
              "CityId": 2994
          },
          {
              "City": "Bhubaneswar",
              "CityId": 2995
          },
          {
              "City": "Bhuch",
              "CityId": 3160
          },
          {
              "City": "Bhuibandh",
              "CityId": 2146
          },
          {
              "City": "Bhuj",
              "CityId": 824
          },
          {
              "City": "Bhulath",
              "CityId": 3161
          },
          {
              "City": "Bhulepur",
              "CityId": 4645
          },
          {
              "City": "Bhuli",
              "CityId": 1372
          },
          {
              "City": "Bhum",
              "CityId": 2519
          },
          {
              "City": "Bhuntar",
              "CityId": 1210
          },
          {
              "City": "Bhupalpally",
              "CityId": 4452
          },
          {
              "City": "Bhusawal",
              "CityId": 2520
          },
          {
              "City": "Bhuvanagiri",
              "CityId": 3649
          },
          {
              "City": "Biaora",
              "CityId": 2147
          },
          {
              "City": "Biate",
              "CityId": 2937
          },
          {
              "City": "Bicholim",
              "CityId": 717
          },
          {
              "City": "Bid",
              "CityId": 2521
          },
          {
              "City": "Bidar",
              "CityId": 1564
          },
          {
              "City": "Bidhannagar",
              "CityId": 5391
          },
          {
              "City": "Bidhuna",
              "CityId": 4646
          },
          {
              "City": "Bidyadharpur",
              "CityId": 5392
          },
          {
              "City": "Bighapur",
              "CityId": 4647
          },
          {
              "City": "Bihar",
              "CityId": 475
          },
          {
              "City": "Bihar Sharif",
              "CityId": 476
          },
          {
              "City": "Bihariganj",
              "CityId": 477
          },
          {
              "City": "Bihpuria",
              "CityId": 329
          },
          {
              "City": "Bijapur",
              "CityId": 1565
          },
          {
              "City": "Bijawar",
              "CityId": 2148
          },
          {
              "City": "Bijbiara",
              "CityId": 1287
          },
          {
              "City": "Bijeypur",
              "CityId": 2149
          },
          {
              "City": "Bijni",
              "CityId": 330
          },
          {
              "City": "Bijnor",
              "CityId": 4648
          },
          {
              "City": "Bijoliya Kalan",
              "CityId": 3331
          },
          {
              "City": "Bijoy Govinda",
              "CityId": 2885
          },
          {
              "City": "Bijpur",
              "CityId": 4649
          },
          {
              "City": "Bijrauni",
              "CityId": 2150
          },
          {
              "City": "Bijuri",
              "CityId": 2151
          },
          {
              "City": "Bikaner",
              "CityId": 3332
          },
          {
              "City": "Bikapur",
              "CityId": 4650
          },
          {
              "City": "Biki Hakola",
              "CityId": 5393
          },
          {
              "City": "Bikketti",
              "CityId": 3650
          },
          {
              "City": "Bikramganj",
              "CityId": 478
          },
          {
              "City": "Bilandapur",
              "CityId": 5394
          },
          {
              "City": "Bilara",
              "CityId": 3333
          },
          {
              "City": "Bilari",
              "CityId": 4651
          },
          {
              "City": "Bilasipara",
              "CityId": 331
          },
          {
              "City": "Bilaspur",
              "CityId": 613
          },
          {
              "City": "Bilaspur",
              "CityId": 1109
          },
          {
              "City": "Bilaspur",
              "CityId": 1211
          },
          {
              "City": "Bilaspur",
              "CityId": 4652
          },
          {
              "City": "Bilaua",
              "CityId": 2152
          },
          {
              "City": "Bilgi",
              "CityId": 1566
          },
          {
              "City": "Bilgram",
              "CityId": 4653
          },
          {
              "City": "Bilha",
              "CityId": 614
          },
          {
              "City": "Bilhaur",
              "CityId": 4654
          },
          {
              "City": "Bilimora",
              "CityId": 825
          },
          {
              "City": "Bilkha",
              "CityId": 826
          },
          {
              "City": "Billawar",
              "CityId": 1288
          },
          {
              "City": "Billimora",
              "CityId": 827
          },
          {
              "City": "Biloli",
              "CityId": 2522
          },
          {
              "City": "Bilpahari",
              "CityId": 5395
          },
          {
              "City": "Bilpura",
              "CityId": 2153
          },
          {
              "City": "Bilram",
              "CityId": 4655
          },
          {
              "City": "Bilrayaganj",
              "CityId": 4656
          },
          {
              "City": "Bilsanda",
              "CityId": 4657
          },
          {
              "City": "Bilsi",
              "CityId": 4658
          },
          {
              "City": "Bina Railway Colony",
              "CityId": 2154
          },
          {
              "City": "Bina-Etawa",
              "CityId": 2155
          },
          {
              "City": "Bindki",
              "CityId": 4659
          },
          {
              "City": "Binika",
              "CityId": 2996
          },
          {
              "City": "Bipra Noapara",
              "CityId": 5396
          },
          {
              "City": "Birgaon",
              "CityId": 615
          },
          {
              "City": "Birlapur",
              "CityId": 5397
          },
          {
              "City": "Birmitrapur",
              "CityId": 2997
          },
          {
              "City": "Birnagar",
              "CityId": 5398
          },
          {
              "City": "Birpur",
              "CityId": 479
          },
          {
              "City": "Birsinghpur",
              "CityId": 2156
          },
          {
              "City": "Birur",
              "CityId": 1567
          },
          {
              "City": "Birwadi",
              "CityId": 2523
          },
          {
              "City": "Birwah",
              "CityId": 1289
          },
          {
              "City": "Bisalpur",
              "CityId": 4660
          },
          {
              "City": "Bisanda Buzurg",
              "CityId": 4661
          },
          {
              "City": "Bisarpara",
              "CityId": 5399
          },
          {
              "City": "Bisauli",
              "CityId": 4662
          },
          {
              "City": "Bishama Katek",
              "CityId": 2998
          },
          {
              "City": "Bisharatganj",
              "CityId": 4663
          },
          {
              "City": "Bishna",
              "CityId": 1290
          },
          {
              "City": "Bishnupur",
              "CityId": 2886
          },
          {
              "City": "Bishnupur",
              "CityId": 5400
          },
          {
              "City": "Bisokhar",
              "CityId": 4664
          },
          {
              "City": "Bissau",
              "CityId": 3334
          },
          {
              "City": "Biswan",
              "CityId": 4665
          },
          {
              "City": "Biswanath Chariali",
              "CityId": 332
          },
          {
              "City": "Bithur",
              "CityId": 4666
          },
          {
              "City": "Bobbili",
              "CityId": 37
          },
          {
              "City": "Boda",
              "CityId": 2157
          },
          {
              "City": "Bodakdev",
              "CityId": 828
          },
          {
              "City": "Bodeli",
              "CityId": 829
          },
          {
              "City": "Bodh Gaya",
              "CityId": 480
          },
          {
              "City": "Bodhan",
              "CityId": 4453
          },
          {
              "City": "Bodinayakkanur",
              "CityId": 3651
          },
          {
              "City": "Bodri",
              "CityId": 616
          },
          {
              "City": "Bohori",
              "CityId": 333
          },
          {
              "City": "Boisar",
              "CityId": 2524
          },
          {
              "City": "Bokajan",
              "CityId": 334
          },
          {
              "City": "Bokaro",
              "CityId": 1373
          },
          {
              "City": "Bokokhat",
              "CityId": 335
          },
          {
              "City": "Bolangir",
              "CityId": 2999
          },
          {
              "City": "Bollaram",
              "CityId": 4454
          },
          {
              "City": "Bolpur",
              "CityId": 5401
          },
          {
              "City": "Bombuflat",
              "CityId": 1
          },
          {
              "City": "Bombuflat",
              "CityId": 38
          },
          {
              "City": "Bommanahalli",
              "CityId": 1568
          },
          {
              "City": "Bommasandra",
              "CityId": 1569
          },
          {
              "City": "Bommuru",
              "CityId": 39
          },
          {
              "City": "Bondila",
              "CityId": 301
          },
          {
              "City": "Bongaigaon",
              "CityId": 336
          },
          {
              "City": "Bongaigaon Petro-chemical Town",
              "CityId": 337
          },
          {
              "City": "Bongaon",
              "CityId": 5402
          },
          {
              "City": "Bop Khel",
              "CityId": 2525
          },
          {
              "City": "Bopal",
              "CityId": 830
          },
          {
              "City": "Borgolai",
              "CityId": 338
          },
          {
              "City": "Boria",
              "CityId": 831
          },
          {
              "City": "Boriavi",
              "CityId": 832
          },
          {
              "City": "Borio Bazar",
              "CityId": 1374
          },
          {
              "City": "Borkhera",
              "CityId": 3335
          },
          {
              "City": "Borsad",
              "CityId": 833
          },
          {
              "City": "Botad",
              "CityId": 834
          },
          {
              "City": "Bowali",
              "CityId": 5403
          },
          {
              "City": "Brahmakulam",
              "CityId": 1862
          },
          {
              "City": "Brahmana Periya Agraharam",
              "CityId": 3652
          },
          {
              "City": "Brahmapur",
              "CityId": 3000
          },
          {
              "City": "Brahmapuri",
              "CityId": 2526
          },
          {
              "City": "Brajrajnagar",
              "CityId": 3001
          },
          {
              "City": "Budaun",
              "CityId": 4667
          },
          {
              "City": "Budgam",
              "CityId": 1291
          },
          {
              "City": "Budha Theh",
              "CityId": 3162
          },
          {
              "City": "Budhgaon",
              "CityId": 2527
          },
          {
              "City": "Budhlada",
              "CityId": 3163
          },
          {
              "City": "Budhni",
              "CityId": 2158
          },
          {
              "City": "Budhpura",
              "CityId": 3336
          },
          {
              "City": "Bugganipalle",
              "CityId": 40
          },
          {
              "City": "Bugrasi",
              "CityId": 4668
          },
          {
              "City": "Buguda",
              "CityId": 3002
          },
          {
              "City": "Bulandshahar",
              "CityId": 4669
          },
          {
              "City": "Buldana",
              "CityId": 2528
          },
          {
              "City": "Buldhana",
              "CityId": 2529
          },
          {
              "City": "Bundi",
              "CityId": 3337
          },
          {
              "City": "Bundu",
              "CityId": 1375
          },
          {
              "City": "Burdwan",
              "CityId": 5404
          },
          {
              "City": "Burhana",
              "CityId": 4670
          },
          {
              "City": "Burhanpur",
              "CityId": 2159
          },
          {
              "City": "Burhar",
              "CityId": 2160
          },
          {
              "City": "Buria",
              "CityId": 1110
          },
          {
              "City": "Burla",
              "CityId": 3003
          },
          {
              "City": "Buthapandi",
              "CityId": 3653
          },
          {
              "City": "Buthipuram",
              "CityId": 3654
          },
          {
              "City": "Butibori",
              "CityId": 2530
          },
          {
              "City": "Buxar",
              "CityId": 481
          },
          {
              "City": "Byadgi",
              "CityId": 1570
          },
          {
              "City": "Byasanagar",
              "CityId": 3004
          },
          {
              "City": "Byatarayanapura",
              "CityId": 1571
          },
          {
              "City": "Calapor",
              "CityId": 718
          },
          {
              "City": "Cambay",
              "CityId": 835
          },
          {
              "City": "Candolim",
              "CityId": 719
          },
          {
              "City": "Canning",
              "CityId": 5405
          },
          {
              "City": "Caranzalem",
              "CityId": 720
          },
          {
              "City": "Carapur",
              "CityId": 721
          },
          {
              "City": "Cart Road",
              "CityId": 5406
          },
          {
              "City": "Chabua",
              "CityId": 339
          },
          {
              "City": "Chachanda",
              "CityId": 5407
          },
          {
              "City": "Chachaura Binaganj",
              "CityId": 2161
          },
          {
              "City": "Chaibasa",
              "CityId": 1376
          },
          {
              "City": "Chail",
              "CityId": 4671
          },
          {
              "City": "Chaitudih",
              "CityId": 1377
          },
          {
              "City": "Chak Bankola",
              "CityId": 5408
          },
          {
              "City": "Chak Enayetnagar",
              "CityId": 5409
          },
          {
              "City": "Chak Imam Ali",
              "CityId": 4672
          },
          {
              "City": "Chak Kashipur",
              "CityId": 5410
          },
          {
              "City": "Chakalampur",
              "CityId": 5411
          },
          {
              "City": "Chakan",
              "CityId": 2531
          },
          {
              "City": "Chakbansberia",
              "CityId": 5412
          },
          {
              "City": "Chakdaha",
              "CityId": 5413
          },
          {
              "City": "Chakeri",
              "CityId": 4673
          },
          {
              "City": "Chakghat",
              "CityId": 2162
          },
          {
              "City": "Chakia",
              "CityId": 482
          },
          {
              "City": "Chakia",
              "CityId": 4674
          },
          {
              "City": "Chaklasi",
              "CityId": 836
          },
          {
              "City": "Chakpara",
              "CityId": 5414
          },
          {
              "City": "Chakradharpur",
              "CityId": 1378
          },
          {
              "City": "Chakranagar Colony",
              "CityId": 1572
          },
          {
              "City": "Chakrata",
              "CityId": 5230
          },
          {
              "City": "Chakulia",
              "CityId": 1379
          },
          {
              "City": "Chala",
              "CityId": 837
          },
          {
              "City": "Chala",
              "CityId": 1863
          },
          {
              "City": "Chalakudi",
              "CityId": 1864
          },
          {
              "City": "Chalala",
              "CityId": 838
          },
          {
              "City": "Chalisgaon",
              "CityId": 2532
          },
          {
              "City": "Challakere",
              "CityId": 1573
          },
          {
              "City": "Challapalle",
              "CityId": 41
          },
          {
              "City": "Chalthan",
              "CityId": 839
          },
          {
              "City": "Chamba",
              "CityId": 1212
          },
          {
              "City": "Chamba",
              "CityId": 5231
          },
          {
              "City": "Chamoli and Gopeshwar",
              "CityId": 5232
          },
          {
              "City": "Champa",
              "CityId": 617
          },
          {
              "City": "Champahati",
              "CityId": 5415
          },
          {
              "City": "Champawat",
              "CityId": 5233
          },
          {
              "City": "Champdani",
              "CityId": 5416
          },
          {
              "City": "Champhai",
              "CityId": 2938
          },
          {
              "City": "Champua",
              "CityId": 3005
          },
          {
              "City": "Chamrail",
              "CityId": 5417
          },
          {
              "City": "Chamrajnagar",
              "CityId": 1574
          },
          {
              "City": "Chamundi Betta",
              "CityId": 1575
          },
          {
              "City": "Chanasma",
              "CityId": 840
          },
          {
              "City": "Chandameta Butar",
              "CityId": 2163
          },
          {
              "City": "Chandannagar",
              "CityId": 5418
          },
          {
              "City": "Chandapur",
              "CityId": 3006
          },
          {
              "City": "Chandauli",
              "CityId": 4675
          },
          {
              "City": "Chandaur",
              "CityId": 1380
          },
          {
              "City": "Chandausi",
              "CityId": 4676
          },
          {
              "City": "Chandbali",
              "CityId": 3007
          },
          {
              "City": "Chanderi",
              "CityId": 2164
          },
          {
              "City": "Chandia",
              "CityId": 2165
          },
          {
              "City": "Chandigarh",
              "CityId": 594
          },
          {
              "City": "Chandil",
              "CityId": 1381
          },
          {
              "City": "Chandili",
              "CityId": 3008
          },
          {
              "City": "Chandisar",
              "CityId": 841
          },
          {
              "City": "Chandkheda",
              "CityId": 842
          },
          {
              "City": "Chandla",
              "CityId": 2166
          },
          {
              "City": "Chandpur",
              "CityId": 4677
          },
          {
              "City": "Chandpur",
              "CityId": 5419
          },
          {
              "City": "Chandrakona",
              "CityId": 5420
          },
          {
              "City": "Chandrapur",
              "CityId": 2533
          },
          {
              "City": "Chandrapur Bagicha",
              "CityId": 340
          },
          {
              "City": "Chandrapura",
              "CityId": 1382
          },
          {
              "City": "Chandur",
              "CityId": 42
          },
          {
              "City": "Chandur",
              "CityId": 2534
          },
          {
              "City": "Chandur Bazar",
              "CityId": 2535
          },
          {
              "City": "Chandvad",
              "CityId": 2536
          },
          {
              "City": "Changanacheri",
              "CityId": 1865
          },
          {
              "City": "Changlang",
              "CityId": 302
          },
          {
              "City": "Channagiri",
              "CityId": 1576
          },
          {
              "City": "Channapatna",
              "CityId": 1577
          },
          {
              "City": "Channarayapatna",
              "CityId": 1578
          },
          {
              "City": "Chanod",
              "CityId": 843
          },
          {
              "City": "Chanpatia",
              "CityId": 483
          },
          {
              "City": "Chapar",
              "CityId": 341
          },
          {
              "City": "Chapari",
              "CityId": 5421
          },
          {
              "City": "Chapui",
              "CityId": 5422
          },
          {
              "City": "Char Brahmanagar",
              "CityId": 5423
          },
          {
              "City": "Char Maijdia",
              "CityId": 5424
          },
          {
              "City": "Charari Sharief",
              "CityId": 1292
          },
          {
              "City": "Charcha",
              "CityId": 618
          },
          {
              "City": "Charibatia",
              "CityId": 3009
          },
          {
              "City": "Charka",
              "CityId": 5425
          },
          {
              "City": "Charkhari",
              "CityId": 4678
          },
          {
              "City": "Charkhi Dadri",
              "CityId": 1111
          },
          {
              "City": "Charoda",
              "CityId": 619
          },
          {
              "City": "Charthawal",
              "CityId": 4679
          },
          {
              "City": "Chas",
              "CityId": 1383
          },
          {
              "City": "Chata Kalikapur",
              "CityId": 5426
          },
          {
              "City": "Chatakonda",
              "CityId": 43
          },
          {
              "City": "Chatra",
              "CityId": 1384
          },
          {
              "City": "Chatrapatti",
              "CityId": 3655
          },
          {
              "City": "Chatrapur",
              "CityId": 3010
          },
          {
              "City": "Chatsu",
              "CityId": 3338
          },
          {
              "City": "Chauhati",
              "CityId": 5427
          },
          {
              "City": "Chaumuhan",
              "CityId": 4680
          },
          {
              "City": "Chaupal",
              "CityId": 1213
          },
          {
              "City": "Chaurai Khas",
              "CityId": 2167
          },
          {
              "City": "Chauwara",
              "CityId": 1866
          },
          {
              "City": "Chavakkad",
              "CityId": 1867
          },
          {
              "City": "Chaya",
              "CityId": 844
          },
          {
              "City": "Checha Khata",
              "CityId": 5428
          },
          {
              "City": "Chechat",
              "CityId": 3339
          },
          {
              "City": "Chekonidhara",
              "CityId": 342
          },
          {
              "City": "Chelad",
              "CityId": 5429
          },
          {
              "City": "Chelakkara",
              "CityId": 1868
          },
          {
              "City": "Chelora",
              "CityId": 1869
          },
          {
              "City": "Chembarambakkam",
              "CityId": 3656
          },
          {
              "City": "Chemmumiahpet",
              "CityId": 44
          },
          {
              "City": "Chenani",
              "CityId": 1293
          },
          {
              "City": "Chendamangalam",
              "CityId": 1870
          },
          {
              "City": "Chengalpattu",
              "CityId": 3657
          },
          {
              "City": "Chengam",
              "CityId": 3658
          },
          {
              "City": "Chengamanad",
              "CityId": 1871
          },
          {
              "City": "Chengannur",
              "CityId": 1872
          },
          {
              "City": "Chennai",
              "CityId": 3659
          },
          {
              "City": "Chennasamudram",
              "CityId": 3660
          },
          {
              "City": "Chennimalai",
              "CityId": 3661
          },
          {
              "City": "Chenpur",
              "CityId": 845
          },
          {
              "City": "Cheranallur",
              "CityId": 1873
          },
          {
              "City": "Cheranmadevi",
              "CityId": 3662
          },
          {
              "City": "Cheriyakadavu",
              "CityId": 1874
          },
          {
              "City": "Cherrapunji",
              "CityId": 2920
          },
          {
              "City": "Cherthala",
              "CityId": 1875
          },
          {
              "City": "Cherukunnu",
              "CityId": 1876
          },
          {
              "City": "Cheruthazham",
              "CityId": 1877
          },
          {
              "City": "Cheruvanki",
              "CityId": 3663
          },
          {
              "City": "Cheruvannur",
              "CityId": 1878
          },
          {
              "City": "Cheruvattur",
              "CityId": 1879
          },
          {
              "City": "Chetpet",
              "CityId": 3664
          },
          {
              "City": "Chettiarpatti",
              "CityId": 3665
          },
          {
              "City": "Chettipalaiyam",
              "CityId": 3666
          },
          {
              "City": "Chettipalayam Cantonment",
              "CityId": 3667
          },
          {
              "City": "Chettithangal",
              "CityId": 3668
          },
          {
              "City": "Chevvur",
              "CityId": 1880
          },
          {
              "City": "Cheyur",
              "CityId": 3669
          },
          {
              "City": "Cheyyar",
              "CityId": 3670
          },
          {
              "City": "Chhabra",
              "CityId": 3340
          },
          {
              "City": "Chhachhrauli",
              "CityId": 1112
          },
          {
              "City": "Chhapar",
              "CityId": 3341
          },
          {
              "City": "Chhapi",
              "CityId": 846
          },
          {
              "City": "Chhapra",
              "CityId": 484
          },
          {
              "City": "Chhaprabhatha",
              "CityId": 847
          },
          {
              "City": "Chhaprauli",
              "CityId": 4681
          },
          {
              "City": "Chhara Rafatpur",
              "CityId": 4682
          },
          {
              "City": "Chharprauli",
              "CityId": 4683
          },
          {
              "City": "Chhata",
              "CityId": 4684
          },
          {
              "City": "Chhatapur",
              "CityId": 485
          },
          {
              "City": "Chhatari",
              "CityId": 4685
          },
          {
              "City": "Chhatarpur",
              "CityId": 2168
          },
          {
              "City": "Chhatatanr",
              "CityId": 1385
          },
          {
              "City": "Chhatral",
              "CityId": 848
          },
          {
              "City": "Chhibramau",
              "CityId": 4686
          },
          {
              "City": "Chhindwara",
              "CityId": 2169
          },
          {
              "City": "Chhipa Barod",
              "CityId": 3342
          },
          {
              "City": "Chhora",
              "CityId": 5430
          },
          {
              "City": "Chhota Chhindwara",
              "CityId": 2170
          },
          {
              "City": "Chhota Udepur",
              "CityId": 849
          },
          {
              "City": "Chhotaputki",
              "CityId": 1386
          },
          {
              "City": "Chhoti Sadri",
              "CityId": 3343
          },
          {
              "City": "Chhuikhadan",
              "CityId": 620
          },
          {
              "City": "Chhutmalpur",
              "CityId": 4687
          },
          {
              "City": "Chicalim",
              "CityId": 722
          },
          {
              "City": "Chichli",
              "CityId": 2171
          },
          {
              "City": "Chicholi",
              "CityId": 2537
          },
          {
              "City": "Chickballapur",
              "CityId": 1579
          },
          {
              "City": "Chidambaram",
              "CityId": 3671
          },
          {
              "City": "Chidiga",
              "CityId": 45
          },
          {
              "City": "Chik Ballapur",
              "CityId": 1580
          },
          {
              "City": "Chikhala",
              "CityId": 2538
          },
          {
              "City": "Chikhaldara",
              "CityId": 2539
          },
          {
              "City": "Chikhli",
              "CityId": 850
          },
          {
              "City": "Chikhli",
              "CityId": 2540
          },
          {
              "City": "Chikitigarh",
              "CityId": 3011
          },
          {
              "City": "Chikkaballapur",
              "CityId": 1581
          },
          {
              "City": "Chikmagalur",
              "CityId": 1582
          },
          {
              "City": "Chiknayakanhalli",
              "CityId": 1583
          },
          {
              "City": "Chikodi",
              "CityId": 1584
          },
          {
              "City": "Chikrand",
              "CityId": 5431
          },
          {
              "City": "Chilakaluripet",
              "CityId": 46
          },
          {
              "City": "Chilkana Sultanpur",
              "CityId": 4688
          },
          {
              "City": "Chiloda",
              "CityId": 851
          },
          {
              "City": "Chima",
              "CityId": 3164
          },
          {
              "City": "Chimakurthy",
              "CityId": 47
          },
          {
              "City": "Chimbel",
              "CityId": 723
          },
          {
              "City": "Chinagadila",
              "CityId": 48
          },
          {
              "City": "Chinagantyada",
              "CityId": 49
          },
          {
              "City": "Chinalapatti",
              "CityId": 3672
          },
          {
              "City": "Chinchani",
              "CityId": 2541
          },
          {
              "City": "Chinchinim",
              "CityId": 724
          },
          {
              "City": "Chincholi",
              "CityId": 1585
          },
          {
              "City": "Chinchwad",
              "CityId": 2542
          },
          {
              "City": "Chinna Anuppanadi",
              "CityId": 3673
          },
          {
              "City": "Chinna Salem",
              "CityId": 3674
          },
          {
              "City": "Chinnachawk",
              "CityId": 50
          },
          {
              "City": "Chinnakkampalayam",
              "CityId": 3675
          },
          {
              "City": "Chinnammanur",
              "CityId": 3676
          },
          {
              "City": "Chinnampalaiyam",
              "CityId": 3677
          },
          {
              "City": "Chinnasekkadu",
              "CityId": 3678
          },
          {
              "City": "Chinnavedampatti",
              "CityId": 3679
          },
          {
              "City": "Chintalavalasa",
              "CityId": 51
          },
          {
              "City": "Chintamani",
              "CityId": 1586
          },
          {
              "City": "Chiplun",
              "CityId": 2543
          },
          {
              "City": "Chipurupalle",
              "CityId": 52
          },
          {
              "City": "Chirakkal",
              "CityId": 1881
          },
          {
              "City": "Chirala",
              "CityId": 53
          },
          {
              "City": "Chirawa",
              "CityId": 3344
          },
          {
              "City": "Chirgaon",
              "CityId": 4689
          },
          {
              "City": "Chiria",
              "CityId": 1387
          },
          {
              "City": "Chirkunda",
              "CityId": 1388
          },
          {
              "City": "Chirmiri",
              "CityId": 621
          },
          {
              "City": "Chit Baragaon",
              "CityId": 4690
          },
          {
              "City": "Chita",
              "CityId": 1113
          },
          {
              "City": "Chitaguppa",
              "CityId": 1587
          },
          {
              "City": "Chitapur",
              "CityId": 1588
          },
          {
              "City": "Chitlapakkam",
              "CityId": 3680
          },
          {
              "City": "Chitradurga",
              "CityId": 1589
          },
          {
              "City": "Chitrakonda",
              "CityId": 3012
          },
          {
              "City": "Chitrakut",
              "CityId": 2172
          },
          {
              "City": "Chitrakut Dham",
              "CityId": 4691
          },
          {
              "City": "Chittaranjan",
              "CityId": 5432
          },
          {
              "City": "Chittaurgarh",
              "CityId": 3345
          },
          {
              "City": "Chittodu",
              "CityId": 3681
          },
          {
              "City": "Chittoor",
              "CityId": 54
          },
          {
              "City": "Chittorgarh",
              "CityId": 3346
          },
          {
              "City": "Chittur",
              "CityId": 1882
          },
          {
              "City": "Chockli",
              "CityId": 1883
          },
          {
              "City": "Chodavaram",
              "CityId": 55
          },
          {
              "City": "Chohal",
              "CityId": 3165
          },
          {
              "City": "Cholapuram",
              "CityId": 3682
          },
          {
              "City": "Chomun",
              "CityId": 3347
          },
          {
              "City": "Chopan",
              "CityId": 4692
          },
          {
              "City": "Chopda",
              "CityId": 2544
          },
          {
              "City": "Chorvad",
              "CityId": 852
          },
          {
              "City": "Chotila",
              "CityId": 853
          },
          {
              "City": "Choto Haibor",
              "CityId": 343
          },
          {
              "City": "Choubepur Kalan",
              "CityId": 4693
          },
          {
              "City": "Choudwar",
              "CityId": 3013
          },
          {
              "City": "Choutuppal",
              "CityId": 56
          },
          {
              "City": "Chuari Khas",
              "CityId": 1214
          },
          {
              "City": "Chumukedima",
              "CityId": 2957
          },
          {
              "City": "Chunar",
              "CityId": 4694
          },
          {
              "City": "Chunchupalle",
              "CityId": 57
          },
          {
              "City": "Churachandpur",
              "CityId": 2887
          },
          {
              "City": "Churhat",
              "CityId": 2173
          },
          {
              "City": "Churi",
              "CityId": 1389
          },
          {
              "City": "Churk Ghurma",
              "CityId": 4695
          },
          {
              "City": "Churnikkara",
              "CityId": 1884
          },
          {
              "City": "Churu",
              "CityId": 3348
          },
          {
              "City": "Clement Town",
              "CityId": 5234
          },
          {
              "City": "Coimbatore",
              "CityId": 3683
          },
          {
              "City": "Colgong",
              "CityId": 486
          },
          {
              "City": "Colonelganj",
              "CityId": 4696
          },
          {
              "City": "Colvale",
              "CityId": 725
          },
          {
              "City": "Contai",
              "CityId": 5433
          },
          {
              "City": "Cooch Behar",
              "CityId": 5434
          },
          {
              "City": "Coonoor",
              "CityId": 3684
          },
          {
              "City": "Coorg",
              "CityId": 1590
          },
          {
              "City": "Corlim",
              "CityId": 726
          },
          {
              "City": "Cortalim",
              "CityId": 727
          },
          {
              "City": "Courtalam",
              "CityId": 3685
          },
          {
              "City": "Cuddalore",
              "CityId": 3686
          },
          {
              "City": "Cuddapah",
              "CityId": 58
          },
          {
              "City": "Cumbum",
              "CityId": 59
          },
          {
              "City": "Cuncolim",
              "CityId": 728
          },
          {
              "City": "Curchorem",
              "CityId": 729
          },
          {
              "City": "Curti",
              "CityId": 730
          },
          {
              "City": "Cuttack",
              "CityId": 3014
          },
          {
              "City": "Dabhoi",
              "CityId": 854
          },
          {
              "City": "Dabhol",
              "CityId": 2545
          },
          {
              "City": "Daboh",
              "CityId": 2174
          },
          {
              "City": "Dabra",
              "CityId": 2175
          },
          {
              "City": "Dabwali",
              "CityId": 1114
          },
          {
              "City": "Dadara",
              "CityId": 855
          },
          {
              "City": "Dadhapatna",
              "CityId": 3015
          },
          {
              "City": "Dadri",
              "CityId": 4697
          },
          {
              "City": "Dagshai",
              "CityId": 1215
          },
          {
              "City": "Dahance",
              "CityId": 2546
          },
          {
              "City": "Dahanu",
              "CityId": 2547
          },
          {
              "City": "Daharu",
              "CityId": 2548
          },
          {
              "City": "Dahod",
              "CityId": 856
          },
          {
              "City": "Dainhat",
              "CityId": 5435
          },
          {
              "City": "Daitari",
              "CityId": 3016
          },
          {
              "City": "Dakor",
              "CityId": 857
          },
          {
              "City": "Dakshin Baguan",
              "CityId": 5436
          },
          {
              "City": "Dakshin Jhapardaha",
              "CityId": 5437
          },
          {
              "City": "Dakshin Rajyadharpur",
              "CityId": 5438
          },
          {
              "City": "Dakshin Raypur",
              "CityId": 5439
          },
          {
              "City": "Dalavaipatti",
              "CityId": 3687
          },
          {
              "City": "Dalhousie",
              "CityId": 1216
          },
          {
              "City": "Dalhousie Cantonment",
              "CityId": 1217
          },
          {
              "City": "Dalkola",
              "CityId": 5440
          },
          {
              "City": "Dalmau",
              "CityId": 4698
          },
          {
              "City": "Dalsingh Sarai",
              "CityId": 487
          },
          {
              "City": "Daltenganj",
              "CityId": 1390
          },
          {
              "City": "Dalurband",
              "CityId": 5441
          },
          {
              "City": "Daman",
              "CityId": 704
          },
          {
              "City": "Damanjodi",
              "CityId": 3017
          },
          {
              "City": "Damnagar",
              "CityId": 858
          },
          {
              "City": "Damoh",
              "CityId": 2176
          },
          {
              "City": "Damtal",
              "CityId": 1218
          },
          {
              "City": "Damua",
              "CityId": 2177
          },
          {
              "City": "Dandeli",
              "CityId": 1591
          },
          {
              "City": "Danguwapasi",
              "CityId": 1391
          },
          {
              "City": "Dankaur",
              "CityId": 4699
          },
          {
              "City": "Dantewada",
              "CityId": 622
          },
          {
              "City": "Daosa",
              "CityId": 3349
          },
          {
              "City": "Dapoli Camp",
              "CityId": 2549
          },
          {
              "City": "Daporijo",
              "CityId": 303
          },
          {
              "City": "Darap Pur",
              "CityId": 5442
          },
          {
              "City": "Darasuram",
              "CityId": 3688
          },
          {
              "City": "Darbhanga",
              "CityId": 488
          },
          {
              "City": "Dargajogihalli",
              "CityId": 1592
          },
          {
              "City": "Dari",
              "CityId": 1392
          },
          {
              "City": "Dariba",
              "CityId": 3350
          },
          {
              "City": "Dariyabad",
              "CityId": 4700
          },
          {
              "City": "Darjiling",
              "CityId": 5443
          },
          {
              "City": "Darlawn",
              "CityId": 2939
          },
          {
              "City": "Darnakal",
              "CityId": 60
          },
          {
              "City": "Darwa",
              "CityId": 2550
          },
          {
              "City": "Daryapur",
              "CityId": 2551
          },
          {
              "City": "Dasarahalli",
              "CityId": 1593
          },
          {
              "City": "Dasna",
              "CityId": 4701
          },
          {
              "City": "Dasnapur",
              "CityId": 61
          },
          {
              "City": "Dasuya",
              "CityId": 3166
          },
          {
              "City": "Dataganj",
              "CityId": 4702
          },
          {
              "City": "Datia",
              "CityId": 2178
          },
          {
              "City": "Dattapur",
              "CityId": 2552
          },
          {
              "City": "Daudnagar",
              "CityId": 489
          },
          {
              "City": "Daulatpur",
              "CityId": 1219
          },
          {
              "City": "Daulatpur",
              "CityId": 3167
          },
          {
              "City": "Daulatpur",
              "CityId": 5444
          },
          {
              "City": "Dauleshwaram",
              "CityId": 62
          },
          {
              "City": "Daund",
              "CityId": 2553
          },
          {
              "City": "Daurala",
              "CityId": 4703
          },
          {
              "City": "Dausa",
              "CityId": 3351
          },
          {
              "City": "Davangere",
              "CityId": 1594
          },
          {
              "City": "Davlameti",
              "CityId": 2554
          },
          {
              "City": "Davorlim",
              "CityId": 731
          },
          {
              "City": "Dayal Bagh",
              "CityId": 4704
          },
          {
              "City": "Debipur",
              "CityId": 5445
          },
          {
              "City": "Deesa",
              "CityId": 859
          },
          {
              "City": "Defahat",
              "CityId": 5446
          },
          {
              "City": "Deglur",
              "CityId": 2555
          },
          {
              "City": "Dehra Dun Cantonment",
              "CityId": 5235
          },
          {
              "City": "Dehradun",
              "CityId": 5236
          },
          {
              "City": "Dehrakhas",
              "CityId": 5237
          },
          {
              "City": "Dehri",
              "CityId": 490
          },
          {
              "City": "Dehu Road",
              "CityId": 2556
          },
          {
              "City": "Delhi",
              "CityId": 706
          },
          {
              "City": "Delvada",
              "CityId": 860
          },
          {
              "City": "Denkanikottai",
              "CityId": 3689
          },
          {
              "City": "Deoband",
              "CityId": 4705
          },
          {
              "City": "Deodara",
              "CityId": 2179
          },
          {
              "City": "Deogarh",
              "CityId": 3018
          },
          {
              "City": "Deoghar",
              "CityId": 1393
          },
          {
              "City": "Deolali",
              "CityId": 2557
          },
          {
              "City": "Deolali Pravara",
              "CityId": 2558
          },
          {
              "City": "Deoli",
              "CityId": 2559
          },
          {
              "City": "Deoli",
              "CityId": 3352
          },
          {
              "City": "Deomali",
              "CityId": 304
          },
          {
              "City": "Deora",
              "CityId": 5447
          },
          {
              "City": "Deoranian",
              "CityId": 4706
          },
          {
              "City": "Deori",
              "CityId": 623
          },
          {
              "City": "Deori",
              "CityId": 2180
          },
          {
              "City": "Deori Khas",
              "CityId": 2181
          },
          {
              "City": "Deoria",
              "CityId": 4707
          },
          {
              "City": "Deorikalan",
              "CityId": 1394
          },
          {
              "City": "Depalpur",
              "CityId": 2182
          },
          {
              "City": "Dera Baba Nanak",
              "CityId": 3168
          },
          {
              "City": "Dera Bassi",
              "CityId": 3169
          },
          {
              "City": "Dera Gopipur",
              "CityId": 1220
          },
          {
              "City": "Deracolliery",
              "CityId": 3019
          },
          {
              "City": "Dergaon",
              "CityId": 344
          },
          {
              "City": "Desaiganj",
              "CityId": 2560
          },
          {
              "City": "Deshnok",
              "CityId": 3353
          },
          {
              "City": "Desur",
              "CityId": 3690
          },
          {
              "City": "Deulgaon Raja",
              "CityId": 2561
          },
          {
              "City": "Deulia",
              "CityId": 5448
          },
          {
              "City": "Devadanapatti",
              "CityId": 3691
          },
          {
              "City": "Devadurga",
              "CityId": 1595
          },
          {
              "City": "Devagiri",
              "CityId": 1596
          },
          {
              "City": "Devakkottai",
              "CityId": 3692
          },
          {
              "City": "Devakottai",
              "CityId": 3693
          },
          {
              "City": "Devanangurichi",
              "CityId": 3694
          },
          {
              "City": "Devanhalli",
              "CityId": 1597
          },
          {
              "City": "Devaprayag",
              "CityId": 5238
          },
          {
              "City": "Devarkonda",
              "CityId": 4455
          },
          {
              "City": "Devarshola",
              "CityId": 3695
          },
          {
              "City": "Devasthanam",
              "CityId": 3696
          },
          {
              "City": "Devendranagar",
              "CityId": 2183
          },
          {
              "City": "Devgadh Baria",
              "CityId": 861
          },
          {
              "City": "Devgarh",
              "CityId": 3354
          },
          {
              "City": "Devghar",
              "CityId": 1395
          },
          {
              "City": "Devhara",
              "CityId": 2184
          },
          {
              "City": "Devli",
              "CityId": 3355
          },
          {
              "City": "Devsar",
              "CityId": 862
          },
          {
              "City": "Dewa",
              "CityId": 4708
          },
          {
              "City": "Dewas",
              "CityId": 2185
          },
          {
              "City": "Dewhadi",
              "CityId": 2562
          },
          {
              "City": "Dhaka",
              "CityId": 491
          },
          {
              "City": "Dhakuria",
              "CityId": 5449
          },
          {
              "City": "Dhalavoipuram",
              "CityId": 3697
          },
          {
              "City": "Dhali",
              "CityId": 3698
          },
          {
              "City": "Dhaliyur",
              "CityId": 3699
          },
          {
              "City": "Dhalli",
              "CityId": 1221
          },
          {
              "City": "Dhaluwala",
              "CityId": 5239
          },
          {
              "City": "Dhamanagar",
              "CityId": 3020
          },
          {
              "City": "Dhamdha",
              "CityId": 624
          },
          {
              "City": "Dhamnod",
              "CityId": 2186
          },
          {
              "City": "Dhampur",
              "CityId": 4709
          },
          {
              "City": "Dhamtari",
              "CityId": 625
          },
          {
              "City": "Dhana",
              "CityId": 2187
          },
          {
              "City": "Dhanauha",
              "CityId": 4710
          },
          {
              "City": "Dhanaula",
              "CityId": 3170
          },
          {
              "City": "Dhanauli",
              "CityId": 4711
          },
          {
              "City": "Dhanaura",
              "CityId": 4712
          },
          {
              "City": "Dhanbad",
              "CityId": 1396
          },
          {
              "City": "Dhandadihi",
              "CityId": 5450
          },
          {
              "City": "Dhandera",
              "CityId": 5240
          },
          {
              "City": "Dhandhuka",
              "CityId": 863
          },
          {
              "City": "Dhanera",
              "CityId": 864
          },
          {
              "City": "Dhangdhra",
              "CityId": 865
          },
          {
              "City": "Dhanpuri",
              "CityId": 2188
          },
          {
              "City": "Dhansura",
              "CityId": 866
          },
          {
              "City": "Dhanwar",
              "CityId": 1397
          },
          {
              "City": "Dhanyakuria",
              "CityId": 5451
          },
          {
              "City": "Dhar",
              "CityId": 2189
          },
          {
              "City": "Dharam Kot",
              "CityId": 3171
          },
          {
              "City": "Dharamjaigarh",
              "CityId": 626
          },
          {
              "City": "Dharampur",
              "CityId": 867
          },
          {
              "City": "Dharampuri",
              "CityId": 2190
          },
          {
              "City": "Dharamshala",
              "CityId": 1222
          },
          {
              "City": "Dharangaon",
              "CityId": 2563
          },
          {
              "City": "Dharapadavedu",
              "CityId": 3700
          },
          {
              "City": "Dharapur",
              "CityId": 345
          },
          {
              "City": "Dharapuram",
              "CityId": 3701
          },
          {
              "City": "Dharchula",
              "CityId": 5241
          },
          {
              "City": "Dharchula Dehat",
              "CityId": 5242
          },
          {
              "City": "Dhari",
              "CityId": 868
          },
          {
              "City": "Dhariawad",
              "CityId": 3356
          },
          {
              "City": "Dhariwal",
              "CityId": 3172
          },
          {
              "City": "Dharmabad",
              "CityId": 2564
          },
          {
              "City": "Dharmadam",
              "CityId": 1885
          },
          {
              "City": "Dharmanagar",
              "CityId": 4513
          },
          {
              "City": "Dharmapur",
              "CityId": 5452
          },
          {
              "City": "Dharmapuri",
              "CityId": 3702
          },
          {
              "City": "Dharmavaram",
              "CityId": 63
          },
          {
              "City": "Dharoti Khurd",
              "CityId": 4713
          },
          {
              "City": "Dharuhera",
              "CityId": 1115
          },
          {
              "City": "Dharur",
              "CityId": 2565
          },
          {
              "City": "Dharwar",
              "CityId": 1598
          },
          {
              "City": "Dhatau",
              "CityId": 2566
          },
          {
              "City": "Dhatri Gram",
              "CityId": 5453
          },
          {
              "City": "Dhaulpur",
              "CityId": 3357
          },
          {
              "City": "Dhaunsar",
              "CityId": 1398
          },
          {
              "City": "Dhauratanda",
              "CityId": 4714
          },
          {
              "City": "Dhaurhra",
              "CityId": 4715
          },
          {
              "City": "Dhekiajuli",
              "CityId": 346
          },
          {
              "City": "Dhemaji",
              "CityId": 347
          },
          {
              "City": "Dhenkanal",
              "CityId": 3021
          },
          {
              "City": "Dhilwan",
              "CityId": 3173
          },
          {
              "City": "Dhing",
              "CityId": 348
          },
          {
              "City": "Dhola",
              "CityId": 869
          },
          {
              "City": "Dholka",
              "CityId": 870
          },
          {
              "City": "Dholka Rural",
              "CityId": 871
          },
          {
              "City": "Dholpur",
              "CityId": 3358
          },
          {
              "City": "Dhone",
              "CityId": 64
          },
          {
              "City": "Dhoraji",
              "CityId": 872
          },
          {
              "City": "Dhrangadhra",
              "CityId": 873
          },
          {
              "City": "Dhrol",
              "CityId": 874
          },
          {
              "City": "Dhubri",
              "CityId": 349
          },
          {
              "City": "Dhuburi",
              "CityId": 350
          },
          {
              "City": "Dhuilya",
              "CityId": 5454
          },
          {
              "City": "Dhulagari",
              "CityId": 5455
          },
          {
              "City": "Dhule",
              "CityId": 2567
          },
          {
              "City": "Dhulian",
              "CityId": 5456
          },
          {
              "City": "Dhupdal",
              "CityId": 1599
          },
          {
              "City": "Dhupgari",
              "CityId": 5457
          },
          {
              "City": "Dhuri",
              "CityId": 3174
          },
          {
              "City": "Dhusaripara",
              "CityId": 5458
          },
          {
              "City": "Dhuva",
              "CityId": 875
          },
          {
              "City": "Dhuwaran",
              "CityId": 876
          },
          {
              "City": "Diamond Harbour",
              "CityId": 5459
          },
          {
              "City": "Dibai",
              "CityId": 4716
          },
          {
              "City": "Dibiyapur",
              "CityId": 4717
          },
          {
              "City": "Dibrugarh",
              "CityId": 351
          },
          {
              "City": "Didihat",
              "CityId": 5243
          },
          {
              "City": "Didwana",
              "CityId": 3359
          },
          {
              "City": "Dig",
              "CityId": 3360
          },
          {
              "City": "Digapahandi",
              "CityId": 3022
          },
          {
              "City": "Digboi",
              "CityId": 352
          },
          {
              "City": "Digboi Oil Town",
              "CityId": 353
          },
          {
              "City": "Digdoh",
              "CityId": 2568
          },
          {
              "City": "Digha",
              "CityId": 5460
          },
          {
              "City": "Dighawani",
              "CityId": 2191
          },
          {
              "City": "Dighwara",
              "CityId": 492
          },
          {
              "City": "Diglur",
              "CityId": 2569
          },
          {
              "City": "Dignala",
              "CityId": 5461
          },
          {
              "City": "Digras",
              "CityId": 2570
          },
          {
              "City": "Digvijaygram",
              "CityId": 877
          },
          {
              "City": "Diken",
              "CityId": 2192
          },
          {
              "City": "Dildarnagar Fatehpur",
              "CityId": 4718
          },
          {
              "City": "Dimapur",
              "CityId": 2958
          },
          {
              "City": "Dimaruguri",
              "CityId": 354
          },
          {
              "City": "Dinanagar",
              "CityId": 3175
          },
          {
              "City": "Dinapur",
              "CityId": 493
          },
          {
              "City": "Dinapur Cantonment",
              "CityId": 494
          },
          {
              "City": "Dindigul",
              "CityId": 3703
          },
          {
              "City": "Dindori",
              "CityId": 2193
          },
          {
              "City": "Dineshpur",
              "CityId": 5244
          },
          {
              "City": "Dinhata",
              "CityId": 5462
          },
          {
              "City": "Diphu",
              "CityId": 355
          },
          {
              "City": "Dipka",
              "CityId": 627
          },
          {
              "City": "Dirba",
              "CityId": 3176
          },
          {
              "City": "Disa",
              "CityId": 878
          },
          {
              "City": "Dispur",
              "CityId": 356
          },
          {
              "City": "Diu",
              "CityId": 705
          },
          {
              "City": "Do Ghat",
              "CityId": 4719
          },
          {
              "City": "Doboka",
              "CityId": 357
          },
          {
              "City": "Dod Ballapur",
              "CityId": 1600
          },
          {
              "City": "Doda",
              "CityId": 1294
          },
          {
              "City": "Dohrighat",
              "CityId": 4720
          },
          {
              "City": "Doiwala",
              "CityId": 5245
          },
          {
              "City": "Dokmoka",
              "CityId": 358
          },
          {
              "City": "Dola",
              "CityId": 2194
          },
          {
              "City": "Doman Hill Colliery",
              "CityId": 628
          },
          {
              "City": "Dombivli",
              "CityId": 2571
          },
          {
              "City": "Dommara Nandyal",
              "CityId": 65
          },
          {
              "City": "Dona Paula",
              "CityId": 732
          },
          {
              "City": "Dondaicha",
              "CityId": 2572
          },
          {
              "City": "Dongargaon",
              "CityId": 629
          },
          {
              "City": "Dongragarh",
              "CityId": 630
          },
          {
              "City": "Donimalai",
              "CityId": 1601
          },
          {
              "City": "Donkamokan",
              "CityId": 359
          },
          {
              "City": "Doraha",
              "CityId": 3177
          },
          {
              "City": "Dostpur",
              "CityId": 4721
          },
          {
              "City": "Dowlaiswaram",
              "CityId": 66
          },
          {
              "City": "Dubrajpur",
              "CityId": 5463
          },
          {
              "City": "Dudhani",
              "CityId": 2573
          },
          {
              "City": "Dudhinagar",
              "CityId": 4722
          },
          {
              "City": "Dugadda",
              "CityId": 5246
          },
          {
              "City": "Dugda",
              "CityId": 1399
          },
          {
              "City": "Dulhipur",
              "CityId": 4723
          },
          {
              "City": "Duliagaon",
              "CityId": 360
          },
          {
              "City": "Duliajan",
              "CityId": 361
          },
          {
              "City": "Duliajan No.1",
              "CityId": 362
          },
          {
              "City": "Dum Duma",
              "CityId": 363
          },
          {
              "City": "Dumar Kachhar",
              "CityId": 2195
          },
          {
              "City": "Dumarkunda",
              "CityId": 1400
          },
          {
              "City": "Dumjor",
              "CityId": 5464
          },
          {
              "City": "Dumka",
              "CityId": 1401
          },
          {
              "City": "Dumra",
              "CityId": 495
          },
          {
              "City": "Dumraon",
              "CityId": 496
          },
          {
              "City": "Dundahera",
              "CityId": 1116
          },
          {
              "City": "Dundwaraganj",
              "CityId": 4724
          },
          {
              "City": "Dungamal",
              "CityId": 3023
          },
          {
              "City": "Dungar",
              "CityId": 879
          },
          {
              "City": "Dungargarh",
              "CityId": 3361
          },
          {
              "City": "Dungariya Chhapara",
              "CityId": 2196
          },
          {
              "City": "Dungarpur",
              "CityId": 880
          },
          {
              "City": "Dungarpur",
              "CityId": 3362
          },
          {
              "City": "Dungra",
              "CityId": 881
          },
          {
              "City": "Durg",
              "CityId": 631
          },
          {
              "City": "Durga Nagar",
              "CityId": 364
          },
          {
              "City": "Durgapur",
              "CityId": 2574
          },
          {
              "City": "Durgapur",
              "CityId": 5465
          },
          {
              "City": "Durllabhganj",
              "CityId": 5466
          },
          {
              "City": "Duru-Verinag",
              "CityId": 1295
          },
          {
              "City": "Dusi",
              "CityId": 3704
          },
          {
              "City": "Dwarahat",
              "CityId": 5247
          },
          {
              "City": "Dwarka",
              "CityId": 882
          },
          {
              "City": "Dyane",
              "CityId": 2575
          },
          {
              "City": "East Godavari Dist.",
              "CityId": 67
          },
          {
              "City": "Edaganasalai",
              "CityId": 3705
          },
          {
              "City": "Edaikodu",
              "CityId": 3706
          },
          {
              "City": "Edakalinadu",
              "CityId": 3707
          },
          {
              "City": "Edandol",
              "CityId": 2576
          },
          {
              "City": "Edappal",
              "CityId": 1886
          },
          {
              "City": "Edathala",
              "CityId": 1887
          },
          {
              "City": "Eddumailaram",
              "CityId": 68
          },
          {
              "City": "Edulapuram",
              "CityId": 69
          },
          {
              "City": "Egarkunr",
              "CityId": 1402
          },
          {
              "City": "Egra",
              "CityId": 5467
          },
          {
              "City": "Ekambara kuppam",
              "CityId": 70
          },
          {
              "City": "Ekdil",
              "CityId": 4725
          },
          {
              "City": "Eklahare",
              "CityId": 2577
          },
          {
              "City": "Eksara",
              "CityId": 5468
          },
          {
              "City": "Elathur",
              "CityId": 3708
          },
          {
              "City": "Elayavur",
              "CityId": 1888
          },
          {
              "City": "Elayirampannai",
              "CityId": 3709
          },
          {
              "City": "Ellenabad",
              "CityId": 1117
          },
          {
              "City": "Elumalai",
              "CityId": 3710
          },
          {
              "City": "Elur",
              "CityId": 1889
          },
          {
              "City": "Eluru",
              "CityId": 71
          },
          {
              "City": "Enikapadu",
              "CityId": 72
          },
          {
              "City": "Eral",
              "CityId": 3711
          },
          {
              "City": "Eranholi",
              "CityId": 1890
          },
          {
              "City": "Eraniel",
              "CityId": 3712
          },
          {
              "City": "Erattupetta",
              "CityId": 1891
          },
          {
              "City": "Erich",
              "CityId": 4726
          },
          {
              "City": "Eriodu",
              "CityId": 3713
          },
          {
              "City": "Ernakulam",
              "CityId": 1892
          },
          {
              "City": "Erode",
              "CityId": 3714
          },
          {
              "City": "Erumaipatti",
              "CityId": 3715
          },
          {
              "City": "Eruvadi",
              "CityId": 3716
          },
          {
              "City": "Eruvatti",
              "CityId": 1893
          },
          {
              "City": "Etah",
              "CityId": 4727
          },
          {
              "City": "Etawah",
              "CityId": 4728
          },
          {
              "City": "Ethapur",
              "CityId": 3717
          },
          {
              "City": "Ettaiyapuram",
              "CityId": 3718
          },
          {
              "City": "Ettimadai",
              "CityId": 3719
          },
          {
              "City": "Ettumanoor",
              "CityId": 1894
          },
          {
              "City": "Ezhudesam",
              "CityId": 3720
          },
          {
              "City": "Faizabad",
              "CityId": 4729
          },
          {
              "City": "Faizabad Cantonment",
              "CityId": 4730
          },
          {
              "City": "Faizganj",
              "CityId": 4731
          },
          {
              "City": "Faizpur",
              "CityId": 2578
          },
          {
              "City": "Fakirtakya",
              "CityId": 73
          },
          {
              "City": "Falakata",
              "CityId": 5469
          },
          {
              "City": "Falna",
              "CityId": 3363
          },
          {
              "City": "Farah",
              "CityId": 4732
          },
          {
              "City": "Farakhpur",
              "CityId": 1118
          },
          {
              "City": "Farakka",
              "CityId": 5470
          },
          {
              "City": "Faridabad",
              "CityId": 1119
          },
          {
              "City": "Faridkot",
              "CityId": 3178
          },
          {
              "City": "Faridnagar",
              "CityId": 4733
          },
          {
              "City": "Faridpur",
              "CityId": 4734
          },
          {
              "City": "Faridpur Cantonment",
              "CityId": 4735
          },
          {
              "City": "Fariha",
              "CityId": 4736
          },
          {
              "City": "Farooqnagar",
              "CityId": 4456
          },
          {
              "City": "Farrukhabad",
              "CityId": 4737
          },
          {
              "City": "Farrukhnagar",
              "CityId": 74
          },
          {
              "City": "Farrukhnagar",
              "CityId": 1120
          },
          {
              "City": "Fateh Nangal",
              "CityId": 3179
          },
          {
              "City": "Fatehabad",
              "CityId": 1121
          },
          {
              "City": "Fatehabad",
              "CityId": 4738
          },
          {
              "City": "Fatehganj Pashchimi",
              "CityId": 4739
          },
          {
              "City": "Fatehganj Purvi",
              "CityId": 4740
          },
          {
              "City": "Fatehgarh",
              "CityId": 4741
          },
          {
              "City": "Fatehgarh Churian",
              "CityId": 3180
          },
          {
              "City": "Fatehgarh Sahib",
              "CityId": 3181
          },
          {
              "City": "Fatehnagar",
              "CityId": 3364
          },
          {
              "City": "Fatehpur",
              "CityId": 3365
          },
          {
              "City": "Fatehpur",
              "CityId": 4742
          },
          {
              "City": "Fatehpur Chaurasi",
              "CityId": 4743
          },
          {
              "City": "Fatehpur Sikri",
              "CityId": 4744
          },
          {
              "City": "Fatellapur",
              "CityId": 5471
          },
          {
              "City": "Fatwa",
              "CityId": 497
          },
          {
              "City": "Fazilka",
              "CityId": 3182
          },
          {
              "City": "Fekari",
              "CityId": 2579
          },
          {
              "City": "Feroke",
              "CityId": 1895
          },
          {
              "City": "Fertilizer Corporation of Indi",
              "CityId": 3024
          },
          {
              "City": "Firozabad",
              "CityId": 4745
          },
          {
              "City": "Firozpur",
              "CityId": 3183
          },
          {
              "City": "Firozpur Cantonment",
              "CityId": 3184
          },
          {
              "City": "Firozpur Jhirka",
              "CityId": 1122
          },
          {
              "City": "Flelanganj",
              "CityId": 883
          },
          {
              "City": "Forbesganj",
              "CityId": 498
          },
          {
              "City": "Fort Gloster",
              "CityId": 5472
          },
          {
              "City": "Frezarpur",
              "CityId": 632
          },
          {
              "City": "Gabberia",
              "CityId": 5473
          },
          {
              "City": "Gadag",
              "CityId": 1602
          },
          {
              "City": "Gadarpur",
              "CityId": 5248
          },
          {
              "City": "Gadarwara",
              "CityId": 2197
          },
          {
              "City": "Gadchiroli",
              "CityId": 2580
          },
          {
              "City": "Gaddiannaram",
              "CityId": 75
          },
          {
              "City": "Gadhda",
              "CityId": 885
          },
          {
              "City": "Gadhinghaj",
              "CityId": 2581
          },
          {
              "City": "Gadhra",
              "CityId": 1403
          },
          {
              "City": "Gadigachha",
              "CityId": 5474
          },
          {
              "City": "Gadwal",
              "CityId": 4457
          },
          {
              "City": "Gagret",
              "CityId": 1223
          },
          {
              "City": "Gairatganj",
              "CityId": 2198
          },
          {
              "City": "Gairkata",
              "CityId": 5475
          },
          {
              "City": "Gajapathinagaram",
              "CityId": 76
          },
          {
              "City": "Gajendragarh",
              "CityId": 1603
          },
          {
              "City": "Gajraula",
              "CityId": 4746
          },
          {
              "City": "Gajsinghpur",
              "CityId": 3366
          },
          {
              "City": "Gajularega",
              "CityId": 77
          },
          {
              "City": "Gajuvaka",
              "CityId": 78
          },
          {
              "City": "Gajwel",
              "CityId": 4458
          },
          {
              "City": "Gakulnagar",
              "CityId": 4514
          },
          {
              "City": "Galiakot",
              "CityId": 3367
          },
          {
              "City": "Ganapathipuram",
              "CityId": 3721
          },
          {
              "City": "Gandai",
              "CityId": 633
          },
          {
              "City": "Gandarbat",
              "CityId": 1296
          },
          {
              "City": "Gandevi",
              "CityId": 886
          },
          {
              "City": "Gandhi Nagar",
              "CityId": 2582
          },
          {
              "City": "Gandhi Nagar",
              "CityId": 3722
          },
          {
              "City": "Gandhi Sagar Hydel Colony",
              "CityId": 2199
          },
          {
              "City": "Gandhidham",
              "CityId": 887
          },
          {
              "City": "Gandhigram",
              "CityId": 4515
          },
          {
              "City": "Gandhinagar",
              "CityId": 888
          },
          {
              "City": "Ganeshgudi",
              "CityId": 1604
          },
          {
              "City": "Ganeshpur",
              "CityId": 2583
          },
          {
              "City": "Ganga Ghat",
              "CityId": 4747
          },
          {
              "City": "Gangaikondan",
              "CityId": 3723
          },
          {
              "City": "Gangakher",
              "CityId": 2584
          },
          {
              "City": "Ganganagar",
              "CityId": 3368
          },
          {
              "City": "Gangapur",
              "CityId": 2585
          },
          {
              "City": "Gangapur",
              "CityId": 3369
          },
          {
              "City": "Gangapur",
              "CityId": 4748
          },
          {
              "City": "Gangarampur",
              "CityId": 5476
          },
          {
              "City": "Gangavalli",
              "CityId": 3724
          },
          {
              "City": "Gangawati",
              "CityId": 1605
          },
          {
              "City": "Gangoh",
              "CityId": 4749
          },
          {
              "City": "Gangoli",
              "CityId": 1606
          },
          {
              "City": "Gangotri",
              "CityId": 5249
          },
          {
              "City": "Gangtok",
              "CityId": 3540
          },
          {
              "City": "Ganguvarpatti",
              "CityId": 3725
          },
          {
              "City": "Ganj Muradabad",
              "CityId": 4750
          },
          {
              "City": "Ganjam",
              "CityId": 3025
          },
          {
              "City": "Ganjbasoda",
              "CityId": 2200
          },
          {
              "City": "Gannaur",
              "CityId": 1123
          },
          {
              "City": "Gannavaram",
              "CityId": 79
          },
          {
              "City": "Garacharma",
              "CityId": 2
          },
          {
              "City": "Garacharma",
              "CityId": 80
          },
          {
              "City": "Garalgachha",
              "CityId": 5477
          },
          {
              "City": "Garautha",
              "CityId": 4751
          },
          {
              "City": "Garbeta Amlagora",
              "CityId": 5478
          },
          {
              "City": "Gardhiwala",
              "CityId": 3185
          },
          {
              "City": "Garhakota",
              "CityId": 2201
          },
          {
              "City": "Garhbeta",
              "CityId": 5479
          },
          {
              "City": "Garhi Malhara",
              "CityId": 2202
          },
          {
              "City": "Garhi Pukhta",
              "CityId": 4752
          },
          {
              "City": "Garhmukteshwar",
              "CityId": 4753
          },
          {
              "City": "Garhshankar",
              "CityId": 3186
          },
          {
              "City": "Gariaband",
              "CityId": 634
          },
          {
              "City": "Gariadhar",
              "CityId": 889
          },
          {
              "City": "Garimellapadu",
              "CityId": 81
          },
          {
              "City": "Garoth",
              "CityId": 2203
          },
          {
              "City": "Garshyamnagar",
              "CityId": 5480
          },
          {
              "City": "Garui",
              "CityId": 5481
          },
          {
              "City": "Garulia",
              "CityId": 5482
          },
          {
              "City": "Garwa",
              "CityId": 1404
          },
          {
              "City": "Gauchar",
              "CityId": 5250
          },
          {
              "City": "Gaura Barahaj",
              "CityId": 4754
          },
          {
              "City": "Gaurela",
              "CityId": 635
          },
          {
              "City": "Gauri Bazar",
              "CityId": 4755
          },
          {
              "City": "Gauribidanur",
              "CityId": 1607
          },
          {
              "City": "Gauripur",
              "CityId": 365
          },
          {
              "City": "Gausganj",
              "CityId": 4756
          },
          {
              "City": "Gautapura",
              "CityId": 2204
          },
          {
              "City": "Gawan",
              "CityId": 4757
          },
          {
              "City": "Gaya",
              "CityId": 499
          },
          {
              "City": "Gayespur",
              "CityId": 5483
          },
          {
              "City": "Gazipur",
              "CityId": 500
          },
          {
              "City": "Gelhapani",
              "CityId": 636
          },
          {
              "City": "Gevrai",
              "CityId": 2586
          },
          {
              "City": "Gezing",
              "CityId": 3541
          },
          {
              "City": "Ghagga",
              "CityId": 3187
          },
          {
              "City": "Ghamarwin",
              "CityId": 1224
          },
          {
              "City": "Ghanaur",
              "CityId": 3188
          },
          {
              "City": "Ghansor",
              "CityId": 2205
          },
          {
              "City": "Ghantapada",
              "CityId": 3026
          },
          {
              "City": "Gharghoda",
              "CityId": 637
          },
          {
              "City": "Ghatal",
              "CityId": 5484
          },
          {
              "City": "Ghatampur",
              "CityId": 4758
          },
          {
              "City": "Ghatanji",
              "CityId": 2587
          },
          {
              "City": "Ghatkesar",
              "CityId": 4459
          },
          {
              "City": "Ghatsila",
              "CityId": 1405
          },
          {
              "City": "Ghaziabad",
              "CityId": 4759
          },
          {
              "City": "Ghazipur",
              "CityId": 4760
          },
          {
              "City": "Ghiror",
              "CityId": 4761
          },
          {
              "City": "Gho Manhasan",
              "CityId": 1297
          },
          {
              "City": "Ghogha",
              "CityId": 890
          },
          {
              "City": "Ghoghardiha",
              "CityId": 501
          },
          {
              "City": "Ghorabandha",
              "CityId": 1406
          },
          {
              "City": "Ghorawal",
              "CityId": 4762
          },
          {
              "City": "Ghorsala",
              "CityId": 5485
          },
          {
              "City": "Ghosi",
              "CityId": 4763
          },
          {
              "City": "Ghosia Bazar",
              "CityId": 4764
          },
          {
              "City": "Ghoti",
              "CityId": 2588
          },
          {
              "City": "Ghraunda",
              "CityId": 1124
          },
          {
              "City": "Ghughuli",
              "CityId": 4765
          },
          {
              "City": "Ghugus",
              "CityId": 2589
          },
          {
              "City": "Ghulewadi",
              "CityId": 2590
          },
          {
              "City": "Ghuwara",
              "CityId": 2206
          },
          {
              "City": "Gidam",
              "CityId": 638
          },
          {
              "City": "Giddalur",
              "CityId": 82
          },
          {
              "City": "Giddarbaha",
              "CityId": 3189
          },
          {
              "City": "Gidi",
              "CityId": 1407
          },
          {
              "City": "Gingi",
              "CityId": 3726
          },
          {
              "City": "Giridih",
              "CityId": 1408
          },
          {
              "City": "Goa",
              "CityId": 733
          },
          {
              "City": "Goaljan",
              "CityId": 5486
          },
          {
              "City": "Goalpara",
              "CityId": 366
          },
          {
              "City": "Goasafat",
              "CityId": 5487
          },
          {
              "City": "Gobardanga",
              "CityId": 5488
          },
          {
              "City": "Gobindapur",
              "CityId": 5489
          },
          {
              "City": "Gobindgarh",
              "CityId": 3190
          },
          {
              "City": "Gobindpur",
              "CityId": 1409
          },
          {
              "City": "Gobra Nawapara",
              "CityId": 639
          },
          {
              "City": "Godavarikhani",
              "CityId": 83
          },
          {
              "City": "Godda",
              "CityId": 1410
          },
          {
              "City": "Godhar",
              "CityId": 1411
          },
          {
              "City": "Godhra",
              "CityId": 891
          },
          {
              "City": "Godoli",
              "CityId": 2591
          },
          {
              "City": "Gogaon",
              "CityId": 640
          },
          {
              "City": "Gogaon",
              "CityId": 2207
          },
          {
              "City": "Gogapur",
              "CityId": 2208
          },
          {
              "City": "Gogri Jamalpur",
              "CityId": 502
          },
          {
              "City": "Gohad",
              "CityId": 2209
          },
          {
              "City": "Gohana",
              "CityId": 1125
          },
          {
              "City": "Gohand",
              "CityId": 4766
          },
          {
              "City": "Gohpur",
              "CityId": 367
          },
          {
              "City": "Gokak",
              "CityId": 1608
          },
          {
              "City": "Gokak Falls",
              "CityId": 1609
          },
          {
              "City": "Gokul",
              "CityId": 4767
          },
          {
              "City": "Gola Bazar",
              "CityId": 4768
          },
          {
              "City": "Gola Gokarannath",
              "CityId": 4769
          },
          {
              "City": "Golaghat",
              "CityId": 368
          },
          {
              "City": "Golakganj",
              "CityId": 369
          },
          {
              "City": "Golphalbari",
              "CityId": 1412
          },
          {
              "City": "Gomoh",
              "CityId": 1413
          },
          {
              "City": "Gonda",
              "CityId": 4770
          },
          {
              "City": "Gondal",
              "CityId": 892
          },
          {
              "City": "Gondia",
              "CityId": 2592
          },
          {
              "City": "Goniana",
              "CityId": 3191
          },
          {
              "City": "Gonikoppal",
              "CityId": 1610
          },
          {
              "City": "Gopalapatnam",
              "CityId": 84
          },
          {
              "City": "Gopalasamudram",
              "CityId": 3727
          },
          {
              "City": "Gopalganj",
              "CityId": 503
          },
          {
              "City": "Gopalpur",
              "CityId": 3027
          },
          {
              "City": "Gopalpur",
              "CityId": 5490
          },
          {
              "City": "Gopalur",
              "CityId": 85
          },
          {
              "City": "Gopamau",
              "CityId": 4771
          },
          {
              "City": "Gopichettipalaiyam",
              "CityId": 3728
          },
          {
              "City": "Gopiganj",
              "CityId": 4772
          },
          {
              "City": "Gopinathpur",
              "CityId": 5491
          },
          {
              "City": "Gora Bazar",
              "CityId": 5492
          },
          {
              "City": "Gorah Salathian",
              "CityId": 1298
          },
          {
              "City": "Gorakhpur",
              "CityId": 4773
          },
          {
              "City": "Goraya",
              "CityId": 3192
          },
          {
              "City": "Goredi Chancha",
              "CityId": 3370
          },
          {
              "City": "Gormi",
              "CityId": 2210
          },
          {
              "City": "Gorrekunta",
              "CityId": 86
          },
          {
              "City": "Gorur",
              "CityId": 1611
          },
          {
              "City": "Gosainganj",
              "CityId": 4774
          },
          {
              "City": "Gossaigaon",
              "CityId": 370
          },
          {
              "City": "Gothra",
              "CityId": 3371
          },
          {
              "City": "Gottikere",
              "CityId": 1612
          },
          {
              "City": "Govardhan",
              "CityId": 4775
          },
          {
              "City": "Govindgarh",
              "CityId": 2211
          },
          {
              "City": "Govindgarh",
              "CityId": 3372
          },
          {
              "City": "Greater Noida",
              "CityId": 4776
          },
          {
              "City": "GSFC Complex",
              "CityId": 884
          },
          {
              "City": "Gua",
              "CityId": 1414
          },
          {
              "City": "Gubbi",
              "CityId": 1613
          },
          {
              "City": "Gudalur",
              "CityId": 3729
          },
          {
              "City": "Gudari",
              "CityId": 3028
          },
          {
              "City": "Gudibanda",
              "CityId": 1614
          },
          {
              "City": "Gudivada",
              "CityId": 87
          },
          {
              "City": "Gudiyattam",
              "CityId": 3730
          },
          {
              "City": "Gudur",
              "CityId": 88
          },
          {
              "City": "Guduvanchery",
              "CityId": 3731
          },
          {
              "City": "Guhagar",
              "CityId": 2593
          },
          {
              "City": "Guirim",
              "CityId": 734
          },
          {
              "City": "Gulabpura",
              "CityId": 3373
          },
          {
              "City": "Gulaothi",
              "CityId": 4777
          },
          {
              "City": "Gulariya",
              "CityId": 4778
          },
          {
              "City": "Gulariya Bhindara",
              "CityId": 4779
          },
          {
              "City": "Gulbarga",
              "CityId": 1615
          },
          {
              "City": "Guledgudda",
              "CityId": 1616
          },
          {
              "City": "Gulmarg",
              "CityId": 1299
          },
          {
              "City": "Guma",
              "CityId": 5493
          },
          {
              "City": "Gumia",
              "CityId": 1415
          },
          {
              "City": "Gumla",
              "CityId": 1416
          },
          {
              "City": "Gummidipoondi",
              "CityId": 3732
          },
          {
              "City": "Guna",
              "CityId": 2212
          },
          {
              "City": "Gundlupet",
              "CityId": 1617
          },
          {
              "City": "Gunnaur",
              "CityId": 4780
          },
          {
              "City": "Guntakal",
              "CityId": 89
          },
          {
              "City": "Guntur",
              "CityId": 90
          },
          {
              "City": "Gunupur",
              "CityId": 3029
          },
          {
              "City": "Gurdaha",
              "CityId": 5494
          },
          {
              "City": "Gurdaspur",
              "CityId": 3193
          },
          {
              "City": "Gurgaon",
              "CityId": 1126
          },
          {
              "City": "Gurh",
              "CityId": 2213
          },
          {
              "City": "Guriahati",
              "CityId": 5495
          },
          {
              "City": "Gurmatkal",
              "CityId": 1618
          },
          {
              "City": "Gursahaiganj",
              "CityId": 4781
          },
          {
              "City": "Gursarai",
              "CityId": 4782
          },
          {
              "City": "Guru Har Sahai",
              "CityId": 3194
          },
          {
              "City": "Guruvayur",
              "CityId": 1896
          },
          {
              "City": "Guskhara",
              "CityId": 5496
          },
          {
              "City": "Guti",
              "CityId": 91
          },
          {
              "City": "Guwahati",
              "CityId": 371
          },
          {
              "City": "Gwalior",
              "CityId": 2214
          },
          {
              "City": "Gyanpur",
              "CityId": 4783
          },
          {
              "City": "Habibpur",
              "CityId": 504
          },
          {
              "City": "Habra",
              "CityId": 5497
          },
          {
              "City": "Hadgaon",
              "CityId": 2594
          },
          {
              "City": "Hafizpur",
              "CityId": 4784
          },
          {
              "City": "Haflong",
              "CityId": 372
          },
          {
              "City": "Haidergarh",
              "CityId": 4785
          },
          {
              "City": "Hailakandi",
              "CityId": 373
          },
          {
              "City": "Haileymandi",
              "CityId": 1127
          },
          {
              "City": "Hajan",
              "CityId": 1300
          },
          {
              "City": "Hajipur",
              "CityId": 505
          },
          {
              "City": "Hajipur",
              "CityId": 3195
          },
          {
              "City": "Hajira INA",
              "CityId": 893
          },
          {
              "City": "Haldaur",
              "CityId": 4786
          },
          {
              "City": "Haldia",
              "CityId": 5498
          },
          {
              "City": "Haldibari",
              "CityId": 5499
          },
          {
              "City": "Haldwani",
              "CityId": 5251
          },
          {
              "City": "Halisahar",
              "CityId": 5500
          },
          {
              "City": "Haliyal",
              "CityId": 1619
          },
          {
              "City": "Halol",
              "CityId": 894
          },
          {
              "City": "Haludbani",
              "CityId": 1417
          },
          {
              "City": "Halvad",
              "CityId": 895
          },
          {
              "City": "Hamirpur",
              "CityId": 1225
          },
          {
              "City": "Hamirpur",
              "CityId": 4787
          },
          {
              "City": "Hamren",
              "CityId": 374
          },
          {
              "City": "Handia",
              "CityId": 4788
          },
          {
              "City": "Handiaya",
              "CityId": 3196
          },
          {
              "City": "Handwara",
              "CityId": 1301
          },
          {
              "City": "Hangal",
              "CityId": 1620
          },
          {
              "City": "Hansi",
              "CityId": 1128
          },
          {
              "City": "Hansot",
              "CityId": 896
          },
          {
              "City": "Hanumana",
              "CityId": 2215
          },
          {
              "City": "Hanumangarh",
              "CityId": 3374
          },
          {
              "City": "Hanumanthampatti",
              "CityId": 3733
          },
          {
              "City": "Haora",
              "CityId": 5501
          },
          {
              "City": "Hapur",
              "CityId": 4789
          },
          {
              "City": "Harda",
              "CityId": 2216
          },
          {
              "City": "Hardoi",
              "CityId": 4790
          },
          {
              "City": "Harduaganj",
              "CityId": 4791
          },
          {
              "City": "Hargaon",
              "CityId": 4792
          },
          {
              "City": "Harharia Chak",
              "CityId": 5502
          },
          {
              "City": "Hariana",
              "CityId": 3197
          },
          {
              "City": "Haridwar",
              "CityId": 5252
          },
          {
              "City": "Harihar",
              "CityId": 1621
          },
          {
              "City": "Hariharpur",
              "CityId": 4793
          },
          {
              "City": "Harij",
              "CityId": 897
          },
          {
              "City": "Harindanga",
              "CityId": 5503
          },
          {
              "City": "Haringhata",
              "CityId": 5504
          },
          {
              "City": "Haripad",
              "CityId": 1897
          },
          {
              "City": "Haripur",
              "CityId": 5505
          },
          {
              "City": "Harishpur",
              "CityId": 5506
          },
          {
              "City": "Harnai Beach",
              "CityId": 2595
          },
          {
              "City": "Harpalpur",
              "CityId": 2217
          },
          {
              "City": "Harpanahalli",
              "CityId": 1622
          },
          {
              "City": "Harrai",
              "CityId": 2218
          },
          {
              "City": "Harraiya",
              "CityId": 4794
          },
          {
              "City": "Harsud",
              "CityId": 2219
          },
          {
              "City": "Harur",
              "CityId": 3734
          },
          {
              "City": "Harveypatti",
              "CityId": 3735
          },
          {
              "City": "Hasanpur",
              "CityId": 506
          },
          {
              "City": "Hasanpur",
              "CityId": 1129
          },
          {
              "City": "Hasanpur",
              "CityId": 4795
          },
          {
              "City": "Hasayan",
              "CityId": 4796
          },
          {
              "City": "Hassan",
              "CityId": 1623
          },
          {
              "City": "Hastinapur",
              "CityId": 4797
          },
          {
              "City": "Hata",
              "CityId": 4798
          },
          {
              "City": "Hatgachha",
              "CityId": 5507
          },
          {
              "City": "Hathin",
              "CityId": 1130
          },
          {
              "City": "Hathras",
              "CityId": 4799
          },
          {
              "City": "Hatibandha",
              "CityId": 3030
          },
          {
              "City": "Hatkachora",
              "CityId": 641
          },
          {
              "City": "Hatod",
              "CityId": 2220
          },
          {
              "City": "Hatpipalya",
              "CityId": 2221
          },
          {
              "City": "Hatsimla",
              "CityId": 5508
          },
          {
              "City": "Hatta",
              "CityId": 2222
          },
          {
              "City": "Hatti",
              "CityId": 1624
          },
          {
              "City": "Hatti Gold Mines",
              "CityId": 1625
          },
          {
              "City": "Hauli",
              "CityId": 375
          },
          {
              "City": "Hauraghat",
              "CityId": 376
          },
          {
              "City": "Haveri",
              "CityId": 1626
          },
          {
              "City": "Hazaribag",
              "CityId": 1418
          },
          {
              "City": "Hazaribagh",
              "CityId": 507
          },
          {
              "City": "Hebbagodi",
              "CityId": 1627
          },
          {
              "City": "Hebbalu",
              "CityId": 1628
          },
          {
              "City": "Hebri",
              "CityId": 1629
          },
          {
              "City": "Heggadadevanakote",
              "CityId": 1630
          },
          {
              "City": "Herbertpur",
              "CityId": 5253
          },
          {
              "City": "Heriok",
              "CityId": 2888
          },
          {
              "City": "Herohalli",
              "CityId": 1631
          },
          {
              "City": "Hesla",
              "CityId": 1419
          },
          {
              "City": "Hidkal",
              "CityId": 1632
          },
          {
              "City": "Highways",
              "CityId": 3736
          },
          {
              "City": "Hijuli",
              "CityId": 5509
          },
          {
              "City": "Hilsa",
              "CityId": 508
          },
          {
              "City": "Himatnagar",
              "CityId": 898
          },
          {
              "City": "Hindalgi",
              "CityId": 1633
          },
          {
              "City": "Hindaun",
              "CityId": 3375
          },
          {
              "City": "Hindoria",
              "CityId": 2223
          },
          {
              "City": "Hindupur",
              "CityId": 92
          },
          {
              "City": "Hindustan Cables Town",
              "CityId": 5510
          },
          {
              "City": "Hinganghat",
              "CityId": 2596
          },
          {
              "City": "Hingoli",
              "CityId": 2597
          },
          {
              "City": "Hinjilikatu",
              "CityId": 3031
          },
          {
              "City": "Hirakud",
              "CityId": 3032
          },
          {
              "City": "Hiranagar",
              "CityId": 1302
          },
          {
              "City": "Hirapur",
              "CityId": 2224
          },
          {
              "City": "Hirekerur",
              "CityId": 1634
          },
          {
              "City": "Hiriyur",
              "CityId": 1635
          },
          {
              "City": "Hisar",
              "CityId": 1131
          },
          {
              "City": "Hissar",
              "CityId": 1132
          },
          {
              "City": "Hisua",
              "CityId": 509
          },
          {
              "City": "Hnahthial",
              "CityId": 2940
          },
          {
              "City": "Hodal",
              "CityId": 1133
          },
          {
              "City": "Hojai",
              "CityId": 377
          },
          {
              "City": "Holalkere",
              "CityId": 1636
          },
          {
              "City": "Hole Narsipur",
              "CityId": 1637
          },
          {
              "City": "Homnabad",
              "CityId": 1638
          },
          {
              "City": "Honavar",
              "CityId": 1639
          },
          {
              "City": "Honnali",
              "CityId": 1640
          },
          {
              "City": "Hooghly",
              "CityId": 5511
          },
          {
              "City": "Hosabettu",
              "CityId": 1898
          },
          {
              "City": "Hosakote",
              "CityId": 1641
          },
          {
              "City": "Hosanagara",
              "CityId": 1642
          },
          {
              "City": "Hosangadi",
              "CityId": 1643
          },
          {
              "City": "Hosdurga",
              "CityId": 1644
          },
          {
              "City": "Hoshangabad",
              "CityId": 2225
          },
          {
              "City": "Hoshiarpur",
              "CityId": 3198
          },
          {
              "City": "Hoskote",
              "CityId": 1645
          },
          {
              "City": "Hospet",
              "CityId": 1646
          },
          {
              "City": "Hosur",
              "CityId": 3737
          },
          {
              "City": "Howrah",
              "CityId": 5512
          },
          {
              "City": "Hubbathala",
              "CityId": 3738
          },
          {
              "City": "Hubli",
              "CityId": 1647
          },
          {
              "City": "Hugli-Chunchura",
              "CityId": 5513
          },
          {
              "City": "Hukeri",
              "CityId": 1648
          },
          {
              "City": "Hukumpeta",
              "CityId": 93
          },
          {
              "City": "Huligal",
              "CityId": 3739
          },
          {
              "City": "Humaipur",
              "CityId": 5514
          },
          {
              "City": "Hunasagi",
              "CityId": 1649
          },
          {
              "City": "Hunasamaranahalli",
              "CityId": 1650
          },
          {
              "City": "Hungund",
              "CityId": 1651
          },
          {
              "City": "Hunsur",
              "CityId": 1652
          },
          {
              "City": "Hupari",
              "CityId": 2598
          },
          {
              "City": "Husainabad",
              "CityId": 1420
          },
          {
              "City": "Hussainpur",
              "CityId": 3199
          },
          {
              "City": "Huvina Hadagalli",
              "CityId": 1653
          },
          {
              "City": "Hyderabad",
              "CityId": 4460
          },
          {
              "City": "Hyderabad",
              "CityId": 4800
          },
          {
              "City": "Ibrahimpur",
              "CityId": 4801
          },
          {
              "City": "Ichalkaranji",
              "CityId": 2599
          },
          {
              "City": "Ichchapuram",
              "CityId": 94
          },
          {
              "City": "Ichchhapor",
              "CityId": 899
          },
          {
              "City": "Ichha Pur Defence Estate",
              "CityId": 5515
          },
          {
              "City": "Ichhawar",
              "CityId": 2226
          },
          {
              "City": "Idappadi",
              "CityId": 3740
          },
          {
              "City": "Idar",
              "CityId": 900
          },
          {
              "City": "Idikarai",
              "CityId": 3741
          },
          {
              "City": "Idukki",
              "CityId": 1899
          },
          {
              "City": "Igatpuri",
              "CityId": 2600
          },
          {
              "City": "Iglas",
              "CityId": 4802
          },
          {
              "City": "Ikauna",
              "CityId": 4803
          },
          {
              "City": "Iklehra",
              "CityId": 2227
          },
          {
              "City": "Ilampillai",
              "CityId": 3742
          },
          {
              "City": "Ilanji",
              "CityId": 3743
          },
          {
              "City": "Ilkal",
              "CityId": 1654
          },
          {
              "City": "Iltifatganj Bazar",
              "CityId": 4804
          },
          {
              "City": "Iluppaiyurani",
              "CityId": 3744
          },
          {
              "City": "Iluppur",
              "CityId": 3745
          },
          {
              "City": "Imphal",
              "CityId": 2889
          },
          {
              "City": "Inam Karur",
              "CityId": 3746
          },
          {
              "City": "Indapur",
              "CityId": 2601
          },
          {
              "City": "Indergarh",
              "CityId": 2228
          },
          {
              "City": "Indi",
              "CityId": 1655
          },
          {
              "City": "Indian Telephone Industry Mank",
              "CityId": 4805
          },
          {
              "City": "Indore",
              "CityId": 2229
          },
          {
              "City": "Indragarh",
              "CityId": 3376
          },
          {
              "City": "Indranagar",
              "CityId": 4516
          },
          {
              "City": "Indri",
              "CityId": 1134
          },
          {
              "City": "Ingraj Bazar",
              "CityId": 5516
          },
          {
              "City": "Injambakkam",
              "CityId": 3747
          },
          {
              "City": "Iringaprom",
              "CityId": 1900
          },
          {
              "City": "Irinjalakuda",
              "CityId": 1901
          },
          {
              "City": "Iriveri",
              "CityId": 1902
          },
          {
              "City": "Irugur",
              "CityId": 3748
          },
          {
              "City": "Isagarh",
              "CityId": 2230
          },
          {
              "City": "Islamnagar",
              "CityId": 4806
          },
          {
              "City": "Islampur",
              "CityId": 510
          },
          {
              "City": "Islampur",
              "CityId": 5517
          },
          {
              "City": "Isnapur",
              "CityId": 95
          },
          {
              "City": "Isri",
              "CityId": 1421
          },
          {
              "City": "Itanagar",
              "CityId": 305
          },
          {
              "City": "Itarsi",
              "CityId": 2231
          },
          {
              "City": "Itaunja",
              "CityId": 4807
          },
          {
              "City": "Itimadpur",
              "CityId": 4808
          },
          {
              "City": "Jabalpur",
              "CityId": 2232
          },
          {
              "City": "Jabalpur Cantonment",
              "CityId": 2233
          },
          {
              "City": "Jabalpur G.C.F",
              "CityId": 2234
          },
          {
              "City": "Jadugora",
              "CityId": 1422
          },
          {
              "City": "Jafarpur",
              "CityId": 5518
          },
          {
              "City": "Jaffrabad",
              "CityId": 3749
          },
          {
              "City": "Jafrabad",
              "CityId": 901
          },
          {
              "City": "Jagadanandapur",
              "CityId": 5519
          },
          {
              "City": "Jagadhri",
              "CityId": 1135
          },
          {
              "City": "Jagalur",
              "CityId": 1656
          },
          {
              "City": "Jagannathpur",
              "CityId": 1423
          },
          {
              "City": "Jagathala",
              "CityId": 3750
          },
          {
              "City": "Jagatsinghapur",
              "CityId": 3033
          },
          {
              "City": "Jagdalpur",
              "CityId": 642
          },
          {
              "City": "Jagdishpur",
              "CityId": 5520
          },
          {
              "City": "Jagdispur",
              "CityId": 511
          },
          {
              "City": "Jaggayyapeta",
              "CityId": 96
          },
          {
              "City": "Jagiroad",
              "CityId": 378
          },
          {
              "City": "Jagiroad Paper Mill",
              "CityId": 379
          },
          {
              "City": "Jagner",
              "CityId": 4809
          },
          {
              "City": "Jagraon",
              "CityId": 3200
          },
          {
              "City": "Jagtaj",
              "CityId": 5521
          },
          {
              "City": "Jagtial",
              "CityId": 4461
          },
          {
              "City": "Jahanabad",
              "CityId": 512
          },
          {
              "City": "Jahanabad",
              "CityId": 4810
          },
          {
              "City": "Jahangirabad",
              "CityId": 4811
          },
          {
              "City": "Jahangirpur",
              "CityId": 4812
          },
          {
              "City": "Jahazpur",
              "CityId": 3377
          },
          {
              "City": "Jaipur",
              "CityId": 3378
          },
          {
              "City": "Jairampur",
              "CityId": 306
          },
          {
              "City": "Jais",
              "CityId": 4813
          },
          {
              "City": "Jaisalmer",
              "CityId": 3379
          },
          {
              "City": "Jaiselmer",
              "CityId": 3380
          },
          {
              "City": "Jaisinghnagar",
              "CityId": 2235
          },
          {
              "City": "Jaisinghpur",
              "CityId": 2602
          },
          {
              "City": "Jaitaran",
              "CityId": 3381
          },
          {
              "City": "Jaithara",
              "CityId": 4814
          },
          {
              "City": "Jaithari",
              "CityId": 2236
          },
          {
              "City": "Jaitu",
              "CityId": 3201
          },
          {
              "City": "Jaitwara",
              "CityId": 2237
          },
          {
              "City": "Jajpur",
              "CityId": 3034
          },
          {
              "City": "Jakhal Mandi",
              "CityId": 1136
          },
          {
              "City": "Jala Kendua",
              "CityId": 5522
          },
          {
              "City": "Jalakandapuram",
              "CityId": 3751
          },
          {
              "City": "Jalalabad",
              "CityId": 3202
          },
          {
              "City": "Jalalabad",
              "CityId": 4815
          },
          {
              "City": "Jalali",
              "CityId": 4816
          },
          {
              "City": "Jalalpore",
              "CityId": 902
          },
          {
              "City": "Jalalpur",
              "CityId": 4817
          },
          {
              "City": "Jalandhar",
              "CityId": 3203
          },
          {
              "City": "Jalandhar Cantonment",
              "CityId": 3204
          },
          {
              "City": "Jalaun",
              "CityId": 4818
          },
          {
              "City": "Jalda",
              "CityId": 3035
          },
          {
              "City": "Jaldhaka",
              "CityId": 5523
          },
          {
              "City": "Jalesar",
              "CityId": 4819
          },
          {
              "City": "Jaleswar",
              "CityId": 3036
          },
          {
              "City": "Jalgaon",
              "CityId": 2603
          },
          {
              "City": "Jalkhura",
              "CityId": 5524
          },
          {
              "City": "Jalladiampet",
              "CityId": 3752
          },
          {
              "City": "Jallaram Kamanpur",
              "CityId": 97
          },
          {
              "City": "Jalna",
              "CityId": 2604
          },
          {
              "City": "Jalore",
              "CityId": 3382
          },
          {
              "City": "Jalpaiguri",
              "CityId": 5525
          },
          {
              "City": "Jamadoba",
              "CityId": 1424
          },
          {
              "City": "Jamai",
              "CityId": 2238
          },
          {
              "City": "Jamalpur",
              "CityId": 513
          },
          {
              "City": "Jambai",
              "CityId": 3753
          },
          {
              "City": "Jambusar",
              "CityId": 903
          },
          {
              "City": "Jamhaur",
              "CityId": 514
          },
          {
              "City": "Jamjodhpur",
              "CityId": 904
          },
          {
              "City": "Jamkhandi",
              "CityId": 1657
          },
          {
              "City": "Jamkhed",
              "CityId": 2605
          },
          {
              "City": "Jammalamadugu",
              "CityId": 98
          },
          {
              "City": "Jammu",
              "CityId": 1303
          },
          {
              "City": "Jammu Cantonment",
              "CityId": 1304
          },
          {
              "City": "Jammu Tawi",
              "CityId": 1305
          },
          {
              "City": "Jamnagar",
              "CityId": 905
          },
          {
              "City": "Jamshedpur",
              "CityId": 1425
          },
          {
              "City": "Jamshila",
              "CityId": 4820
          },
          {
              "City": "Jamtara",
              "CityId": 1426
          },
          {
              "City": "Jamui",
              "CityId": 515
          },
          {
              "City": "Jamui",
              "CityId": 643
          },
          {
              "City": "Jamuria",
              "CityId": 5526
          },
          {
              "City": "Janakpur Road",
              "CityId": 516
          },
          {
              "City": "Jandiala",
              "CityId": 3205
          },
          {
              "City": "Jangampalli",
              "CityId": 99
          },
          {
              "City": "Jangaon",
              "CityId": 4462
          },
          {
              "City": "Jangipur",
              "CityId": 4821
          },
          {
              "City": "Jangipur",
              "CityId": 5527
          },
          {
              "City": "Janpur",
              "CityId": 517
          },
          {
              "City": "Jansath",
              "CityId": 4822
          },
          {
              "City": "Jaora",
              "CityId": 2239
          },
          {
              "City": "Jarangdih",
              "CityId": 1427
          },
          {
              "City": "Jaridih",
              "CityId": 1428
          },
          {
              "City": "Jarjapupeta",
              "CityId": 100
          },
          {
              "City": "Jarwal",
              "CityId": 4823
          },
          {
              "City": "Jasdan",
              "CityId": 906
          },
          {
              "City": "Jashpurnagar",
              "CityId": 644
          },
          {
              "City": "Jasidih",
              "CityId": 1429
          },
          {
              "City": "Jaspur",
              "CityId": 5254
          },
          {
              "City": "Jasrana",
              "CityId": 4824
          },
          {
              "City": "Jaswantnagar",
              "CityId": 4825
          },
          {
              "City": "Jatachhapar",
              "CityId": 2240
          },
          {
              "City": "Jatara",
              "CityId": 2241
          },
          {
              "City": "Jatari",
              "CityId": 4826
          },
          {
              "City": "Jatni",
              "CityId": 3037
          },
          {
              "City": "Jaunpur",
              "CityId": 4827
          },
          {
              "City": "Jawad",
              "CityId": 2242
          },
          {
              "City": "Jawaharnagar",
              "CityId": 907
          },
          {
              "City": "Jawai",
              "CityId": 2921
          },
          {
              "City": "Jawala Mukhi",
              "CityId": 1226
          },
          {
              "City": "Jawar",
              "CityId": 2243
          },
          {
              "City": "Jawhar",
              "CityId": 2606
          },
          {
              "City": "Jayankondam",
              "CityId": 3754
          },
          {
              "City": "Jaygaon",
              "CityId": 5528
          },
          {
              "City": "Jaynagar",
              "CityId": 518
          },
          {
              "City": "Jaynagar-Majilpur",
              "CityId": 5529
          },
          {
              "City": "Jaypur",
              "CityId": 3038
          },
          {
              "City": "Jaysingpur",
              "CityId": 2607
          },
          {
              "City": "Jejuri",
              "CityId": 2608
          },
          {
              "City": "Jemari",
              "CityId": 5530
          },
          {
              "City": "Jemari Township",
              "CityId": 5531
          },
          {
              "City": "Jena",
              "CityId": 1430
          },
          {
              "City": "Jeronkhalsa",
              "CityId": 2244
          },
          {
              "City": "Jetalsar",
              "CityId": 908
          },
          {
              "City": "Jetia",
              "CityId": 5532
          },
          {
              "City": "Jetpur",
              "CityId": 909
          },
          {
              "City": "Jevargi",
              "CityId": 1658
          },
          {
              "City": "Jewar",
              "CityId": 4828
          },
          {
              "City": "Jeypore",
              "CityId": 3039
          },
          {
              "City": "Jha Jha",
              "CityId": 519
          },
          {
              "City": "Jhabrera",
              "CityId": 5255
          },
          {
              "City": "Jhabua",
              "CityId": 2245
          },
          {
              "City": "Jhagrakhand",
              "CityId": 645
          },
          {
              "City": "Jhajjar",
              "CityId": 1137
          },
          {
              "City": "Jhalawar",
              "CityId": 3383
          },
          {
              "City": "Jhalida",
              "CityId": 5533
          },
          {
              "City": "Jhalrapatan",
              "CityId": 3384
          },
          {
              "City": "Jhalu",
              "CityId": 4829
          },
          {
              "City": "Jhanjharpur",
              "CityId": 520
          },
          {
              "City": "Jhansi",
              "CityId": 4830
          },
          {
              "City": "Jhansi Cantonment",
              "CityId": 4831
          },
          {
              "City": "Jhansi Railway Settlement",
              "CityId": 4832
          },
          {
              "City": "Jhargram",
              "CityId": 5534
          },
          {
              "City": "Jharia",
              "CityId": 1431
          },
          {
              "City": "Jharia Khas",
              "CityId": 1432
          },
          {
              "City": "Jharsuguda",
              "CityId": 3040
          },
          {
              "City": "Jhinjhak",
              "CityId": 4833
          },
          {
              "City": "Jhinjhana",
              "CityId": 4834
          },
          {
              "City": "Jhinkpani",
              "CityId": 1433
          },
          {
              "City": "Jhorhat",
              "CityId": 5535
          },
          {
              "City": "Jhumpura",
              "CityId": 3041
          },
          {
              "City": "Jhumri Tilaiya",
              "CityId": 1434
          },
          {
              "City": "Jhundpura",
              "CityId": 2246
          },
          {
              "City": "Jhunjhunun",
              "CityId": 3385
          },
          {
              "City": "Jhusi",
              "CityId": 4835
          },
          {
              "City": "Jhusi Kohna",
              "CityId": 4836
          },
          {
              "City": "Jiaganj-Azimganj",
              "CityId": 5536
          },
          {
              "City": "Jind",
              "CityId": 1138
          },
          {
              "City": "Jintur",
              "CityId": 2609
          },
          {
              "City": "Jiran",
              "CityId": 2247
          },
          {
              "City": "Jirapur",
              "CityId": 2248
          },
          {
              "City": "Jiribam",
              "CityId": 2890
          },
          {
              "City": "Jiyanpur",
              "CityId": 4837
          },
          {
              "City": "Jobat",
              "CityId": 2249
          },
          {
              "City": "Jobner",
              "CityId": 3386
          },
          {
              "City": "Joda",
              "CityId": 3042
          },
          {
              "City": "Jodhpur",
              "CityId": 3387
          },
          {
              "City": "Jodiya",
              "CityId": 910
          },
          {
              "City": "Jog Falls",
              "CityId": 1659
          },
          {
              "City": "Jogbani",
              "CityId": 521
          },
          {
              "City": "Jogendranagar",
              "CityId": 4517
          },
          {
              "City": "Jogighopa",
              "CityId": 380
          },
          {
              "City": "Jogindarnagar",
              "CityId": 1227
          },
          {
              "City": "Joka",
              "CityId": 5537
          },
          {
              "City": "Jolarpet",
              "CityId": 3755
          },
          {
              "City": "Jonai Bazar",
              "CityId": 381
          },
          {
              "City": "Jorapokhar",
              "CityId": 1435
          },
          {
              "City": "Jorethang",
              "CityId": 3542
          },
          {
              "City": "Jorhat",
              "CityId": 382
          },
          {
              "City": "Joshimath",
              "CityId": 5256
          },
          {
              "City": "Joshipura",
              "CityId": 911
          },
          {
              "City": "Jot Kamal",
              "CityId": 5538
          },
          {
              "City": "Joura",
              "CityId": 2250
          },
          {
              "City": "Jourian",
              "CityId": 1306
          },
          {
              "City": "Joya",
              "CityId": 4838
          },
          {
              "City": "Jua",
              "CityId": 735
          },
          {
              "City": "Jubbal",
              "CityId": 1228
          },
          {
              "City": "Jugial",
              "CityId": 3206
          },
          {
              "City": "Jugsalai",
              "CityId": 1436
          },
          {
              "City": "Julana",
              "CityId": 1139
          },
          {
              "City": "Junagadh",
              "CityId": 912
          },
          {
              "City": "Junagarh",
              "CityId": 3043
          },
          {
              "City": "Junnar",
              "CityId": 2610
          },
          {
              "City": "Jutogh",
              "CityId": 1229
          },
          {
              "City": "Jyoti Khuria",
              "CityId": 4839
          },
          {
              "City": "Jyotiba Phule Nagar",
              "CityId": 4840
          },
          {
              "City": "Kabini Colony",
              "CityId": 1660
          },
          {
              "City": "Kabnur",
              "CityId": 2611
          },
          {
              "City": "Kabrai",
              "CityId": 4841
          },
          {
              "City": "Kachhauna Patseni",
              "CityId": 4842
          },
          {
              "City": "Kachhla",
              "CityId": 4843
          },
          {
              "City": "Kachhwa",
              "CityId": 4844
          },
          {
              "City": "Kachnal Gosain",
              "CityId": 5257
          },
          {
              "City": "Kachu Pukur",
              "CityId": 5539
          },
          {
              "City": "Kadachira",
              "CityId": 1903
          },
          {
              "City": "Kadalundi",
              "CityId": 1904
          },
          {
              "City": "Kadamakkudy",
              "CityId": 1905
          },
          {
              "City": "Kadambur",
              "CityId": 3756
          },
          {
              "City": "Kadathur",
              "CityId": 3757
          },
          {
              "City": "Kadaura",
              "CityId": 4845
          },
          {
              "City": "Kadayal",
              "CityId": 3758
          },
          {
              "City": "Kadayampatti",
              "CityId": 3759
          },
          {
              "City": "Kadayanallur",
              "CityId": 3760
          },
          {
              "City": "Kadi",
              "CityId": 913
          },
          {
              "City": "Kadiapatti",
              "CityId": 3761
          },
          {
              "City": "Kadipur",
              "CityId": 4846
          },
          {
              "City": "Kadiri",
              "CityId": 101
          },
          {
              "City": "Kadirur",
              "CityId": 1906
          },
          {
              "City": "Kadodara",
              "CityId": 914
          },
          {
              "City": "Kadungallur",
              "CityId": 1907
          },
          {
              "City": "Kadur",
              "CityId": 1661
          },
          {
              "City": "Kagal",
              "CityId": 2612
          },
          {
              "City": "Kagaznagar",
              "CityId": 4463
          },
          {
              "City": "Kaikalur",
              "CityId": 102
          },
          {
              "City": "Kailaras",
              "CityId": 2251
          },
          {
              "City": "Kailasahar",
              "CityId": 4518
          },
          {
              "City": "Kailashpur",
              "CityId": 4847
          },
          {
              "City": "Kailudih",
              "CityId": 1437
          },
          {
              "City": "Kaimganj",
              "CityId": 4848
          },
          {
              "City": "Kaimur",
              "CityId": 2252
          },
          {
              "City": "Kairana",
              "CityId": 4849
          },
          {
              "City": "Kaithal",
              "CityId": 1140
          },
          {
              "City": "Kaithun",
              "CityId": 3388
          },
          {
              "City": "Kajora",
              "CityId": 5540
          },
          {
              "City": "Kakarhati",
              "CityId": 2253
          },
          {
              "City": "Kakching",
              "CityId": 2891
          },
          {
              "City": "Kakching Khunou",
              "CityId": 2892
          },
          {
              "City": "Kakdihi",
              "CityId": 5541
          },
          {
              "City": "Kakdwip",
              "CityId": 5542
          },
          {
              "City": "Kakgaina",
              "CityId": 4850
          },
          {
              "City": "Kakinada",
              "CityId": 103
          },
          {
              "City": "Kakkodi",
              "CityId": 1908
          },
          {
              "City": "Kakod",
              "CityId": 4851
          },
          {
              "City": "Kakori",
              "CityId": 4852
          },
          {
              "City": "Kakrala",
              "CityId": 4853
          },
          {
              "City": "Kala Amb",
              "CityId": 1230
          },
          {
              "City": "Kaladungi",
              "CityId": 5258
          },
          {
              "City": "Kalady",
              "CityId": 1909
          },
          {
              "City": "Kalagarh",
              "CityId": 5259
          },
          {
              "City": "Kalaikunda",
              "CityId": 5543
          },
          {
              "City": "Kalakkad",
              "CityId": 3762
          },
          {
              "City": "Kalamassery",
              "CityId": 1910
          },
          {
              "City": "Kalamb",
              "CityId": 2613
          },
          {
              "City": "Kalambur",
              "CityId": 3763
          },
          {
              "City": "Kalamnuri",
              "CityId": 2614
          },
          {
              "City": "Kalanaur",
              "CityId": 3207
          },
          {
              "City": "Kalangat",
              "CityId": 736
          },
          {
              "City": "Kalanur",
              "CityId": 1141
          },
          {
              "City": "Kalanwali",
              "CityId": 1142
          },
          {
              "City": "Kalapatti",
              "CityId": 3764
          },
          {
              "City": "Kalappanaickenpatti",
              "CityId": 3765
          },
          {
              "City": "Kalara",
              "CityId": 5544
          },
          {
              "City": "Kalas",
              "CityId": 2615
          },
          {
              "City": "Kalavad",
              "CityId": 915
          },
          {
              "City": "Kalavai",
              "CityId": 3766
          },
          {
              "City": "Kalayat",
              "CityId": 1143
          },
          {
              "City": "Kalghatgi",
              "CityId": 1662
          },
          {
              "City": "Kali",
              "CityId": 916
          },
          {
              "City": "Kaliawadi",
              "CityId": 917
          },
          {
              "City": "Kalichhapar",
              "CityId": 2254
          },
          {
              "City": "Kalikapur",
              "CityId": 1438
          },
          {
              "City": "Kalimpong",
              "CityId": 5545
          },
          {
              "City": "Kalinagar",
              "CityId": 4854
          },
          {
              "City": "Kalinjur",
              "CityId": 3767
          },
          {
              "City": "Kaliyaganj",
              "CityId": 5546
          },
          {
              "City": "Kaliyakkavilai",
              "CityId": 3768
          },
          {
              "City": "Kalka",
              "CityId": 1144
          },
          {
              "City": "Kallakkurichi",
              "CityId": 3769
          },
          {
              "City": "Kallakudi",
              "CityId": 3770
          },
          {
              "City": "Kalliasseri",
              "CityId": 1911
          },
          {
              "City": "Kallidaikurichchi",
              "CityId": 3771
          },
          {
              "City": "Kallukuttam",
              "CityId": 3772
          },
          {
              "City": "Kallupatti",
              "CityId": 3773
          },
          {
              "City": "Kallur",
              "CityId": 104
          },
          {
              "City": "Kalmeshwar",
              "CityId": 2616
          },
          {
              "City": "Kalna",
              "CityId": 5547
          },
          {
              "City": "Kalol",
              "CityId": 918
          },
          {
              "City": "Kalol INA",
              "CityId": 919
          },
          {
              "City": "Kalpa",
              "CityId": 1231
          },
          {
              "City": "Kalpakkam",
              "CityId": 3774
          },
          {
              "City": "Kalpetta",
              "CityId": 1912
          },
          {
              "City": "Kalpi",
              "CityId": 4855
          },
          {
              "City": "Kalugumalai",
              "CityId": 3775
          },
          {
              "City": "Kalundre",
              "CityId": 2617
          },
          {
              "City": "Kalwakurthy",
              "CityId": 4464
          },
          {
              "City": "Kalyan",
              "CityId": 2618
          },
          {
              "City": "Kalyandurg",
              "CityId": 105
          },
          {
              "City": "Kalyani",
              "CityId": 5548
          },
          {
              "City": "Kamakhyanagar",
              "CityId": 3044
          },
          {
              "City": "Kamalapuram",
              "CityId": 106
          },
          {
              "City": "Kamalapuram",
              "CityId": 1663
          },
          {
              "City": "Kamalganj",
              "CityId": 4856
          },
          {
              "City": "Kamalpur",
              "CityId": 4519
          },
          {
              "City": "Kaman",
              "CityId": 3389
          },
          {
              "City": "Kamareddi",
              "CityId": 107
          },
          {
              "City": "Kamareddy",
              "CityId": 4465
          },
          {
              "City": "Kamarhati",
              "CityId": 5549
          },
          {
              "City": "Kamayagoundanpatti",
              "CityId": 3776
          },
          {
              "City": "Kambainallur",
              "CityId": 3777
          },
          {
              "City": "Kambam",
              "CityId": 3778
          },
          {
              "City": "Kampil",
              "CityId": 4857
          },
          {
              "City": "Kampli",
              "CityId": 1664
          },
          {
              "City": "Kampur Town",
              "CityId": 383
          },
          {
              "City": "Kamrup",
              "CityId": 384
          },
          {
              "City": "Kamthi",
              "CityId": 2619
          },
          {
              "City": "Kamthi Cantonment",
              "CityId": 2620
          },
          {
              "City": "Kamuthi",
              "CityId": 3779
          },
          {
              "City": "Kanad",
              "CityId": 2255
          },
          {
              "City": "Kanadukathan",
              "CityId": 3780
          },
          {
              "City": "Kanaipur",
              "CityId": 5550
          },
          {
              "City": "Kanakapura",
              "CityId": 1665
          },
          {
              "City": "Kanakkampalayam",
              "CityId": 3781
          },
          {
              "City": "Kanakpur",
              "CityId": 385
          },
          {
              "City": "Kanam",
              "CityId": 3782
          },
          {
              "City": "Kanapaka",
              "CityId": 108
          },
          {
              "City": "Kanchanpur",
              "CityId": 4520
          },
          {
              "City": "Kanchipuram",
              "CityId": 3783
          },
          {
              "City": "Kanchrapara",
              "CityId": 5551
          },
          {
              "City": "Kandanur",
              "CityId": 3784
          },
          {
              "City": "Kandari",
              "CityId": 2621
          },
          {
              "City": "Kandhar",
              "CityId": 2622
          },
          {
              "City": "Kandhla",
              "CityId": 4858
          },
          {
              "City": "Kandi",
              "CityId": 5552
          },
          {
              "City": "Kandla",
              "CityId": 920
          },
          {
              "City": "Kandra",
              "CityId": 1439
          },
          {
              "City": "Kandri",
              "CityId": 2623
          },
          {
              "City": "Kandri II",
              "CityId": 2624
          },
          {
              "City": "Kandwa",
              "CityId": 4859
          },
          {
              "City": "Kangayam",
              "CityId": 3785
          },
          {
              "City": "Kangayampalayam",
              "CityId": 3786
          },
          {
              "City": "Kangeyanallur",
              "CityId": 3787
          },
          {
              "City": "Kangra",
              "CityId": 1232
          },
          {
              "City": "Kangrali BK",
              "CityId": 1666
          },
          {
              "City": "Kangrali KH",
              "CityId": 1667
          },
          {
              "City": "Kanhan",
              "CityId": 2625
          },
          {
              "City": "Kanhangad",
              "CityId": 1913
          },
          {
              "City": "Kanhirode",
              "CityId": 1914
          },
          {
              "City": "Kanigiri",
              "CityId": 109
          },
          {
              "City": "Kanina",
              "CityId": 1145
          },
          {
              "City": "Kanithi",
              "CityId": 110
          },
          {
              "City": "Kaniyur",
              "CityId": 3788
          },
          {
              "City": "Kanjari",
              "CityId": 921
          },
          {
              "City": "Kanjikkuzhi",
              "CityId": 1915
          },
          {
              "City": "Kanjikode",
              "CityId": 1916
          },
          {
              "City": "Kanjikoil",
              "CityId": 3789
          },
          {
              "City": "Kanjirappalli",
              "CityId": 1917
          },
          {
              "City": "Kankavli",
              "CityId": 2626
          },
          {
              "City": "Kanke",
              "CityId": 1440
          },
          {
              "City": "Kanker",
              "CityId": 646
          },
          {
              "City": "Kanki",
              "CityId": 5553
          },
          {
              "City": "Kankipadu",
              "CityId": 111
          },
          {
              "City": "Kankon",
              "CityId": 737
          },
          {
              "City": "Kankroli",
              "CityId": 3390
          },
          {
              "City": "Kankuria",
              "CityId": 5554
          },
          {
              "City": "Kannad",
              "CityId": 2627
          },
          {
              "City": "Kannadendal",
              "CityId": 3790
          },
          {
              "City": "Kannadiparamba",
              "CityId": 1918
          },
          {
              "City": "Kannamangalam",
              "CityId": 3791
          },
          {
              "City": "Kannampalayam",
              "CityId": 3792
          },
          {
              "City": "Kannangad",
              "CityId": 1919
          },
          {
              "City": "Kannankurichi",
              "CityId": 3793
          },
          {
              "City": "Kannapalaiyam",
              "CityId": 3794
          },
          {
              "City": "Kannapuram",
              "CityId": 1920
          },
          {
              "City": "Kannauj",
              "CityId": 4860
          },
          {
              "City": "Kannivadi",
              "CityId": 3795
          },
          {
              "City": "Kannod",
              "CityId": 2256
          },
          {
              "City": "Kannur",
              "CityId": 1668
          },
          {
              "City": "Kannur",
              "CityId": 1921
          },
          {
              "City": "Kannur Cantonment",
              "CityId": 1922
          },
          {
              "City": "Kanodar",
              "CityId": 922
          },
          {
              "City": "Kanor",
              "CityId": 3391
          },
          {
              "City": "Kanpur",
              "CityId": 4861
          },
          {
              "City": "Kansepur",
              "CityId": 1146
          },
          {
              "City": "Kant",
              "CityId": 4862
          },
          {
              "City": "Kantabamsuguda",
              "CityId": 112
          },
          {
              "City": "Kantabanji",
              "CityId": 3045
          },
          {
              "City": "Kantaphod",
              "CityId": 2257
          },
          {
              "City": "Kanth",
              "CityId": 4863
          },
          {
              "City": "Kanti",
              "CityId": 522
          },
          {
              "City": "Kantilo",
              "CityId": 3046
          },
          {
              "City": "Kantlia",
              "CityId": 5555
          },
          {
              "City": "Kanuru",
              "CityId": 113
          },
          {
              "City": "Kanyakumari",
              "CityId": 3796
          },
          {
              "City": "Kanyanagar",
              "CityId": 5556
          },
          {
              "City": "Kapadwanj",
              "CityId": 923
          },
          {
              "City": "Kapasan",
              "CityId": 3392
          },
          {
              "City": "Kappiyarai",
              "CityId": 3797
          },
          {
              "City": "Kaprain",
              "CityId": 3393
          },
          {
              "City": "Kaptanganj",
              "CityId": 4864
          },
          {
              "City": "Kapurthala",
              "CityId": 3208
          },
          {
              "City": "Karachiya",
              "CityId": 924
          },
          {
              "City": "Karad",
              "CityId": 2628
          },
          {
              "City": "Karaikal",
              "CityId": 3120
          },
          {
              "City": "Karaikkudi",
              "CityId": 3798
          },
          {
              "City": "Karamadai",
              "CityId": 3799
          },
          {
              "City": "Karambakkam",
              "CityId": 3800
          },
          {
              "City": "Karambakkudi",
              "CityId": 3801
          },
          {
              "City": "Karamsad",
              "CityId": 925
          },
          {
              "City": "Karanja",
              "CityId": 2629
          },
          {
              "City": "Karanja",
              "CityId": 3047
          },
          {
              "City": "Karanje Tarf",
              "CityId": 2630
          },
          {
              "City": "Karanpura",
              "CityId": 3394
          },
          {
              "City": "Karaon",
              "CityId": 4865
          },
          {
              "City": "Karari",
              "CityId": 4866
          },
          {
              "City": "Karauli",
              "CityId": 3395
          },
          {
              "City": "Kardhan",
              "CityId": 1147
          },
          {
              "City": "Kareli",
              "CityId": 2258
          },
          {
              "City": "Karera",
              "CityId": 2259
          },
          {
              "City": "Kargil",
              "CityId": 1307
          },
          {
              "City": "Karhal",
              "CityId": 4867
          },
          {
              "City": "Kari",
              "CityId": 2260
          },
          {
              "City": "Kariamangalam",
              "CityId": 3802
          },
          {
              "City": "Kariapatti",
              "CityId": 3803
          },
          {
              "City": "Karimganj",
              "CityId": 386
          },
          {
              "City": "Karimnagar",
              "CityId": 4466
          },
          {
              "City": "Karimpur",
              "CityId": 5557
          },
          {
              "City": "Karivali",
              "CityId": 2631
          },
          {
              "City": "Karjan",
              "CityId": 926
          },
          {
              "City": "Karjat",
              "CityId": 2632
          },
          {
              "City": "Karkala",
              "CityId": 1669
          },
          {
              "City": "Karmala",
              "CityId": 2633
          },
          {
              "City": "Karnal",
              "CityId": 1148
          },
          {
              "City": "Karnaprayang",
              "CityId": 5260
          },
          {
              "City": "Karnawad",
              "CityId": 2261
          },
          {
              "City": "Karnawal",
              "CityId": 4868
          },
          {
              "City": "Karnul",
              "CityId": 114
          },
          {
              "City": "Karoran",
              "CityId": 3209
          },
          {
              "City": "Karrapur",
              "CityId": 2262
          },
          {
              "City": "Karsiyang",
              "CityId": 5558
          },
          {
              "City": "Kartarpur",
              "CityId": 3210
          },
          {
              "City": "Karugampattur",
              "CityId": 3804
          },
          {
              "City": "Karumandi Chellipalayam",
              "CityId": 3805
          },
          {
              "City": "Karumathampatti",
              "CityId": 3806
          },
          {
              "City": "Karumbakkam",
              "CityId": 3807
          },
          {
              "City": "Karunagappally",
              "CityId": 1923
          },
          {
              "City": "Karungal",
              "CityId": 3808
          },
          {
              "City": "Karunguzhi",
              "CityId": 3809
          },
          {
              "City": "Karuppur",
              "CityId": 3810
          },
          {
              "City": "Karur",
              "CityId": 3811
          },
          {
              "City": "Karuvamyhuruthy",
              "CityId": 1924
          },
          {
              "City": "Karwar",
              "CityId": 1670
          },
          {
              "City": "Kasara Budruk",
              "CityId": 2634
          },
          {
              "City": "Kasaragod",
              "CityId": 1925
          },
          {
              "City": "Kasargod",
              "CityId": 1926
          },
          {
              "City": "Kasauli",
              "CityId": 1233
          },
          {
              "City": "Kasba",
              "CityId": 523
          },
          {
              "City": "Kasba",
              "CityId": 5559
          },
          {
              "City": "Kasganj",
              "CityId": 4869
          },
          {
              "City": "Kashinagara",
              "CityId": 3048
          },
          {
              "City": "Kashipur",
              "CityId": 5261
          },
          {
              "City": "Kashirampur",
              "CityId": 5262
          },
          {
              "City": "Kasimbazar",
              "CityId": 5560
          },
          {
              "City": "Kasipalaiyam",
              "CityId": 3812
          },
          {
              "City": "Kasipalayam G",
              "CityId": 3813
          },
          {
              "City": "Kasrawad",
              "CityId": 2263
          },
          {
              "City": "Katai",
              "CityId": 2635
          },
          {
              "City": "Kataiya",
              "CityId": 524
          },
          {
              "City": "Kataka",
              "CityId": 3049
          },
          {
              "City": "Katangi",
              "CityId": 2264
          },
          {
              "City": "Katariya",
              "CityId": 4870
          },
          {
              "City": "Katghar Lalganj",
              "CityId": 4871
          },
          {
              "City": "Katghora",
              "CityId": 647
          },
          {
              "City": "Kathera",
              "CityId": 4872
          },
          {
              "City": "Katheru",
              "CityId": 115
          },
          {
              "City": "Kathial",
              "CityId": 927
          },
          {
              "City": "Kathirvedu",
              "CityId": 3814
          },
          {
              "City": "Kathor",
              "CityId": 928
          },
          {
              "City": "Kathua",
              "CityId": 1308
          },
          {
              "City": "Kathujuganapalli",
              "CityId": 3815
          },
          {
              "City": "Katihar",
              "CityId": 525
          },
          {
              "City": "Katkar",
              "CityId": 2636
          },
          {
              "City": "Katni",
              "CityId": 2265
          },
          {
              "City": "Katol",
              "CityId": 2637
          },
          {
              "City": "Katpadi",
              "CityId": 3816
          },
          {
              "City": "Katpar",
              "CityId": 929
          },
          {
              "City": "Katra",
              "CityId": 1309
          },
          {
              "City": "Katra",
              "CityId": 4873
          },
          {
              "City": "Katra Medniganj",
              "CityId": 4874
          },
          {
              "City": "Katras",
              "CityId": 1441
          },
          {
              "City": "Kattappana",
              "CityId": 1927
          },
          {
              "City": "Kattivakkam",
              "CityId": 3817
          },
          {
              "City": "Kattumannarkoil",
              "CityId": 3818
          },
          {
              "City": "Kattupakkam",
              "CityId": 3819
          },
          {
              "City": "Kattuputhur",
              "CityId": 3820
          },
          {
              "City": "Katwa",
              "CityId": 5561
          },
          {
              "City": "Kaugachhi",
              "CityId": 5562
          },
          {
              "City": "Kauriaganj",
              "CityId": 4875
          },
          {
              "City": "Kausani",
              "CityId": 5263
          },
          {
              "City": "Kavali",
              "CityId": 116
          },
          {
              "City": "Kavant",
              "CityId": 930
          },
          {
              "City": "Kavaratti",
              "CityId": 2068
          },
          {
              "City": "Kaveripakkam",
              "CityId": 3821
          },
          {
              "City": "Kaveripattinam",
              "CityId": 3822
          },
          {
              "City": "Kavisuryanagar",
              "CityId": 3050
          },
          {
              "City": "Kavundampalaiyam",
              "CityId": 3823
          },
          {
              "City": "Kavundampalayam",
              "CityId": 3824
          },
          {
              "City": "Kawardha",
              "CityId": 648
          },
          {
              "City": "Kawnpui",
              "CityId": 2941
          },
          {
              "City": "Kayalpattinam",
              "CityId": 3825
          },
          {
              "City": "Kayamkulam",
              "CityId": 1928
          },
          {
              "City": "Kayattar",
              "CityId": 3826
          },
          {
              "City": "Kazipet",
              "CityId": 117
          },
          {
              "City": "Kedamangalam",
              "CityId": 1929
          },
          {
              "City": "Kedarnath",
              "CityId": 5264
          },
          {
              "City": "Kedla",
              "CityId": 1442
          },
          {
              "City": "Kegaon",
              "CityId": 2638
          },
          {
              "City": "Kekri",
              "CityId": 3396
          },
          {
              "City": "Kelakhera",
              "CityId": 5265
          },
          {
              "City": "Kelamangalam",
              "CityId": 3827
          },
          {
              "City": "Kelambakkam",
              "CityId": 3828
          },
          {
              "City": "Kelhauri",
              "CityId": 2266
          },
          {
              "City": "Kembainaickenpalayam",
              "CityId": 3829
          },
          {
              "City": "Kemminja",
              "CityId": 1671
          },
          {
              "City": "Kemri",
              "CityId": 4876
          },
          {
              "City": "Kenda",
              "CityId": 5563
          },
          {
              "City": "Kendra Khottamdi",
              "CityId": 5564
          },
          {
              "City": "Kendrapara",
              "CityId": 3051
          },
          {
              "City": "Kendua",
              "CityId": 5565
          },
          {
              "City": "Kenduadih",
              "CityId": 1443
          },
          {
              "City": "Kendujhar",
              "CityId": 3052
          },
          {
              "City": "Kengeri",
              "CityId": 1672
          },
          {
              "City": "Kenmore",
              "CityId": 31148003
          },
          {
              "City": "Keonjhar",
              "CityId": 3053
          },
          {
              "City": "Kerakat",
              "CityId": 4877
          },
          {
              "City": "Kerur",
              "CityId": 1673
          },
          {
              "City": "Kesabpur",
              "CityId": 5566
          },
          {
              "City": "Keshod",
              "CityId": 931
          },
          {
              "City": "Keshorai Patan",
              "CityId": 3397
          },
          {
              "City": "Kesinga",
              "CityId": 3054
          },
          {
              "City": "Kesrisinghpur",
              "CityId": 3398
          },
          {
              "City": "Kethi",
              "CityId": 3830
          },
          {
              "City": "Kevadiya",
              "CityId": 932
          },
          {
              "City": "Khachrod",
              "CityId": 2267
          },
          {
              "City": "Khadda",
              "CityId": 4878
          },
          {
              "City": "Khadkale",
              "CityId": 2639
          },
          {
              "City": "Khadki",
              "CityId": 2640
          },
          {
              "City": "Khaga",
              "CityId": 4879
          },
          {
              "City": "Khagaria",
              "CityId": 526
          },
          {
              "City": "Khagaul",
              "CityId": 527
          },
          {
              "City": "Khagrabari",
              "CityId": 5567
          },
          {
              "City": "Khailar",
              "CityId": 4880
          },
          {
              "City": "Khair",
              "CityId": 4881
          },
          {
              "City": "Khairabad",
              "CityId": 4882
          },
          {
              "City": "Khairagarh",
              "CityId": 649
          },
          {
              "City": "Khairagarh",
              "CityId": 4883
          },
          {
              "City": "Khairthal",
              "CityId": 3399
          },
          {
              "City": "Khajuraho",
              "CityId": 2268
          },
          {
              "City": "Khalia",
              "CityId": 5568
          },
          {
              "City": "Khaliapali",
              "CityId": 3055
          },
          {
              "City": "Khalikote",
              "CityId": 3056
          },
          {
              "City": "Khalilabad",
              "CityId": 4884
          },
          {
              "City": "Khalor",
              "CityId": 5569
          },
          {
              "City": "Khamanon",
              "CityId": 3211
          },
          {
              "City": "Khamaria",
              "CityId": 2269
          },
          {
              "City": "Khamaria",
              "CityId": 4885
          },
          {
              "City": "Khambhaliya",
              "CityId": 933
          },
          {
              "City": "Khambhat",
              "CityId": 934
          },
          {
              "City": "Khamgaon",
              "CityId": 2641
          },
          {
              "City": "Khamhria",
              "CityId": 650
          },
          {
              "City": "Khammam",
              "CityId": 4467
          },
          {
              "City": "Khan Sahib",
              "CityId": 1310
          },
          {
              "City": "Khanapur",
              "CityId": 1674
          },
          {
              "City": "Khanapuram Haveli",
              "CityId": 118
          },
          {
              "City": "Khanauri",
              "CityId": 3212
          },
          {
              "City": "Khand",
              "CityId": 2270
          },
          {
              "City": "Khandaparha",
              "CityId": 3057
          },
          {
              "City": "Khandela",
              "CityId": 3400
          },
          {
              "City": "Khandra",
              "CityId": 5570
          },
          {
              "City": "Khandwa",
              "CityId": 2271
          },
          {
              "City": "Khaniyadhana",
              "CityId": 2272
          },
          {
              "City": "Khanna",
              "CityId": 3213
          },
          {
              "City": "Khanpur",
              "CityId": 3401
          },
          {
              "City": "Khanpur",
              "CityId": 4886
          },
          {
              "City": "Khantora",
              "CityId": 5571
          },
          {
              "City": "Khapa",
              "CityId": 2642
          },
          {
              "City": "Kharadi",
              "CityId": 2643
          },
          {
              "City": "Kharaghoda",
              "CityId": 935
          },
          {
              "City": "Kharagpur",
              "CityId": 528
          },
          {
              "City": "Kharagpur",
              "CityId": 5572
          },
          {
              "City": "Kharagpur Railway Settlement",
              "CityId": 5573
          },
          {
              "City": "Kharakvasla",
              "CityId": 2644
          },
          {
              "City": "Kharar",
              "CityId": 3214
          },
          {
              "City": "Kharar",
              "CityId": 5574
          },
          {
              "City": "Khardaha",
              "CityId": 5575
          },
          {
              "City": "Kharela",
              "CityId": 4887
          },
          {
              "City": "Khargapur",
              "CityId": 2273
          },
          {
              "City": "Khargone",
              "CityId": 2274
          },
          {
              "City": "Khargupur",
              "CityId": 4888
          },
          {
              "City": "Kharhial",
              "CityId": 3058
          },
          {
              "City": "Kharhial Road",
              "CityId": 3059
          },
          {
              "City": "Khari Mala Khagrabari",
              "CityId": 5576
          },
          {
              "City": "Kharijapikon",
              "CityId": 387
          },
          {
              "City": "Khariya",
              "CityId": 4889
          },
          {
              "City": "Kharkhari",
              "CityId": 1444
          },
          {
              "City": "Kharkhoda",
              "CityId": 1149
          },
          {
              "City": "Kharkhoda",
              "CityId": 4890
          },
          {
              "City": "Kharod",
              "CityId": 651
          },
          {
              "City": "Kharsarai",
              "CityId": 5577
          },
          {
              "City": "Kharsawan",
              "CityId": 1445
          },
          {
              "City": "Kharsia",
              "CityId": 652
          },
          {
              "City": "Kharupetia",
              "CityId": 388
          },
          {
              "City": "Khatauli",
              "CityId": 4891
          },
          {
              "City": "Khatauli Rural",
              "CityId": 4892
          },
          {
              "City": "Khategaon",
              "CityId": 2275
          },
          {
              "City": "Khatiguda",
              "CityId": 3060
          },
          {
              "City": "Khatima",
              "CityId": 5266
          },
          {
              "City": "Khatra",
              "CityId": 5578
          },
          {
              "City": "Khawhai",
              "CityId": 2942
          },
          {
              "City": "Khawzawl",
              "CityId": 2943
          },
          {
              "City": "Khed",
              "CityId": 2645
          },
          {
              "City": "Khed Brahma",
              "CityId": 936
          },
          {
              "City": "Kheda",
              "CityId": 937
          },
          {
              "City": "Khekra",
              "CityId": 4893
          },
          {
              "City": "Khelari",
              "CityId": 1446
          },
          {
              "City": "Khem Karan",
              "CityId": 3215
          },
          {
              "City": "Kheralu",
              "CityId": 938
          },
          {
              "City": "Kherdi",
              "CityId": 2646
          },
          {
              "City": "Kheri",
              "CityId": 4894
          },
          {
              "City": "Kheri Sampla",
              "CityId": 1150
          },
          {
              "City": "Kherli",
              "CityId": 3402
          },
          {
              "City": "Kherliganj",
              "CityId": 3403
          },
          {
              "City": "Kherwara Chhaoni",
              "CityId": 3404
          },
          {
              "City": "Kheta Sarai",
              "CityId": 4895
          },
          {
              "City": "Khetia",
              "CityId": 2276
          },
          {
              "City": "Khetri",
              "CityId": 3405
          },
          {
              "City": "Khilchipur",
              "CityId": 2277
          },
          {
              "City": "Khirkiya",
              "CityId": 2278
          },
          {
              "City": "Khodarampur",
              "CityId": 5579
          },
          {
              "City": "Khonga Pani",
              "CityId": 653
          },
          {
              "City": "Khongman",
              "CityId": 2893
          },
          {
              "City": "Khoni",
              "CityId": 2647
          },
          {
              "City": "Khonsa",
              "CityId": 307
          },
          {
              "City": "Khopoli",
              "CityId": 2648
          },
          {
              "City": "Khour",
              "CityId": 1311
          },
          {
              "City": "Khowai",
              "CityId": 4521
          },
          {
              "City": "Khrew",
              "CityId": 1312
          },
          {
              "City": "Khudaganj",
              "CityId": 4896
          },
          {
              "City": "Khujner",
              "CityId": 2279
          },
          {
              "City": "Khuldabad",
              "CityId": 2649
          },
          {
              "City": "Khunti",
              "CityId": 1447
          },
          {
              "City": "Khurai",
              "CityId": 2280
          },
          {
              "City": "Khurda",
              "CityId": 3061
          },
          {
              "City": "Khurja",
              "CityId": 4897
          },
          {
              "City": "Khusrupur",
              "CityId": 529
          },
          {
              "City": "Khutar",
              "CityId": 4898
          },
          {
              "City": "Kichha",
              "CityId": 5267
          },
          {
              "City": "Kilakarai",
              "CityId": 3831
          },
          {
              "City": "Kilampadi",
              "CityId": 3832
          },
          {
              "City": "Kilkulam",
              "CityId": 3833
          },
          {
              "City": "Kilkunda",
              "CityId": 3834
          },
          {
              "City": "Killiyur",
              "CityId": 3835
          },
          {
              "City": "Killlai",
              "CityId": 3836
          },
          {
              "City": "Kilpennathur",
              "CityId": 3837
          },
          {
              "City": "Kilvelur",
              "CityId": 3838
          },
          {
              "City": "Kinathukadavu",
              "CityId": 3839
          },
          {
              "City": "Kinwat",
              "CityId": 2650
          },
          {
              "City": "Kiramangalam",
              "CityId": 3840
          },
          {
              "City": "Kirandu",
              "CityId": 654
          },
          {
              "City": "Kirandul",
              "CityId": 655
          },
          {
              "City": "Kiranipura",
              "CityId": 3406
          },
          {
              "City": "Kiranur",
              "CityId": 3841
          },
          {
              "City": "Kiraoli",
              "CityId": 4899
          },
          {
              "City": "Kiratpur",
              "CityId": 4900
          },
          {
              "City": "Kiri Buru",
              "CityId": 1448
          },
          {
              "City": "Kiriburu",
              "CityId": 1449
          },
          {
              "City": "Kiripatti",
              "CityId": 3842
          },
          {
              "City": "Kirtinagar",
              "CityId": 5268
          },
          {
              "City": "Kishanganj",
              "CityId": 530
          },
          {
              "City": "Kishangarh",
              "CityId": 3407
          },
          {
              "City": "Kishangarh Ranwal",
              "CityId": 3408
          },
          {
              "City": "Kishanpur",
              "CityId": 4901
          },
          {
              "City": "Kishni",
              "CityId": 4902
          },
          {
              "City": "Kishtwar",
              "CityId": 1313
          },
          {
              "City": "Kithaur",
              "CityId": 4903
          },
          {
              "City": "Kizhapavur",
              "CityId": 3843
          },
          {
              "City": "Kmarasamipatti",
              "CityId": 3844
          },
          {
              "City": "Koath",
              "CityId": 531
          },
          {
              "City": "Kochadai",
              "CityId": 3845
          },
          {
              "City": "Kochi",
              "CityId": 1930
          },
          {
              "City": "Kochinda",
              "CityId": 3062
          },
          {
              "City": "Kochpara",
              "CityId": 389
          },
          {
              "City": "Kodada",
              "CityId": 4468
          },
          {
              "City": "Kodaikanal",
              "CityId": 3846
          },
          {
              "City": "Kodala",
              "CityId": 3063
          },
          {
              "City": "Kodalia",
              "CityId": 5580
          },
          {
              "City": "Kodambakkam",
              "CityId": 3847
          },
          {
              "City": "Kodamthuruthu",
              "CityId": 1931
          },
          {
              "City": "Kodar",
              "CityId": 119
          },
          {
              "City": "Kodarma",
              "CityId": 1450
          },
          {
              "City": "Kodavasal",
              "CityId": 3848
          },
          {
              "City": "Kodigenahalli",
              "CityId": 1675
          },
          {
              "City": "Kodinar",
              "CityId": 939
          },
          {
              "City": "Kodiyal",
              "CityId": 1676
          },
          {
              "City": "Kodlipet",
              "CityId": 1677
          },
          {
              "City": "Kodoli",
              "CityId": 2651
          },
          {
              "City": "Kodumudi",
              "CityId": 3849
          },
          {
              "City": "Kodungallur",
              "CityId": 1932
          },
          {
              "City": "Koduvally",
              "CityId": 1933
          },
          {
              "City": "Koduvayur",
              "CityId": 1934
          },
          {
              "City": "Kohima",
              "CityId": 2959
          },
          {
              "City": "Kohka",
              "CityId": 656
          },
          {
              "City": "Koilwar",
              "CityId": 532
          },
          {
              "City": "Koiripur",
              "CityId": 4904
          },
          {
              "City": "Kokkothamangalam",
              "CityId": 1935
          },
          {
              "City": "Kokrajhar",
              "CityId": 390
          },
          {
              "City": "Kolachal",
              "CityId": 3850
          },
          {
              "City": "Kolaghat",
              "CityId": 5581
          },
          {
              "City": "Kolaghat Thermal Power Project",
              "CityId": 5582
          },
          {
              "City": "Kolappalur",
              "CityId": 3851
          },
          {
              "City": "Kolar",
              "CityId": 1678
          },
          {
              "City": "Kolaras",
              "CityId": 2281
          },
          {
              "City": "Kolasib",
              "CityId": 2944
          },
          {
              "City": "Kolathupalayam",
              "CityId": 3852
          },
          {
              "City": "Kolathur",
              "CityId": 3853
          },
          {
              "City": "Kolazhy",
              "CityId": 1936
          },
          {
              "City": "Kolhapur",
              "CityId": 2652
          },
          {
              "City": "Kolkata",
              "CityId": 5583
          },
          {
              "City": "Kollam",
              "CityId": 1937
          },
          {
              "City": "Kollankodu",
              "CityId": 3854
          },
          {
              "City": "Kollankoil",
              "CityId": 3855
          },
          {
              "City": "Kollapur",
              "CityId": 120
          },
          {
              "City": "Kollegal",
              "CityId": 1679
          },
          {
              "City": "Kolvi Rajendrapura",
              "CityId": 3409
          },
          {
              "City": "Komalapuram",
              "CityId": 1938
          },
          {
              "City": "Komaralingam",
              "CityId": 3856
          },
          {
              "City": "Komarapalayam",
              "CityId": 3857
          },
          {
              "City": "Kombai",
              "CityId": 3858
          },
          {
              "City": "Kon",
              "CityId": 2653
          },
          {
              "City": "Konakkarai",
              "CityId": 3859
          },
          {
              "City": "Konanakunte",
              "CityId": 1680
          },
          {
              "City": "Konanur",
              "CityId": 1681
          },
          {
              "City": "Konardihi",
              "CityId": 5584
          },
          {
              "City": "Konark",
              "CityId": 3064
          },
          {
              "City": "Konavattam",
              "CityId": 3860
          },
          {
              "City": "Konch",
              "CityId": 4905
          },
          {
              "City": "Kondagaon",
              "CityId": 657
          },
          {
              "City": "Kondalampatti",
              "CityId": 3861
          },
          {
              "City": "Kondapalem",
              "CityId": 121
          },
          {
              "City": "Kondapalle",
              "CityId": 122
          },
          {
              "City": "Kondukur",
              "CityId": 123
          },
          {
              "City": "Kondumal",
              "CityId": 2654
          },
          {
              "City": "Konganapuram",
              "CityId": 3862
          },
          {
              "City": "Konnogar",
              "CityId": 5585
          },
          {
              "City": "Konnur",
              "CityId": 1682
          },
          {
              "City": "Koothattukulam",
              "CityId": 1939
          },
          {
              "City": "Kopaganj",
              "CityId": 4906
          },
          {
              "City": "Kopargaon",
              "CityId": 2655
          },
          {
              "City": "Kopharad",
              "CityId": 2656
          },
          {
              "City": "Koppa",
              "CityId": 1683
          },
          {
              "City": "Koppal",
              "CityId": 1684
          },
          {
              "City": "Kora Jahanabad",
              "CityId": 4907
          },
          {
              "City": "Koradacheri",
              "CityId": 3863
          },
          {
              "City": "Koradi",
              "CityId": 2657
          },
          {
              "City": "Korampallam",
              "CityId": 3864
          },
          {
              "City": "Koraput",
              "CityId": 3065
          },
          {
              "City": "Koratagere",
              "CityId": 1685
          },
          {
              "City": "Koratla",
              "CityId": 4469
          },
          {
              "City": "Koratty",
              "CityId": 1940
          },
          {
              "City": "Korba",
              "CityId": 658
          },
          {
              "City": "Korea",
              "CityId": 659
          },
          {
              "City": "Koregaon",
              "CityId": 2658
          },
          {
              "City": "Koria Block",
              "CityId": 660
          },
          {
              "City": "Korochi",
              "CityId": 2659
          },
          {
              "City": "Korwa",
              "CityId": 4908
          },
          {
              "City": "Kosamba",
              "CityId": 940
          },
          {
              "City": "Kosgi",
              "CityId": 124
          },
          {
              "City": "Kosi Kalan",
              "CityId": 4909
          },
          {
              "City": "Kot Fatta",
              "CityId": 3216
          },
          {
              "City": "Kot Isa Khan",
              "CityId": 3217
          },
          {
              "City": "Kot Kapura",
              "CityId": 3218
          },
          {
              "City": "Kot Khai",
              "CityId": 1234
          },
          {
              "City": "Kot Putli",
              "CityId": 3410
          },
          {
              "City": "Kota",
              "CityId": 661
          },
          {
              "City": "Kota",
              "CityId": 3411
          },
          {
              "City": "Kota",
              "CityId": 4910
          },
          {
              "City": "Kotagiri",
              "CityId": 3865
          },
          {
              "City": "Kotaparh",
              "CityId": 3066
          },
          {
              "City": "Kotar",
              "CityId": 2282
          },
          {
              "City": "Kotdwara",
              "CityId": 5269
          },
          {
              "City": "Kotekara",
              "CityId": 1686
          },
          {
              "City": "Kothamangalam",
              "CityId": 1941
          },
          {
              "City": "Kothavalasa",
              "CityId": 125
          },
          {
              "City": "Kothi",
              "CityId": 2283
          },
          {
              "City": "Kothinallur",
              "CityId": 3866
          },
          {
              "City": "Kothnur",
              "CityId": 1687
          },
          {
              "City": "Kotkapura",
              "CityId": 3219
          },
          {
              "City": "Kotma",
              "CityId": 2284
          },
          {
              "City": "Kotra",
              "CityId": 4911
          },
          {
              "City": "Kottagudem",
              "CityId": 4470
          },
          {
              "City": "Kottaiyur",
              "CityId": 3867
          },
          {
              "City": "Kottakuppam",
              "CityId": 3868
          },
          {
              "City": "Kottapalli",
              "CityId": 126
          },
          {
              "City": "Kottarakkara",
              "CityId": 1942
          },
          {
              "City": "Kottaram",
              "CityId": 3869
          },
          {
              "City": "Kottayam",
              "CityId": 1943
          },
          {
              "City": "Kottayam Malabar",
              "CityId": 1944
          },
          {
              "City": "Kottivakkam",
              "CityId": 3870
          },
          {
              "City": "Kottur",
              "CityId": 3871
          },
          {
              "City": "Kotturu",
              "CityId": 1688
          },
          {
              "City": "Kottuvally",
              "CityId": 1945
          },
          {
              "City": "Kotwa",
              "CityId": 4912
          },
          {
              "City": "Kovilpatti",
              "CityId": 3872
          },
          {
              "City": "Kovur",
              "CityId": 127
          },
          {
              "City": "Kovurpalle",
              "CityId": 128
          },
          {
              "City": "Kovvur",
              "CityId": 129
          },
          {
              "City": "Koyampattur",
              "CityId": 3873
          },
          {
              "City": "Koyilandi",
              "CityId": 1946
          },
          {
              "City": "Kozhikode",
              "CityId": 1947
          },
          {
              "City": "Krishna",
              "CityId": 130
          },
          {
              "City": "Krishnagiri",
              "CityId": 3874
          },
          {
              "City": "Krishnanagar",
              "CityId": 5586
          },
          {
              "City": "Krishnapur",
              "CityId": 5587
          },
          {
              "City": "Krishnapura",
              "CityId": 1689
          },
          {
              "City": "Krishnarajanagar",
              "CityId": 1690
          },
          {
              "City": "Krishnarajapura",
              "CityId": 1691
          },
          {
              "City": "Krishnarajasagara",
              "CityId": 1692
          },
          {
              "City": "Krishnarajpet",
              "CityId": 1693
          },
          {
              "City": "Krishnarayapuram",
              "CityId": 3875
          },
          {
              "City": "Krishnasamudram",
              "CityId": 3876
          },
          {
              "City": "Kshidirpur",
              "CityId": 5588
          },
          {
              "City": "Kshirpai",
              "CityId": 5589
          },
          {
              "City": "Kuchaman",
              "CityId": 3412
          },
          {
              "City": "Kuchanur",
              "CityId": 3877
          },
          {
              "City": "Kuchera",
              "CityId": 3413
          },
          {
              "City": "Kud",
              "CityId": 1314
          },
          {
              "City": "Kudal",
              "CityId": 2660
          },
          {
              "City": "Kudappanakunnu",
              "CityId": 1948
          },
          {
              "City": "Kudchi",
              "CityId": 1694
          },
          {
              "City": "Kudligi",
              "CityId": 1695
          },
          {
              "City": "Kudlu",
              "CityId": 1949
          },
          {
              "City": "Kudremukh",
              "CityId": 1696
          },
          {
              "City": "Kuhalur",
              "CityId": 3878
          },
          {
              "City": "Kuju",
              "CityId": 1451
          },
          {
              "City": "Kukernag",
              "CityId": 1315
          },
          {
              "City": "Kukshi",
              "CityId": 2285
          },
          {
              "City": "Kulasekarappattinam",
              "CityId": 3879
          },
          {
              "City": "Kulasekarapuram",
              "CityId": 3880
          },
          {
              "City": "Kulgam",
              "CityId": 1316
          },
          {
              "City": "Kulihanda",
              "CityId": 5590
          },
          {
              "City": "Kulithalai",
              "CityId": 3881
          },
          {
              "City": "Kullu",
              "CityId": 1235
          },
          {
              "City": "Kulpahar",
              "CityId": 4913
          },
          {
              "City": "Kulti",
              "CityId": 5591
          },
          {
              "City": "Kulu",
              "CityId": 1236
          },
          {
              "City": "Kumar Kaibarta Gaon",
              "CityId": 391
          },
          {
              "City": "Kumarakom",
              "CityId": 1950
          },
          {
              "City": "Kumarapalaiyam",
              "CityId": 3882
          },
          {
              "City": "Kumarapalayam",
              "CityId": 3883
          },
          {
              "City": "Kumarapuram",
              "CityId": 3884
          },
          {
              "City": "Kumarghat",
              "CityId": 4522
          },
          {
              "City": "Kumbakonam",
              "CityId": 3885
          },
          {
              "City": "Kumbhalgarh",
              "CityId": 3414
          },
          {
              "City": "Kumbhkot",
              "CityId": 3415
          },
          {
              "City": "Kumbhraj",
              "CityId": 2286
          },
          {
              "City": "Kumbi",
              "CityId": 2894
          },
          {
              "City": "Kumhari",
              "CityId": 662
          },
          {
              "City": "Kumher",
              "CityId": 3416
          },
          {
              "City": "Kumily",
              "CityId": 1951
          },
          {
              "City": "Kumsi",
              "CityId": 1697
          },
          {
              "City": "Kumta",
              "CityId": 1698
          },
          {
              "City": "Kumud Katta",
              "CityId": 663
          },
          {
              "City": "Kunda",
              "CityId": 4914
          },
          {
              "City": "Kundaim",
              "CityId": 738
          },
          {
              "City": "Kundaim",
              "CityId": 2661
          },
          {
              "City": "Kundalwadi",
              "CityId": 2662
          },
          {
              "City": "Kundapura",
              "CityId": 1699
          },
          {
              "City": "Kundarki",
              "CityId": 4915
          },
          {
              "City": "Kundgol",
              "CityId": 1700
          },
          {
              "City": "Kundla",
              "CityId": 941
          },
          {
              "City": "Kundli",
              "CityId": 1151
          },
          {
              "City": "Kundrathur",
              "CityId": 3886
          },
          {
              "City": "Kunigal",
              "CityId": 1701
          },
          {
              "City": "Kuniyamuthur",
              "CityId": 3887
          },
          {
              "City": "Kunjaban",
              "CityId": 4523
          },
          {
              "City": "Kunnamangalam",
              "CityId": 1952
          },
          {
              "City": "Kunnamkulam",
              "CityId": 1953
          },
          {
              "City": "Kunnathur",
              "CityId": 3888
          },
          {
              "City": "Kunur",
              "CityId": 3889
          },
          {
              "City": "Kunustara",
              "CityId": 5592
          },
          {
              "City": "Kunwargaon",
              "CityId": 4916
          },
          {
              "City": "Kunzer",
              "CityId": 1317
          },
          {
              "City": "Kuperskem",
              "CityId": 5593
          },
          {
              "City": "Kuppam",
              "CityId": 131
          },
          {
              "City": "Kupwara",
              "CityId": 1318
          },
          {
              "City": "Kuraikundu",
              "CityId": 3890
          },
          {
              "City": "Kurali",
              "CityId": 3220
          },
          {
              "City": "Kurandvad",
              "CityId": 2663
          },
          {
              "City": "Kurara",
              "CityId": 4917
          },
          {
              "City": "Kurasia",
              "CityId": 664
          },
          {
              "City": "Kurawali",
              "CityId": 4918
          },
          {
              "City": "Kurduvadi",
              "CityId": 2664
          },
          {
              "City": "Kurgunta",
              "CityId": 1702
          },
          {
              "City": "Kurichi",
              "CityId": 3891
          },
          {
              "City": "Kurikkad",
              "CityId": 1954
          },
          {
              "City": "Kurinjippadi",
              "CityId": 3892
          },
          {
              "City": "Kurkkanchery",
              "CityId": 1955
          },
          {
              "City": "Kurmannapalem",
              "CityId": 132
          },
          {
              "City": "Kurnool",
              "CityId": 133
          },
          {
              "City": "Kurpania",
              "CityId": 1452
          },
          {
              "City": "Kursath",
              "CityId": 4919
          },
          {
              "City": "Kurthi Jafarpur",
              "CityId": 4920
          },
          {
              "City": "Kurud",
              "CityId": 665
          },
          {
              "City": "Kurudampalaiyam",
              "CityId": 3893
          },
          {
              "City": "Kurukshetra",
              "CityId": 1152
          },
          {
              "City": "Kurumbalur",
              "CityId": 3894
          },
          {
              "City": "Kurumbapet",
              "CityId": 3121
          },
          {
              "City": "Kurwai",
              "CityId": 2287
          },
          {
              "City": "Kusgaon Budruk",
              "CityId": 2665
          },
          {
              "City": "Kushalgarh",
              "CityId": 3417
          },
          {
              "City": "Kushalnagar",
              "CityId": 1703
          },
          {
              "City": "Kushinagar",
              "CityId": 4921
          },
          {
              "City": "Kushtagi",
              "CityId": 1704
          },
          {
              "City": "Kusmara",
              "CityId": 4922
          },
          {
              "City": "Kustai",
              "CityId": 1453
          },
          {
              "City": "Kutch",
              "CityId": 942
          },
          {
              "City": "Kuthalam",
              "CityId": 3895
          },
          {
              "City": "Kuthappar",
              "CityId": 3896
          },
          {
              "City": "Kuthuparamba",
              "CityId": 1956
          },
          {
              "City": "Kutiyana",
              "CityId": 943
          },
          {
              "City": "Kuttakulam",
              "CityId": 1957
          },
          {
              "City": "Kuttalam",
              "CityId": 3897
          },
          {
              "City": "Kuttanallur",
              "CityId": 3898
          },
          {
              "City": "Kuttikkattur",
              "CityId": 1958
          },
          {
              "City": "Kuttur",
              "CityId": 1959
          },
          {
              "City": "Kuzhithurai",
              "CityId": 3899
          },
          {
              "City": "Kwakta",
              "CityId": 2895
          },
          {
              "City": "Kyathampalle",
              "CityId": 4471
          },
          {
              "City": "Kyathanahalli",
              "CityId": 1705
          },
          {
              "City": "Labbaikudikadu",
              "CityId": 3900
          },
          {
              "City": "Lachhmangarh",
              "CityId": 3418
          },
          {
              "City": "Ladnun",
              "CityId": 3419
          },
          {
              "City": "Ladrawan",
              "CityId": 1153
          },
          {
              "City": "Ladwa",
              "CityId": 1154
          },
          {
              "City": "Lahar",
              "CityId": 2288
          },
          {
              "City": "Laharpur",
              "CityId": 4923
          },
          {
              "City": "Lakarka",
              "CityId": 1454
          },
          {
              "City": "Lakhenpur",
              "CityId": 1319
          },
          {
              "City": "Lakheri",
              "CityId": 3420
          },
          {
              "City": "Lakhimpur",
              "CityId": 392
          },
          {
              "City": "Lakhimpur",
              "CityId": 4924
          },
          {
              "City": "Lakhipur",
              "CityId": 393
          },
          {
              "City": "Lakhisarai",
              "CityId": 533
          },
          {
              "City": "Lakhna",
              "CityId": 4925
          },
          {
              "City": "Lakhnadon",
              "CityId": 2289
          },
          {
              "City": "Lakhtar",
              "CityId": 944
          },
          {
              "City": "Lakkampatti",
              "CityId": 3901
          },
          {
              "City": "Laksar",
              "CityId": 5270
          },
          {
              "City": "Lakshettipet",
              "CityId": 134
          },
          {
              "City": "Lakshmeshwar",
              "CityId": 1706
          },
          {
              "City": "Lala",
              "CityId": 394
          },
          {
              "City": "Lalbahadur Nagar",
              "CityId": 135
          },
          {
              "City": "Lalganj",
              "CityId": 534
          },
          {
              "City": "Lalganj",
              "CityId": 4926
          },
          {
              "City": "Lalgudi",
              "CityId": 3902
          },
          {
              "City": "Lalitpur",
              "CityId": 4927
          },
          {
              "City": "Lalkuan",
              "CityId": 5271
          },
          {
              "City": "Lalpet",
              "CityId": 3903
          },
          {
              "City": "Lalpur",
              "CityId": 945
          },
          {
              "City": "Lalru",
              "CityId": 3221
          },
          {
              "City": "Lalsot",
              "CityId": 3421
          },
          {
              "City": "Lamai",
              "CityId": 2896
          },
          {
              "City": "Lambha",
              "CityId": 946
          },
          {
              "City": "Lamjaotongba",
              "CityId": 2897
          },
          {
              "City": "Lamshang",
              "CityId": 2898
          },
          {
              "City": "Landaura",
              "CityId": 5272
          },
          {
              "City": "Landhaura Cantonment",
              "CityId": 5273
          },
          {
              "City": "Lanja",
              "CityId": 2666
          },
          {
              "City": "Lanjigarh",
              "CityId": 3067
          },
          {
              "City": "Lanka",
              "CityId": 395
          },
          {
              "City": "Lapanga",
              "CityId": 1455
          },
          {
              "City": "Lar",
              "CityId": 4928
          },
          {
              "City": "Lasalgaon",
              "CityId": 2667
          },
          {
              "City": "Latehar",
              "CityId": 1456
          },
          {
              "City": "Lateri",
              "CityId": 2290
          },
          {
              "City": "Lathi",
              "CityId": 947
          },
          {
              "City": "Lattikata",
              "CityId": 3068
          },
          {
              "City": "Latur",
              "CityId": 2668
          },
          {
              "City": "Laundi",
              "CityId": 2291
          },
          {
              "City": "Lauthaha",
              "CityId": 535
          },
          {
              "City": "Lawar",
              "CityId": 4929
          },
          {
              "City": "Ledwa Mahuwa",
              "CityId": 4930
          },
          {
              "City": "Leh",
              "CityId": 1320
          },
          {
              "City": "Lehra Gaga",
              "CityId": 3222
          },
          {
              "City": "Lengpui",
              "CityId": 2945
          },
          {
              "City": "Lensdaun",
              "CityId": 5274
          },
          {
              "City": "Lidhora Khas",
              "CityId": 2292
          },
          {
              "City": "Lido Tikok",
              "CityId": 396
          },
          {
              "City": "Lido Town",
              "CityId": 397
          },
          {
              "City": "Lilong",
              "CityId": 2899
          },
          {
              "City": "Limbdi",
              "CityId": 948
          },
          {
              "City": "Limla",
              "CityId": 949
          },
          {
              "City": "Lingiyadih",
              "CityId": 666
          },
          {
              "City": "Lingsugur",
              "CityId": 1707
          },
          {
              "City": "Llayangudi",
              "CityId": 3904
          },
          {
              "City": "Lodhian Khas",
              "CityId": 3223
          },
          {
              "City": "Lodhikheda",
              "CityId": 2293
          },
          {
              "City": "Logahat",
              "CityId": 5275
          },
          {
              "City": "Loha",
              "CityId": 2669
          },
          {
              "City": "Loharda",
              "CityId": 2294
          },
          {
              "City": "Lohardaga",
              "CityId": 1457
          },
          {
              "City": "Loharu",
              "CityId": 1155
          },
          {
              "City": "Lohegaon",
              "CityId": 2670
          },
          {
              "City": "Lohta",
              "CityId": 4931
          },
          {
              "City": "Loiya",
              "CityId": 1458
          },
          {
              "City": "Lonar",
              "CityId": 2671
          },
          {
              "City": "Lonavala",
              "CityId": 2672
          },
          {
              "City": "Londa",
              "CityId": 1708
          },
          {
              "City": "Longowal",
              "CityId": 3224
          },
          {
              "City": "Loni",
              "CityId": 4932
          },
          {
              "City": "Lormi",
              "CityId": 667
          },
          {
              "City": "Losal",
              "CityId": 3422
          },
          {
              "City": "Loutulim",
              "CityId": 739
          },
          {
              "City": "Loyabad",
              "CityId": 1459
          },
          {
              "City": "Lucknow",
              "CityId": 4933
          },
          {
              "City": "Ludhiana",
              "CityId": 3225
          },
          {
              "City": "Lumding",
              "CityId": 398
          },
          {
              "City": "Lumding Railway Colony",
              "CityId": 399
          },
          {
              "City": "Lunavada",
              "CityId": 950
          },
          {
              "City": "Lunglei",
              "CityId": 2946
          },
          {
              "City": "Machalpur",
              "CityId": 2295
          },
          {
              "City": "Machavaram",
              "CityId": 136
          },
          {
              "City": "Macherla",
              "CityId": 137
          },
          {
              "City": "Machhiwara",
              "CityId": 3226
          },
          {
              "City": "Machhlishahr",
              "CityId": 4934
          },
          {
              "City": "Machilipatnam",
              "CityId": 138
          },
          {
              "City": "Madambakkam",
              "CityId": 3905
          },
          {
              "City": "Madanapalle",
              "CityId": 139
          },
          {
              "City": "Madanganj",
              "CityId": 3423
          },
          {
              "City": "Madanpur",
              "CityId": 5594
          },
          {
              "City": "Madanrting",
              "CityId": 2922
          },
          {
              "City": "Madanur",
              "CityId": 3906
          },
          {
              "City": "Madaram",
              "CityId": 140
          },
          {
              "City": "Madathukulam",
              "CityId": 3907
          },
          {
              "City": "Maddur",
              "CityId": 1709
          },
          {
              "City": "Madgaon",
              "CityId": 740
          },
          {
              "City": "Madhapar",
              "CityId": 951
          },
          {
              "City": "Madhavaram",
              "CityId": 3908
          },
          {
              "City": "Madhavnagar",
              "CityId": 2673
          },
          {
              "City": "Madhepura",
              "CityId": 536
          },
          {
              "City": "Madhira",
              "CityId": 4472
          },
          {
              "City": "Madhoganj",
              "CityId": 4935
          },
          {
              "City": "Madhogarh",
              "CityId": 2296
          },
          {
              "City": "Madhogarh",
              "CityId": 4936
          },
          {
              "City": "Madhubani",
              "CityId": 537
          },
          {
              "City": "Madhugiri",
              "CityId": 1710
          },
          {
              "City": "Madhupur",
              "CityId": 1460
          },
          {
              "City": "Madhuravada",
              "CityId": 141
          },
          {
              "City": "Madhusudanpur",
              "CityId": 5595
          },
          {
              "City": "Madhyamgram",
              "CityId": 5596
          },
          {
              "City": "Madikeri",
              "CityId": 1711
          },
          {
              "City": "Madikonda",
              "CityId": 142
          },
          {
              "City": "Madippakkam",
              "CityId": 3909
          },
          {
              "City": "Madugule",
              "CityId": 143
          },
          {
              "City": "Madukkarai",
              "CityId": 3910
          },
          {
              "City": "Madukkur",
              "CityId": 3911
          },
          {
              "City": "Madurai",
              "CityId": 3912
          },
          {
              "City": "Maduranthakam",
              "CityId": 3913
          },
          {
              "City": "Maduravoyal",
              "CityId": 3914
          },
          {
              "City": "Maflipur",
              "CityId": 952
          },
          {
              "City": "Magadi",
              "CityId": 1712
          },
          {
              "City": "Magam",
              "CityId": 1321
          },
          {
              "City": "Maghar",
              "CityId": 4937
          },
          {
              "City": "Magod Falls",
              "CityId": 1713
          },
          {
              "City": "Mahabaleshwar",
              "CityId": 2674
          },
          {
              "City": "Mahabalipuram",
              "CityId": 3915
          },
          {
              "City": "Mahaban",
              "CityId": 4938
          },
          {
              "City": "Mahabubabad",
              "CityId": 4473
          },
          {
              "City": "Mahabubnagar",
              "CityId": 144
          },
          {
              "City": "Mahad",
              "CityId": 2675
          },
          {
              "City": "Mahadeswara Hills",
              "CityId": 1714
          },
          {
              "City": "Mahadevapura",
              "CityId": 1715
          },
          {
              "City": "Mahadula",
              "CityId": 2676
          },
          {
              "City": "Mahalingpur",
              "CityId": 1716
          },
          {
              "City": "Maham",
              "CityId": 1156
          },
          {
              "City": "Maharajganj",
              "CityId": 538
          },
          {
              "City": "Maharajganj",
              "CityId": 4939
          },
          {
              "City": "Maharajpur",
              "CityId": 2297
          },
          {
              "City": "Mahasamund",
              "CityId": 668
          },
          {
              "City": "Mahbubabad",
              "CityId": 145
          },
          {
              "City": "Mahbubnagar",
              "CityId": 4474
          },
          {
              "City": "Mahe",
              "CityId": 3122
          },
          {
              "City": "Mahemdavad",
              "CityId": 953
          },
          {
              "City": "Mahendragarh",
              "CityId": 669
          },
          {
              "City": "Mahendragarh",
              "CityId": 1157
          },
          {
              "City": "Mahesh Mundi",
              "CityId": 1461
          },
          {
              "City": "Maheshtala",
              "CityId": 5597
          },
          {
              "City": "Maheshwar",
              "CityId": 2298
          },
          {
              "City": "Mahiari",
              "CityId": 5598
          },
          {
              "City": "Mahidpur",
              "CityId": 2299
          },
          {
              "City": "Mahikpur",
              "CityId": 5599
          },
          {
              "City": "Mahilpur",
              "CityId": 3227
          },
          {
              "City": "Mahira",
              "CityId": 5600
          },
          {
              "City": "Mahishadal",
              "CityId": 5601
          },
          {
              "City": "Mahmudabad",
              "CityId": 4940
          },
          {
              "City": "Mahnar Bazar",
              "CityId": 539
          },
          {
              "City": "Mahoba",
              "CityId": 4941
          },
          {
              "City": "Maholi",
              "CityId": 4942
          },
          {
              "City": "Mahona",
              "CityId": 4943
          },
          {
              "City": "Mahroni",
              "CityId": 4944
          },
          {
              "City": "Mahu Kalan",
              "CityId": 3424
          },
          {
              "City": "Mahua Dabra Haripura",
              "CityId": 5276
          },
          {
              "City": "Mahua Kheraganj",
              "CityId": 5277
          },
          {
              "City": "Mahudha",
              "CityId": 954
          },
          {
              "City": "Mahur",
              "CityId": 400
          },
          {
              "City": "Mahuva",
              "CityId": 955
          },
          {
              "City": "Mahuvar",
              "CityId": 956
          },
          {
              "City": "Mahwa",
              "CityId": 3425
          },
          {
              "City": "Maibong",
              "CityId": 401
          },
          {
              "City": "Maihar",
              "CityId": 2300
          },
          {
              "City": "Mailani",
              "CityId": 4945
          },
          {
              "City": "Mainaguri",
              "CityId": 5602
          },
          {
              "City": "Maindargi",
              "CityId": 2677
          },
          {
              "City": "Mainpuri",
              "CityId": 4946
          },
          {
              "City": "Mairang",
              "CityId": 2923
          },
          {
              "City": "Mairwa",
              "CityId": 540
          },
          {
              "City": "Maisuru",
              "CityId": 1717
          },
          {
              "City": "Maisuru Cantonment",
              "CityId": 1718
          },
          {
              "City": "Maithon",
              "CityId": 1462
          },
          {
              "City": "Majalgaon",
              "CityId": 2678
          },
          {
              "City": "Majgaon",
              "CityId": 402
          },
          {
              "City": "Majhara Pipar Ehatmali",
              "CityId": 4947
          },
          {
              "City": "Majhauli Raj",
              "CityId": 4948
          },
          {
              "City": "Majholi",
              "CityId": 2301
          },
          {
              "City": "Majitha",
              "CityId": 3228
          },
          {
              "City": "Makarba",
              "CityId": 957
          },
          {
              "City": "Makardaha",
              "CityId": 5603
          },
          {
              "City": "Makarpura",
              "CityId": 958
          },
          {
              "City": "Makassar",
              "CityId": 959
          },
          {
              "City": "Makhdumpur",
              "CityId": 541
          },
          {
              "City": "Makhu",
              "CityId": 3229
          },
          {
              "City": "Makkinanpatti",
              "CityId": 3916
          },
          {
              "City": "Makrana",
              "CityId": 3426
          },
          {
              "City": "Makronia",
              "CityId": 2302
          },
          {
              "City": "Maksi",
              "CityId": 2303
          },
          {
              "City": "Maktampur",
              "CityId": 960
          },
          {
              "City": "Makum",
              "CityId": 403
          },
          {
              "City": "Makundapur",
              "CityId": 3069
          },
          {
              "City": "Mal",
              "CityId": 5604
          },
          {
              "City": "Malaj Khand",
              "CityId": 2304
          },
          {
              "City": "Malanpur",
              "CityId": 2305
          },
          {
              "City": "Malappuram",
              "CityId": 1960
          },
          {
              "City": "Malaut",
              "CityId": 3230
          },
          {
              "City": "Malavalli",
              "CityId": 1719
          },
          {
              "City": "Malda",
              "CityId": 5605
          },
          {
              "City": "Malegaon",
              "CityId": 2679
          },
          {
              "City": "Malerkotla",
              "CityId": 3231
          },
          {
              "City": "Malgaon",
              "CityId": 2680
          },
          {
              "City": "Malhargarh",
              "CityId": 2306
          },
          {
              "City": "Malia",
              "CityId": 961
          },
          {
              "City": "Malihabad",
              "CityId": 4949
          },
          {
              "City": "Malkajgiri",
              "CityId": 146
          },
          {
              "City": "Malkangiri",
              "CityId": 3070
          },
          {
              "City": "Malkapur",
              "CityId": 2681
          },
          {
              "City": "Malkera",
              "CityId": 1463
          },
          {
              "City": "Mallamuppampatti",
              "CityId": 3917
          },
          {
              "City": "Mallankinaru",
              "CityId": 3918
          },
          {
              "City": "Mallanwam",
              "CityId": 4950
          },
          {
              "City": "Mallappally",
              "CityId": 1961
          },
          {
              "City": "Mallapuram",
              "CityId": 3919
          },
          {
              "City": "Mallar",
              "CityId": 1720
          },
          {
              "City": "Mallasamudram",
              "CityId": 3920
          },
          {
              "City": "Mallur",
              "CityId": 3921
          },
          {
              "City": "Maloud",
              "CityId": 3232
          },
          {
              "City": "Malpe",
              "CityId": 1721
          },
          {
              "City": "Malpur",
              "CityId": 962
          },
          {
              "City": "Malpura",
              "CityId": 3427
          },
          {
              "City": "Malur",
              "CityId": 1722
          },
          {
              "City": "Malwan",
              "CityId": 2682
          },
          {
              "City": "Mamallapuram",
              "CityId": 3922
          },
          {
              "City": "Mamilapalle",
              "CityId": 147
          },
          {
              "City": "Mamit",
              "CityId": 2947
          },
          {
              "City": "Mamsapuram",
              "CityId": 3923
          },
          {
              "City": "Manachanallur",
              "CityId": 3924
          },
          {
              "City": "Manadur",
              "CityId": 2683
          },
          {
              "City": "Manali",
              "CityId": 1237
          },
          {
              "City": "Manali",
              "CityId": 3925
          },
          {
              "City": "Manalmedu",
              "CityId": 3926
          },
          {
              "City": "Manalurpet",
              "CityId": 3927
          },
          {
              "City": "Manamadurai",
              "CityId": 3928
          },
          {
              "City": "Manapakkam",
              "CityId": 3929
          },
          {
              "City": "Manapparai",
              "CityId": 3930
          },
          {
              "City": "Manasa",
              "CityId": 2307
          },
          {
              "City": "Manavadar",
              "CityId": 963
          },
          {
              "City": "Manavalakurichi",
              "CityId": 3931
          },
          {
              "City": "Manawar",
              "CityId": 2308
          },
          {
              "City": "Manchar",
              "CityId": 2684
          },
          {
              "City": "Manchenahalli",
              "CityId": 1723
          },
          {
              "City": "Mancheral",
              "CityId": 148
          },
          {
              "City": "Mancherial",
              "CityId": 4475
          },
          {
              "City": "Mandaikadu",
              "CityId": 3932
          },
          {
              "City": "Mandal",
              "CityId": 964
          },
          {
              "City": "Mandal",
              "CityId": 3428
          },
          {
              "City": "Mandalgarh",
              "CityId": 3429
          },
          {
              "City": "Mandamarri",
              "CityId": 4476
          },
          {
              "City": "Mandapam",
              "CityId": 3933
          },
          {
              "City": "Mandapeta",
              "CityId": 149
          },
          {
              "City": "Mandarbani",
              "CityId": 5606
          },
          {
              "City": "Mandasa",
              "CityId": 150
          },
          {
              "City": "Mandav",
              "CityId": 2309
          },
          {
              "City": "Mandawar",
              "CityId": 3430
          },
          {
              "City": "Mandawar",
              "CityId": 4951
          },
          {
              "City": "Mandi",
              "CityId": 1238
          },
          {
              "City": "Mandi Gobindgarh",
              "CityId": 3233
          },
          {
              "City": "Mandideep",
              "CityId": 2310
          },
          {
              "City": "Mandla",
              "CityId": 2311
          },
          {
              "City": "Mandleshwar",
              "CityId": 2312
          },
          {
              "City": "Mandsaur",
              "CityId": 2313
          },
          {
              "City": "Mandvi",
              "CityId": 965
          },
          {
              "City": "Mandwa",
              "CityId": 3431
          },
          {
              "City": "Mandya",
              "CityId": 1724
          },
          {
              "City": "Manegaon",
              "CityId": 2314
          },
          {
              "City": "Maner",
              "CityId": 542
          },
          {
              "City": "Mangadu",
              "CityId": 3934
          },
          {
              "City": "Mangalagiri",
              "CityId": 151
          },
          {
              "City": "Mangalam",
              "CityId": 3935
          },
          {
              "City": "Mangalampet",
              "CityId": 3936
          },
          {
              "City": "Mangaldai",
              "CityId": 404
          },
          {
              "City": "Mangalore",
              "CityId": 1725
          },
          {
              "City": "Mangaluru",
              "CityId": 1726
          },
          {
              "City": "Mangalvedhe",
              "CityId": 2685
          },
          {
              "City": "Mangan",
              "CityId": 3543
          },
          {
              "City": "Mangawan",
              "CityId": 2315
          },
          {
              "City": "Manglaur",
              "CityId": 5278
          },
          {
              "City": "Manglaya Sadak",
              "CityId": 2316
          },
          {
              "City": "Mango",
              "CityId": 1464
          },
          {
              "City": "Mangrol",
              "CityId": 966
          },
          {
              "City": "Mangrol",
              "CityId": 3432
          },
          {
              "City": "Mangrul Pir",
              "CityId": 2686
          },
          {
              "City": "Manihari",
              "CityId": 543
          },
          {
              "City": "Manikpur",
              "CityId": 4952
          },
          {
              "City": "Manimutharu",
              "CityId": 3937
          },
          {
              "City": "Manipal",
              "CityId": 1727
          },
          {
              "City": "Maniyar",
              "CityId": 4953
          },
          {
              "City": "Manjeri",
              "CityId": 1962
          },
          {
              "City": "Manjeshwar",
              "CityId": 1963
          },
          {
              "City": "Manjhanpur",
              "CityId": 4954
          },
          {
              "City": "Mankachar",
              "CityId": 405
          },
          {
              "City": "Mankapur",
              "CityId": 4955
          },
          {
              "City": "Manmad",
              "CityId": 2687
          },
          {
              "City": "Mannancherry",
              "CityId": 1964
          },
          {
              "City": "Mannar",
              "CityId": 1965
          },
          {
              "City": "Mannarakkat",
              "CityId": 1966
          },
          {
              "City": "Mannargudi",
              "CityId": 3938
          },
          {
              "City": "Manohar Thana",
              "CityId": 3433
          },
          {
              "City": "Manoharpur",
              "CityId": 1465
          },
          {
              "City": "Manoharpur",
              "CityId": 3434
          },
          {
              "City": "Manor",
              "CityId": 2688
          },
          {
              "City": "Manpur",
              "CityId": 2317
          },
          {
              "City": "Mansa",
              "CityId": 967
          },
          {
              "City": "Mansa",
              "CityId": 3234
          },
          {
              "City": "Mansar",
              "CityId": 2689
          },
          {
              "City": "Mansinhapur",
              "CityId": 5607
          },
          {
              "City": "Mant Khas",
              "CityId": 1239
          },
          {
              "City": "Manthani",
              "CityId": 152
          },
          {
              "City": "Manuguru",
              "CityId": 4477
          },
          {
              "City": "Manvi",
              "CityId": 1728
          },
          {
              "City": "Manwath",
              "CityId": 2690
          },
          {
              "City": "Mappilaiurani",
              "CityId": 3939
          },
          {
              "City": "Mapuca",
              "CityId": 2691
          },
          {
              "City": "Mapusa",
              "CityId": 741
          },
          {
              "City": "Maradu",
              "CityId": 1967
          },
          {
              "City": "Maraimalai Nagar",
              "CityId": 3940
          },
          {
              "City": "Marakkanam",
              "CityId": 3941
          },
          {
              "City": "Maramangalathupatti",
              "CityId": 3942
          },
          {
              "City": "Marandahalli",
              "CityId": 3943
          },
          {
              "City": "Marathakkara",
              "CityId": 1968
          },
          {
              "City": "Marehra",
              "CityId": 4956
          },
          {
              "City": "Margao",
              "CityId": 742
          },
          {
              "City": "Margaon",
              "CityId": 743
          },
          {
              "City": "Margherita",
              "CityId": 406
          },
          {
              "City": "Marhaura",
              "CityId": 544
          },
          {
              "City": "Mariahu",
              "CityId": 4957
          },
          {
              "City": "Mariani",
              "CityId": 407
          },
          {
              "City": "Marigaon",
              "CityId": 408
          },
          {
              "City": "Markapur",
              "CityId": 153
          },
          {
              "City": "Markayankottai",
              "CityId": 3944
          },
          {
              "City": "Marma",
              "CityId": 1466
          },
          {
              "City": "Marturu",
              "CityId": 154
          },
          {
              "City": "Maruadih",
              "CityId": 4958
          },
          {
              "City": "Marudur",
              "CityId": 3945
          },
          {
              "City": "Marungur",
              "CityId": 3946
          },
          {
              "City": "Marutharod",
              "CityId": 1969
          },
          {
              "City": "Marwar",
              "CityId": 3435
          },
          {
              "City": "Masaurhi",
              "CityId": 545
          },
          {
              "City": "Masila",
              "CityId": 5608
          },
          {
              "City": "Masinigudi",
              "CityId": 3947
          },
          {
              "City": "Maski",
              "CityId": 1729
          },
          {
              "City": "Maslandapur",
              "CityId": 5609
          },
          {
              "City": "Mastikatte Colony",
              "CityId": 1730
          },
          {
              "City": "Masuri",
              "CityId": 5279
          },
          {
              "City": "Maswasi",
              "CityId": 4959
          },
          {
              "City": "Mataundh",
              "CityId": 4960
          },
          {
              "City": "Mathabhanga",
              "CityId": 5610
          },
          {
              "City": "Matheran",
              "CityId": 2692
          },
          {
              "City": "Mathigiri",
              "CityId": 3948
          },
          {
              "City": "Mathu",
              "CityId": 4961
          },
          {
              "City": "Mathura",
              "CityId": 4962
          },
          {
              "City": "Mathura Cantonment",
              "CityId": 4963
          },
          {
              "City": "Mattan",
              "CityId": 1322
          },
          {
              "City": "Mattannur",
              "CityId": 1970
          },
          {
              "City": "Mattur",
              "CityId": 3949
          },
          {
              "City": "Mau",
              "CityId": 2318
          },
          {
              "City": "Mau",
              "CityId": 4964
          },
          {
              "City": "Mau Aima",
              "CityId": 4965
          },
          {
              "City": "Maudaha",
              "CityId": 4966
          },
          {
              "City": "Mauganj",
              "CityId": 2319
          },
          {
              "City": "Maur",
              "CityId": 3235
          },
          {
              "City": "Mauranipur",
              "CityId": 4967
          },
          {
              "City": "Maurawan",
              "CityId": 4968
          },
          {
              "City": "Mavelikara",
              "CityId": 1971
          },
          {
              "City": "Mavilayi",
              "CityId": 1972
          },
          {
              "City": "Mavur",
              "CityId": 1973
          },
          {
              "City": "Mawana",
              "CityId": 4969
          },
          {
              "City": "Mawlai",
              "CityId": 2924
          },
          {
              "City": "Mayakonda",
              "CityId": 1731
          },
          {
              "City": "Mayang Imphal",
              "CityId": 2900
          },
          {
              "City": "Mayiladuthurai",
              "CityId": 3950
          },
          {
              "City": "Mecheri",
              "CityId": 3951
          },
          {
              "City": "Medak",
              "CityId": 4478
          },
          {
              "City": "Medchal",
              "CityId": 4479
          },
          {
              "City": "Meerut",
              "CityId": 4970
          },
          {
              "City": "Meghahatuburu Forest village",
              "CityId": 1467
          },
          {
              "City": "Meghnagar",
              "CityId": 2320
          },
          {
              "City": "Meghraj",
              "CityId": 968
          },
          {
              "City": "Mehara Gaon",
              "CityId": 2321
          },
          {
              "City": "Mehatpur Basdehra",
              "CityId": 1240
          },
          {
              "City": "Mehgaon",
              "CityId": 2322
          },
          {
              "City": "Mehkar",
              "CityId": 2693
          },
          {
              "City": "Mehmand",
              "CityId": 670
          },
          {
              "City": "Mehnagar",
              "CityId": 4971
          },
          {
              "City": "Mehndawal",
              "CityId": 4972
          },
          {
              "City": "Mehsana",
              "CityId": 969
          },
          {
              "City": "Mekliganj",
              "CityId": 5611
          },
          {
              "City": "Melacheval",
              "CityId": 3952
          },
          {
              "City": "Melachokkanathapuram",
              "CityId": 3953
          },
          {
              "City": "Melagaram",
              "CityId": 3954
          },
          {
              "City": "Melamadai",
              "CityId": 3955
          },
          {
              "City": "Melamaiyur",
              "CityId": 3956
          },
          {
              "City": "Melanattam",
              "CityId": 3957
          },
          {
              "City": "Melathiruppanthuruthi",
              "CityId": 3958
          },
          {
              "City": "Melattur",
              "CityId": 3959
          },
          {
              "City": "Melmananbedu",
              "CityId": 3960
          },
          {
              "City": "Melpattampakkam",
              "CityId": 3961
          },
          {
              "City": "Melukote",
              "CityId": 1732
          },
          {
              "City": "Melur",
              "CityId": 3962
          },
          {
              "City": "Melvisharam",
              "CityId": 3963
          },
          {
              "City": "Memari",
              "CityId": 5612
          },
          {
              "City": "Mendarla",
              "CityId": 970
          },
          {
              "City": "Mendu",
              "CityId": 4973
          },
          {
              "City": "Mera",
              "CityId": 1468
          },
          {
              "City": "Merta",
              "CityId": 3436
          },
          {
              "City": "Meru",
              "CityId": 1469
          },
          {
              "City": "Methala",
              "CityId": 1974
          },
          {
              "City": "Metpalli",
              "CityId": 155
          },
          {
              "City": "Mettupalayam",
              "CityId": 3964
          },
          {
              "City": "Mettur",
              "CityId": 3965
          },
          {
              "City": "Meyyanur",
              "CityId": 3966
          },
          {
              "City": "Mhasla",
              "CityId": 2694
          },
          {
              "City": "Mhaswad",
              "CityId": 2695
          },
          {
              "City": "Mhaugaon",
              "CityId": 2323
          },
          {
              "City": "Mhow",
              "CityId": 2324
          },
          {
              "City": "Midnapur",
              "CityId": 5613
          },
          {
              "City": "Mihijam",
              "CityId": 1470
          },
          {
              "City": "Mihona",
              "CityId": 2325
          },
          {
              "City": "Milak",
              "CityId": 4974
          },
          {
              "City": "Milavittan",
              "CityId": 3967
          },
          {
              "City": "Minakshipuram",
              "CityId": 3968
          },
          {
              "City": "Minambakkam",
              "CityId": 3969
          },
          {
              "City": "Mindi",
              "CityId": 156
          },
          {
              "City": "Minicoy",
              "CityId": 2069
          },
          {
              "City": "Minjur",
              "CityId": 3970
          },
          {
              "City": "Mira Bhayandar",
              "CityId": 2696
          },
          {
              "City": "Miraj",
              "CityId": 2697
          },
          {
              "City": "Miramar",
              "CityId": 744
          },
          {
              "City": "Miranpur",
              "CityId": 4975
          },
          {
              "City": "Mirat",
              "CityId": 4976
          },
          {
              "City": "Mirat Cantonment",
              "CityId": 4977
          },
          {
              "City": "Mirganj",
              "CityId": 546
          },
          {
              "City": "Mirganj",
              "CityId": 4978
          },
          {
              "City": "Mirik",
              "CityId": 5614
          },
          {
              "City": "Mirpet",
              "CityId": 157
          },
          {
              "City": "Miryalaguda",
              "CityId": 4480
          },
          {
              "City": "Mirzapur",
              "CityId": 4979
          },
          {
              "City": "Misrikh",
              "CityId": 4980
          },
          {
              "City": "Mithapur",
              "CityId": 971
          },
          {
              "City": "Modak",
              "CityId": 3437
          },
          {
              "City": "Modakurichi",
              "CityId": 3971
          },
          {
              "City": "Modasa",
              "CityId": 972
          },
          {
              "City": "Modinagar",
              "CityId": 4981
          },
          {
              "City": "Moga",
              "CityId": 3236
          },
          {
              "City": "Mogra Badshahpur",
              "CityId": 4982
          },
          {
              "City": "Mogravadi",
              "CityId": 973
          },
          {
              "City": "Mohali",
              "CityId": 3237
          },
          {
              "City": "Mohan",
              "CityId": 4983
          },
          {
              "City": "Mohanpur",
              "CityId": 4984
          },
          {
              "City": "Mohanpur Mohammadpur",
              "CityId": 5280
          },
          {
              "City": "Mohanur",
              "CityId": 3972
          },
          {
              "City": "Mohgaon",
              "CityId": 2326
          },
          {
              "City": "Mohiuddinagar",
              "CityId": 547
          },
          {
              "City": "Mohiuddinpur",
              "CityId": 4985
          },
          {
              "City": "Mohpa",
              "CityId": 2698
          },
          {
              "City": "Mohpada",
              "CityId": 2699
          },
          {
              "City": "Moirang",
              "CityId": 2901
          },
          {
              "City": "Mokama",
              "CityId": 548
          },
          {
              "City": "Mokokchung",
              "CityId": 2960
          },
          {
              "City": "Molakalmuru",
              "CityId": 1733
          },
          {
              "City": "Mon",
              "CityId": 2961
          },
          {
              "City": "Mongra",
              "CityId": 671
          },
          {
              "City": "Monoharpur",
              "CityId": 5615
          },
          {
              "City": "Moonak",
              "CityId": 3238
          },
          {
              "City": "Mopperipalayam",
              "CityId": 3973
          },
          {
              "City": "Moradabad",
              "CityId": 4986
          },
          {
              "City": "Moragudi",
              "CityId": 158
          },
          {
              "City": "Moram",
              "CityId": 2700
          },
          {
              "City": "Moran",
              "CityId": 409
          },
          {
              "City": "Moranhat",
              "CityId": 410
          },
          {
              "City": "Morar",
              "CityId": 2327
          },
          {
              "City": "Morbi",
              "CityId": 974
          },
          {
              "City": "Moreh",
              "CityId": 2902
          },
          {
              "City": "Morena",
              "CityId": 2328
          },
          {
              "City": "Morinda",
              "CityId": 3239
          },
          {
              "City": "Morjim",
              "CityId": 745
          },
          {
              "City": "Mormugao",
              "CityId": 746
          },
          {
              "City": "Morshi",
              "CityId": 2701
          },
          {
              "City": "Morvi",
              "CityId": 975
          },
          {
              "City": "Morwa",
              "CityId": 2329
          },
          {
              "City": "Moth",
              "CityId": 4987
          },
          {
              "City": "Mothugudam",
              "CityId": 159
          },
          {
              "City": "Motihari",
              "CityId": 549
          },
          {
              "City": "Motipur",
              "CityId": 550
          },
          {
              "City": "Mount Abu",
              "CityId": 3438
          },
          {
              "City": "Mowa",
              "CityId": 672
          },
          {
              "City": "Mowad",
              "CityId": 2702
          },
          {
              "City": "Mrigala",
              "CityId": 5616
          },
          {
              "City": "Mubarakpur",
              "CityId": 4988
          },
          {
              "City": "Mudalgi",
              "CityId": 1734
          },
          {
              "City": "Mudalur",
              "CityId": 3974
          },
          {
              "City": "Mudbidri",
              "CityId": 1735
          },
          {
              "City": "Muddebihal",
              "CityId": 1736
          },
          {
              "City": "Mudgal",
              "CityId": 1737
          },
          {
              "City": "Mudhol",
              "CityId": 1738
          },
          {
              "City": "Mudichur",
              "CityId": 3975
          },
          {
              "City": "Mudigere",
              "CityId": 1739
          },
          {
              "City": "Mudkhed",
              "CityId": 2703
          },
          {
              "City": "Mudukulathur",
              "CityId": 3976
          },
          {
              "City": "Mudushedde",
              "CityId": 1740
          },
          {
              "City": "Mughal Sarai",
              "CityId": 4989
          },
          {
              "City": "Mughal Sarai Railway Settlemen",
              "CityId": 4990
          },
          {
              "City": "Mugma",
              "CityId": 1471
          },
          {
              "City": "Muhamma",
              "CityId": 1975
          },
          {
              "City": "Muhammadabad",
              "CityId": 4991
          },
          {
              "City": "Muhammadi",
              "CityId": 4992
          },
          {
              "City": "Mukandgarh",
              "CityId": 3439
          },
          {
              "City": "Mukasipidariyur",
              "CityId": 3977
          },
          {
              "City": "Mukerian",
              "CityId": 3240
          },
          {
              "City": "Mukhed",
              "CityId": 2704
          },
          {
              "City": "Mukhiguda",
              "CityId": 3071
          },
          {
              "City": "Mukkudal",
              "CityId": 3978
          },
          {
              "City": "Mukrampur Khema",
              "CityId": 4993
          },
          {
              "City": "Muktsar",
              "CityId": 3241
          },
          {
              "City": "Mul",
              "CityId": 2705
          },
          {
              "City": "Mulagumudu",
              "CityId": 3979
          },
          {
              "City": "Mulakaraipatti",
              "CityId": 3980
          },
          {
              "City": "Mulanur",
              "CityId": 3981
          },
          {
              "City": "Mulavukad",
              "CityId": 1976
          },
          {
              "City": "Mulbagal",
              "CityId": 1741
          },
          {
              "City": "Mulgund",
              "CityId": 1742
          },
          {
              "City": "Mulki",
              "CityId": 1743
          },
          {
              "City": "Mullakkadu",
              "CityId": 3982
          },
          {
              "City": "Mullanpur Dakha",
              "CityId": 3242
          },
          {
              "City": "Mullanpur Garibdas",
              "CityId": 3243
          },
          {
              "City": "Mulshi",
              "CityId": 2706
          },
          {
              "City": "Multai",
              "CityId": 2330
          },
          {
              "City": "Mulur",
              "CityId": 1744
          },
          {
              "City": "Mumbai",
              "CityId": 2707
          },
          {
              "City": "Munak",
              "CityId": 3244
          },
          {
              "City": "Mundakayam",
              "CityId": 1977
          },
          {
              "City": "Mundargi",
              "CityId": 1745
          },
          {
              "City": "Munderi",
              "CityId": 1978
          },
          {
              "City": "Mundgod",
              "CityId": 1746
          },
          {
              "City": "Mundi",
              "CityId": 2331
          },
          {
              "City": "Mundia",
              "CityId": 4994
          },
          {
              "City": "Mundora",
              "CityId": 4995
          },
          {
              "City": "Mundra",
              "CityId": 976
          },
          {
              "City": "Mundwa",
              "CityId": 3440
          },
          {
              "City": "Mungaoli",
              "CityId": 2332
          },
          {
              "City": "Mungeli",
              "CityId": 673
          },
          {
              "City": "Munger",
              "CityId": 551
          },
          {
              "City": "Muni Ki Reti",
              "CityId": 5281
          },
          {
              "City": "Munirabad",
              "CityId": 1747
          },
          {
              "City": "Munnar",
              "CityId": 1979
          },
          {
              "City": "Munnur",
              "CityId": 1748
          },
          {
              "City": "Muradnagar",
              "CityId": 4996
          },
          {
              "City": "Muradpura",
              "CityId": 3245
          },
          {
              "City": "Muragachha",
              "CityId": 5617
          },
          {
              "City": "Murbad",
              "CityId": 2708
          },
          {
              "City": "Murgathaul",
              "CityId": 5618
          },
          {
              "City": "Murgud",
              "CityId": 2709
          },
          {
              "City": "Muri",
              "CityId": 1472
          },
          {
              "City": "Murliganj",
              "CityId": 552
          },
          {
              "City": "Mursan",
              "CityId": 4997
          },
          {
              "City": "Murshidabad",
              "CityId": 5619
          },
          {
              "City": "Murtijapur",
              "CityId": 2710
          },
          {
              "City": "Murud",
              "CityId": 2711
          },
          {
              "City": "Murudeshwara",
              "CityId": 1749
          },
          {
              "City": "Muruganpalayam",
              "CityId": 3983
          },
          {
              "City": "Murwara",
              "CityId": 2333
          },
          {
              "City": "Musafirkhana",
              "CityId": 4998
          },
          {
              "City": "Mushabani",
              "CityId": 1473
          },
          {
              "City": "Musiri",
              "CityId": 3984
          },
          {
              "City": "Mustafabad",
              "CityId": 1158
          },
          {
              "City": "Muthakunnam",
              "CityId": 1980
          },
          {
              "City": "Muthupet",
              "CityId": 3985
          },
          {
              "City": "Muthur",
              "CityId": 3986
          },
          {
              "City": "Muttayyapuram",
              "CityId": 3987
          },
          {
              "City": "Muttupet",
              "CityId": 3988
          },
          {
              "City": "Muvarasampettai",
              "CityId": 3989
          },
          {
              "City": "Muvattupuzha",
              "CityId": 1981
          },
          {
              "City": "Muzaffarnagar",
              "CityId": 4999
          },
          {
              "City": "Muzaffarpur",
              "CityId": 553
          },
          {
              "City": "Muzhappilangad",
              "CityId": 1982
          },
          {
              "City": "Myladi",
              "CityId": 3990
          },
          {
              "City": "Mylapore",
              "CityId": 3991
          },
          {
              "City": "Mysore",
              "CityId": 1750
          },
          {
              "City": "Nabadhai Dutta Pukur",
              "CityId": 5620
          },
          {
              "City": "Nabagram",
              "CityId": 5621
          },
          {
              "City": "Nabarangpur",
              "CityId": 3072
          },
          {
              "City": "Nabgram",
              "CityId": 5622
          },
          {
              "City": "Nabha",
              "CityId": 3246
          },
          {
              "City": "Nabinagar",
              "CityId": 554
          },
          {
              "City": "Nachane",
              "CityId": 2712
          },
          {
              "City": "Nachhratpur Katabari",
              "CityId": 5623
          },
          {
              "City": "Nadapuram",
              "CityId": 1983
          },
          {
              "City": "Nadathara",
              "CityId": 1984
          },
          {
              "City": "Nadaun",
              "CityId": 1241
          },
          {
              "City": "Nadbai",
              "CityId": 3441
          },
          {
              "City": "Nadia",
              "CityId": 5624
          },
          {
              "City": "Nadiad",
              "CityId": 977
          },
          {
              "City": "Nadigaon",
              "CityId": 5000
          },
          {
              "City": "Nadukkuthagai",
              "CityId": 3992
          },
          {
              "City": "Naduvattam",
              "CityId": 3993
          },
          {
              "City": "Naenwa",
              "CityId": 3442
          },
          {
              "City": "Nagai Chaudhry",
              "CityId": 1159
          },
          {
              "City": "Nagamangala",
              "CityId": 1751
          },
          {
              "City": "Nagaon",
              "CityId": 411
          },
          {
              "City": "Nagapattinam",
              "CityId": 3994
          },
          {
              "City": "Nagar",
              "CityId": 3443
          },
          {
              "City": "Nagar Karnul",
              "CityId": 4481
          },
          {
              "City": "Nagardeole",
              "CityId": 2713
          },
          {
              "City": "Nagari",
              "CityId": 160
          },
          {
              "City": "Nagaur",
              "CityId": 3444
          },
          {
              "City": "Nagavakulam",
              "CityId": 3995
          },
          {
              "City": "Nagda",
              "CityId": 2334
          },
          {
              "City": "Nagercoil",
              "CityId": 3996
          },
          {
              "City": "Nagina",
              "CityId": 5001
          },
          {
              "City": "Nagireddipalle",
              "CityId": 161
          },
          {
              "City": "Nagla",
              "CityId": 5282
          },
          {
              "City": "Nagod",
              "CityId": 2335
          },
          {
              "City": "Nagojanahalli",
              "CityId": 3997
          },
          {
              "City": "Nagothane",
              "CityId": 2714
          },
          {
              "City": "Nagpur",
              "CityId": 2715
          },
          {
              "City": "Nagram",
              "CityId": 5002
          },
          {
              "City": "Nagri",
              "CityId": 2336
          },
          {
              "City": "Nagri Kalan",
              "CityId": 1474
          },
          {
              "City": "Nagrota",
              "CityId": 1242
          },
          {
              "City": "Nahan",
              "CityId": 1243
          },
          {
              "City": "Naharkatia",
              "CityId": 412
          },
          {
              "City": "Naharlagun",
              "CityId": 308
          },
          {
              "City": "Nai Bazar",
              "CityId": 5003
          },
          {
              "City": "Naigarhi",
              "CityId": 2337
          },
          {
              "City": "Naihati",
              "CityId": 5625
          },
          {
              "City": "Nailajanjgir",
              "CityId": 674
          },
          {
              "City": "Naina Devi",
              "CityId": 1244
          },
          {
              "City": "Nainana Jat",
              "CityId": 5004
          },
          {
              "City": "Nainital",
              "CityId": 5283
          },
          {
              "City": "Nainital Cantonment",
              "CityId": 5284
          },
          {
              "City": "Nainpur",
              "CityId": 2338
          },
          {
              "City": "Najibabad",
              "CityId": 5005
          },
          {
              "City": "Nakoda",
              "CityId": 2716
          },
          {
              "City": "Nakodar",
              "CityId": 3247
          },
          {
              "City": "Nakrekal",
              "CityId": 4482
          },
          {
              "City": "Nakur",
              "CityId": 5006
          },
          {
              "City": "Nalagarh",
              "CityId": 1245
          },
          {
              "City": "Nalasopara",
              "CityId": 2717
          },
          {
              "City": "Nalbari",
              "CityId": 413
          },
          {
              "City": "Nalco",
              "CityId": 3073
          },
          {
              "City": "Naldurg",
              "CityId": 2718
          },
          {
              "City": "Nalgonda",
              "CityId": 4483
          },
          {
              "City": "Nalhati",
              "CityId": 5626
          },
          {
              "City": "Naliya",
              "CityId": 978
          },
          {
              "City": "Nalkheda",
              "CityId": 2339
          },
          {
              "City": "Nallampatti",
              "CityId": 3998
          },
          {
              "City": "Nallur",
              "CityId": 3999
          },
          {
              "City": "Namagiripettai",
              "CityId": 4000
          },
          {
              "City": "Namakkal",
              "CityId": 4001
          },
          {
              "City": "Nambiyur",
              "CityId": 4002
          },
          {
              "City": "Nambol",
              "CityId": 2903
          },
          {
              "City": "Nambutalai",
              "CityId": 4003
          },
          {
              "City": "Namchi",
              "CityId": 3544
          },
          {
              "City": "Namli",
              "CityId": 2340
          },
          {
              "City": "Namna Kalan",
              "CityId": 675
          },
          {
              "City": "Namrup",
              "CityId": 414
          },
          {
              "City": "Namsai",
              "CityId": 309
          },
          {
              "City": "Nanakvada",
              "CityId": 979
          },
          {
              "City": "Nanaunta",
              "CityId": 5007
          },
          {
              "City": "Nandambakkam",
              "CityId": 4004
          },
          {
              "City": "Nandaprayang",
              "CityId": 5285
          },
          {
              "City": "Nanded",
              "CityId": 2719
          },
          {
              "City": "Nandej",
              "CityId": 980
          },
          {
              "City": "Nandesari",
              "CityId": 981
          },
          {
              "City": "Nandesari INA",
              "CityId": 982
          },
          {
              "City": "Nandgaon",
              "CityId": 2720
          },
          {
              "City": "Nandgaon",
              "CityId": 5008
          },
          {
              "City": "Nandigama",
              "CityId": 162
          },
          {
              "City": "Nandikotkur",
              "CityId": 163
          },
          {
              "City": "Nandivaram",
              "CityId": 4005
          },
          {
              "City": "Nandura",
              "CityId": 2721
          },
          {
              "City": "Nandurbar",
              "CityId": 2722
          },
          {
              "City": "Nandyal",
              "CityId": 164
          },
          {
              "City": "Nangal",
              "CityId": 3248
          },
          {
              "City": "Nangavalli",
              "CityId": 4006
          },
          {
              "City": "Nangavaram",
              "CityId": 4007
          },
          {
              "City": "Nanguneri",
              "CityId": 4008
          },
          {
              "City": "Nanjangud",
              "CityId": 1752
          },
          {
              "City": "Nanjikottai",
              "CityId": 4009
          },
          {
              "City": "Nannilam",
              "CityId": 4010
          },
          {
              "City": "Nanpara",
              "CityId": 5009
          },
          {
              "City": "Naoriya Pakhanglakpa",
              "CityId": 2904
          },
          {
              "City": "Napasar",
              "CityId": 3445
          },
          {
              "City": "Naragund",
              "CityId": 1753
          },
          {
              "City": "Naraina",
              "CityId": 3446
          },
          {
              "City": "Naraini",
              "CityId": 5010
          },
          {
              "City": "Naranammalpuram",
              "CityId": 4011
          },
          {
              "City": "Naranapuram",
              "CityId": 4012
          },
          {
              "City": "Narasannapeta",
              "CityId": 165
          },
          {
              "City": "Narasapur",
              "CityId": 166
          },
          {
              "City": "Narasaraopet",
              "CityId": 167
          },
          {
              "City": "Narasimhanaickenpalayam",
              "CityId": 4013
          },
          {
              "City": "Narasimharajapura",
              "CityId": 1754
          },
          {
              "City": "Narasingapuram",
              "CityId": 4014
          },
          {
              "City": "Narasojipatti",
              "CityId": 4015
          },
          {
              "City": "Narath",
              "CityId": 1985
          },
          {
              "City": "Narauli",
              "CityId": 5011
          },
          {
              "City": "Naraura",
              "CityId": 5012
          },
          {
              "City": "Naravarikuppam",
              "CityId": 4016
          },
          {
              "City": "Naravi",
              "CityId": 1755
          },
          {
              "City": "Narayanavanam",
              "CityId": 168
          },
          {
              "City": "Narayangarh",
              "CityId": 1160
          },
          {
              "City": "Narayangarh",
              "CityId": 2341
          },
          {
              "City": "Narayanpet",
              "CityId": 4484
          },
          {
              "City": "Narayanpur",
              "CityId": 1756
          },
          {
              "City": "Naregal",
              "CityId": 1757
          },
          {
              "City": "Narendranagar",
              "CityId": 5286
          },
          {
              "City": "Narkanda",
              "CityId": 1246
          },
          {
              "City": "Narkatiaganj",
              "CityId": 555
          },
          {
              "City": "Narkhed",
              "CityId": 2723
          },
          {
              "City": "Narnaul",
              "CityId": 1161
          },
          {
              "City": "Narnaund",
              "CityId": 1162
          },
          {
              "City": "Naroda",
              "CityId": 983
          },
          {
              "City": "Narora",
              "CityId": 39647918
          },
          {
              "City": "Narsampet",
              "CityId": 4485
          },
          {
              "City": "Narsapur",
              "CityId": 169
          },
          {
              "City": "Narsimhapur",
              "CityId": 2342
          },
          {
              "City": "Narsingarh",
              "CityId": 2343
          },
          {
              "City": "Narsingarh",
              "CityId": 4524
          },
          {
              "City": "Narsinghpur",
              "CityId": 2344
          },
          {
              "City": "Narsingi",
              "CityId": 170
          },
          {
              "City": "Narsipatnam",
              "CityId": 171
          },
          {
              "City": "Narwana",
              "CityId": 1163
          },
          {
              "City": "Narwar",
              "CityId": 2345
          },
          {
              "City": "Nashik",
              "CityId": 2724
          },
          {
              "City": "Nasirabad",
              "CityId": 3447
          },
          {
              "City": "Nasiyanur",
              "CityId": 4017
          },
          {
              "City": "Naspur",
              "CityId": 172
          },
          {
              "City": "Nasra",
              "CityId": 5627
          },
          {
              "City": "Nasriganj",
              "CityId": 556
          },
          {
              "City": "Nasrullaganj",
              "CityId": 2346
          },
          {
              "City": "Natham",
              "CityId": 4018
          },
          {
              "City": "Nathampannai",
              "CityId": 4019
          },
          {
              "City": "Nathayyapalem",
              "CityId": 173
          },
          {
              "City": "Nathdwara",
              "CityId": 3448
          },
          {
              "City": "Natibpur",
              "CityId": 5628
          },
          {
              "City": "Natrampalli",
              "CityId": 4020
          },
          {
              "City": "Nattakam",
              "CityId": 1986
          },
          {
              "City": "Nattam",
              "CityId": 4021
          },
          {
              "City": "Nattapettai",
              "CityId": 4022
          },
          {
              "City": "Nattarasankottai",
              "CityId": 4023
          },
          {
              "City": "Natwar",
              "CityId": 557
          },
          {
              "City": "Natwar",
              "CityId": 87747437
          },
          {
              "City": "Naubaisa Gaon",
              "CityId": 415
          },
          {
              "City": "Naudhia",
              "CityId": 2347
          },
          {
              "City": "Naugachhia",
              "CityId": 558
          },
          {
              "City": "Naugaon",
              "CityId": 2348
          },
          {
              "City": "Naugawan Sadat",
              "CityId": 5013
          },
          {
              "City": "Naupala",
              "CityId": 5629
          },
          {
              "City": "Naurangapur",
              "CityId": 3074
          },
          {
              "City": "Naurozabad",
              "CityId": 2349
          },
          {
              "City": "Naushehra",
              "CityId": 1323
          },
          {
              "City": "Nautanwa",
              "CityId": 5014
          },
          {
              "City": "Navadwip",
              "CityId": 5630
          },
          {
              "City": "Navagadh",
              "CityId": 984
          },
          {
              "City": "Navagam Ghed",
              "CityId": 985
          },
          {
              "City": "Navalgund",
              "CityId": 1758
          },
          {
              "City": "Navalpattu",
              "CityId": 4024
          },
          {
              "City": "Navapur",
              "CityId": 2725
          },
          {
              "City": "Navelim",
              "CityId": 747
          },
          {
              "City": "Navi Mumbai",
              "CityId": 2726
          },
          {
              "City": "Navi Mumbai Panvel",
              "CityId": 2727
          },
          {
              "City": "Navsari",
              "CityId": 986
          },
          {
              "City": "Nawa",
              "CityId": 3449
          },
          {
              "City": "Nawabganj",
              "CityId": 5015
          },
          {
              "City": "Nawada",
              "CityId": 559
          },
          {
              "City": "Nawalgarh",
              "CityId": 3450
          },
          {
              "City": "Nawashahr",
              "CityId": 3249
          },
          {
              "City": "Naya Baradwar",
              "CityId": 676
          },
          {
              "City": "Naya Bazar",
              "CityId": 3545
          },
          {
              "City": "Naya Nangal",
              "CityId": 3250
          },
          {
              "City": "Nayagarh",
              "CityId": 3075
          },
          {
              "City": "Nayudupeta",
              "CityId": 174
          },
          {
              "City": "Nazarethpettai",
              "CityId": 4025
          },
          {
              "City": "Nazerath",
              "CityId": 4026
          },
          {
              "City": "Nazira",
              "CityId": 416
          },
          {
              "City": "Nebadhai Duttapukur",
              "CityId": 5631
          },
          {
              "City": "Nedumangad",
              "CityId": 1987
          },
          {
              "City": "Neem Ka Thana",
              "CityId": 3451
          },
          {
              "City": "Neemrana",
              "CityId": 3452
          },
          {
              "City": "Neemuch",
              "CityId": 2350
          },
          {
              "City": "Nehon",
              "CityId": 3251
          },
          {
              "City": "Neikkarapatti",
              "CityId": 4027
          },
          {
              "City": "Neiyyur",
              "CityId": 4028
          },
          {
              "City": "Nelimaria",
              "CityId": 175
          },
          {
              "City": "Nellikkuppam",
              "CityId": 4029
          },
          {
              "City": "Nelliyalam",
              "CityId": 4030
          },
          {
              "City": "Nellore",
              "CityId": 176
          },
          {
              "City": "Nelmangala",
              "CityId": 1759
          },
          {
              "City": "Nemili",
              "CityId": 4031
          },
          {
              "City": "Nemilicheri",
              "CityId": 4032
          },
          {
              "City": "Nenmenikkara",
              "CityId": 1988
          },
          {
              "City": "Nepa Nagar",
              "CityId": 2351
          },
          {
              "City": "Neral",
              "CityId": 2728
          },
          {
              "City": "Neripperichal",
              "CityId": 4033
          },
          {
              "City": "Nerkunram",
              "CityId": 4034
          },
          {
              "City": "Nerkuppai",
              "CityId": 4035
          },
          {
              "City": "Nerunjipettai",
              "CityId": 4036
          },
          {
              "City": "Netarhat",
              "CityId": 1475
          },
          {
              "City": "Neuton Chikhli Kalan",
              "CityId": 2352
          },
          {
              "City": "New Barrackpore",
              "CityId": 5632
          },
          {
              "City": "New Bongaigaon Railway Colony",
              "CityId": 417
          },
          {
              "City": "New Delhi",
              "CityId": 707
          },
          {
              "City": "New Mahe",
              "CityId": 1989
          },
          {
              "City": "Newa Talai",
              "CityId": 3453
          },
          {
              "City": "Neykkarappatti",
              "CityId": 4037
          },
          {
              "City": "Neyveli",
              "CityId": 4038
          },
          {
              "City": "Neyyattinkara",
              "CityId": 1990
          },
          {
              "City": "Ni Barakpur",
              "CityId": 5633
          },
          {
              "City": "Nibra",
              "CityId": 5634
          },
          {
              "City": "Nichlaul",
              "CityId": 5016
          },
          {
              "City": "Nidadavole",
              "CityId": 177
          },
          {
              "City": "Nidamangalam",
              "CityId": 4039
          },
          {
              "City": "Nidhauli Kalan",
              "CityId": 5017
          },
          {
              "City": "Nigdi",
              "CityId": 2729
          },
          {
              "City": "Nihtaur",
              "CityId": 5018
          },
          {
              "City": "Nilagiri",
              "CityId": 3076
          },
          {
              "City": "Nilagiri",
              "CityId": 4040
          },
          {
              "City": "Nilakkottai",
              "CityId": 4041
          },
          {
              "City": "Nilanga",
              "CityId": 2730
          },
          {
              "City": "Nilankarai",
              "CityId": 4042
          },
          {
              "City": "Nildoh",
              "CityId": 2731
          },
          {
              "City": "Nileshwar",
              "CityId": 1991
          },
          {
              "City": "Nilokheri",
              "CityId": 1164
          },
          {
              "City": "Nimach",
              "CityId": 2353
          },
          {
              "City": "Nimaj",
              "CityId": 3454
          },
          {
              "City": "Nimaparha",
              "CityId": 3077
          },
          {
              "City": "Nimbahera",
              "CityId": 3455
          },
          {
              "City": "Nimbhore",
              "CityId": 2732
          },
          {
              "City": "Nindaura",
              "CityId": 5019
          },
          {
              "City": "Ningthoukhong",
              "CityId": 2905
          },
          {
              "City": "Nipani",
              "CityId": 1760
          },
          {
              "City": "Nirmal",
              "CityId": 4486
          },
          {
              "City": "Nirmali",
              "CityId": 560
          },
          {
              "City": "Nirsa",
              "CityId": 1476
          },
          {
              "City": "Nitte",
              "CityId": 1761
          },
          {
              "City": "Niwai",
              "CityId": 3456
          },
          {
              "City": "Niwari",
              "CityId": 2354
          },
          {
              "City": "Niwari",
              "CityId": 5020
          },
          {
              "City": "Nizamabad",
              "CityId": 4487
          },
          {
              "City": "Nizamabad",
              "CityId": 5021
          },
          {
              "City": "Niz-Hajo",
              "CityId": 418
          },
          {
              "City": "No City",
              "CityId": 3546
          },
          {
              "City": "Noamundi",
              "CityId": 1477
          },
          {
              "City": "Noapara",
              "CityId": 5635
          },
          {
              "City": "Nohar",
              "CityId": 3457
          },
          {
              "City": "Noida",
              "CityId": 5022
          },
          {
              "City": "Nokha",
              "CityId": 561
          },
          {
              "City": "Nokha",
              "CityId": 3458
          },
          {
              "City": "Nokpul",
              "CityId": 5636
          },
          {
              "City": "Nongmynsong",
              "CityId": 2925
          },
          {
              "City": "Nongpoh",
              "CityId": 2926
          },
          {
              "City": "Nongstoin",
              "CityId": 2927
          },
          {
              "City": "Nongthymmai",
              "CityId": 2928
          },
          {
              "City": "North Barakpur",
              "CityId": 5637
          },
          {
              "City": "North Guwahati",
              "CityId": 419
          },
          {
              "City": "North Vanlaiphai",
              "CityId": 2948
          },
          {
              "City": "Northern Railway Colony",
              "CityId": 5023
          },
          {
              "City": "Nuapada",
              "CityId": 3078
          },
          {
              "City": "Nuapatna",
              "CityId": 3079
          },
          {
              "City": "Nuh",
              "CityId": 1165
          },
          {
              "City": "Numaligarh",
              "CityId": 420
          },
          {
              "City": "Nurmahal",
              "CityId": 3252
          },
          {
              "City": "Nurpur",
              "CityId": 1247
          },
          {
              "City": "Nurpur",
              "CityId": 5024
          },
          {
              "City": "Nuzvid",
              "CityId": 178
          },
          {
              "City": "Nyamati",
              "CityId": 1762
          },
          {
              "City": "Nyoria Husenpur",
              "CityId": 5025
          },
          {
              "City": "Nyotini",
              "CityId": 5026
          },
          {
              "City": "Obedullaganj",
              "CityId": 2355
          },
          {
              "City": "Obra",
              "CityId": 5027
          },
          {
              "City": "OCL Industrialship",
              "CityId": 3080
          },
          {
              "City": "Odaipatti",
              "CityId": 4043
          },
          {
              "City": "Odaiyakulam",
              "CityId": 4044
          },
          {
              "City": "Oddanchatram",
              "CityId": 4045
          },
          {
              "City": "Ode",
              "CityId": 987
          },
          {
              "City": "Odlabari",
              "CityId": 5638
          },
          {
              "City": "Odugathur",
              "CityId": 4046
          },
          {
              "City": "Oel Dhakwa",
              "CityId": 5028
          },
          {
              "City": "Oggiyamduraipakkam",
              "CityId": 4047
          },
          {
              "City": "Oinam",
              "CityId": 2906
          },
          {
              "City": "Ojhar",
              "CityId": 2733
          },
          {
              "City": "Okaf",
              "CityId": 988
          },
          {
              "City": "Okha",
              "CityId": 989
          },
          {
              "City": "Okni",
              "CityId": 1478
          },
          {
              "City": "Olagadam",
              "CityId": 4048
          },
          {
              "City": "Olavanna",
              "CityId": 1992
          },
          {
              "City": "Old Maldah",
              "CityId": 5639
          },
          {
              "City": "Olpad",
              "CityId": 990
          },
          {
              "City": "Omalur",
              "CityId": 4049
          },
          {
              "City": "Omerkhan daira",
              "CityId": 179
          },
          {
              "City": "Omkareshwar",
              "CityId": 2356
          },
          {
              "City": "Ondal",
              "CityId": 5640
          },
          {
              "City": "One SGM",
              "CityId": 3459
          },
          {
              "City": "Ongole",
              "CityId": 180
          },
          {
              "City": "Ooty",
              "CityId": 4050
          },
          {
              "City": "Orachha",
              "CityId": 2357
          },
          {
              "City": "Orai",
              "CityId": 5029
          },
          {
              "City": "Oran",
              "CityId": 5030
          },
          {
              "City": "Orathanadu",
              "CityId": 4051
          },
          {
              "City": "Ordinance Factory Itarsi",
              "CityId": 2358
          },
          {
              "City": "Ordinance Factory Muradnagar",
              "CityId": 5031
          },
          {
              "City": "Orla",
              "CityId": 1479
          },
          {
              "City": "Osmanabad",
              "CityId": 2734
          },
          {
              "City": "Osmania University",
              "CityId": 181
          },
          {
              "City": "Othakadai",
              "CityId": 4052
          },
          {
              "City": "Othakalmandapam",
              "CityId": 4053
          },
          {
              "City": "Ottapalam",
              "CityId": 1993
          },
          {
              "City": "Ottappalam",
              "CityId": 1994
          },
          {
              "City": "Ottapparai",
              "CityId": 4054
          },
          {
              "City": "Ozhukarai",
              "CityId": 3123
          },
          {
              "City": "Pachgaon",
              "CityId": 2735
          },
          {
              "City": "Pachmarhi",
              "CityId": 2359
          },
          {
              "City": "Pachmarhi Cantonment",
              "CityId": 2360
          },
          {
              "City": "Pachora",
              "CityId": 2736
          },
          {
              "City": "Pachore",
              "CityId": 2361
          },
          {
              "City": "Pachperwa",
              "CityId": 5032
          },
          {
              "City": "Pacode",
              "CityId": 4055
          },
          {
              "City": "Padagha",
              "CityId": 2737
          },
          {
              "City": "Padaividu",
              "CityId": 4056
          },
          {
              "City": "Padampur",
              "CityId": 3081
          },
          {
              "City": "Padampur",
              "CityId": 3460
          },
          {
              "City": "Paddhari",
              "CityId": 991
          },
          {
              "City": "Padianallur",
              "CityId": 4057
          },
          {
              "City": "Padirikuppam",
              "CityId": 4058
          },
          {
              "City": "Padmanabhapuram",
              "CityId": 4059
          },
          {
              "City": "Padra",
              "CityId": 992
          },
          {
              "City": "Padrauna",
              "CityId": 5033
          },
          {
              "City": "Padririvedu",
              "CityId": 4060
          },
          {
              "City": "Padu",
              "CityId": 1763
          },
          {
              "City": "Paduvilayi",
              "CityId": 1995
          },
          {
              "City": "Pahalgam",
              "CityId": 1324
          },
          {
              "City": "Paharpur",
              "CityId": 562
          },
          {
              "City": "Pahasu",
              "CityId": 5034
          },
          {
              "City": "Paintepur",
              "CityId": 5035
          },
          {
              "City": "Pairagachha",
              "CityId": 5641
          },
          {
              "City": "Paithan",
              "CityId": 2738
          },
          {
              "City": "Pakala",
              "CityId": 182
          },
          {
              "City": "Pakaur",
              "CityId": 1480
          },
          {
              "City": "Palaganangudy",
              "CityId": 4061
          },
          {
              "City": "Palai",
              "CityId": 1996
          },
          {
              "City": "Palaimpatti",
              "CityId": 4062
          },
          {
              "City": "Palakkad",
              "CityId": 1997
          },
          {
              "City": "Palakkodu",
              "CityId": 4063
          },
          {
              "City": "Palakole",
              "CityId": 183
          },
          {
              "City": "Palakurthi",
              "CityId": 184
          },
          {
              "City": "Palamau",
              "CityId": 1481
          },
          {
              "City": "Palamedu",
              "CityId": 4064
          },
          {
              "City": "Palampur",
              "CityId": 1248
          },
          {
              "City": "Palani",
              "CityId": 4065
          },
          {
              "City": "Palani Chettipatti",
              "CityId": 4066
          },
          {
              "City": "Palanpur",
              "CityId": 993
          },
          {
              "City": "Palasa",
              "CityId": 185
          },
          {
              "City": "Palasbari",
              "CityId": 421
          },
          {
              "City": "Palashban",
              "CityId": 5642
          },
          {
              "City": "Palavakkam",
              "CityId": 4067
          },
          {
              "City": "Palavansathu",
              "CityId": 4068
          },
          {
              "City": "Palawa",
              "CityId": 1482
          },
          {
              "City": "Palayad",
              "CityId": 1998
          },
          {
              "City": "Palayakayal",
              "CityId": 4069
          },
          {
              "City": "Palayam",
              "CityId": 4070
          },
          {
              "City": "Palayamkottai",
              "CityId": 4071
          },
          {
              "City": "Palchorai",
              "CityId": 2362
          },
          {
              "City": "Palda",
              "CityId": 2363
          },
          {
              "City": "Pale",
              "CityId": 748
          },
          {
              "City": "Palej",
              "CityId": 994
          },
          {
              "City": "Palempalle",
              "CityId": 186
          },
          {
              "City": "Palera",
              "CityId": 2364
          },
          {
              "City": "Palghar",
              "CityId": 2739
          },
          {
              "City": "Pali",
              "CityId": 995
          },
          {
              "City": "Pali",
              "CityId": 2365
          },
          {
              "City": "Pali",
              "CityId": 2740
          },
          {
              "City": "Pali",
              "CityId": 3461
          },
          {
              "City": "Pali",
              "CityId": 5036
          },
          {
              "City": "Palia Kalan",
              "CityId": 5037
          },
          {
              "City": "Palissery",
              "CityId": 1999
          },
          {
              "City": "Palitana",
              "CityId": 996
          },
          {
              "City": "Paliyad",
              "CityId": 997
          },
          {
              "City": "Palkonda",
              "CityId": 187
          },
          {
              "City": "Palladam",
              "CityId": 4072
          },
          {
              "City": "Pallapalayam",
              "CityId": 4073
          },
          {
              "City": "Pallapatti",
              "CityId": 4074
          },
          {
              "City": "Pallattur",
              "CityId": 4075
          },
          {
              "City": "Pallavaram",
              "CityId": 4076
          },
          {
              "City": "Pallikaranai",
              "CityId": 4077
          },
          {
              "City": "Pallikkunnu",
              "CityId": 2000
          },
          {
              "City": "Pallikonda",
              "CityId": 4078
          },
          {
              "City": "Pallipalaiyam",
              "CityId": 4079
          },
          {
              "City": "Pallipalaiyam Agraharam",
              "CityId": 4080
          },
          {
              "City": "Pallipattu",
              "CityId": 4081
          },
          {
              "City": "Palmaner",
              "CityId": 188
          },
          {
              "City": "Paluvai",
              "CityId": 2001
          },
          {
              "City": "Palwal",
              "CityId": 1166
          },
          {
              "City": "Palwancha",
              "CityId": 4488
          },
          {
              "City": "Pammal",
              "CityId": 4082
          },
          {
              "City": "Pampore",
              "CityId": 1325
          },
          {
              "City": "Pamur",
              "CityId": 189
          },
          {
              "City": "Panagar",
              "CityId": 2366
          },
          {
              "City": "Panagudi",
              "CityId": 4083
          },
          {
              "City": "Panaimarathupatti",
              "CityId": 4084
          },
          {
              "City": "Panaji",
              "CityId": 749
          },
          {
              "City": "Panapakkam",
              "CityId": 4085
          },
          {
              "City": "Panara",
              "CityId": 2367
          },
          {
              "City": "Panboli",
              "CityId": 4086
          },
          {
              "City": "Panchet",
              "CityId": 1483
          },
          {
              "City": "Panchgani",
              "CityId": 2741
          },
          {
              "City": "Panchgram",
              "CityId": 422
          },
          {
              "City": "Panchkula",
              "CityId": 1167
          },
          {
              "City": "Panchla",
              "CityId": 5643
          },
          {
              "City": "Panchpara",
              "CityId": 5644
          },
          {
              "City": "Pandamangalam",
              "CityId": 4087
          },
          {
              "City": "Pandaria",
              "CityId": 2368
          },
          {
              "City": "Pandariya",
              "CityId": 677
          },
          {
              "City": "Pandavapura",
              "CityId": 1764
          },
          {
              "City": "Pandesara",
              "CityId": 998
          },
          {
              "City": "Pandhakarwada",
              "CityId": 2742
          },
          {
              "City": "Pandhana",
              "CityId": 2369
          },
          {
              "City": "Pandharpur",
              "CityId": 2743
          },
          {
              "City": "Pandhurna",
              "CityId": 2370
          },
          {
              "City": "Pandoh",
              "CityId": 1249
          },
          {
              "City": "Pandua",
              "CityId": 5645
          },
          {
              "City": "Pangachhiya",
              "CityId": 5646
          },
          {
              "City": "Panhala",
              "CityId": 2744
          },
          {
              "City": "Paniara",
              "CityId": 5647
          },
          {
              "City": "Panihati",
              "CityId": 5648
          },
          {
              "City": "Panipat",
              "CityId": 1168
          },
          {
              "City": "Panipat Taraf Ansar",
              "CityId": 1169
          },
          {
              "City": "Panipat Taraf Makhdum Zadgan",
              "CityId": 1170
          },
          {
              "City": "Panipat Taraf Rajputan",
              "CityId": 1171
          },
          {
              "City": "Panjim",
              "CityId": 190
          },
          {
              "City": "Panna",
              "CityId": 2371
          },
          {
              "City": "Pannaikadu",
              "CityId": 4088
          },
          {
              "City": "Pannaipuram",
              "CityId": 4089
          },
          {
              "City": "Panniyannur",
              "CityId": 2002
          },
          {
              "City": "Pannuratti",
              "CityId": 4090
          },
          {
              "City": "Panoli",
              "CityId": 999
          },
          {
              "City": "Panrra",
              "CityId": 1484
          },
          {
              "City": "Panruti",
              "CityId": 4091
          },
          {
              "City": "Pansemal",
              "CityId": 2372
          },
          {
              "City": "Pantalam",
              "CityId": 2003
          },
          {
              "City": "Panthiramkavu",
              "CityId": 2004
          },
          {
              "City": "Panuhat",
              "CityId": 5649
          },
          {
              "City": "Panur",
              "CityId": 2005
          },
          {
              "City": "Panvel",
              "CityId": 2745
          },
          {
              "City": "Paonta Sahib",
              "CityId": 1250
          },
          {
              "City": "Papampeta",
              "CityId": 191
          },
          {
              "City": "Papanasam",
              "CityId": 4092
          },
          {
              "City": "Pappankurichi",
              "CityId": 4093
          },
          {
              "City": "Papparapatti",
              "CityId": 4094
          },
          {
              "City": "Pappinisseri",
              "CityId": 2006
          },
          {
              "City": "Pappireddipatti",
              "CityId": 4095
          },
          {
              "City": "Par Beliya",
              "CityId": 5650
          },
          {
              "City": "Paradip",
              "CityId": 3082
          },
          {
              "City": "Paradwip",
              "CityId": 3083
          },
          {
              "City": "Paramakkudi",
              "CityId": 4096
          },
          {
              "City": "Paramankurichi",
              "CityId": 4097
          },
          {
              "City": "Paramathi",
              "CityId": 4098
          },
          {
              "City": "Paranda",
              "CityId": 2746
          },
          {
              "City": "Parangippettai",
              "CityId": 4099
          },
          {
              "City": "Parasamba",
              "CityId": 192
          },
          {
              "City": "Parashkol",
              "CityId": 5651
          },
          {
              "City": "Parasi",
              "CityId": 5038
          },
          {
              "City": "Parasia",
              "CityId": 2373
          },
          {
              "City": "Parasia",
              "CityId": 5652
          },
          {
              "City": "Parassala",
              "CityId": 2007
          },
          {
              "City": "Paratdih",
              "CityId": 1485
          },
          {
              "City": "Paravai",
              "CityId": 4100
          },
          {
              "City": "Paravur",
              "CityId": 2008
          },
          {
              "City": "Parbbatipur",
              "CityId": 5653
          },
          {
              "City": "Parbhani",
              "CityId": 2747
          },
          {
              "City": "Parcem",
              "CityId": 750
          },
          {
              "City": "Pardi",
              "CityId": 1000
          },
          {
              "City": "Parichha",
              "CityId": 5039
          },
          {
              "City": "Parichhatgarh",
              "CityId": 5040
          },
          {
              "City": "Parlakimidi",
              "CityId": 3084
          },
          {
              "City": "Parli",
              "CityId": 2748
          },
          {
              "City": "Parnera",
              "CityId": 1001
          },
          {
              "City": "Parola",
              "CityId": 2749
          },
          {
              "City": "Parole",
              "CityId": 1326
          },
          {
              "City": "Parra",
              "CityId": 751
          },
          {
              "City": "Parsadepur",
              "CityId": 5041
          },
          {
              "City": "Partapur",
              "CityId": 3462
          },
          {
              "City": "Partur",
              "CityId": 2750
          },
          {
              "City": "Parui",
              "CityId": 5654
          },
          {
              "City": "Parvat",
              "CityId": 1002
          },
          {
              "City": "Parvatipuram",
              "CityId": 193
          },
          {
              "City": "Parvatsar",
              "CityId": 3463
          },
          {
              "City": "Parwanoo",
              "CityId": 1251
          },
          {
              "City": "Parwanu",
              "CityId": 1252
          },
          {
              "City": "Pasan",
              "CityId": 2374
          },
          {
              "City": "Paschim Jitpur",
              "CityId": 5655
          },
          {
              "City": "Paschim Medinipur",
              "CityId": 43247882
          },
          {
              "City": "Paschim Punro Para",
              "CityId": 5656
          },
          {
              "City": "Pasighat",
              "CityId": 310
          },
          {
              "City": "Pasoond",
              "CityId": 3464
          },
          {
              "City": "Pasthal",
              "CityId": 2751
          },
          {
              "City": "Pasur",
              "CityId": 4101
          },
          {
              "City": "Patala",
              "CityId": 5042
          },
          {
              "City": "Patamundai",
              "CityId": 3085
          },
          {
              "City": "Patan",
              "CityId": 678
          },
          {
              "City": "Patan",
              "CityId": 1003
          },
          {
              "City": "Patan",
              "CityId": 2375
          },
          {
              "City": "Patan",
              "CityId": 2752
          },
          {
              "City": "Patancheru",
              "CityId": 194
          },
          {
              "City": "Patdi",
              "CityId": 1004
          },
          {
              "City": "Pathalgaon",
              "CityId": 679
          },
          {
              "City": "Pathamadai",
              "CityId": 4102
          },
          {
              "City": "Pathanamthitta",
              "CityId": 2009
          },
          {
              "City": "Pathanapuram",
              "CityId": 2010
          },
          {
              "City": "Pathankot",
              "CityId": 3253
          },
          {
              "City": "Pathardi",
              "CityId": 2753
          },
          {
              "City": "Pathardih",
              "CityId": 1486
          },
          {
              "City": "Patharia",
              "CityId": 2376
          },
          {
              "City": "Pathiriyad",
              "CityId": 2011
          },
          {
              "City": "Pathri",
              "CityId": 2754
          },
          {
              "City": "Pathsala",
              "CityId": 423
          },
          {
              "City": "Patiala",
              "CityId": 3254
          },
          {
              "City": "Patiyali",
              "CityId": 5043
          },
          {
              "City": "Patna",
              "CityId": 563
          },
          {
              "City": "Patnagarh",
              "CityId": 3086
          },
          {
              "City": "Patrasaer",
              "CityId": 5657
          },
          {
              "City": "Patratu",
              "CityId": 1487
          },
          {
              "City": "Pattabong Tea Garden",
              "CityId": 5658
          },
          {
              "City": "Pattambi",
              "CityId": 2012
          },
          {
              "City": "Pattan",
              "CityId": 1327
          },
          {
              "City": "Pattanagere",
              "CityId": 1765
          },
          {
              "City": "Patti",
              "CityId": 3255
          },
          {
              "City": "Patti",
              "CityId": 5044
          },
          {
              "City": "Pattinam",
              "CityId": 4103
          },
          {
              "City": "Pattiom",
              "CityId": 2013
          },
          {
              "City": "Pattiviranpatti",
              "CityId": 4104
          },
          {
              "City": "Pattran",
              "CityId": 3256
          },
          {
              "City": "Pattukkottai",
              "CityId": 4105
          },
          {
              "City": "Patuli",
              "CityId": 5659
          },
          {
              "City": "Patulia",
              "CityId": 5660
          },
          {
              "City": "Patur",
              "CityId": 2755
          },
          {
              "City": "Pauri",
              "CityId": 5287
          },
          {
              "City": "Pavagada",
              "CityId": 1766
          },
          {
              "City": "Pavaratty",
              "CityId": 2014
          },
          {
              "City": "Pawai",
              "CityId": 2377
          },
          {
              "City": "Pawayan",
              "CityId": 5045
          },
          {
              "City": "Pawni",
              "CityId": 2756
          },
          {
              "City": "Payakaraopet",
              "CityId": 195
          },
          {
              "City": "Payal",
              "CityId": 3257
          },
          {
              "City": "Payyannur",
              "CityId": 2015
          },
          {
              "City": "Pazhugal",
              "CityId": 4106
          },
          {
              "City": "Pedagantyada",
              "CityId": 196
          },
          {
              "City": "Pedana",
              "CityId": 197
          },
          {
              "City": "Peddapalli",
              "CityId": 4489
          },
          {
              "City": "Peddapuram",
              "CityId": 198
          },
          {
              "City": "Peermade",
              "CityId": 2016
          },
          {
              "City": "Pehowa",
              "CityId": 1172
          },
          {
              "City": "Pen",
              "CityId": 2757
          },
          {
              "City": "Pendra",
              "CityId": 680
          },
          {
              "City": "Pendurthi",
              "CityId": 199
          },
          {
              "City": "Penha de Franca",
              "CityId": 752
          },
          {
              "City": "Pennadam",
              "CityId": 4107
          },
          {
              "City": "Pennagaram",
              "CityId": 4108
          },
          {
              "City": "Pennathur",
              "CityId": 4109
          },
          {
              "City": "Penugonda",
              "CityId": 200
          },
          {
              "City": "Penukonda",
              "CityId": 201
          },
          {
              "City": "Peraiyur",
              "CityId": 4110
          },
          {
              "City": "Perakam",
              "CityId": 2017
          },
          {
              "City": "Peralam",
              "CityId": 4111
          },
          {
              "City": "Peralasseri",
              "CityId": 2018
          },
          {
              "City": "Perambalur",
              "CityId": 4112
          },
          {
              "City": "Peranamallur",
              "CityId": 4113
          },
          {
              "City": "Peravurani",
              "CityId": 4114
          },
          {
              "City": "Peringathur",
              "CityId": 2019
          },
          {
              "City": "Perinthalmanna",
              "CityId": 2020
          },
          {
              "City": "Periyakodiveri",
              "CityId": 4115
          },
          {
              "City": "Periyakulam",
              "CityId": 4116
          },
          {
              "City": "Periyanayakkanpalaiyam",
              "CityId": 4117
          },
          {
              "City": "Periyanegamam",
              "CityId": 4118
          },
          {
              "City": "Periyapatti",
              "CityId": 4119
          },
          {
              "City": "Periyasemur",
              "CityId": 4120
          },
          {
              "City": "Pernambut",
              "CityId": 4121
          },
          {
              "City": "Pernem",
              "CityId": 753
          },
          {
              "City": "Perole",
              "CityId": 2021
          },
          {
              "City": "Perumagalur",
              "CityId": 4122
          },
          {
              "City": "Perumandi",
              "CityId": 4123
          },
          {
              "City": "Perumanna",
              "CityId": 2022
          },
          {
              "City": "Perumbaikadu",
              "CityId": 2023
          },
          {
              "City": "Perumbavoor",
              "CityId": 2024
          },
          {
              "City": "Perumuchi",
              "CityId": 4124
          },
          {
              "City": "Perundurai",
              "CityId": 4125
          },
          {
              "City": "Perungalathur",
              "CityId": 4126
          },
          {
              "City": "Perungudi",
              "CityId": 4127
          },
          {
              "City": "Perungulam",
              "CityId": 4128
          },
          {
              "City": "Perur",
              "CityId": 4129
          },
          {
              "City": "Perur Chettipalaiyam",
              "CityId": 4130
          },
          {
              "City": "Pethampalayam",
              "CityId": 4131
          },
          {
              "City": "Pethanaickenpalayam",
              "CityId": 4132
          },
          {
              "City": "Pethumri",
              "CityId": 2758
          },
          {
              "City": "Petlad",
              "CityId": 1005
          },
          {
              "City": "Petlawad",
              "CityId": 2378
          },
          {
              "City": "Petrochemical Complex",
              "CityId": 1006
          },
          {
              "City": "Phagwara",
              "CityId": 3258
          },
          {
              "City": "Phalauda",
              "CityId": 5046
          },
          {
              "City": "Phalna",
              "CityId": 3465
          },
          {
              "City": "Phalodi",
              "CityId": 3466
          },
          {
              "City": "Phaltan",
              "CityId": 2759
          },
          {
              "City": "Phaphund",
              "CityId": 5047
          },
          {
              "City": "Phek",
              "CityId": 2962
          },
          {
              "City": "Phillaur",
              "CityId": 3259
          },
          {
              "City": "Phirangipuram",
              "CityId": 202
          },
          {
              "City": "Phulabani",
              "CityId": 3087
          },
          {
              "City": "Phulera",
              "CityId": 3467
          },
          {
              "City": "Phulia",
              "CityId": 5661
          },
          {
              "City": "Phulpur",
              "CityId": 5048
          },
          {
              "City": "Phulwari",
              "CityId": 564
          },
          {
              "City": "Phulwaria",
              "CityId": 5049
          },
          {
              "City": "Phunderdihari",
              "CityId": 681
          },
          {
              "City": "Phuph Kalan",
              "CityId": 2379
          },
          {
              "City": "Phusro",
              "CityId": 1488
          },
          {
              "City": "Pichhore",
              "CityId": 2380
          },
          {
              "City": "Pihani",
              "CityId": 5050
          },
          {
              "City": "Pilani",
              "CityId": 3468
          },
          {
              "City": "Pilerne",
              "CityId": 754
          },
          {
              "City": "Pilibanga",
              "CityId": 3469
          },
          {
              "City": "Pilibhit",
              "CityId": 5051
          },
          {
              "City": "Pilkana",
              "CityId": 5052
          },
          {
              "City": "Pilkhuwa",
              "CityId": 5053
          },
          {
              "City": "Pillanallur",
              "CityId": 4133
          },
          {
              "City": "Pimpri",
              "CityId": 2760
          },
          {
              "City": "Pinahat",
              "CityId": 5054
          },
          {
              "City": "Pinarayi",
              "CityId": 2025
          },
          {
              "City": "Pindwara",
              "CityId": 3470
          },
          {
              "City": "Pinjaur",
              "CityId": 1173
          },
          {
              "City": "Pipalia Kalan",
              "CityId": 3471
          },
          {
              "City": "Pipalsana Chaudhari",
              "CityId": 5055
          },
          {
              "City": "Pipar",
              "CityId": 3472
          },
          {
              "City": "Pipariya",
              "CityId": 2381
          },
          {
              "City": "Pipiganj",
              "CityId": 5056
          },
          {
              "City": "Pipili",
              "CityId": 3088
          },
          {
              "City": "Pipliya Mandi",
              "CityId": 2382
          },
          {
              "City": "Piploda",
              "CityId": 2383
          },
          {
              "City": "Pipraich",
              "CityId": 5057
          },
          {
              "City": "Pipri",
              "CityId": 5058
          },
          {
              "City": "Piravam",
              "CityId": 2026
          },
          {
              "City": "Pirawa",
              "CityId": 3473
          },
          {
              "City": "Piriyapatna",
              "CityId": 1767
          },
          {
              "City": "Pirkankaranai",
              "CityId": 4134
          },
          {
              "City": "Piro",
              "CityId": 565
          },
          {
              "City": "Pissurlem",
              "CityId": 755
          },
          {
              "City": "Pithampur",
              "CityId": 2384
          },
          {
              "City": "Pithapuram",
              "CityId": 203
          },
          {
              "City": "Pithora",
              "CityId": 682
          },
          {
              "City": "Pithoragarh",
              "CityId": 5288
          },
          {
              "City": "Podara",
              "CityId": 5662
          },
          {
              "City": "Pokaran",
              "CityId": 3474
          },
          {
              "City": "Poladpur",
              "CityId": 2761
          },
          {
              "City": "Polasara",
              "CityId": 3089
          },
          {
              "City": "Polay Kalan",
              "CityId": 2385
          },
          {
              "City": "Polichalur",
              "CityId": 4135
          },
          {
              "City": "Pollachi",
              "CityId": 4136
          },
          {
              "City": "Polur",
              "CityId": 4137
          },
          {
              "City": "Ponda",
              "CityId": 756
          },
          {
              "City": "Pondar Kanali",
              "CityId": 1489
          },
          {
              "City": "Pondicherry",
              "CityId": 3124
          },
          {
              "City": "Ponmani",
              "CityId": 4138
          },
          {
              "City": "Ponnamaravathi",
              "CityId": 4139
          },
          {
              "City": "Ponnampatti",
              "CityId": 4140
          },
          {
              "City": "Ponnampet",
              "CityId": 1768
          },
          {
              "City": "Ponnani",
              "CityId": 2027
          },
          {
              "City": "Ponneri",
              "CityId": 4141
          },
          {
              "City": "Ponnur",
              "CityId": 204
          },
          {
              "City": "Porbandar",
              "CityId": 1007
          },
          {
              "City": "Porompat",
              "CityId": 2907
          },
          {
              "City": "Porsa",
              "CityId": 2386
          },
          {
              "City": "Port Blair",
              "CityId": 3
          },
          {
              "City": "Port Blair",
              "CityId": 205
          },
          {
              "City": "Port Blair",
              "CityId": 5663
          },
          {
              "City": "Porur",
              "CityId": 4142
          },
          {
              "City": "Porvorim",
              "CityId": 757
          },
          {
              "City": "Pothanur",
              "CityId": 4143
          },
          {
              "City": "Pothatturpettai",
              "CityId": 4144
          },
          {
              "City": "Pothinamallayyapalem",
              "CityId": 206
          },
          {
              "City": "Pottore",
              "CityId": 2028
          },
          {
              "City": "Prakasam",
              "CityId": 207
          },
          {
              "City": "Prantij",
              "CityId": 1008
          },
          {
              "City": "Prasadampadu",
              "CityId": 208
          },
          {
              "City": "Prasantinilayam",
              "CityId": 209
          },
          {
              "City": "Pratapgarh",
              "CityId": 3475
          },
          {
              "City": "Pratapgarh",
              "CityId": 4525
          },
          {
              "City": "Pratapgarh",
              "CityId": 5059
          },
          {
              "City": "Pratapsasan",
              "CityId": 3090
          },
          {
              "City": "Pratitnagar",
              "CityId": 5289
          },
          {
              "City": "Prayagpur",
              "CityId": 5664
          },
          {
              "City": "Prithvipur",
              "CityId": 2387
          },
          {
              "City": "Proddatur",
              "CityId": 210
          },
          {
              "City": "Pudukad",
              "CityId": 2029
          },
          {
              "City": "Pudukadai",
              "CityId": 4145
          },
          {
              "City": "Pudukkottai Cantonment",
              "CityId": 4146
          },
          {
              "City": "Pudukottai",
              "CityId": 4147
          },
          {
              "City": "Pudupalaiyam Aghraharam",
              "CityId": 4148
          },
          {
              "City": "Pudupalayam",
              "CityId": 4149
          },
          {
              "City": "Pudupatti",
              "CityId": 4150
          },
          {
              "City": "Pudupattinam",
              "CityId": 4151
          },
          {
              "City": "Pudur",
              "CityId": 4152
          },
          {
              "City": "Puduvayal",
              "CityId": 4153
          },
          {
              "City": "Pujali",
              "CityId": 5665
          },
          {
              "City": "Pukhrayan",
              "CityId": 5060
          },
          {
              "City": "Pulambadi",
              "CityId": 4154
          },
          {
              "City": "Pulampatti",
              "CityId": 4155
          },
          {
              "City": "Pulgaon",
              "CityId": 2762
          },
          {
              "City": "Pulivendla",
              "CityId": 211
          },
          {
              "City": "Puliyampatti",
              "CityId": 4156
          },
          {
              "City": "Puliyankudi",
              "CityId": 4157
          },
          {
              "City": "Puliyur",
              "CityId": 4158
          },
          {
              "City": "Pullampadi",
              "CityId": 4159
          },
          {
              "City": "Puluvapatti",
              "CityId": 4160
          },
          {
              "City": "Pulwama",
              "CityId": 1328
          },
          {
              "City": "Punahana",
              "CityId": 1174
          },
          {
              "City": "Punalur",
              "CityId": 2030
          },
          {
              "City": "Punamalli",
              "CityId": 4161
          },
          {
              "City": "Punch",
              "CityId": 1329
          },
          {
              "City": "Pundri",
              "CityId": 1175
          },
          {
              "City": "Pune",
              "CityId": 2763
          },
          {
              "City": "Pune Cantonment",
              "CityId": 2764
          },
          {
              "City": "Punganuru",
              "CityId": 212
          },
          {
              "City": "Punjai Puliyampatti",
              "CityId": 4162
          },
          {
              "City": "Punjai Thottakurichi",
              "CityId": 4163
          },
          {
              "City": "Punjaipugalur",
              "CityId": 4164
          },
          {
              "City": "Puranattukara",
              "CityId": 2031
          },
          {
              "City": "Puranpur",
              "CityId": 5061
          },
          {
              "City": "Purba Medinipur",
              "CityId": 5666
          },
          {
              "City": "Purba Tajpur",
              "CityId": 5667
          },
          {
              "City": "Purdil Nagar",
              "CityId": 5062
          },
          {
              "City": "Puri",
              "CityId": 3091
          },
          {
              "City": "Purna",
              "CityId": 2765
          },
          {
              "City": "Purnia",
              "CityId": 566
          },
          {
              "City": "Purqazi",
              "CityId": 5063
          },
          {
              "City": "Purulia",
              "CityId": 5668
          },
          {
              "City": "Purushottamnagar",
              "CityId": 2766
          },
          {
              "City": "Purushottampur",
              "CityId": 3092
          },
          {
              "City": "Purwa",
              "CityId": 5064
          },
          {
              "City": "Pusa",
              "CityId": 567
          },
          {
              "City": "Pusad",
              "CityId": 2767
          },
          {
              "City": "Pushkar",
              "CityId": 3476
          },
          {
              "City": "Puthalam",
              "CityId": 4165
          },
          {
              "City": "Puthunagaram",
              "CityId": 2032
          },
          {
              "City": "Puthuppariyaram",
              "CityId": 2033
          },
          {
              "City": "Putteri",
              "CityId": 4166
          },
          {
              "City": "Puttur",
              "CityId": 213
          },
          {
              "City": "Puttur",
              "CityId": 1769
          },
          {
              "City": "Puvalur",
              "CityId": 4167
          },
          {
              "City": "Puzhal",
              "CityId": 4168
          },
          {
              "City": "Puzhathi",
              "CityId": 2034
          },
          {
              "City": "Puzhithivakkam",
              "CityId": 4169
          },
          {
              "City": "Pynthorumkhrah",
              "CityId": 2929
          },
          {
              "City": "Qadian",
              "CityId": 3260
          },
          {
              "City": "Qasimpur",
              "CityId": 5065
          },
          {
              "City": "Qazigund",
              "CityId": 1330
          },
          {
              "City": "Quepem",
              "CityId": 758
          },
          {
              "City": "Queula",
              "CityId": 759
          },
          {
              "City": "Qutubullapur",
              "CityId": 214
          },
          {
              "City": "Rabkavi",
              "CityId": 1770
          },
          {
              "City": "Rabupura",
              "CityId": 5066
          },
          {
              "City": "Radaur",
              "CityId": 1176
          },
          {
              "City": "Radha Kund",
              "CityId": 5067
          },
          {
              "City": "Radhanpur",
              "CityId": 1009
          },
          {
              "City": "Rae Bareilly",
              "CityId": 5068
          },
          {
              "City": "Rafiganj",
              "CityId": 568
          },
          {
              "City": "Raghogarh",
              "CityId": 2388
          },
          {
              "City": "Raghudebbati",
              "CityId": 5669
          },
          {
              "City": "Raghudebpur",
              "CityId": 5670
          },
          {
              "City": "Raghunathchak",
              "CityId": 5671
          },
          {
              "City": "Raghunathpur",
              "CityId": 569
          },
          {
              "City": "Raghunathpur",
              "CityId": 5672
          },
          {
              "City": "Raghunathpur-Dankuni",
              "CityId": 5673
          },
          {
              "City": "Raghunathpur-Magra",
              "CityId": 5674
          },
          {
              "City": "Raha",
              "CityId": 424
          },
          {
              "City": "Rahatgarh",
              "CityId": 2389
          },
          {
              "City": "Rahimatpur",
              "CityId": 2768
          },
          {
              "City": "Rahon",
              "CityId": 3261
          },
          {
              "City": "Rahta Pimplas",
              "CityId": 2769
          },
          {
              "City": "Rahuri",
              "CityId": 2770
          },
          {
              "City": "Raia",
              "CityId": 760
          },
          {
              "City": "Raichur",
              "CityId": 1771
          },
          {
              "City": "Raigachhi",
              "CityId": 5675
          },
          {
              "City": "Raigad",
              "CityId": 2771
          },
          {
              "City": "Raiganj",
              "CityId": 5676
          },
          {
              "City": "Raigarh",
              "CityId": 683
          },
          {
              "City": "Raikot",
              "CityId": 3262
          },
          {
              "City": "Raipur",
              "CityId": 684
          },
          {
              "City": "Raipur",
              "CityId": 3477
          },
          {
              "City": "Raipur",
              "CityId": 5290
          },
          {
              "City": "Raipur",
              "CityId": 5677
          },
          {
              "City": "Raipur Rani",
              "CityId": 1177
          },
          {
              "City": "Rairangpur",
              "CityId": 3093
          },
          {
              "City": "Raisen",
              "CityId": 2390
          },
          {
              "City": "Raisinghnagar",
              "CityId": 3478
          },
          {
              "City": "Raiwala",
              "CityId": 5291
          },
          {
              "City": "Raiya",
              "CityId": 1010
          },
          {
              "City": "Raj Gangpur",
              "CityId": 3094
          },
          {
              "City": "Raja Ka Rampur",
              "CityId": 5069
          },
          {
              "City": "Raja Sansi",
              "CityId": 3263
          },
          {
              "City": "Rajahmundry",
              "CityId": 215
          },
          {
              "City": "Rajakhedi",
              "CityId": 2391
          },
          {
              "City": "Rajakhera",
              "CityId": 3479
          },
          {
              "City": "Rajaldesar",
              "CityId": 3480
          },
          {
              "City": "Rajamahendri",
              "CityId": 216
          },
          {
              "City": "Rajampet",
              "CityId": 217
          },
          {
              "City": "Rajapalayam",
              "CityId": 4170
          },
          {
              "City": "Rajapur",
              "CityId": 2772
          },
          {
              "City": "Rajapur",
              "CityId": 5070
          },
          {
              "City": "Rajarhat Gopalpur",
              "CityId": 5678
          },
          {
              "City": "Rajauri",
              "CityId": 1331
          },
          {
              "City": "Rajendranagar",
              "CityId": 218
          },
          {
              "City": "Rajgamar",
              "CityId": 685
          },
          {
              "City": "Rajgarh",
              "CityId": 1253
          },
          {
              "City": "Rajgarh",
              "CityId": 2392
          },
          {
              "City": "Rajgarh",
              "CityId": 3481
          },
          {
              "City": "Rajgir",
              "CityId": 570
          },
          {
              "City": "Rajgurunagar",
              "CityId": 2773
          },
          {
              "City": "Rajhara",
              "CityId": 686
          },
          {
              "City": "Rajkot",
              "CityId": 1011
          },
          {
              "City": "Rajmahal",
              "CityId": 1490
          },
          {
              "City": "Rajnagar",
              "CityId": 2393
          },
          {
              "City": "Rajnandgaon",
              "CityId": 687
          },
          {
              "City": "Rajoli",
              "CityId": 219
          },
          {
              "City": "Rajpipla",
              "CityId": 1012
          },
          {
              "City": "Rajpur",
              "CityId": 2394
          },
          {
              "City": "Rajpur",
              "CityId": 5679
          },
          {
              "City": "Rajpura",
              "CityId": 3264
          },
          {
              "City": "Rajsamand",
              "CityId": 3482
          },
          {
              "City": "Rajula",
              "CityId": 1013
          },
          {
              "City": "Rajur",
              "CityId": 2774
          },
          {
              "City": "Rajura",
              "CityId": 2775
          },
          {
              "City": "Ram Das",
              "CityId": 3265
          },
          {
              "City": "Ramachandrapuram",
              "CityId": 220
          },
          {
              "City": "Ramagundam",
              "CityId": 4490
          },
          {
              "City": "Raman",
              "CityId": 3266
          },
          {
              "City": "Ramanagaram",
              "CityId": 1772
          },
          {
              "City": "Ramanathapuram",
              "CityId": 4171
          },
          {
              "City": "Ramanattukara",
              "CityId": 2035
          },
          {
              "City": "Ramanayyapeta",
              "CityId": 221
          },
          {
              "City": "Ramanuj Ganj",
              "CityId": 688
          },
          {
              "City": "Ramapuram",
              "CityId": 222
          },
          {
              "City": "Ramapuram",
              "CityId": 4172
          },
          {
              "City": "Ramarajupalli",
              "CityId": 223
          },
          {
              "City": "Ramavarappadu",
              "CityId": 224
          },
          {
              "City": "Ramban",
              "CityId": 1332
          },
          {
              "City": "Rambha",
              "CityId": 3095
          },
          {
              "City": "Ramchandrapur",
              "CityId": 5680
          },
          {
              "City": "Ramdurg",
              "CityId": 1773
          },
          {
              "City": "Rameswaram",
              "CityId": 225
          },
          {
              "City": "Rameswaram",
              "CityId": 4173
          },
          {
              "City": "Ramganj Mandi",
              "CityId": 3483
          },
          {
              "City": "Ramgarh",
              "CityId": 1333
          },
          {
              "City": "Ramgarh",
              "CityId": 1491
          },
          {
              "City": "Ramgarh",
              "CityId": 3484
          },
          {
              "City": "Ramjibanpur",
              "CityId": 5681
          },
          {
              "City": "Ramkola",
              "CityId": 5071
          },
          {
              "City": "Ramnagar",
              "CityId": 571
          },
          {
              "City": "Ramnagar",
              "CityId": 1334
          },
          {
              "City": "Ramnagar",
              "CityId": 5072
          },
          {
              "City": "Ramnagar",
              "CityId": 5292
          },
          {
              "City": "Ramnagar",
              "CityId": 5682
          },
          {
              "City": "Ramod",
              "CityId": 1014
          },
          {
              "City": "Rampachodavaram",
              "CityId": 226
          },
          {
              "City": "Rampur",
              "CityId": 1254
          },
          {
              "City": "Rampur",
              "CityId": 5073
          },
          {
              "City": "Rampur Baghelan",
              "CityId": 2395
          },
          {
              "City": "Rampur Bhawanipur",
              "CityId": 5074
          },
          {
              "City": "Rampur Hat",
              "CityId": 5683
          },
          {
              "City": "Rampur Karkhana",
              "CityId": 5075
          },
          {
              "City": "Rampur Maniharan",
              "CityId": 5076
          },
          {
              "City": "Rampur Naikin",
              "CityId": 2396
          },
          {
              "City": "Rampura",
              "CityId": 2397
          },
          {
              "City": "Rampura",
              "CityId": 3267
          },
          {
              "City": "Rampura",
              "CityId": 5077
          },
          {
              "City": "Ramtek",
              "CityId": 2776
          },
          {
              "City": "Ranaghat",
              "CityId": 5684
          },
          {
              "City": "Ranapur",
              "CityId": 2398
          },
          {
              "City": "Ranavav",
              "CityId": 1015
          },
          {
              "City": "Ranbirsingh Pora",
              "CityId": 1335
          },
          {
              "City": "Ranchi",
              "CityId": 1492
          },
          {
              "City": "Ranga Reddy district",
              "CityId": 4491
          },
          {
              "City": "Rangapara",
              "CityId": 425
          },
          {
              "City": "Rangat",
              "CityId": 4
          },
          {
              "City": "Rangia",
              "CityId": 426
          },
          {
              "City": "Rangpo",
              "CityId": 3547
          },
          {
              "City": "Rani",
              "CityId": 3485
          },
          {
              "City": "Rania",
              "CityId": 1178
          },
          {
              "City": "Ranibennur",
              "CityId": 1774
          },
          {
              "City": "Raniganj",
              "CityId": 5685
          },
          {
              "City": "Ranikhet",
              "CityId": 5293
          },
          {
              "City": "Ranipet",
              "CityId": 4174
          },
          {
              "City": "Ranipur",
              "CityId": 5078
          },
          {
              "City": "Ranipur",
              "CityId": 5294
          },
          {
              "City": "Ranipura",
              "CityId": 2399
          },
          {
              "City": "Ranir Bazar",
              "CityId": 4526
          },
          {
              "City": "Raniwara",
              "CityId": 3486
          },
          {
              "City": "Ranoli",
              "CityId": 1016
          },
          {
              "City": "Rapar",
              "CityId": 1017
          },
          {
              "City": "Rashidpur Garhi",
              "CityId": 5079
          },
          {
              "City": "Rasipuram",
              "CityId": 4175
          },
          {
              "City": "Rasra",
              "CityId": 5080
          },
          {
              "City": "Rasulabad",
              "CityId": 5081
          },
          {
              "City": "Ratan Nagar",
              "CityId": 3487
          },
          {
              "City": "Ratangarh",
              "CityId": 2400
          },
          {
              "City": "Ratangarh",
              "CityId": 3488
          },
          {
              "City": "Ratanpur",
              "CityId": 689
          },
          {
              "City": "Rath",
              "CityId": 5082
          },
          {
              "City": "Ratibati",
              "CityId": 5686
          },
          {
              "City": "Ratiya",
              "CityId": 1179
          },
          {
              "City": "Ratlam",
              "CityId": 2401
          },
          {
              "City": "Ratlam Kasba",
              "CityId": 2402
          },
          {
              "City": "Ratnagiri",
              "CityId": 2777
          },
          {
              "City": "Rau",
              "CityId": 2403
          },
          {
              "City": "Raurkela",
              "CityId": 3096
          },
          {
              "City": "Raurkela Civil Township",
              "CityId": 3097
          },
          {
              "City": "Ravalgaon",
              "CityId": 2778
          },
          {
              "City": "Raver",
              "CityId": 2779
          },
          {
              "City": "Ravulapalam",
              "CityId": 227
          },
          {
              "City": "Rawalsar",
              "CityId": 1255
          },
          {
              "City": "Rawatbhata",
              "CityId": 3489
          },
          {
              "City": "Rawatsar",
              "CityId": 3490
          },
          {
              "City": "Raxaul",
              "CityId": 572
          },
          {
              "City": "Ray",
              "CityId": 1493
          },
          {
              "City": "Raya",
              "CityId": 5083
          },
          {
              "City": "Rayachoti",
              "CityId": 228
          },
          {
              "City": "Rayadrug",
              "CityId": 229
          },
          {
              "City": "Rayagada",
              "CityId": 3098
          },
          {
              "City": "Rayagiri",
              "CityId": 4176
          },
          {
              "City": "Raybag",
              "CityId": 1775
          },
          {
              "City": "Raypur",
              "CityId": 5687
          },
          {
              "City": "Rayya",
              "CityId": 3268
          },
          {
              "City": "Razam",
              "CityId": 230
          },
          {
              "City": "Razole",
              "CityId": 231
          },
          {
              "City": "Reasi",
              "CityId": 1336
          },
          {
              "City": "Redhakhol",
              "CityId": 3099
          },
          {
              "City": "Rehambal",
              "CityId": 1337
          },
          {
              "City": "Rehla",
              "CityId": 1494
          },
          {
              "City": "Rehli",
              "CityId": 2404
          },
          {
              "City": "Rehti",
              "CityId": 2405
          },
          {
              "City": "Reis Magos",
              "CityId": 761
          },
          {
              "City": "Religara",
              "CityId": 1495
          },
          {
              "City": "Remuna",
              "CityId": 3100
          },
          {
              "City": "Rengali",
              "CityId": 3101
          },
          {
              "City": "Renigunta",
              "CityId": 232
          },
          {
              "City": "Renukut",
              "CityId": 5084
          },
          {
              "City": "Reoti",
              "CityId": 5085
          },
          {
              "City": "Repalle",
              "CityId": 233
          },
          {
              "City": "Resubelpara",
              "CityId": 2930
          },
          {
              "City": "Revadanda",
              "CityId": 2780
          },
          {
              "City": "Revelganj",
              "CityId": 573
          },
          {
              "City": "Rewa",
              "CityId": 2406
          },
          {
              "City": "Rewari",
              "CityId": 1180
          },
          {
              "City": "Richha",
              "CityId": 5086
          },
          {
              "City": "Rikhabdev",
              "CityId": 3491
          },
          {
              "City": "Ringas",
              "CityId": 3492
          },
          {
              "City": "Rishikesh",
              "CityId": 5295
          },
          {
              "City": "Rishikesh Cantonment",
              "CityId": 5296
          },
          {
              "City": "Rishikonda",
              "CityId": 234
          },
          {
              "City": "Rishra",
              "CityId": 5688
          },
          {
              "City": "Rishra Cantonment",
              "CityId": 5689
          },
          {
              "City": "Risia Bazar",
              "CityId": 5087
          },
          {
              "City": "Risod",
              "CityId": 2781
          },
          {
              "City": "Rithapuram",
              "CityId": 4177
          },
          {
              "City": "Rithora",
              "CityId": 5088
          },
          {
              "City": "Robertsganj",
              "CityId": 5089
          },
          {
              "City": "Robertsonpet",
              "CityId": 1776
          },
          {
              "City": "Roha Ashtami",
              "CityId": 2782
          },
          {
              "City": "Rohraband",
              "CityId": 1496
          },
          {
              "City": "Rohru",
              "CityId": 1256
          },
          {
              "City": "Rohtak",
              "CityId": 1181
          },
          {
              "City": "Roing",
              "CityId": 311
          },
          {
              "City": "Ron",
              "CityId": 1777
          },
          {
              "City": "Roorkee",
              "CityId": 5297
          },
          {
              "City": "Ropar",
              "CityId": 1182
          },
          {
              "City": "Rosalpatti",
              "CityId": 4178
          },
          {
              "City": "Rourkela",
              "CityId": 3102
          },
          {
              "City": "Roza",
              "CityId": 5090
          },
          {
              "City": "Rudarpur",
              "CityId": 5091
          },
          {
              "City": "Rudauli",
              "CityId": 5092
          },
          {
              "City": "Rudayan",
              "CityId": 5093
          },
          {
              "City": "Rudraprayag",
              "CityId": 5298
          },
          {
              "City": "Rudrapur",
              "CityId": 5299
          },
          {
              "City": "Rudravathi",
              "CityId": 4179
          },
          {
              "City": "Ruiya",
              "CityId": 5690
          },
          {
              "City": "Rupnagar",
              "CityId": 3269
          },
          {
              "City": "Rura",
              "CityId": 5094
          },
          {
              "City": "Rurki",
              "CityId": 5300
          },
          {
              "City": "Rurki Cantonment",
              "CityId": 5301
          },
          {
              "City": "Rurki Kasba",
              "CityId": 3270
          },
          {
              "City": "Rusera",
              "CityId": 574
          },
          {
              "City": "Rustamnagar Sahaspur",
              "CityId": 5095
          },
          {
              "City": "Sabalgarh",
              "CityId": 2407
          },
          {
              "City": "Sabathu",
              "CityId": 1257
          },
          {
              "City": "Sabatwar",
              "CityId": 5096
          },
          {
              "City": "Sabrum",
              "CityId": 4527
          },
          {
              "City": "Sadabad",
              "CityId": 5097
          },
          {
              "City": "Sadalgi",
              "CityId": 1778
          },
          {
              "City": "Sadasivpet",
              "CityId": 4492
          },
          {
              "City": "Sadat",
              "CityId": 5098
          },
          {
              "City": "Sadauri",
              "CityId": 1183
          },
          {
              "City": "Sadayankuppam",
              "CityId": 4180
          },
          {
              "City": "Sadri",
              "CityId": 3493
          },
          {
              "City": "Sadulshahar",
              "CityId": 3494
          },
          {
              "City": "Safidon",
              "CityId": 1184
          },
          {
              "City": "Safipur",
              "CityId": 5099
          },
          {
              "City": "Sagar",
              "CityId": 1779
          },
          {
              "City": "Sagar",
              "CityId": 2408
          },
          {
              "City": "Sagar Cantonment",
              "CityId": 2409
          },
          {
              "City": "Sagauli",
              "CityId": 575
          },
          {
              "City": "Sagwara",
              "CityId": 3495
          },
          {
              "City": "Sahajadpur",
              "CityId": 5691
          },
          {
              "City": "Sahanpur",
              "CityId": 5100
          },
          {
              "City": "Sahapur",
              "CityId": 5692
          },
          {
              "City": "Saharanpur",
              "CityId": 5101
          },
          {
              "City": "Saharsa",
              "CityId": 576
          },
          {
              "City": "Sahaspur",
              "CityId": 5102
          },
          {
              "City": "Sahaswan",
              "CityId": 5103
          },
          {
              "City": "Sahawar",
              "CityId": 5104
          },
          {
              "City": "Sahibabad",
              "CityId": 5105
          },
          {
              "City": "Sahibganj",
              "CityId": 1497
          },
          {
              "City": "Sahij",
              "CityId": 1018
          },
          {
              "City": "Sahjanwa",
              "CityId": 5106
          },
          {
              "City": "Sahnewal",
              "CityId": 3271
          },
          {
              "City": "Sahnidih",
              "CityId": 1498
          },
          {
              "City": "Sahpau",
              "CityId": 5107
          },
          {
              "City": "Saidpur",
              "CityId": 5108
          },
          {
              "City": "Saiha",
              "CityId": 2949
          },
          {
              "City": "Sailana",
              "CityId": 2410
          },
          {
              "City": "Saint Thomas Mount",
              "CityId": 4181
          },
          {
              "City": "Sainthal",
              "CityId": 5109
          },
          {
              "City": "Sainthia",
              "CityId": 5693
          },
          {
              "City": "Sairang",
              "CityId": 2950
          },
          {
              "City": "Saitul",
              "CityId": 2951
          },
          {
              "City": "Saiyadraja",
              "CityId": 5110
          },
          {
              "City": "Sakhanu",
              "CityId": 5111
          },
          {
              "City": "Sakit",
              "CityId": 5112
          },
          {
              "City": "Sakleshpur",
              "CityId": 1780
          },
          {
              "City": "Sakri",
              "CityId": 2783
          },
          {
              "City": "Sakti",
              "CityId": 690
          },
          {
              "City": "Salakati",
              "CityId": 427
          },
          {
              "City": "Salangapalayam",
              "CityId": 4182
          },
          {
              "City": "Salap",
              "CityId": 5694
          },
          {
              "City": "Salarpur Khadar",
              "CityId": 5113
          },
          {
              "City": "Salaya",
              "CityId": 1019
          },
          {
              "City": "Salcette",
              "CityId": 762
          },
          {
              "City": "Salem",
              "CityId": 4183
          },
          {
              "City": "Saligao",
              "CityId": 763
          },
          {
              "City": "Saligram",
              "CityId": 1781
          },
          {
              "City": "Salimpur",
              "CityId": 5114
          },
          {
              "City": "Salon",
              "CityId": 5115
          },
          {
              "City": "Salumbar",
              "CityId": 3496
          },
          {
              "City": "Salur",
              "CityId": 235
          },
          {
              "City": "Samalapuram",
              "CityId": 4184
          },
          {
              "City": "Samalkha",
              "CityId": 1185
          },
          {
              "City": "Samalkot",
              "CityId": 236
          },
          {
              "City": "Samana",
              "CityId": 3272
          },
          {
              "City": "Samastipur",
              "CityId": 577
          },
          {
              "City": "Samathur",
              "CityId": 4185
          },
          {
              "City": "Samba",
              "CityId": 1338
          },
          {
              "City": "Sambalpur",
              "CityId": 3103
          },
          {
              "City": "Sambavar Vadagarai",
              "CityId": 4186
          },
          {
              "City": "Sambhal",
              "CityId": 5116
          },
          {
              "City": "Sambhar",
              "CityId": 3497
          },
          {
              "City": "Sambhawali",
              "CityId": 5117
          },
          {
              "City": "Samdari",
              "CityId": 3498
          },
          {
              "City": "Samdhan",
              "CityId": 5118
          },
          {
              "City": "Samrala",
              "CityId": 3273
          },
          {
              "City": "Samthar",
              "CityId": 5119
          },
          {
              "City": "Samurou",
              "CityId": 2908
          },
          {
              "City": "Sanand",
              "CityId": 1020
          },
          {
              "City": "Sanaur",
              "CityId": 3274
          },
          {
              "City": "Sanawad",
              "CityId": 2411
          },
          {
              "City": "Sanchi",
              "CityId": 2412
          },
          {
              "City": "Sanchor",
              "CityId": 3499
          },
          {
              "City": "Sancoale",
              "CityId": 764
          },
          {
              "City": "Sandi",
              "CityId": 5120
          },
          {
              "City": "Sandila",
              "CityId": 5121
          },
          {
              "City": "Sandor",
              "CityId": 2784
          },
          {
              "City": "Sandur",
              "CityId": 1782
          },
          {
              "City": "Sangamner",
              "CityId": 2785
          },
          {
              "City": "Sangareddy",
              "CityId": 4493
          },
          {
              "City": "Sangariya",
              "CityId": 3500
          },
          {
              "City": "Sangat",
              "CityId": 3275
          },
          {
              "City": "Sangli",
              "CityId": 2786
          },
          {
              "City": "Sangod",
              "CityId": 3501
          },
          {
              "City": "Sangole",
              "CityId": 2787
          },
          {
              "City": "Sangrur",
              "CityId": 3276
          },
          {
              "City": "Sanguem",
              "CityId": 765
          },
          {
              "City": "Sanivarsante",
              "CityId": 1783
          },
          {
              "City": "Sankaramanallur",
              "CityId": 4187
          },
          {
              "City": "Sankarankoil",
              "CityId": 4188
          },
          {
              "City": "Sankarapuram",
              "CityId": 4189
          },
          {
              "City": "Sankari",
              "CityId": 4190
          },
          {
              "City": "Sankarnagar",
              "CityId": 4191
          },
          {
              "City": "Sankarpur",
              "CityId": 5695
          },
          {
              "City": "Sankeshwar",
              "CityId": 1784
          },
          {
              "City": "Sankheda",
              "CityId": 1021
          },
          {
              "City": "Sankhol",
              "CityId": 1186
          },
          {
              "City": "Sankrail",
              "CityId": 5696
          },
          {
              "City": "Sanquelim",
              "CityId": 766
          },
          {
              "City": "Sansarpur",
              "CityId": 3277
          },
          {
              "City": "Santokhgarh",
              "CityId": 1258
          },
          {
              "City": "Santoshpur",
              "CityId": 5697
          },
          {
              "City": "Santrampur",
              "CityId": 1022
          },
          {
              "City": "Sanvordem",
              "CityId": 767
          },
          {
              "City": "Sanwer",
              "CityId": 2413
          },
          {
              "City": "Sao Jose-de-Areal",
              "CityId": 768
          },
          {
              "City": "Saontaidih",
              "CityId": 5698
          },
          {
              "City": "Sapatgram",
              "CityId": 428
          },
          {
              "City": "Sarahan",
              "CityId": 1259
          },
          {
              "City": "Sarai akil",
              "CityId": 5123
          },
          {
              "City": "Sarai Mir",
              "CityId": 5122
          },
          {
              "City": "Saraidhela",
              "CityId": 1499
          },
          {
              "City": "Saraikela",
              "CityId": 1500
          },
          {
              "City": "Saraipali",
              "CityId": 691
          },
          {
              "City": "Sarajpur",
              "CityId": 692
          },
          {
              "City": "Sarangarh",
              "CityId": 693
          },
          {
              "City": "Sarangpur",
              "CityId": 2414
          },
          {
              "City": "Sarapaka",
              "CityId": 4494
          },
          {
              "City": "Sarauli",
              "CityId": 5124
          },
          {
              "City": "Saravanampatti",
              "CityId": 4192
          },
          {
              "City": "Sarcarsamakulam",
              "CityId": 4193
          },
          {
              "City": "Sardarpur",
              "CityId": 2415
          },
          {
              "City": "Sardarshahr",
              "CityId": 3502
          },
          {
              "City": "Sardhana",
              "CityId": 5125
          },
          {
              "City": "Sardulgarh",
              "CityId": 3278
          },
          {
              "City": "Sarenga",
              "CityId": 5699
          },
          {
              "City": "Sargur",
              "CityId": 1785
          },
          {
              "City": "Saribujrang",
              "CityId": 1023
          },
          {
              "City": "Sarigam INA",
              "CityId": 1024
          },
          {
              "City": "Sarila",
              "CityId": 5126
          },
          {
              "City": "Sarjamda",
              "CityId": 1501
          },
          {
              "City": "Sarka Ghat",
              "CityId": 1260
          },
          {
              "City": "Sarni",
              "CityId": 2416
          },
          {
              "City": "Sarpi",
              "CityId": 5700
          },
          {
              "City": "Sarsawan",
              "CityId": 5127
          },
          {
              "City": "Sarthebari",
              "CityId": 429
          },
          {
              "City": "Sarupathar",
              "CityId": 430
          },
          {
              "City": "Sarupathar Bengali",
              "CityId": 431
          },
          {
              "City": "Sarwar",
              "CityId": 3503
          },
          {
              "City": "Sasaram",
              "CityId": 578
          },
          {
              "City": "Sasauli",
              "CityId": 1187
          },
          {
              "City": "Sasni",
              "CityId": 5128
          },
          {
              "City": "Sasti",
              "CityId": 2788
          },
          {
              "City": "Sasvad",
              "CityId": 2789
          },
          {
              "City": "Satai",
              "CityId": 2417
          },
          {
              "City": "Satal Kheri",
              "CityId": 3504
          },
          {
              "City": "Satana",
              "CityId": 2790
          },
          {
              "City": "Satara",
              "CityId": 2791
          },
          {
              "City": "Sathiyavijayanagaram",
              "CityId": 4194
          },
          {
              "City": "Sathupalle",
              "CityId": 4495
          },
          {
              "City": "Sathuvachari",
              "CityId": 4195
          },
          {
              "City": "Sathyamangala",
              "CityId": 1786
          },
          {
              "City": "Sathyamangalam",
              "CityId": 4196
          },
          {
              "City": "Satigachha",
              "CityId": 5701
          },
          {
              "City": "Satna",
              "CityId": 2418
          },
          {
              "City": "Satrikh",
              "CityId": 5129
          },
          {
              "City": "Sattankulam",
              "CityId": 4197
          },
          {
              "City": "Sattari",
              "CityId": 769
          },
          {
              "City": "Sattenapalle",
              "CityId": 237
          },
          {
              "City": "Sattur",
              "CityId": 4198
          },
          {
              "City": "Satwas",
              "CityId": 2419
          },
          {
              "City": "Saunda",
              "CityId": 1502
          },
          {
              "City": "Saundatti Yellamma",
              "CityId": 1787
          },
          {
              "City": "Saunkh",
              "CityId": 5130
          },
          {
              "City": "Saurikh",
              "CityId": 5131
          },
          {
              "City": "Sausar",
              "CityId": 2420
          },
          {
              "City": "Savantvadi",
              "CityId": 2792
          },
          {
              "City": "Savanur",
              "CityId": 1788
          },
          {
              "City": "Savda",
              "CityId": 2793
          },
          {
              "City": "Savner",
              "CityId": 2794
          },
          {
              "City": "Sawai Madhopur",
              "CityId": 3505
          },
          {
              "City": "Sawari Jawharnagar",
              "CityId": 2795
          },
          {
              "City": "Sayalgudi",
              "CityId": 4199
          },
          {
              "City": "Sayan",
              "CityId": 1025
          },
          {
              "City": "Sayapuram",
              "CityId": 4200
          },
          {
              "City": "Sayla",
              "CityId": 1026
          },
          {
              "City": "Secunderabad",
              "CityId": 4496
          },
          {
              "City": "Sedam",
              "CityId": 1789
          },
          {
              "City": "Seetharampuram",
              "CityId": 238
          },
          {
              "City": "Sehore",
              "CityId": 2421
          },
          {
              "City": "Seithur",
              "CityId": 4201
          },
          {
              "City": "Sekmai Bazar",
              "CityId": 2909
          },
          {
              "City": "Selu",
              "CityId": 2796
          },
          {
              "City": "Semaria",
              "CityId": 2422
          },
          {
              "City": "Sembakkam",
              "CityId": 4202
          },
          {
              "City": "Semmipalayam",
              "CityId": 4203
          },
          {
              "City": "Senapati",
              "CityId": 2910
          },
          {
              "City": "Senchoagaon",
              "CityId": 432
          },
          {
              "City": "Sendhwa",
              "CityId": 2423
          },
          {
              "City": "Sennirkuppam",
              "CityId": 4204
          },
          {
              "City": "Senthamangalam",
              "CityId": 4205
          },
          {
              "City": "Sentharapatti",
              "CityId": 4206
          },
          {
              "City": "Senur",
              "CityId": 4207
          },
          {
              "City": "Seohara",
              "CityId": 5132
          },
          {
              "City": "Seondha",
              "CityId": 2424
          },
          {
              "City": "Seoni",
              "CityId": 1261
          },
          {
              "City": "Seoni",
              "CityId": 2425
          },
          {
              "City": "Seoni Malwa",
              "CityId": 2426
          },
          {
              "City": "Seppa",
              "CityId": 312
          },
          {
              "City": "Serchhip",
              "CityId": 2952
          },
          {
              "City": "Serilungampalle",
              "CityId": 239
          },
          {
              "City": "Serpur",
              "CityId": 5702
          },
          {
              "City": "Serula",
              "CityId": 770
          },
          {
              "City": "Sethia",
              "CityId": 2427
          },
          {
              "City": "Sethiathoppu",
              "CityId": 4208
          },
          {
              "City": "Sevilimedu",
              "CityId": 4209
          },
          {
              "City": "Sevugampatti",
              "CityId": 4210
          },
          {
              "City": "Sewai",
              "CityId": 1503
          },
          {
              "City": "Sewal Khas",
              "CityId": 5133
          },
          {
              "City": "Sewan Kalan",
              "CityId": 3506
          },
          {
              "City": "Sewarhi",
              "CityId": 5134
          },
          {
              "City": "Shahabad",
              "CityId": 1188
          },
          {
              "City": "Shahabad",
              "CityId": 1790
          },
          {
              "City": "Shahabad",
              "CityId": 5135
          },
          {
              "City": "Shahabad A.C.C.",
              "CityId": 1791
          },
          {
              "City": "Shahada",
              "CityId": 2797
          },
          {
              "City": "Shahapur",
              "CityId": 1792
          },
          {
              "City": "Shahapur",
              "CityId": 2798
          },
          {
              "City": "Shahdol",
              "CityId": 2428
          },
          {
              "City": "Shahganj",
              "CityId": 5136
          },
          {
              "City": "Shahgarh",
              "CityId": 2429
          },
          {
              "City": "Shahi",
              "CityId": 5137
          },
          {
              "City": "Shahjahanpur",
              "CityId": 5138
          },
          {
              "City": "Shahjahanpur Cantonment",
              "CityId": 5139
          },
          {
              "City": "Shahkot",
              "CityId": 3279
          },
          {
              "City": "Shahpur",
              "CityId": 579
          },
          {
              "City": "Shahpur",
              "CityId": 1027
          },
          {
              "City": "Shahpur",
              "CityId": 1793
          },
          {
              "City": "Shahpur",
              "CityId": 2430
          },
          {
              "City": "Shahpur",
              "CityId": 5140
          },
          {
              "City": "Shahpura",
              "CityId": 2431
          },
          {
              "City": "Shahpura",
              "CityId": 3507
          },
          {
              "City": "Shahwadi",
              "CityId": 1028
          },
          {
              "City": "Shaikhpura",
              "CityId": 580
          },
          {
              "City": "Shajapur",
              "CityId": 2432
          },
          {
              "City": "Shaktigarh",
              "CityId": 5302
          },
          {
              "City": "Shaktinagar",
              "CityId": 1794
          },
          {
              "City": "Sham Churasi",
              "CityId": 3280
          },
          {
              "City": "Shamgarh",
              "CityId": 2433
          },
          {
              "City": "Shamli",
              "CityId": 5141
          },
          {
              "City": "Shamsabad",
              "CityId": 5142
          },
          {
              "City": "Shankarampet",
              "CityId": 240
          },
          {
              "City": "Shankargarh",
              "CityId": 5143
          },
          {
              "City": "Shankhanagar",
              "CityId": 5703
          },
          {
              "City": "Shantipur",
              "CityId": 5704
          },
          {
              "City": "Shapar",
              "CityId": 1029
          },
          {
              "City": "Shar",
              "CityId": 241
          },
          {
              "City": "Shegaon",
              "CityId": 2799
          },
          {
              "City": "Shekhpura",
              "CityId": 3281
          },
          {
              "City": "Shelar",
              "CityId": 2800
          },
          {
              "City": "Shenbakkam",
              "CityId": 4211
          },
          {
              "City": "Shencottai",
              "CityId": 4212
          },
          {
              "City": "Shendurjana",
              "CityId": 2801
          },
          {
              "City": "Shenkottai",
              "CityId": 4213
          },
          {
              "City": "Sheoganj",
              "CityId": 3508
          },
          {
              "City": "Sheopur",
              "CityId": 2434
          },
          {
              "City": "Shergarh",
              "CityId": 5144
          },
          {
              "City": "Sherghati",
              "CityId": 581
          },
          {
              "City": "Sherkot",
              "CityId": 5145
          },
          {
              "City": "Shiggaon",
              "CityId": 1795
          },
          {
              "City": "Shikarpur",
              "CityId": 1796
          },
          {
              "City": "Shikarpur",
              "CityId": 5146
          },
          {
              "City": "Shikohabad",
              "CityId": 5147
          },
          {
              "City": "Shillong",
              "CityId": 2931
          },
          {
              "City": "Shillong Cantonment",
              "CityId": 2932
          },
          {
              "City": "Shimla",
              "CityId": 1262
          },
          {
              "City": "Shimoga",
              "CityId": 1797
          },
          {
              "City": "Shirdi",
              "CityId": 2802
          },
          {
              "City": "Shirgaon",
              "CityId": 2803
          },
          {
              "City": "Shirhatti",
              "CityId": 1798
          },
          {
              "City": "Shirpur",
              "CityId": 2804
          },
          {
              "City": "Shirur",
              "CityId": 2805
          },
          {
              "City": "Shirwal",
              "CityId": 2806
          },
          {
              "City": "Shisgarh",
              "CityId": 5148
          },
          {
              "City": "Shivatkar",
              "CityId": 2807
          },
          {
              "City": "Shivdaspur",
              "CityId": 5149
          },
          {
              "City": "Shivhar",
              "CityId": 582
          },
          {
              "City": "Shivli",
              "CityId": 5150
          },
          {
              "City": "Shivpuri",
              "CityId": 2435
          },
          {
              "City": "Shivrajpur",
              "CityId": 1030
          },
          {
              "City": "Shivrajpur",
              "CityId": 5151
          },
          {
              "City": "Shivrinarayan",
              "CityId": 694
          },
          {
              "City": "Shohratgarh",
              "CityId": 5152
          },
          {
              "City": "Sholavandan",
              "CityId": 4214
          },
          {
              "City": "Sholinganallur",
              "CityId": 4215
          },
          {
              "City": "Sholingur",
              "CityId": 4216
          },
          {
              "City": "Sholur",
              "CityId": 4217
          },
          {
              "City": "Shoranur",
              "CityId": 2036
          },
          {
              "City": "Shorapur",
              "CityId": 1799
          },
          {
              "City": "Shravanabelagola",
              "CityId": 1800
          },
          {
              "City": "Shrigonda",
              "CityId": 2808
          },
          {
              "City": "Shrirampur",
              "CityId": 2809
          },
          {
              "City": "Shrirampur",
              "CityId": 5705
          },
          {
              "City": "Shrirampur Rural",
              "CityId": 2810
          },
          {
              "City": "Shrirangapattana",
              "CityId": 1801
          },
          {
              "City": "Shujalpur",
              "CityId": 2436
          },
          {
              "City": "Shupiyan",
              "CityId": 1339
          },
          {
              "City": "Sibsagar",
              "CityId": 433
          },
          {
              "City": "Siddapur",
              "CityId": 1802
          },
          {
              "City": "Siddhanur",
              "CityId": 5153
          },
          {
              "City": "Siddhapur",
              "CityId": 1031
          },
          {
              "City": "Siddharthnagar",
              "CityId": 5154
          },
          {
              "City": "Siddipet",
              "CityId": 4497
          },
          {
              "City": "Sidhauli",
              "CityId": 5155
          },
          {
              "City": "Sidhi",
              "CityId": 2437
          },
          {
              "City": "Sidhpur",
              "CityId": 1032
          },
          {
              "City": "Sidhpura",
              "CityId": 5156
          },
          {
              "City": "Sidlaghatta",
              "CityId": 1803
          },
          {
              "City": "Siduli",
              "CityId": 5706
          },
          {
              "City": "Sihor",
              "CityId": 1033
          },
          {
              "City": "Sihora",
              "CityId": 2438
          },
          {
              "City": "Sijhua",
              "CityId": 1504
          },
          {
              "City": "Sijua",
              "CityId": 1505
          },
          {
              "City": "Sika",
              "CityId": 1034
          },
          {
              "City": "Sikandarabad",
              "CityId": 5157
          },
          {
              "City": "Sikandarpur",
              "CityId": 5158
          },
          {
              "City": "Sikandra",
              "CityId": 5159
          },
          {
              "City": "Sikandra Rao",
              "CityId": 5160
          },
          {
              "City": "Sikar",
              "CityId": 3509
          },
          {
              "City": "Sikhong Sekmai",
              "CityId": 2911
          },
          {
              "City": "Sikkarayapuram",
              "CityId": 4218
          },
          {
              "City": "Sikkim",
              "CityId": 3548
          },
          {
              "City": "Silao",
              "CityId": 583
          },
          {
              "City": "Silapathar",
              "CityId": 434
          },
          {
              "City": "Silchar",
              "CityId": 435
          },
          {
              "City": "Silchar Part-X",
              "CityId": 436
          },
          {
              "City": "Siliguri",
              "CityId": 5707
          },
          {
              "City": "Sillewada",
              "CityId": 2811
          },
          {
              "City": "Sillod",
              "CityId": 2812
          },
          {
              "City": "Silvassa",
              "CityId": 703
          },
          {
              "City": "Simdega",
              "CityId": 1506
          },
          {
              "City": "Simga",
              "CityId": 695
          },
          {
              "City": "Simla",
              "CityId": 5708
          },
          {
              "City": "Sinapali",
              "CityId": 3104
          },
          {
              "City": "Sindari",
              "CityId": 1507
          },
          {
              "City": "Sindgi",
              "CityId": 1804
          },
          {
              "City": "Sindhnur",
              "CityId": 1805
          },
          {
              "City": "Sindhudurg",
              "CityId": 2813
          },
          {
              "City": "Sindi",
              "CityId": 2814
          },
          {
              "City": "Sindi Turf Hindnagar",
              "CityId": 2815
          },
          {
              "City": "Sindkhed Raja",
              "CityId": 2816
          },
          {
              "City": "Sinduria",
              "CityId": 1508
          },
          {
              "City": "Singahi Bhiraura",
              "CityId": 5161
          },
          {
              "City": "Singampuneri",
              "CityId": 4219
          },
          {
              "City": "Singanallur",
              "CityId": 4220
          },
          {
              "City": "Singaperumalkoil",
              "CityId": 4221
          },
          {
              "City": "Singapur",
              "CityId": 4498
          },
          {
              "City": "Singarayakonda",
              "CityId": 242
          },
          {
              "City": "Singarva",
              "CityId": 1035
          },
          {
              "City": "Singnapur",
              "CityId": 2817
          },
          {
              "City": "Singolo",
              "CityId": 2439
          },
          {
              "City": "Singrauli",
              "CityId": 2440
          },
          {
              "City": "Singtam",
              "CityId": 3549
          },
          {
              "City": "Singur",
              "CityId": 5709
          },
          {
              "City": "Sinhasa",
              "CityId": 2441
          },
          {
              "City": "Sini",
              "CityId": 1509
          },
          {
              "City": "Sinnar",
              "CityId": 2818
          },
          {
              "City": "Sinor",
              "CityId": 1036
          },
          {
              "City": "Sinquerim",
              "CityId": 771
          },
          {
              "City": "Siolim",
              "CityId": 772
          },
          {
              "City": "Sira",
              "CityId": 1806
          },
          {
              "City": "Sirakoppa",
              "CityId": 1807
          },
          {
              "City": "Sirapalli",
              "CityId": 4222
          },
          {
              "City": "Sirathu",
              "CityId": 5162
          },
          {
              "City": "Sircilla",
              "CityId": 4499
          },
          {
              "City": "Sirgiti",
              "CityId": 696
          },
          {
              "City": "Sirgora",
              "CityId": 2442
          },
          {
              "City": "Sirhind",
              "CityId": 3282
          },
          {
              "City": "Sirka",
              "CityId": 1510
          },
          {
              "City": "Sirkali",
              "CityId": 4223
          },
          {
              "City": "Sirmaur",
              "CityId": 1263
          },
          {
              "City": "Sirmaur",
              "CityId": 2443
          },
          {
              "City": "Sirohi",
              "CityId": 3510
          },
          {
              "City": "Sironj",
              "CityId": 2444
          },
          {
              "City": "Sirpur",
              "CityId": 243
          },
          {
              "City": "Sirsa",
              "CityId": 1189
          },
          {
              "City": "Sirsa",
              "CityId": 5163
          },
          {
              "City": "Sirsaganj",
              "CityId": 5164
          },
          {
              "City": "Sirsha",
              "CityId": 5710
          },
          {
              "City": "Sirsi",
              "CityId": 1808
          },
          {
              "City": "Sirsi",
              "CityId": 5165
          },
          {
              "City": "Sirsilla",
              "CityId": 244
          },
          {
              "City": "Sirugamani",
              "CityId": 4224
          },
          {
              "City": "Siruguppa",
              "CityId": 1809
          },
          {
              "City": "Sirumugai",
              "CityId": 4225
          },
          {
              "City": "Sirur",
              "CityId": 2819
          },
          {
              "City": "Sisauli",
              "CityId": 5166
          },
          {
              "City": "Siswa Bazar",
              "CityId": 5167
          },
          {
              "City": "Sitamarhi",
              "CityId": 584
          },
          {
              "City": "Sitamau",
              "CityId": 2445
          },
          {
              "City": "Sitapur",
              "CityId": 5168
          },
          {
              "City": "Sitarganj",
              "CityId": 5303
          },
          {
              "City": "Sitasawangi",
              "CityId": 2820
          },
          {
              "City": "Sithayankottai",
              "CityId": 4226
          },
          {
              "City": "Sithurajapuram",
              "CityId": 4227
          },
          {
              "City": "Siuliban",
              "CityId": 1511
          },
          {
              "City": "Siuri",
              "CityId": 5711
          },
          {
              "City": "Sivaganga",
              "CityId": 4228
          },
          {
              "City": "Sivagiri",
              "CityId": 4229
          },
          {
              "City": "Sivakasi",
              "CityId": 4230
          },
          {
              "City": "Sivanthipuram",
              "CityId": 4231
          },
          {
              "City": "Sivur",
              "CityId": 4232
          },
          {
              "City": "Siwan",
              "CityId": 585
          },
          {
              "City": "Siwana",
              "CityId": 3511
          },
          {
              "City": "Siwani",
              "CityId": 1190
          },
          {
              "City": "Siyana",
              "CityId": 5169
          },
          {
              "City": "Sobhaganj",
              "CityId": 5712
          },
          {
              "City": "Sodpur",
              "CityId": 5713
          },
          {
              "City": "Sogariya",
              "CityId": 3512
          },
          {
              "City": "Sohagpur",
              "CityId": 2446
          },
          {
              "City": "Sohna",
              "CityId": 1191
          },
          {
              "City": "Sojat",
              "CityId": 3513
          },
          {
              "City": "Sojat Road",
              "CityId": 3514
          },
          {
              "City": "Sojitra",
              "CityId": 1037
          },
          {
              "City": "Sola",
              "CityId": 1038
          },
          {
              "City": "Solan",
              "CityId": 1264
          },
          {
              "City": "Solapur",
              "CityId": 2821
          },
          {
              "City": "Solon",
              "CityId": 1265
          },
          {
              "City": "Som",
              "CityId": 5170
          },
          {
              "City": "Someshwar",
              "CityId": 1810
          },
          {
              "City": "Sompeta",
              "CityId": 245
          },
          {
              "City": "Somvarpet",
              "CityId": 1811
          },
          {
              "City": "Sonai",
              "CityId": 2822
          },
          {
              "City": "Sonamukhi",
              "CityId": 5714
          },
          {
              "City": "Sonamura",
              "CityId": 4528
          },
          {
              "City": "Sonari",
              "CityId": 437
          },
          {
              "City": "Sonatikiri",
              "CityId": 5715
          },
          {
              "City": "Sonbhadra",
              "CityId": 5171
          },
          {
              "City": "Sonegaon",
              "CityId": 2823
          },
          {
              "City": "Sonepur",
              "CityId": 586
          },
          {
              "City": "Sonepur",
              "CityId": 3105
          },
          {
              "City": "Songadh",
              "CityId": 1039
          },
          {
              "City": "Sonipat",
              "CityId": 1192
          },
          {
              "City": "Sonkatch",
              "CityId": 2447
          },
          {
              "City": "Sopur",
              "CityId": 1340
          },
          {
              "City": "Sorab",
              "CityId": 1812
          },
          {
              "City": "Sorada",
              "CityId": 3106
          },
          {
              "City": "Soranjeri",
              "CityId": 4233
          },
          {
              "City": "Sorbhog",
              "CityId": 438
          },
          {
              "City": "Soro",
              "CityId": 3107
          },
          {
              "City": "Soron",
              "CityId": 5172
          },
          {
              "City": "South Kannanur",
              "CityId": 4234
          },
          {
              "City": "South Kodikulam",
              "CityId": 4235
          },
          {
              "City": "Soyagaon",
              "CityId": 2824
          },
          {
              "City": "Soyatkalan",
              "CityId": 2448
          },
          {
              "City": "Sri Hargobindpur",
              "CityId": 3283
          },
          {
              "City": "Sri Madhopur",
              "CityId": 3515
          },
          {
              "City": "Sriganganagar",
              "CityId": 3516
          },
          {
              "City": "Sriharikota",
              "CityId": 246
          },
          {
              "City": "Srikakulam",
              "CityId": 247
          },
          {
              "City": "Srikalahasti",
              "CityId": 248
          },
          {
              "City": "Srikantabati",
              "CityId": 5716
          },
          {
              "City": "Srimushnam",
              "CityId": 4236
          },
          {
              "City": "Srinagar",
              "CityId": 1341
          },
          {
              "City": "Srinagar",
              "CityId": 5304
          },
          {
              "City": "Sringeri",
              "CityId": 1813
          },
          {
              "City": "Srinivaspur",
              "CityId": 1814
          },
          {
              "City": "Sriperumpudur",
              "CityId": 4237
          },
          {
              "City": "Sriramapuram",
              "CityId": 4238
          },
          {
              "City": "Sriramnagar",
              "CityId": 249
          },
          {
              "City": "Srirampur",
              "CityId": 5717
          },
          {
              "City": "Sriramsagar",
              "CityId": 250
          },
          {
              "City": "Srirangam",
              "CityId": 4239
          },
          {
              "City": "Srisailam",
              "CityId": 251
          },
          {
              "City": "Srisailamgudem Devasthanam",
              "CityId": 252
          },
          {
              "City": "Srivaikuntam",
              "CityId": 4240
          },
          {
              "City": "Srivardhan",
              "CityId": 2825
          },
          {
              "City": "Srivilliputtur",
              "CityId": 4241
          },
          {
              "City": "Sualkuchi",
              "CityId": 439
          },
          {
              "City": "Suar",
              "CityId": 5173
          },
          {
              "City": "Suchindram",
              "CityId": 4242
          },
          {
              "City": "Sugnu",
              "CityId": 2912
          },
          {
              "City": "Suhagi",
              "CityId": 2449
          },
          {
              "City": "Sujangarh",
              "CityId": 3517
          },
          {
              "City": "Sujanpur",
              "CityId": 3284
          },
          {
              "City": "Sukdal",
              "CityId": 5718
          },
          {
              "City": "Suket",
              "CityId": 3518
          },
          {
              "City": "Sukhmalpur Nizamabad",
              "CityId": 5174
          },
          {
              "City": "Sukhrali",
              "CityId": 1193
          },
          {
              "City": "Suliswaranpatti",
              "CityId": 4243
          },
          {
              "City": "Sultanganj",
              "CityId": 587
          },
          {
              "City": "Sultanpur",
              "CityId": 2450
          },
          {
              "City": "Sultanpur",
              "CityId": 5175
          },
          {
              "City": "Sultanpur",
              "CityId": 5305
          },
          {
              "City": "Sultanpur Lodhi",
              "CityId": 3285
          },
          {
              "City": "Sultans Battery",
              "CityId": 2037
          },
          {
              "City": "Sulthan Bathery",
              "CityId": 2038
          },
          {
              "City": "Sulur",
              "CityId": 4244
          },
          {
              "City": "Sulurpeta",
              "CityId": 253
          },
          {
              "City": "Sulya",
              "CityId": 1815
          },
          {
              "City": "Sumbal",
              "CityId": 1342
          },
          {
              "City": "Sumerpur",
              "CityId": 3519
          },
          {
              "City": "Sumerpur",
              "CityId": 5176
          },
          {
              "City": "Sunabeda",
              "CityId": 3108
          },
          {
              "City": "Sunam",
              "CityId": 3286
          },
          {
              "City": "Sundarapandiam",
              "CityId": 4245
          },
          {
              "City": "Sundarapandiapuram",
              "CityId": 4246
          },
          {
              "City": "Sundargarh",
              "CityId": 3109
          },
          {
              "City": "Sundarnagar",
              "CityId": 1266
          },
          {
              "City": "Sunderbani",
              "CityId": 1343
          },
          {
              "City": "Sundernagar",
              "CityId": 1267
          },
          {
              "City": "Sunel",
              "CityId": 3520
          },
          {
              "City": "Suntikopa",
              "CityId": 1816
          },
          {
              "City": "Supaul",
              "CityId": 588
          },
          {
              "City": "Suraj Karadi",
              "CityId": 1040
          },
          {
              "City": "Surajgarh",
              "CityId": 3521
          },
          {
              "City": "Surampatti",
              "CityId": 4247
          },
          {
              "City": "Surandai",
              "CityId": 4248
          },
          {
              "City": "Surat",
              "CityId": 1041
          },
          {
              "City": "Suratgarh",
              "CityId": 3522
          },
          {
              "City": "Surendranagar",
              "CityId": 1042
          },
          {
              "City": "Surgana",
              "CityId": 2826
          },
          {
              "City": "Suriapet",
              "CityId": 254
          },
          {
              "City": "Suriyampalayam",
              "CityId": 4249
          },
          {
              "City": "Suriyawan",
              "CityId": 5177
          },
          {
              "City": "Surubera",
              "CityId": 1512
          },
          {
              "City": "Suryapet",
              "CityId": 4500
          },
          {
              "City": "Suryaraopet",
              "CityId": 255
          },
          {
              "City": "Susner",
              "CityId": 2451
          },
          {
              "City": "Suthaliya",
              "CityId": 2452
          },
          {
              "City": "Swamibagh",
              "CityId": 5178
          },
          {
              "City": "Swamimalai",
              "CityId": 4250
          },
          {
              "City": "Swaroopganj",
              "CityId": 3523
          },
          {
              "City": "Tadepalle",
              "CityId": 256
          },
          {
              "City": "Tadepalligudem",
              "CityId": 257
          },
          {
              "City": "Tadpatri",
              "CityId": 258
          },
          {
              "City": "Taherpur",
              "CityId": 5719
          },
          {
              "City": "Tajpur",
              "CityId": 5179
          },
          {
              "City": "Takhatgarh",
              "CityId": 3524
          },
          {
              "City": "Takhatpur",
              "CityId": 697
          },
          {
              "City": "Taki",
              "CityId": 5720
          },
          {
              "City": "Tal",
              "CityId": 2453
          },
          {
              "City": "Talai",
              "CityId": 1268
          },
          {
              "City": "Talaja",
              "CityId": 1043
          },
          {
              "City": "Talala",
              "CityId": 1044
          },
          {
              "City": "Talbahat",
              "CityId": 5180
          },
          {
              "City": "Talbandha",
              "CityId": 5721
          },
          {
              "City": "Talcher",
              "CityId": 3110
          },
          {
              "City": "Talcher Thermal Power Station ",
              "CityId": 3111
          },
          {
              "City": "Talegaon Dabhade",
              "CityId": 2827
          },
          {
              "City": "Taleigao",
              "CityId": 773
          },
          {
              "City": "Talen",
              "CityId": 2454
          },
          {
              "City": "Talgram",
              "CityId": 5181
          },
          {
              "City": "Talikota",
              "CityId": 1817
          },
          {
              "City": "Talipparamba",
              "CityId": 2039
          },
          {
              "City": "Tallapalle",
              "CityId": 259
          },
          {
              "City": "Talod",
              "CityId": 1045
          },
          {
              "City": "Taloda",
              "CityId": 2828
          },
          {
              "City": "Taloja",
              "CityId": 2829
          },
          {
              "City": "Talwade",
              "CityId": 2830
          },
          {
              "City": "Talwandi Bhai",
              "CityId": 3287
          },
          {
              "City": "Talwara",
              "CityId": 1344
          },
          {
              "City": "Talwara",
              "CityId": 3288
          },
          {
              "City": "Tambaram",
              "CityId": 4252
          },
          {
              "City": "Tambaur",
              "CityId": 5182
          },
          {
              "City": "Tamluk",
              "CityId": 5722
          },
          {
              "City": "Tanakpur",
              "CityId": 5306
          },
          {
              "City": "Tanda",
              "CityId": 5183
          },
          {
              "City": "Tandur",
              "CityId": 4501
          },
          {
              "City": "Tangla",
              "CityId": 440
          },
          {
              "City": "Tankara",
              "CityId": 1046
          },
          {
              "City": "Tanuku",
              "CityId": 260
          },
          {
              "City": "Taoru",
              "CityId": 1194
          },
          {
              "City": "Tappa",
              "CityId": 3289
          },
          {
              "City": "Tarabha",
              "CityId": 3112
          },
          {
              "City": "Tarakeswar",
              "CityId": 5723
          },
          {
              "City": "Taramangalam",
              "CityId": 4253
          },
          {
              "City": "Tarana",
              "CityId": 2455
          },
          {
              "City": "Taranagar",
              "CityId": 3525
          },
          {
              "City": "Taraori",
              "CityId": 1195
          },
          {
              "City": "Tarapur",
              "CityId": 2831
          },
          {
              "City": "Taricharkalan",
              "CityId": 2456
          },
          {
              "City": "Tarikera",
              "CityId": 1818
          },
          {
              "City": "Tarn Taran",
              "CityId": 3290
          },
          {
              "City": "Tarsali",
              "CityId": 1047
          },
          {
              "City": "Tasgaon",
              "CityId": 2832
          },
          {
              "City": "Tatarpur Lallu",
              "CityId": 5184
          },
          {
              "City": "Tathavade",
              "CityId": 2833
          },
          {
              "City": "Tati",
              "CityId": 1513
          },
          {
              "City": "Tattayyangarpettai",
              "CityId": 4254
          },
          {
              "City": "Tauru",
              "CityId": 1196
          },
          {
              "City": "Tawang",
              "CityId": 313
          },
          {
              "City": "Tayilupatti",
              "CityId": 4255
          },
          {
              "City": "Teghra",
              "CityId": 589
          },
          {
              "City": "Tehri",
              "CityId": 5307
          },
          {
              "City": "Tekadi",
              "CityId": 2834
          },
          {
              "City": "Tekanpur",
              "CityId": 2457
          },
          {
              "City": "Tekari",
              "CityId": 590
          },
          {
              "City": "Tekkalakota",
              "CityId": 1819
          },
          {
              "City": "Tekkali",
              "CityId": 261
          },
          {
              "City": "Telgaon",
              "CityId": 698
          },
          {
              "City": "Telhara",
              "CityId": 2835
          },
          {
              "City": "Teliamura",
              "CityId": 4529
          },
          {
              "City": "Tenali",
              "CityId": 262
          },
          {
              "City": "Tendukheda",
              "CityId": 2458
          },
          {
              "City": "Tenkasi",
              "CityId": 4256
          },
          {
              "City": "Tensa",
              "CityId": 3113
          },
          {
              "City": "Tentulberia",
              "CityId": 5724
          },
          {
              "City": "Tentulkuli",
              "CityId": 5725
          },
          {
              "City": "Tenudam",
              "CityId": 1514
          },
          {
              "City": "Teonthar",
              "CityId": 2459
          },
          {
              "City": "Terdal",
              "CityId": 1820
          },
          {
              "City": "Tetribazar",
              "CityId": 5185
          },
          {
              "City": "Tezpur",
              "CityId": 441
          },
          {
              "City": "Tezu",
              "CityId": 314
          },
          {
              "City": "Thadikombu",
              "CityId": 4257
          },
          {
              "City": "Thaikkad",
              "CityId": 2040
          },
          {
              "City": "Thakkolam",
              "CityId": 4258
          },
          {
              "City": "Thakurdwara",
              "CityId": 5186
          },
          {
              "City": "Thakurganj",
              "CityId": 591
          },
          {
              "City": "Thalainayar",
              "CityId": 4259
          },
          {
              "City": "Thalakudi",
              "CityId": 4260
          },
          {
              "City": "Thalassery",
              "CityId": 2041
          },
          {
              "City": "Thamaraikulam",
              "CityId": 4261
          },
          {
              "City": "Thammampatti",
              "CityId": 4262
          },
          {
              "City": "Thana Bhawan",
              "CityId": 5187
          },
          {
              "City": "Thanamandi",
              "CityId": 1345
          },
          {
              "City": "Thandia",
              "CityId": 2460
          },
          {
              "City": "Thane",
              "CityId": 2836
          },
          {
              "City": "Thanesar",
              "CityId": 1197
          },
          {
              "City": "Thangadh",
              "CityId": 1048
          },
          {
              "City": "Thanjavur",
              "CityId": 4263
          },
          {
              "City": "Thannirmukkam",
              "CityId": 2042
          },
          {
              "City": "Thanthoni",
              "CityId": 4264
          },
          {
              "City": "Tharad",
              "CityId": 1049
          },
          {
              "City": "Tharangambadi",
              "CityId": 4265
          },
          {
              "City": "Thasra",
              "CityId": 1050
          },
          {
              "City": "Thedavur",
              "CityId": 4266
          },
          {
              "City": "Thenambakkam",
              "CityId": 4267
          },
          {
              "City": "Thengampudur",
              "CityId": 4268
          },
          {
              "City": "Theni",
              "CityId": 4269
          },
          {
              "City": "Theni Allinagaram",
              "CityId": 4270
          },
          {
              "City": "Thenkarai",
              "CityId": 4271
          },
          {
              "City": "Thenthamaraikulam",
              "CityId": 4272
          },
          {
              "City": "Thenthiruperai",
              "CityId": 4273
          },
          {
              "City": "Thenzawl",
              "CityId": 2953
          },
          {
              "City": "Theog",
              "CityId": 1269
          },
          {
              "City": "Thermal Power Project",
              "CityId": 5726
          },
          {
              "City": "Thesur",
              "CityId": 4274
          },
          {
              "City": "Thevaram",
              "CityId": 4275
          },
          {
              "City": "Thevur",
              "CityId": 4276
          },
          {
              "City": "Theyyalingal",
              "CityId": 2043
          },
          {
              "City": "Thiagadurgam",
              "CityId": 4277
          },
          {
              "City": "Thiagarajar Colony",
              "CityId": 4278
          },
          {
              "City": "Thingalnagar",
              "CityId": 4279
          },
          {
              "City": "Thiriya Nizamat Khan",
              "CityId": 5188
          },
          {
              "City": "Thiruchirapalli",
              "CityId": 4280
          },
          {
              "City": "Thirukarungudi",
              "CityId": 4281
          },
          {
              "City": "Thirukazhukundram",
              "CityId": 4282
          },
          {
              "City": "Thirumalayampalayam",
              "CityId": 4283
          },
          {
              "City": "Thirumazhisai",
              "CityId": 4284
          },
          {
              "City": "Thirunagar",
              "CityId": 4285
          },
          {
              "City": "Thirunageswaram",
              "CityId": 4286
          },
          {
              "City": "Thirunindravur",
              "CityId": 4287
          },
          {
              "City": "Thirunirmalai",
              "CityId": 4288
          },
          {
              "City": "Thiruparankundram",
              "CityId": 4289
          },
          {
              "City": "Thiruparappu",
              "CityId": 4290
          },
          {
              "City": "Thiruporur",
              "CityId": 4291
          },
          {
              "City": "Thiruppanandal",
              "CityId": 4292
          },
          {
              "City": "Thirupuvanam",
              "CityId": 4293
          },
          {
              "City": "Thiruthangal",
              "CityId": 4294
          },
          {
              "City": "Thiruthuraipundi",
              "CityId": 4295
          },
          {
              "City": "Thiruvaivaru",
              "CityId": 4296
          },
          {
              "City": "Thiruvalam",
              "CityId": 4297
          },
          {
              "City": "Thiruvalla",
              "CityId": 2044
          },
          {
              "City": "Thiruvananthapuram",
              "CityId": 2045
          },
          {
              "City": "Thiruvankulam",
              "CityId": 2046
          },
          {
              "City": "Thiruvarur",
              "CityId": 4298
          },
          {
              "City": "Thiruvattaru",
              "CityId": 4299
          },
          {
              "City": "Thiruvenkatam",
              "CityId": 4300
          },
          {
              "City": "Thiruvennainallur",
              "CityId": 4301
          },
          {
              "City": "Thiruvithankodu",
              "CityId": 4302
          },
          {
              "City": "Thisayanvilai",
              "CityId": 4303
          },
          {
              "City": "Thittacheri",
              "CityId": 4304
          },
          {
              "City": "Thodupuzha",
              "CityId": 2047
          },
          {
              "City": "Thokur",
              "CityId": 1821
          },
          {
              "City": "Thondamuthur",
              "CityId": 4305
          },
          {
              "City": "Thongkhong Laxmi Bazar",
              "CityId": 2913
          },
          {
              "City": "Thorapadi",
              "CityId": 4306
          },
          {
              "City": "Thottada",
              "CityId": 2048
          },
          {
              "City": "Thottipalayam",
              "CityId": 4307
          },
          {
              "City": "Thottiyam",
              "CityId": 4308
          },
          {
              "City": "Thoubal",
              "CityId": 2914
          },
          {
              "City": "Three STR",
              "CityId": 3526
          },
          {
              "City": "Thrippunithura",
              "CityId": 2049
          },
          {
              "City": "Thrissur",
              "CityId": 2050
          },
          {
              "City": "Thudiyalur",
              "CityId": 4309
          },
          {
              "City": "Thumbe",
              "CityId": 1822
          },
          {
              "City": "Thuthipattu",
              "CityId": 4310
          },
          {
              "City": "Thuvakudi",
              "CityId": 4311
          },
          {
              "City": "Tigalapahad",
              "CityId": 263
          },
          {
              "City": "Tihu",
              "CityId": 442
          },
          {
              "City": "Tijara",
              "CityId": 3527
          },
          {
              "City": "Tikaitnagar",
              "CityId": 5189
          },
          {
              "City": "Tikamgarh",
              "CityId": 2461
          },
          {
              "City": "Tikri",
              "CityId": 5190
          },
          {
              "City": "Tildanewra",
              "CityId": 699
          },
          {
              "City": "Tilhar",
              "CityId": 5191
          },
          {
              "City": "Tilpat",
              "CityId": 1198
          },
          {
              "City": "Timarni",
              "CityId": 2462
          },
          {
              "City": "Timiri",
              "CityId": 4312
          },
          {
              "City": "Tindivanam",
              "CityId": 4313
          },
          {
              "City": "Tindwari",
              "CityId": 5192
          },
          {
              "City": "Tinnanur",
              "CityId": 4314
          },
          {
              "City": "Tinsukia",
              "CityId": 443
          },
          {
              "City": "Tinsukia",
              "CityId": 5727
          },
          {
              "City": "Tiptur",
              "CityId": 1823
          },
          {
              "City": "Tira Sujanpur",
              "CityId": 1270
          },
          {
              "City": "Tirira",
              "CityId": 2837
          },
          {
              "City": "Tirodi",
              "CityId": 2463
          },
          {
              "City": "Tirthahalli",
              "CityId": 1824
          },
          {
              "City": "Tiruchanur",
              "CityId": 264
          },
          {
              "City": "Tiruchchendur",
              "CityId": 4315
          },
          {
              "City": "Tiruchengode",
              "CityId": 4316
          },
          {
              "City": "Tirukkalukkundram",
              "CityId": 4317
          },
          {
              "City": "Tirukkattuppalli",
              "CityId": 4318
          },
          {
              "City": "Tirukkoyilur",
              "CityId": 4319
          },
          {
              "City": "Tirumakudal Narsipur",
              "CityId": 1825
          },
          {
              "City": "Tirumala",
              "CityId": 265
          },
          {
              "City": "Tirumangalam",
              "CityId": 4320
          },
          {
              "City": "Tirumullaivasal",
              "CityId": 4321
          },
          {
              "City": "Tirumuruganpundi",
              "CityId": 4322
          },
          {
              "City": "Tirunageswaram",
              "CityId": 4323
          },
          {
              "City": "Tirunelveli",
              "CityId": 4324
          },
          {
              "City": "Tirupathur",
              "CityId": 4325
          },
          {
              "City": "Tirupati",
              "CityId": 266
          },
          {
              "City": "Tirupattur",
              "CityId": 4326
          },
          {
              "City": "Tiruppuvanam",
              "CityId": 4327
          },
          {
              "City": "Tirupur",
              "CityId": 4328
          },
          {
              "City": "Tirur",
              "CityId": 2051
          },
          {
              "City": "Tirusulam",
              "CityId": 4329
          },
          {
              "City": "Tiruttani",
              "CityId": 4330
          },
          {
              "City": "Tiruvallur",
              "CityId": 4331
          },
          {
              "City": "Tiruvannamalai",
              "CityId": 4332
          },
          {
              "City": "Tiruverambur",
              "CityId": 4333
          },
          {
              "City": "Tiruverkadu",
              "CityId": 4334
          },
          {
              "City": "Tiruvethipuram",
              "CityId": 4335
          },
          {
              "City": "Tiruvidaimarudur",
              "CityId": 4336
          },
          {
              "City": "Tiruvottiyur",
              "CityId": 4337
          },
          {
              "City": "Tirvuru",
              "CityId": 267
          },
          {
              "City": "Tirwaganj",
              "CityId": 5193
          },
          {
              "City": "Tisra",
              "CityId": 1515
          },
          {
              "City": "Titabor",
              "CityId": 444
          },
          {
              "City": "Titagarh",
              "CityId": 5728
          },
          {
              "City": "Titlagarh",
              "CityId": 3114
          },
          {
              "City": "Titron",
              "CityId": 5194
          },
          {
              "City": "Tittakudi",
              "CityId": 4338
          },
          {
              "City": "Tivim",
              "CityId": 774
          },
          {
              "City": "Tlabung",
              "CityId": 2954
          },
          {
              "City": "TNPL Pugalur",
              "CityId": 4251
          },
          {
              "City": "Toda Bhim",
              "CityId": 3528
          },
          {
              "City": "Toda Raisingh",
              "CityId": 3529
          },
          {
              "City": "Todra",
              "CityId": 3530
          },
          {
              "City": "Tohana",
              "CityId": 1199
          },
          {
              "City": "Tondi",
              "CityId": 4339
          },
          {
              "City": "Tonk",
              "CityId": 3531
          },
          {
              "City": "Tonse",
              "CityId": 1826
          },
          {
              "City": "Topa",
              "CityId": 1516
          },
          {
              "City": "Topchanchi",
              "CityId": 1517
          },
          {
              "City": "Torban",
              "CityId": 2915
          },
          {
              "City": "Tori Fatehpur",
              "CityId": 5195
          },
          {
              "City": "Tosham",
              "CityId": 1200
          },
          {
              "City": "Totaladoh",
              "CityId": 2838
          },
          {
              "City": "Tral",
              "CityId": 1346
          },
          {
              "City": "Trimbak",
              "CityId": 2839
          },
          {
              "City": "Trimulgherry",
              "CityId": 268
          },
          {
              "City": "Tuensang",
              "CityId": 2963
          },
          {
              "City": "Tufanganj",
              "CityId": 5729
          },
          {
              "City": "Tuljapur",
              "CityId": 2840
          },
          {
              "City": "Tulsipur",
              "CityId": 5196
          },
          {
              "City": "Tumkur",
              "CityId": 1827
          },
          {
              "City": "Tumsar",
              "CityId": 2841
          },
          {
              "City": "Tundla",
              "CityId": 5197
          },
          {
              "City": "Tundla Kham",
              "CityId": 5198
          },
          {
              "City": "Tundla Railway Colony",
              "CityId": 5199
          },
          {
              "City": "Tuni",
              "CityId": 269
          },
          {
              "City": "Tura",
              "CityId": 2933
          },
          {
              "City": "Turaiyur",
              "CityId": 4340
          },
          {
              "City": "Turangi",
              "CityId": 270
          },
          {
              "City": "Turuvekere",
              "CityId": 1828
          },
          {
              "City": "Tuticorin",
              "CityId": 4341
          },
          {
              "City": "Uchana",
              "CityId": 1201
          },
          {
              "City": "Uchgaon",
              "CityId": 2842
          },
          {
              "City": "Udagamandalam",
              "CityId": 4342
          },
          {
              "City": "Udagamandalam Valley",
              "CityId": 4343
          },
          {
              "City": "Udaipur",
              "CityId": 3532
          },
          {
              "City": "Udaipur",
              "CityId": 4530
          },
          {
              "City": "Udaipura",
              "CityId": 2464
          },
          {
              "City": "Udala",
              "CityId": 3115
          },
          {
              "City": "Udalguri",
              "CityId": 445
          },
          {
              "City": "Udankudi",
              "CityId": 4344
          },
          {
              "City": "Udayagiri",
              "CityId": 3116
          },
          {
              "City": "Udayarpalayam",
              "CityId": 4345
          },
          {
              "City": "Udgir",
              "CityId": 2843
          },
          {
              "City": "Udham Singh Nagar",
              "CityId": 5308
          },
          {
              "City": "Udhampur",
              "CityId": 1347
          },
          {
              "City": "Udma",
              "CityId": 2052
          },
          {
              "City": "Udpura",
              "CityId": 3533
          },
          {
              "City": "Udumalaipettai",
              "CityId": 4346
          },
          {
              "City": "Udumalpet",
              "CityId": 4347
          },
          {
              "City": "Udupi",
              "CityId": 1829
          },
          {
              "City": "Udyognagar",
              "CityId": 1051
          },
          {
              "City": "Ugu",
              "CityId": 5200
          },
          {
              "City": "Ujhani",
              "CityId": 5201
          },
          {
              "City": "Ujhari",
              "CityId": 5202
          },
          {
              "City": "Ujjain",
              "CityId": 2465
          },
          {
              "City": "Ukai",
              "CityId": 1052
          },
          {
              "City": "Ukhra",
              "CityId": 5730
          },
          {
              "City": "Ukkayapalli",
              "CityId": 271
          },
          {
              "City": "Ukkunagaram",
              "CityId": 272
          },
          {
              "City": "Uklana Mandi",
              "CityId": 1202
          },
          {
              "City": "Ukwa",
              "CityId": 2466
          },
          {
              "City": "Ula",
              "CityId": 5731
          },
          {
              "City": "Ulhasnagar",
              "CityId": 2844
          },
          {
              "City": "Ullal",
              "CityId": 1830
          },
          {
              "City": "Ullur",
              "CityId": 4348
          },
          {
              "City": "Ulubaria",
              "CityId": 5732
          },
          {
              "City": "Ulundurpettai",
              "CityId": 4349
          },
          {
              "City": "Umarga",
              "CityId": 2845
          },
          {
              "City": "Umaria",
              "CityId": 2467
          },
          {
              "City": "Umarkhed",
              "CityId": 2846
          },
          {
              "City": "Umarkot",
              "CityId": 3117
          },
          {
              "City": "Umarsara",
              "CityId": 2847
          },
          {
              "City": "Umbar Pada Nandade",
              "CityId": 2848
          },
          {
              "City": "Umbergaon",
              "CityId": 1053
          },
          {
              "City": "Umbergaon INA",
              "CityId": 1054
          },
          {
              "City": "Umrala",
              "CityId": 1055
          },
          {
              "City": "Umrangso",
              "CityId": 446
          },
          {
              "City": "Umred",
              "CityId": 2849
          },
          {
              "City": "Umreth",
              "CityId": 1056
          },
          {
              "City": "Umri",
              "CityId": 5203
          },
          {
              "City": "Umri Kalan",
              "CityId": 5204
          },
          {
              "City": "Umri Pragane Balapur",
              "CityId": 2850
          },
          {
              "City": "Un",
              "CityId": 1057
          },
          {
              "City": "Un",
              "CityId": 5205
          },
          {
              "City": "Una",
              "CityId": 1058
          },
          {
              "City": "Una",
              "CityId": 1271
          },
          {
              "City": "Uncha Siwana",
              "CityId": 1203
          },
          {
              "City": "Unchahar",
              "CityId": 5206
          },
          {
              "City": "Unchahara",
              "CityId": 2468
          },
          {
              "City": "Unhel",
              "CityId": 2469
          },
          {
              "City": "Uniara",
              "CityId": 3534
          },
          {
              "City": "Unjalaur",
              "CityId": 4350
          },
          {
              "City": "Unjha",
              "CityId": 1059
          },
          {
              "City": "Unnamalaikadai",
              "CityId": 4351
          },
          {
              "City": "Unnao",
              "CityId": 5207
          },
          {
              "City": "Upleta",
              "CityId": 1060
          },
          {
              "City": "Uppal Kalan",
              "CityId": 273
          },
          {
              "City": "Upper Sileru",
              "CityId": 274
          },
          {
              "City": "Upper Tadong",
              "CityId": 3550
          },
          {
              "City": "Uppidamangalam",
              "CityId": 4352
          },
          {
              "City": "Uppiliapuram",
              "CityId": 4353
          },
          {
              "City": "Urachikkottai",
              "CityId": 4354
          },
          {
              "City": "Uran",
              "CityId": 2851
          },
          {
              "City": "Uran Islampur",
              "CityId": 2852
          },
          {
              "City": "Urapakkam",
              "CityId": 4355
          },
          {
              "City": "Uravakonda",
              "CityId": 275
          },
          {
              "City": "Uri",
              "CityId": 1348
          },
          {
              "City": "Urla",
              "CityId": 700
          },
          {
              "City": "Urmar Tanda",
              "CityId": 3291
          },
          {
              "City": "Usaihat",
              "CityId": 5208
          },
          {
              "City": "Usawan",
              "CityId": 5209
          },
          {
              "City": "Usilampatti",
              "CityId": 4356
          },
          {
              "City": "Utekhol",
              "CityId": 2853
          },
          {
              "City": "Uthangarai",
              "CityId": 4357
          },
          {
              "City": "Uthayendram",
              "CityId": 4358
          },
          {
              "City": "Uthiramerur",
              "CityId": 4359
          },
          {
              "City": "Uthukkottai",
              "CityId": 4360
          },
          {
              "City": "Utran",
              "CityId": 1061
          },
          {
              "City": "Utraula",
              "CityId": 5210
          },
          {
              "City": "Uttamapalaiyam",
              "CityId": 4361
          },
          {
              "City": "Uttar Durgapur",
              "CityId": 5733
          },
          {
              "City": "Uttar Goara",
              "CityId": 5734
          },
          {
              "City": "Uttar Kalas",
              "CityId": 5735
          },
          {
              "City": "Uttar Kamakhyaguri",
              "CityId": 5736
          },
          {
              "City": "Uttar Krishnapur Part-I",
              "CityId": 447
          },
          {
              "City": "Uttar Latabari",
              "CityId": 5737
          },
          {
              "City": "Uttar Mahammadpur",
              "CityId": 5738
          },
          {
              "City": "Uttar Pirpur",
              "CityId": 5739
          },
          {
              "City": "Uttar Raypur",
              "CityId": 5740
          },
          {
              "City": "Uttarahalli",
              "CityId": 1831
          },
          {
              "City": "Uttarkashi",
              "CityId": 5309
          },
          {
              "City": "Uttarpara-Kotrung",
              "CityId": 5741
          },
          {
              "City": "Uttarsanda",
              "CityId": 1062
          },
          {
              "City": "Uttukkuli",
              "CityId": 4362
          },
          {
              "City": "V.U. Nagar",
              "CityId": 1063
          },
          {
              "City": "V.V. Nagar",
              "CityId": 1064
          },
          {
              "City": "Vada",
              "CityId": 2854
          },
          {
              "City": "Vadakara",
              "CityId": 2053
          },
          {
              "City": "Vadakarai Kizhpadugai",
              "CityId": 4363
          },
          {
              "City": "Vadakkanandal",
              "CityId": 4364
          },
          {
              "City": "Vadakku Valliyur",
              "CityId": 4365
          },
          {
              "City": "Vadalur",
              "CityId": 4366
          },
          {
              "City": "Vadamadurai",
              "CityId": 4367
          },
          {
              "City": "Vadavalli",
              "CityId": 4368
          },
          {
              "City": "Vadgaon",
              "CityId": 2855
          },
          {
              "City": "Vadgaon Kasba",
              "CityId": 2856
          },
          {
              "City": "Vadia",
              "CityId": 1065
          },
          {
              "City": "Vadipatti",
              "CityId": 4369
          },
          {
              "City": "Vadla",
              "CityId": 1066
          },
          {
              "City": "Vadlapudi",
              "CityId": 276
          },
          {
              "City": "Vadnagar",
              "CityId": 1067
          },
          {
              "City": "Vadodara",
              "CityId": 1068
          },
          {
              "City": "Vadugapatti",
              "CityId": 4370
          },
          {
              "City": "Vaghodia INA",
              "CityId": 1069
          },
          {
              "City": "Vaijapur",
              "CityId": 2857
          },
          {
              "City": "Vaikam",
              "CityId": 2054
          },
          {
              "City": "Vairengte",
              "CityId": 2955
          },
          {
              "City": "Vaishali",
              "CityId": 592
          },
          {
              "City": "Vaishali",
              "CityId": 99147323
          },
          {
              "City": "Vaithiswarankoil",
              "CityId": 4371
          },
          {
              "City": "Valangaiman",
              "CityId": 4372
          },
          {
              "City": "Valapattam",
              "CityId": 2055
          },
          {
              "City": "Valasaravakkam",
              "CityId": 4373
          },
          {
              "City": "Valavanur",
              "CityId": 4374
          },
          {
              "City": "Valbhipur",
              "CityId": 1070
          },
          {
              "City": "Vallabh Vidyanagar",
              "CityId": 1071
          },
          {
              "City": "Vallachira",
              "CityId": 2056
          },
          {
              "City": "Vallam",
              "CityId": 4375
          },
          {
              "City": "Valparai",
              "CityId": 4376
          },
          {
              "City": "Valpoi",
              "CityId": 775
          },
          {
              "City": "Valsad",
              "CityId": 1072
          },
          {
              "City": "Valsad INA",
              "CityId": 1073
          },
          {
              "City": "Valvaithankoshtam",
              "CityId": 4377
          },
          {
              "City": "Vanasthali",
              "CityId": 3535
          },
          {
              "City": "Vanavasi",
              "CityId": 4378
          },
          {
              "City": "Vandalur",
              "CityId": 4379
          },
          {
              "City": "Vandavasi",
              "CityId": 4380
          },
          {
              "City": "Vandiyur",
              "CityId": 4381
          },
          {
              "City": "Vaniputhur",
              "CityId": 4382
          },
          {
              "City": "Vaniyambadi",
              "CityId": 4383
          },
          {
              "City": "Vanthali",
              "CityId": 1074
          },
          {
              "City": "Vanvadi",
              "CityId": 2858
          },
          {
              "City": "Vaparala",
              "CityId": 277
          },
          {
              "City": "Vapi",
              "CityId": 1075
          },
          {
              "City": "Vapi INA",
              "CityId": 1076
          },
          {
              "City": "Varadarajanpettai",
              "CityId": 4384
          },
          {
              "City": "Varadharajapuram",
              "CityId": 4385
          },
          {
              "City": "Varam",
              "CityId": 2057
          },
          {
              "City": "Varanasi",
              "CityId": 5211
          },
          {
              "City": "Varanasi Cantonment",
              "CityId": 5212
          },
          {
              "City": "Varangaon",
              "CityId": 2859
          },
          {
              "City": "Varappuzha",
              "CityId": 2058
          },
          {
              "City": "Varca",
              "CityId": 776
          },
          {
              "City": "Varkala",
              "CityId": 2059
          },
          {
              "City": "Vartej",
              "CityId": 1077
          },
          {
              "City": "Vasad",
              "CityId": 1078
          },
          {
              "City": "Vasai",
              "CityId": 2860
          },
          {
              "City": "Vasantnagar",
              "CityId": 2861
          },
          {
              "City": "Vasco",
              "CityId": 777
          },
          {
              "City": "Vashind",
              "CityId": 2862
          },
          {
              "City": "Vasna Borsad INA",
              "CityId": 1079
          },
          {
              "City": "Vaso",
              "CityId": 1080
          },
          {
              "City": "Vasudevanallur",
              "CityId": 4386
          },
          {
              "City": "Vathirairuppu",
              "CityId": 4387
          },
          {
              "City": "Vattalkundu",
              "CityId": 4388
          },
          {
              "City": "Vayalar",
              "CityId": 2060
          },
          {
              "City": "Vazhakkala",
              "CityId": 2061
          },
          {
              "City": "Vazhapadi",
              "CityId": 4389
          },
          {
              "City": "Vedapatti",
              "CityId": 4390
          },
          {
              "City": "Vedaranniyam",
              "CityId": 4391
          },
          {
              "City": "Vedasandur",
              "CityId": 4392
          },
          {
              "City": "Vehicle Factory Jabalpur",
              "CityId": 2470
          },
          {
              "City": "Velampalaiyam",
              "CityId": 4393
          },
          {
              "City": "Velankanni",
              "CityId": 4394
          },
          {
              "City": "Vellakinar",
              "CityId": 4395
          },
          {
              "City": "Vellakoil",
              "CityId": 4396
          },
          {
              "City": "Vellalapatti",
              "CityId": 4397
          },
          {
              "City": "Vellalur",
              "CityId": 4398
          },
          {
              "City": "Vellanur",
              "CityId": 4399
          },
          {
              "City": "Vellimalai",
              "CityId": 4400
          },
          {
              "City": "Vellore",
              "CityId": 4401
          },
          {
              "City": "Vellottamparappu",
              "CityId": 4402
          },
          {
              "City": "Velluru",
              "CityId": 4403
          },
          {
              "City": "Vemalwada",
              "CityId": 278
          },
          {
              "City": "Vemulawada",
              "CityId": 4502
          },
          {
              "City": "Vengampudur",
              "CityId": 4404
          },
          {
              "City": "Vengathur",
              "CityId": 4405
          },
          {
              "City": "Vengavasal",
              "CityId": 4406
          },
          {
              "City": "Venghatur",
              "CityId": 4407
          },
          {
              "City": "Vengurla",
              "CityId": 2863
          },
          {
              "City": "Venkarai",
              "CityId": 4408
          },
          {
              "City": "Venkatagiri",
              "CityId": 279
          },
          {
              "City": "Venkatapura",
              "CityId": 1832
          },
          {
              "City": "Venkatapuram",
              "CityId": 280
          },
          {
              "City": "Venmanad",
              "CityId": 2062
          },
          {
              "City": "Vennanthur",
              "CityId": 4409
          },
          {
              "City": "Vepagunta",
              "CityId": 281
          },
          {
              "City": "Veppathur",
              "CityId": 4410
          },
          {
              "City": "Veraval",
              "CityId": 1081
          },
          {
              "City": "Verkilambi",
              "CityId": 4411
          },
          {
              "City": "Verna",
              "CityId": 778
          },
          {
              "City": "Vetapalem",
              "CityId": 282
          },
          {
              "City": "Vettaikaranpudur",
              "CityId": 4412
          },
          {
              "City": "Vettavalam",
              "CityId": 4413
          },
          {
              "City": "Vidisha",
              "CityId": 2471
          },
          {
              "City": "Vidyanagar",
              "CityId": 1082
          },
          {
              "City": "Vidyavihar",
              "CityId": 3536
          },
          {
              "City": "Vijaigarh",
              "CityId": 5213
          },
          {
              "City": "Vijainagar",
              "CityId": 3537
          },
          {
              "City": "Vijalpor",
              "CityId": 1083
          },
          {
              "City": "Vijapur",
              "CityId": 1084
          },
          {
              "City": "Vijayapura",
              "CityId": 1833
          },
          {
              "City": "Vijayapuri",
              "CityId": 283
          },
          {
              "City": "Vijayapuri",
              "CityId": 4414
          },
          {
              "City": "Vijayapuri South",
              "CityId": 284
          },
          {
              "City": "Vijayawada",
              "CityId": 285
          },
          {
              "City": "Vijaypur",
              "CityId": 1349
          },
          {
              "City": "Vijayraghavgarh",
              "CityId": 2472
          },
          {
              "City": "Vikarabad",
              "CityId": 4503
          },
          {
              "City": "Vikasnagar",
              "CityId": 5310
          },
          {
              "City": "Vikramasingapuram",
              "CityId": 4415
          },
          {
              "City": "Vikrampur",
              "CityId": 3118
          },
          {
              "City": "Vikravandi",
              "CityId": 4416
          },
          {
              "City": "Vilangudi",
              "CityId": 4417
          },
          {
              "City": "Vilankurichi",
              "CityId": 4418
          },
          {
              "City": "Vilapakkam",
              "CityId": 4419
          },
          {
              "City": "Vilathikulam",
              "CityId": 4420
          },
          {
              "City": "Vilavur",
              "CityId": 4421
          },
          {
              "City": "Villianur",
              "CityId": 3125
          },
          {
              "City": "Villiappally",
              "CityId": 2063
          },
          {
              "City": "Villukuri",
              "CityId": 4422
          },
          {
              "City": "Villupuram",
              "CityId": 4423
          },
          {
              "City": "Vinchhiya",
              "CityId": 1085
          },
          {
              "City": "Vinukonda",
              "CityId": 286
          },
          {
              "City": "Vinzol",
              "CityId": 1086
          },
          {
              "City": "Viraganur",
              "CityId": 4424
          },
          {
              "City": "Virakeralam",
              "CityId": 4425
          },
          {
              "City": "Virakkalpudur",
              "CityId": 4426
          },
          {
              "City": "Virapandi",
              "CityId": 4427
          },
          {
              "City": "Virapandi Cantonment",
              "CityId": 4428
          },
          {
              "City": "Virappanchatram",
              "CityId": 4429
          },
          {
              "City": "Virar",
              "CityId": 2864
          },
          {
              "City": "Virarajendrapet",
              "CityId": 1834
          },
          {
              "City": "Viratnagar",
              "CityId": 3538
          },
          {
              "City": "Viravanallur",
              "CityId": 4430
          },
          {
              "City": "Virbhadra",
              "CityId": 5311
          },
          {
              "City": "Virpur",
              "CityId": 1087
          },
          {
              "City": "Virudambattu",
              "CityId": 4431
          },
          {
              "City": "Virudhachalam",
              "CityId": 4432
          },
          {
              "City": "Virudhunagar",
              "CityId": 4433
          },
          {
              "City": "Virupakshipuram",
              "CityId": 4434
          },
          {
              "City": "Visakhapatnam",
              "CityId": 287
          },
          {
              "City": "Visapur",
              "CityId": 2865
          },
          {
              "City": "Visavadar",
              "CityId": 1088
          },
          {
              "City": "Vishrampur",
              "CityId": 701
          },
          {
              "City": "Visnagar",
              "CityId": 1089
          },
          {
              "City": "Viswanatham",
              "CityId": 4435
          },
          {
              "City": "Vite",
              "CityId": 2866
          },
          {
              "City": "Vithalwadi",
              "CityId": 2867
          },
          {
              "City": "Vizianagaram",
              "CityId": 288
          },
          {
              "City": "Vriddhachalam",
              "CityId": 4436
          },
          {
              "City": "Vrindavan",
              "CityId": 5214
          },
          {
              "City": "Vuyyuru",
              "CityId": 289
          },
          {
              "City": "Vyara",
              "CityId": 1090
          },
          {
              "City": "Wadhwan",
              "CityId": 1091
          },
          {
              "City": "Wadi",
              "CityId": 1835
          },
          {
              "City": "Wadi",
              "CityId": 2868
          },
          {
              "City": "Wadi A.C.C.",
              "CityId": 1836
          },
          {
              "City": "Waghai",
              "CityId": 1092
          },
          {
              "City": "Waghapur",
              "CityId": 2869
          },
          {
              "City": "Waghodia",
              "CityId": 1093
          },
          {
              "City": "Wai",
              "CityId": 2870
          },
          {
              "City": "Wajegaon",
              "CityId": 2871
          },
          {
              "City": "Walajabad",
              "CityId": 4437
          },
          {
              "City": "Walajapet",
              "CityId": 4438
          },
          {
              "City": "Walani",
              "CityId": 2872
          },
          {
              "City": "Wanadongri",
              "CityId": 2873
          },
          {
              "City": "Wanaparthy",
              "CityId": 4504
          },
          {
              "City": "Wangjing",
              "CityId": 2916
          },
          {
              "City": "Wangoi",
              "CityId": 2917
          },
          {
              "City": "Wani",
              "CityId": 2874
          },
          {
              "City": "Wankaner",
              "CityId": 1094
          },
          {
              "City": "Wanparti",
              "CityId": 290
          },
          {
              "City": "Warangal",
              "CityId": 4505
          },
          {
              "City": "Waraseoni",
              "CityId": 2473
          },
          {
              "City": "Wardha",
              "CityId": 2875
          },
          {
              "City": "Waris Aliganj",
              "CityId": 593
          },
          {
              "City": "Warora",
              "CityId": 2876
          },
          {
              "City": "Warthi",
              "CityId": 2877
          },
          {
              "City": "Warud",
              "CityId": 2878
          },
          {
              "City": "Washim",
              "CityId": 2879
          },
          {
              "City": "Wayanad",
              "CityId": 2064
          },
          {
              "City": "Wazirganj",
              "CityId": 5215
          },
          {
              "City": "Wellington",
              "CityId": 4439
          },
          {
              "City": "Wer",
              "CityId": 3539
          },
          {
              "City": "West Godavari Dist.",
              "CityId": 291
          },
          {
              "City": "Williamnagar",
              "CityId": 2934
          },
          {
              "City": "Wokha",
              "CityId": 2964
          },
          {
              "City": "Yadagirigutta",
              "CityId": 292
          },
          {
              "City": "Yadgir",
              "CityId": 1837
          },
          {
              "City": "Yairipok",
              "CityId": 2918
          },
          {
              "City": "Yamunanagar",
              "CityId": 1204
          },
          {
              "City": "Yanam",
              "CityId": 3126
          },
          {
              "City": "Yarada",
              "CityId": 293
          },
          {
              "City": "Yaval",
              "CityId": 2880
          },
          {
              "City": "Yavatmal",
              "CityId": 2881
          },
          {
              "City": "Yelahanka",
              "CityId": 1838
          },
          {
              "City": "Yelandur",
              "CityId": 1839
          },
          {
              "City": "Yelbarga",
              "CityId": 1840
          },
          {
              "City": "Yellamanchili",
              "CityId": 294
          },
          {
              "City": "Yellandu",
              "CityId": 4506
          },
          {
              "City": "Yellapur",
              "CityId": 1841
          },
          {
              "City": "Yemmiganur",
              "CityId": 295
          },
          {
              "City": "Yenagudde",
              "CityId": 1842
          },
          {
              "City": "Yenamalakudru",
              "CityId": 296
          },
          {
              "City": "Yendada",
              "CityId": 297
          },
          {
              "City": "Yeola",
              "CityId": 2882
          },
          {
              "City": "Yercaud",
              "CityId": 4440
          },
          {
              "City": "Yerkheda",
              "CityId": 2883
          },
          {
              "City": "Yerraguntla",
              "CityId": 298
          },
          {
              "City": "Yol",
              "CityId": 1272
          },
          {
              "City": "Zafarabad",
              "CityId": 5216
          },
          {
              "City": "Zahirabad",
              "CityId": 4507
          },
          {
              "City": "Zaidpur",
              "CityId": 5217
          },
          {
              "City": "Zalod",
              "CityId": 1095
          },
          {
              "City": "Zamania",
              "CityId": 5218
          },
          {
              "City": "Zamin Uthukuli",
              "CityId": 4441
          },
          {
              "City": "Zawlnuam",
              "CityId": 2956
          },
          {
              "City": "Zira",
              "CityId": 3292
          },
          {
              "City": "Zirakpur",
              "CityId": 3293
          },
          {
              "City": "Ziro",
              "CityId": 315
          },
          {
              "City": "Zunheboto",
              "CityId": 2965
          }
      ],
      "ReportingUsers": [
          {
              "UserId": 1867,
              "ContactName": "aaa ( Ramesh Kumar)"
          },
          {
              "UserId": 31,
              "ContactName": "Administrator(Organization Admin)"
          },
          {
              "UserId": 1430,
              "ContactName": "Aquib  Ishaq (Developer)"
          },
          {
              "UserId": 1428,
              "ContactName": "Aquib  Pointing (Developer)"
          },
          {
              "UserId": 2026,
              "ContactName": "demo (fdfd)"
          },
          {
              "UserId": 2027,
              "ContactName": "dev22 (test fiur)"
          },
          {
              "UserId": 1892,
              "ContactName": "ecom ( Ramesh )"
          },
          {
              "UserId": 1889,
              "ContactName": "Man ( Ramesh )"
          },
          {
              "UserId": 2225,
              "ContactName": "mateen ( Ramesh Kumar)"
          },
          {
              "UserId": 1904,
              "ContactName": "oct 14 ( Ramesh )"
          },
          {
              "UserId": 2226,
              "ContactName": "ramesh ( Ramesh Kumar)"
          },
          {
              "UserId": 2320,
              "ContactName": "Rohit  (Ang_DMS)"
          },
          {
              "UserId": 1874,
              "ContactName": "shell (Angular developer)"
          },
          {
              "UserId": 1875,
              "ContactName": "Super ( Ramesh Kumar)"
          },
          {
              "UserId": 2150,
              "ContactName": "suresh f (aaaaaaa)"
          },
          {
              "UserId": 1884,
              "ContactName": "test ( Ramesh )"
          },
          {
              "UserId": 1885,
              "ContactName": "test ( Ramesh )"
          },
          {
              "UserId": 1898,
              "ContactName": "Test ( Ramesh )"
          },
          {
              "UserId": 1905,
              "ContactName": "test ( Ramesh )"
          },
          {
              "UserId": 1914,
              "ContactName": "test ( Ramesh )"
          },
          {
              "UserId": 1915,
              "ContactName": "test ( Ramesh )"
          },
          {
              "UserId": 1916,
              "ContactName": "test ( Ramesh )"
          },
          {
              "UserId": 1933,
              "ContactName": "test ( Ramesh )"
          },
          {
              "UserId": 1870,
              "ContactName": "test ( Ramesh Kumar)"
          },
          {
              "UserId": 2053,
              "ContactName": "test ( Ramesh Kumar)"
          },
          {
              "UserId": 2019,
              "ContactName": "test (Enter Designation testg)"
          },
          {
              "UserId": 2025,
              "ContactName": "test (Enter Designation testg)"
          },
          {
              "UserId": 1897,
              "ContactName": "test 5555 ( Ramesh )"
          },
          {
              "UserId": 1883,
              "ContactName": "Test Work 27 ( Ramesh )"
          },
          {
              "UserId": 1917,
              "ContactName": "Test working ( Ramesh )"
          },
          {
              "UserId": 2030,
              "ContactName": "Test1356 (working)"
          },
          {
              "UserId": 2031,
              "ContactName": "Test1456 (Test )"
          },
          {
              "UserId": 1886,
              "ContactName": "tester ( Ramesh Kumar)"
          },
          {
              "UserId": 1876,
              "ContactName": "testing ( Ramesh )"
          },
          {
              "UserId": 1881,
              "ContactName": "testing ( Ramesh )"
          },
          {
              "UserId": 1893,
              "ContactName": "Testing ( Ramesh )"
          },
          {
              "UserId": 1864,
              "ContactName": "Testmateen  ( Ramesh Kumar)"
          },
          {
              "UserId": 1863,
              "ContactName": "TestRamesh  ( Ramesh )"
          },
          {
              "UserId": 1865,
              "ContactName": "testwork123 ( Ramesh Kumar)"
          },
          {
              "UserId": 2227,
              "ContactName": "waseen ( Ramesh Kumar)"
          },
          {
              "UserId": 1871,
              "ContactName": "work ( Ramesh )"
          },
          {
              "UserId": 1872,
              "ContactName": "work ( Ramesh )"
          },
          {
              "UserId": 1873,
              "ContactName": "work ( Ramesh )"
          },
          {
              "UserId": 1932,
              "ContactName": "work ( Ramesh )"
          },
          {
              "UserId": 1879,
              "ContactName": "Work1344 ( Ramesh )"
          },
          {
              "UserId": 1869,
              "ContactName": "work17 ( Ramesh Kumar)"
          },
          {
              "UserId": 1877,
              "ContactName": "working ( Ramesh )"
          },
          {
              "UserId": 1887,
              "ContactName": "Working ( Ramesh )"
          },
          {
              "UserId": 1908,
              "ContactName": "Working ( Ramesh )"
          },
          {
              "UserId": 2000,
              "ContactName": "working (aaaaaaa)"
          },
          {
              "UserId": 1859,
              "ContactName": "working 678 ( Ramesh )"
          },
          {
              "UserId": 1868,
              "ContactName": "working 777 ( Ramesh Kumar)"
          },
          {
              "UserId": 1866,
              "ContactName": "working123 ( Ramesh )"
          },
          {
              "UserId": 1910,
              "ContactName": "wotking Tester ( Ramesh )"
          }
      ],
      "Country": [
          {
              "CountryId": 1,
              "Country": "Afghanistan"
          },
          {
              "CountryId": 2,
              "Country": "Albania"
          },
          {
              "CountryId": 3,
              "Country": "Algeria"
          },
          {
              "CountryId": 4,
              "Country": "American Samoa"
          },
          {
              "CountryId": 5,
              "Country": "Andorra"
          },
          {
              "CountryId": 6,
              "Country": "Angola"
          },
          {
              "CountryId": 7,
              "Country": "Anguilla"
          },
          {
              "CountryId": 8,
              "Country": "Antarctica"
          },
          {
              "CountryId": 9,
              "Country": "Antigua And Barbuda"
          },
          {
              "CountryId": 10,
              "Country": "Argentina"
          },
          {
              "CountryId": 11,
              "Country": "Armenia"
          },
          {
              "CountryId": 12,
              "Country": "Aruba"
          },
          {
              "CountryId": 13,
              "Country": "Australia"
          },
          {
              "CountryId": 14,
              "Country": "Austria"
          },
          {
              "CountryId": 15,
              "Country": "Azerbaijan"
          },
          {
              "CountryId": 16,
              "Country": "Bahamas The"
          },
          {
              "CountryId": 17,
              "Country": "Bahrain"
          },
          {
              "CountryId": 18,
              "Country": "Bangladesh"
          },
          {
              "CountryId": 19,
              "Country": "Barbados"
          },
          {
              "CountryId": 20,
              "Country": "Belarus"
          },
          {
              "CountryId": 21,
              "Country": "Belgium"
          },
          {
              "CountryId": 22,
              "Country": "Belize"
          },
          {
              "CountryId": 23,
              "Country": "Benin"
          },
          {
              "CountryId": 24,
              "Country": "Bermuda"
          },
          {
              "CountryId": 25,
              "Country": "Bhutan"
          },
          {
              "CountryId": 26,
              "Country": "Bolivia"
          },
          {
              "CountryId": 27,
              "Country": "Bosnia and Herzegovina"
          },
          {
              "CountryId": 28,
              "Country": "Botswana"
          },
          {
              "CountryId": 29,
              "Country": "Bouvet Island"
          },
          {
              "CountryId": 30,
              "Country": "Brazil"
          },
          {
              "CountryId": 31,
              "Country": "British Indian Ocean Territory"
          },
          {
              "CountryId": 32,
              "Country": "Brunei"
          },
          {
              "CountryId": 33,
              "Country": "Bulgaria"
          },
          {
              "CountryId": 34,
              "Country": "Burkina Faso"
          },
          {
              "CountryId": 35,
              "Country": "Burundi"
          },
          {
              "CountryId": 36,
              "Country": "Cambodia"
          },
          {
              "CountryId": 37,
              "Country": "Cameroon"
          },
          {
              "CountryId": 38,
              "Country": "Canada"
          },
          {
              "CountryId": 39,
              "Country": "Cape Verde"
          },
          {
              "CountryId": 40,
              "Country": "Cayman Islands"
          },
          {
              "CountryId": 41,
              "Country": "Central African Republic"
          },
          {
              "CountryId": 42,
              "Country": "Chad"
          },
          {
              "CountryId": 43,
              "Country": "Chile"
          },
          {
              "CountryId": 44,
              "Country": "China"
          },
          {
              "CountryId": 45,
              "Country": "Christmas Island"
          },
          {
              "CountryId": 46,
              "Country": "Cocos (Keeling) Islands"
          },
          {
              "CountryId": 47,
              "Country": "Colombia"
          },
          {
              "CountryId": 48,
              "Country": "Comoros"
          },
          {
              "CountryId": 49,
              "Country": "Republic Of The Congo"
          },
          {
              "CountryId": 50,
              "Country": "Democratic Republic Of The Congo"
          },
          {
              "CountryId": 51,
              "Country": "Cook Islands"
          },
          {
              "CountryId": 52,
              "Country": "Costa Rica"
          },
          {
              "CountryId": 53,
              "Country": "Cote D'Ivoire (Ivory Coast)"
          },
          {
              "CountryId": 54,
              "Country": "Croatia (Hrvatska)"
          },
          {
              "CountryId": 55,
              "Country": "Cuba"
          },
          {
              "CountryId": 56,
              "Country": "Cyprus"
          },
          {
              "CountryId": 57,
              "Country": "Czech Republic"
          },
          {
              "CountryId": 58,
              "Country": "Denmark"
          },
          {
              "CountryId": 59,
              "Country": "Djibouti"
          },
          {
              "CountryId": 60,
              "Country": "Dominica"
          },
          {
              "CountryId": 61,
              "Country": "Dominican Republic"
          },
          {
              "CountryId": 62,
              "Country": "East Timor"
          },
          {
              "CountryId": 63,
              "Country": "Ecuador"
          },
          {
              "CountryId": 64,
              "Country": "Egypt"
          },
          {
              "CountryId": 65,
              "Country": "El Salvador"
          },
          {
              "CountryId": 66,
              "Country": "Equatorial Guinea"
          },
          {
              "CountryId": 67,
              "Country": "Eritrea"
          },
          {
              "CountryId": 68,
              "Country": "Estonia"
          },
          {
              "CountryId": 69,
              "Country": "Ethiopia"
          },
          {
              "CountryId": 70,
              "Country": "External Territories of Australia"
          },
          {
              "CountryId": 71,
              "Country": "Falkland Islands"
          },
          {
              "CountryId": 72,
              "Country": "Faroe Islands"
          },
          {
              "CountryId": 73,
              "Country": "Fiji Islands"
          },
          {
              "CountryId": 74,
              "Country": "Finland"
          },
          {
              "CountryId": 75,
              "Country": "France"
          },
          {
              "CountryId": 76,
              "Country": "French Guiana"
          },
          {
              "CountryId": 77,
              "Country": "French Polynesia"
          },
          {
              "CountryId": 78,
              "Country": "French Southern Territories"
          },
          {
              "CountryId": 79,
              "Country": "Gabon"
          },
          {
              "CountryId": 80,
              "Country": "Gambia The"
          },
          {
              "CountryId": 81,
              "Country": "Georgia"
          },
          {
              "CountryId": 82,
              "Country": "Germany"
          },
          {
              "CountryId": 83,
              "Country": "Ghana"
          },
          {
              "CountryId": 84,
              "Country": "Gibraltar"
          },
          {
              "CountryId": 85,
              "Country": "Greece"
          },
          {
              "CountryId": 86,
              "Country": "Greenland"
          },
          {
              "CountryId": 87,
              "Country": "Grenada"
          },
          {
              "CountryId": 88,
              "Country": "Guadeloupe"
          },
          {
              "CountryId": 89,
              "Country": "Guam"
          },
          {
              "CountryId": 90,
              "Country": "Guatemala"
          },
          {
              "CountryId": 91,
              "Country": "Guernsey and Alderney"
          },
          {
              "CountryId": 92,
              "Country": "Guinea"
          },
          {
              "CountryId": 93,
              "Country": "Guinea-Bissau"
          },
          {
              "CountryId": 94,
              "Country": "Guyana"
          },
          {
              "CountryId": 95,
              "Country": "Haiti"
          },
          {
              "CountryId": 96,
              "Country": "Heard and McDonald Islands"
          },
          {
              "CountryId": 97,
              "Country": "Honduras"
          },
          {
              "CountryId": 98,
              "Country": "Hong Kong S.A.R."
          },
          {
              "CountryId": 99,
              "Country": "Hungary"
          },
          {
              "CountryId": 100,
              "Country": "Iceland"
          },
          {
              "CountryId": 101,
              "Country": "India"
          },
          {
              "CountryId": 102,
              "Country": "Indonesia"
          },
          {
              "CountryId": 103,
              "Country": "Iran"
          },
          {
              "CountryId": 104,
              "Country": "Iraq"
          },
          {
              "CountryId": 105,
              "Country": "Ireland"
          },
          {
              "CountryId": 106,
              "Country": "Israel"
          },
          {
              "CountryId": 107,
              "Country": "Italy"
          },
          {
              "CountryId": 108,
              "Country": "Jamaica"
          },
          {
              "CountryId": 109,
              "Country": "Japan"
          },
          {
              "CountryId": 110,
              "Country": "Jersey"
          },
          {
              "CountryId": 111,
              "Country": "Jordan"
          },
          {
              "CountryId": 112,
              "Country": "Kazakhstan"
          },
          {
              "CountryId": 113,
              "Country": "Kenya"
          },
          {
              "CountryId": 114,
              "Country": "Kiribati"
          },
          {
              "CountryId": 115,
              "Country": "Korea North"
          },
          {
              "CountryId": 116,
              "Country": "Korea South"
          },
          {
              "CountryId": 117,
              "Country": "Kuwait"
          },
          {
              "CountryId": 118,
              "Country": "Kyrgyzstan"
          },
          {
              "CountryId": 119,
              "Country": "Laos"
          },
          {
              "CountryId": 120,
              "Country": "Latvia"
          },
          {
              "CountryId": 121,
              "Country": "Lebanon"
          },
          {
              "CountryId": 122,
              "Country": "Lesotho"
          },
          {
              "CountryId": 123,
              "Country": "Liberia"
          },
          {
              "CountryId": 124,
              "Country": "Libya"
          },
          {
              "CountryId": 125,
              "Country": "Liechtenstein"
          },
          {
              "CountryId": 126,
              "Country": "Lithuania"
          },
          {
              "CountryId": 127,
              "Country": "Luxembourg"
          },
          {
              "CountryId": 128,
              "Country": "Macau S.A.R."
          },
          {
              "CountryId": 129,
              "Country": "Macedonia"
          },
          {
              "CountryId": 130,
              "Country": "Madagascar"
          },
          {
              "CountryId": 131,
              "Country": "Malawi"
          },
          {
              "CountryId": 132,
              "Country": "Malaysia"
          },
          {
              "CountryId": 133,
              "Country": "Maldives"
          },
          {
              "CountryId": 134,
              "Country": "Mali"
          },
          {
              "CountryId": 135,
              "Country": "Malta"
          },
          {
              "CountryId": 136,
              "Country": "Man (Isle of)"
          },
          {
              "CountryId": 137,
              "Country": "Marshall Islands"
          },
          {
              "CountryId": 138,
              "Country": "Martinique"
          },
          {
              "CountryId": 139,
              "Country": "Mauritania"
          },
          {
              "CountryId": 140,
              "Country": "Mauritius"
          },
          {
              "CountryId": 141,
              "Country": "Mayotte"
          },
          {
              "CountryId": 142,
              "Country": "Mexico"
          },
          {
              "CountryId": 143,
              "Country": "Micronesia"
          },
          {
              "CountryId": 144,
              "Country": "Moldova"
          },
          {
              "CountryId": 145,
              "Country": "Monaco"
          },
          {
              "CountryId": 146,
              "Country": "Mongolia"
          },
          {
              "CountryId": 147,
              "Country": "Montserrat"
          },
          {
              "CountryId": 148,
              "Country": "Morocco"
          },
          {
              "CountryId": 149,
              "Country": "Mozambique"
          },
          {
              "CountryId": 150,
              "Country": "Myanmar"
          },
          {
              "CountryId": 151,
              "Country": "Namibia"
          },
          {
              "CountryId": 152,
              "Country": "Nauru"
          },
          {
              "CountryId": 153,
              "Country": "Nepal"
          },
          {
              "CountryId": 154,
              "Country": "Netherlands Antilles"
          },
          {
              "CountryId": 155,
              "Country": "Netherlands The"
          },
          {
              "CountryId": 156,
              "Country": "New Caledonia"
          },
          {
              "CountryId": 157,
              "Country": "New Zealand"
          },
          {
              "CountryId": 158,
              "Country": "Nicaragua"
          },
          {
              "CountryId": 159,
              "Country": "Niger"
          },
          {
              "CountryId": 160,
              "Country": "Nigeria"
          },
          {
              "CountryId": 161,
              "Country": "Niue"
          },
          {
              "CountryId": 162,
              "Country": "Norfolk Island"
          },
          {
              "CountryId": 163,
              "Country": "Northern Mariana Islands"
          },
          {
              "CountryId": 164,
              "Country": "Norway"
          },
          {
              "CountryId": 165,
              "Country": "Oman"
          },
          {
              "CountryId": 166,
              "Country": "Pakistan"
          },
          {
              "CountryId": 167,
              "Country": "Palau"
          },
          {
              "CountryId": 168,
              "Country": "Palestinian Territory Occupied"
          },
          {
              "CountryId": 169,
              "Country": "Panama"
          },
          {
              "CountryId": 170,
              "Country": "Papua new Guinea"
          },
          {
              "CountryId": 171,
              "Country": "Paraguay"
          },
          {
              "CountryId": 172,
              "Country": "Peru"
          },
          {
              "CountryId": 173,
              "Country": "Philippines"
          },
          {
              "CountryId": 174,
              "Country": "Pitcairn Island"
          },
          {
              "CountryId": 175,
              "Country": "Poland"
          },
          {
              "CountryId": 176,
              "Country": "Portugal"
          },
          {
              "CountryId": 177,
              "Country": "Puerto Rico"
          },
          {
              "CountryId": 178,
              "Country": "Qatar"
          },
          {
              "CountryId": 179,
              "Country": "Reunion"
          },
          {
              "CountryId": 180,
              "Country": "Romania"
          },
          {
              "CountryId": 181,
              "Country": "Russia"
          },
          {
              "CountryId": 182,
              "Country": "Rwanda"
          },
          {
              "CountryId": 183,
              "Country": "Saint Helena"
          },
          {
              "CountryId": 184,
              "Country": "Saint Kitts And Nevis"
          },
          {
              "CountryId": 185,
              "Country": "Saint Lucia"
          },
          {
              "CountryId": 186,
              "Country": "Saint Pierre and Miquelon"
          },
          {
              "CountryId": 187,
              "Country": "Saint Vincent And The Grenadines"
          },
          {
              "CountryId": 188,
              "Country": "Samoa"
          },
          {
              "CountryId": 189,
              "Country": "San Marino"
          },
          {
              "CountryId": 190,
              "Country": "Sao Tome and Principe"
          },
          {
              "CountryId": 191,
              "Country": "Saudi Arabia"
          },
          {
              "CountryId": 192,
              "Country": "Senegal"
          },
          {
              "CountryId": 193,
              "Country": "Serbia"
          },
          {
              "CountryId": 194,
              "Country": "Seychelles"
          },
          {
              "CountryId": 195,
              "Country": "Sierra Leone"
          },
          {
              "CountryId": 196,
              "Country": "Singapore"
          },
          {
              "CountryId": 197,
              "Country": "Slovakia"
          },
          {
              "CountryId": 198,
              "Country": "Slovenia"
          },
          {
              "CountryId": 199,
              "Country": "Smaller Territories of the UK"
          },
          {
              "CountryId": 200,
              "Country": "Solomon Islands"
          },
          {
              "CountryId": 201,
              "Country": "Somalia"
          },
          {
              "CountryId": 202,
              "Country": "South Africa"
          },
          {
              "CountryId": 203,
              "Country": "South Georgia"
          },
          {
              "CountryId": 204,
              "Country": "South Sudan"
          },
          {
              "CountryId": 205,
              "Country": "Spain"
          },
          {
              "CountryId": 206,
              "Country": "Sri Lanka"
          },
          {
              "CountryId": 207,
              "Country": "Sudan"
          },
          {
              "CountryId": 208,
              "Country": "Suriname"
          },
          {
              "CountryId": 209,
              "Country": "Svalbard And Jan Mayen Islands"
          },
          {
              "CountryId": 210,
              "Country": "Swaziland"
          },
          {
              "CountryId": 211,
              "Country": "Sweden"
          },
          {
              "CountryId": 212,
              "Country": "Switzerland"
          },
          {
              "CountryId": 213,
              "Country": "Syria"
          },
          {
              "CountryId": 214,
              "Country": "Taiwan"
          },
          {
              "CountryId": 215,
              "Country": "Tajikistan"
          },
          {
              "CountryId": 216,
              "Country": "Tanzania"
          },
          {
              "CountryId": 217,
              "Country": "Thailand"
          },
          {
              "CountryId": 218,
              "Country": "Togo"
          },
          {
              "CountryId": 219,
              "Country": "Tokelau"
          },
          {
              "CountryId": 220,
              "Country": "Tonga"
          },
          {
              "CountryId": 221,
              "Country": "Trinidad And Tobago"
          },
          {
              "CountryId": 222,
              "Country": "Tunisia"
          },
          {
              "CountryId": 223,
              "Country": "Turkey"
          },
          {
              "CountryId": 224,
              "Country": "Turkmenistan"
          },
          {
              "CountryId": 225,
              "Country": "Turks And Caicos Islands"
          },
          {
              "CountryId": 226,
              "Country": "Tuvalu"
          },
          {
              "CountryId": 227,
              "Country": "Uganda"
          },
          {
              "CountryId": 228,
              "Country": "Ukraine"
          },
          {
              "CountryId": 229,
              "Country": "United Arab Emirates"
          },
          {
              "CountryId": 230,
              "Country": "United Kingdom"
          },
          {
              "CountryId": 231,
              "Country": "United States"
          },
          {
              "CountryId": 232,
              "Country": "United States Minor Outlying Islands"
          },
          {
              "CountryId": 233,
              "Country": "Uruguay"
          },
          {
              "CountryId": 234,
              "Country": "Uzbekistan"
          },
          {
              "CountryId": 235,
              "Country": "Vanuatu"
          },
          {
              "CountryId": 236,
              "Country": "Vatican City State (Holy See)"
          },
          {
              "CountryId": 237,
              "Country": "Venezuela"
          },
          {
              "CountryId": 238,
              "Country": "Vietnam"
          },
          {
              "CountryId": 239,
              "Country": "Virgin Islands (British)"
          },
          {
              "CountryId": 240,
              "Country": "Virgin Islands (US)"
          },
          {
              "CountryId": 241,
              "Country": "Wallis And Futuna Islands"
          },
          {
              "CountryId": 242,
              "Country": "Western Sahara"
          },
          {
              "CountryId": 243,
              "Country": "Yemen"
          },
          {
              "CountryId": 244,
              "Country": "Yugoslavia"
          },
          {
              "CountryId": 245,
              "Country": "Zambia"
          },
          {
              "CountryId": 246,
              "Country": "Zimbabwe"
          }
      ],
      "Company": [
          {
              "CompanyId": 64,
              "CompanyName": "aaaaaa"
          },
          {
              "CompanyId": 107,
              "CompanyName": "africa_com"
          },
          {
              "CompanyId": 1131,
              "CompanyName": "Amazon"
          },
          {
              "CompanyId": 20,
              "CompanyName": "asd"
          },
          {
              "CompanyId": 110,
              "CompanyName": "asdff"
          },
          {
              "CompanyId": 10,
              "CompanyName": "ASM Enterprises"
          },
          {
              "CompanyId": 13,
              "CompanyName": "Company 1"
          },
          {
              "CompanyId": 14,
              "CompanyName": "Company 2"
          },
          {
              "CompanyId": 77,
              "CompanyName": "Creative solutions"
          },
          {
              "CompanyId": 1164,
              "CompanyName": "Dairy  Software"
          },
          {
              "CompanyId": 124,
              "CompanyName": "ddd"
          },
          {
              "CompanyId": 91,
              "CompanyName": "ddddd"
          },
          {
              "CompanyId": 1175,
              "CompanyName": "Demo Myntra"
          },
          {
              "CompanyId": 100,
              "CompanyName": "dfsdfsdf"
          },
          {
              "CompanyId": 105,
              "CompanyName": "east_com"
          },
          {
              "CompanyId": 114,
              "CompanyName": "ffgfg"
          },
          {
              "CompanyId": 21,
              "CompanyName": "Gshock"
          },
          {
              "CompanyId": 1159,
              "CompanyName": "IIT software"
          },
          {
              "CompanyId": 1168,
              "CompanyName": "IT DMS"
          },
          {
              "CompanyId": 1160,
              "CompanyName": "IT WEB"
          },
          {
              "CompanyId": 126,
              "CompanyName": "jhbjhbke"
          },
          {
              "CompanyId": 1135,
              "CompanyName": "MI PVT LTD"
          },
          {
              "CompanyId": 66,
              "CompanyName": "MTIT"
          },
          {
              "CompanyId": 67,
              "CompanyName": "MTIT1"
          },
          {
              "CompanyId": 68,
              "CompanyName": "MTIT2"
          },
          {
              "CompanyId": 80,
              "CompanyName": "MTITDC124"
          },
          {
              "CompanyId": 106,
              "CompanyName": "north_com"
          },
          {
              "CompanyId": 92,
              "CompanyName": "oidklj dj"
          },
          {
              "CompanyId": 1156,
              "CompanyName": "ORIGAMI SOFTWARE"
          },
          {
              "CompanyId": 63,
              "CompanyName": "qwe"
          },
          {
              "CompanyId": 65,
              "CompanyName": "qwerty"
          },
          {
              "CompanyId": 79,
              "CompanyName": "qwertytest"
          },
          {
              "CompanyId": 116,
              "CompanyName": "ramesh testing"
          },
          {
              "CompanyId": 1152,
              "CompanyName": "SAff"
          },
          {
              "CompanyId": 84,
              "CompanyName": "sam"
          },
          {
              "CompanyId": 95,
              "CompanyName": "sam"
          },
          {
              "CompanyId": 85,
              "CompanyName": "sam1"
          },
          {
              "CompanyId": 86,
              "CompanyName": "sam2"
          },
          {
              "CompanyId": 99,
              "CompanyName": "sam2333"
          },
          {
              "CompanyId": 97,
              "CompanyName": "sam3"
          },
          {
              "CompanyId": 98,
              "CompanyName": "sam33"
          },
          {
              "CompanyId": 96,
              "CompanyName": "sam4"
          },
          {
              "CompanyId": 93,
              "CompanyName": "same1"
          },
          {
              "CompanyId": 94,
              "CompanyName": "same2"
          },
          {
              "CompanyId": 83,
              "CompanyName": "sameer"
          },
          {
              "CompanyId": 1154,
              "CompanyName": "software test"
          },
          {
              "CompanyId": 108,
              "CompanyName": "south@_com"
          },
          {
              "CompanyId": 82,
              "CompanyName": "sssssss"
          },
          {
              "CompanyId": 1165,
              "CompanyName": "tech software"
          },
          {
              "CompanyId": 17,
              "CompanyName": "Test"
          },
          {
              "CompanyId": 1141,
              "CompanyName": "Test Company TC"
          },
          {
              "CompanyId": 1129,
              "CompanyName": "test gggg"
          },
          {
              "CompanyId": 120,
              "CompanyName": "test live111"
          },
          {
              "CompanyId": 19,
              "CompanyName": "Test-1"
          },
          {
              "CompanyId": 118,
              "CompanyName": "test101"
          },
          {
              "CompanyId": 88,
              "CompanyName": "test12"
          },
          {
              "CompanyId": 1127,
              "CompanyName": "test150"
          },
          {
              "CompanyId": 89,
              "CompanyName": "test23"
          },
          {
              "CompanyId": 18,
              "CompanyName": "Test-3"
          },
          {
              "CompanyId": 90,
              "CompanyName": "testing1"
          },
          {
              "CompanyId": 101,
              "CompanyName": "testing12"
          },
          {
              "CompanyId": 102,
              "CompanyName": "testing12"
          },
          {
              "CompanyId": 103,
              "CompanyName": "testing13"
          },
          {
              "CompanyId": 104,
              "CompanyName": "testing133"
          },
          {
              "CompanyId": 112,
              "CompanyName": "testing80"
          },
          {
              "CompanyId": 87,
              "CompanyName": "tttttttt"
          },
          {
              "CompanyId": 1142,
              "CompanyName": "Vivo Company"
          },
          {
              "CompanyId": 1169,
              "CompanyName": "Works Software"
          },
          {
              "CompanyId": 122,
              "CompanyName": "www"
          }
      ],
      "Department": [
          {
              "DepartmentId": 160,
              "DepartmentName": "adsasd"
          },
          {
              "DepartmentId": 154,
              "DepartmentName": "Angular"
          },
          {
              "DepartmentId": 89,
              "DepartmentName": "asd"
          },
          {
              "DepartmentId": 206,
              "DepartmentName": "asdasd"
          },
          {
              "DepartmentId": 162,
              "DepartmentName": "ddd"
          },
          {
              "DepartmentId": 11,
              "DepartmentName": "Designer"
          },
          {
              "DepartmentId": 156,
              "DepartmentName": "dev"
          },
          {
              "DepartmentId": 78,
              "DepartmentName": "Development"
          },
          {
              "DepartmentId": 192,
              "DepartmentName": "dsgsdgsdfgsdfg"
          },
          {
              "DepartmentId": 173,
              "DepartmentName": "ghjgjgjghj"
          },
          {
              "DepartmentId": 189,
              "DepartmentName": "HEAD1"
          },
          {
              "DepartmentId": 140,
              "DepartmentName": "HR"
          },
          {
              "DepartmentId": 79,
              "DepartmentName": "IT"
          },
          {
              "DepartmentId": 193,
              "DepartmentName": "IT Department"
          },
          {
              "DepartmentId": 203,
              "DepartmentName": "IT DMS DERT"
          },
          {
              "DepartmentId": 185,
              "DepartmentName": "Jabbar"
          },
          {
              "DepartmentId": 186,
              "DepartmentName": "lmcsnkllsd c"
          },
          {
              "DepartmentId": 220,
              "DepartmentName": "Menswear"
          },
          {
              "DepartmentId": 199,
              "DepartmentName": "MIVI software"
          },
          {
              "DepartmentId": 187,
              "DepartmentName": "Moblie"
          },
          {
              "DepartmentId": 172,
              "DepartmentName": "nbbnbn"
          },
          {
              "DepartmentId": 212,
              "DepartmentName": "People "
          },
          {
              "DepartmentId": 216,
              "DepartmentName": "QWW"
          },
          {
              "DepartmentId": 200,
              "DepartmentName": "RBC Department"
          },
          {
              "DepartmentId": 188,
              "DepartmentName": "Realme phone"
          },
          {
              "DepartmentId": 174,
              "DepartmentName": "ryrr"
          },
          {
              "DepartmentId": 145,
              "DepartmentName": "sam"
          },
          {
              "DepartmentId": 139,
              "DepartmentName": "Software"
          },
          {
              "DepartmentId": 204,
              "DepartmentName": "Software Department"
          },
          {
              "DepartmentId": 151,
              "DepartmentName": "test"
          },
          {
              "DepartmentId": 195,
              "DepartmentName": "test 555"
          },
          {
              "DepartmentId": 149,
              "DepartmentName": "test1"
          },
          {
              "DepartmentId": 157,
              "DepartmentName": "test101"
          },
          {
              "DepartmentId": 146,
              "DepartmentName": "testing"
          },
          {
              "DepartmentId": 147,
              "DepartmentName": "testing1"
          },
          {
              "DepartmentId": 148,
              "DepartmentName": "testing2"
          },
          {
              "DepartmentId": 178,
              "DepartmentName": "testing52"
          },
          {
              "DepartmentId": 180,
              "DepartmentName": "testt86"
          },
          {
              "DepartmentId": 141,
              "DepartmentName": "TESTTESTTEST"
          },
          {
              "DepartmentId": 194,
              "DepartmentName": "testworks"
          },
          {
              "DepartmentId": 159,
              "DepartmentName": "tst222"
          },
          {
              "DepartmentId": 155,
              "DepartmentName": "uiui"
          },
          {
              "DepartmentId": 197,
              "DepartmentName": "web software"
          },
          {
              "DepartmentId": 202,
              "DepartmentName": "workdemo123"
          },
          {
              "DepartmentId": 198,
              "DepartmentName": "worker"
          },
          {
              "DepartmentId": 161,
              "DepartmentName": "xxx"
          },
          {
              "DepartmentId": 214,
              "DepartmentName": "yt5"
          }
      ],
      "Role": [
          {
              "RoleId": 633,
              "RoleName": ".s.s dcs d"
          },
          {
              "RoleId": 659,
              "RoleName": "4ewrsf"
          },
          {
              "RoleId": 613,
              "RoleName": "aaa"
          },
          {
              "RoleId": 549,
              "RoleName": "Accounts User"
          },
          {
              "RoleId": 662,
              "RoleName": "Angular 12"
          },
          {
              "RoleId": 675,
              "RoleName": "Angular Test"
          },
          {
              "RoleId": 595,
              "RoleName": "Approval Proces"
          },
          {
              "RoleId": 548,
              "RoleName": "asd"
          },
          {
              "RoleId": 551,
              "RoleName": "asd"
          },
          {
              "RoleId": 553,
              "RoleName": "asd"
          },
          {
              "RoleId": 582,
              "RoleName": "asd"
          },
          {
              "RoleId": 583,
              "RoleName": "asd"
          },
          {
              "RoleId": 558,
              "RoleName": "asdasdasd"
          },
          {
              "RoleId": 676,
              "RoleName": "Aug 16"
          },
          {
              "RoleId": 671,
              "RoleName": "demomaster"
          },
          {
              "RoleId": 672,
              "RoleName": "Dev Dms"
          },
          {
              "RoleId": 635,
              "RoleName": "dfg"
          },
          {
              "RoleId": 625,
              "RoleName": "eeeeeeeeeeee"
          },
          {
              "RoleId": 646,
              "RoleName": "fdsfd"
          },
          {
              "RoleId": 665,
              "RoleName": "gfdgd"
          },
          {
              "RoleId": 641,
              "RoleName": "gfgh"
          },
          {
              "RoleId": 673,
              "RoleName": "gggg"
          },
          {
              "RoleId": 615,
              "RoleName": "gggggg"
          },
          {
              "RoleId": 683,
              "RoleName": "Jackets"
          },
          {
              "RoleId": 661,
              "RoleName": "java"
          },
          {
              "RoleId": 666,
              "RoleName": "MIVI DEV"
          },
          {
              "RoleId": 685,
              "RoleName": "Myntra Devloper"
          },
          {
              "RoleId": 620,
              "RoleName": "ppppppp"
          },
          {
              "RoleId": 608,
              "RoleName": "qqq"
          },
          {
              "RoleId": 581,
              "RoleName": "qwerty"
          },
          {
              "RoleId": 593,
              "RoleName": "Sales Officer "
          },
          {
              "RoleId": 628,
              "RoleName": "sameertesting"
          },
          {
              "RoleId": 614,
              "RoleName": "sdfasdfasf"
          },
          {
              "RoleId": 643,
              "RoleName": "sfdfd"
          },
          {
              "RoleId": 658,
              "RoleName": "Software 13"
          },
          {
              "RoleId": 594,
              "RoleName": "Software App"
          },
          {
              "RoleId": 612,
              "RoleName": "sss"
          },
          {
              "RoleId": 627,
              "RoleName": "TAE"
          },
          {
              "RoleId": 580,
              "RoleName": "test"
          },
          {
              "RoleId": 545,
              "RoleName": "Test"
          },
          {
              "RoleId": 667,
              "RoleName": "test 111"
          },
          {
              "RoleId": 669,
              "RoleName": "Test 26"
          },
          {
              "RoleId": 660,
              "RoleName": "test 77"
          },
          {
              "RoleId": 550,
              "RoleName": "Test Again"
          },
          {
              "RoleId": 668,
              "RoleName": "Test RBC"
          },
          {
              "RoleId": 601,
              "RoleName": "test101"
          },
          {
              "RoleId": 602,
              "RoleName": "test102"
          },
          {
              "RoleId": 600,
              "RoleName": "test103"
          },
          {
              "RoleId": 552,
              "RoleName": "Test-123"
          },
          {
              "RoleId": 653,
              "RoleName": "test14"
          },
          {
              "RoleId": 626,
              "RoleName": "test78"
          },
          {
              "RoleId": 599,
              "RoleName": "test84"
          },
          {
              "RoleId": 648,
              "RoleName": "TestC"
          },
          {
              "RoleId": 598,
              "RoleName": "testing12"
          },
          {
              "RoleId": 630,
              "RoleName": "testing584"
          },
          {
              "RoleId": 543,
              "RoleName": "User-A"
          },
          {
              "RoleId": 544,
              "RoleName": "User-B"
          },
          {
              "RoleId": 547,
              "RoleName": "User-C"
          },
          {
              "RoleId": 546,
              "RoleName": "User-D"
          },
          {
              "RoleId": 557,
              "RoleName": "wdasdasdas"
          },
          {
              "RoleId": 664,
              "RoleName": "worker test"
          }
      ],
      "Designation": [
          {
              "DesignationId": 764,
              "DesignationName": " Ramesh "
          },
          {
              "DesignationId": 768,
              "DesignationName": " Ramesh Kumar"
          },
          {
              "DesignationId": 650,
              "DesignationName": "AAAA"
          },
          {
              "DesignationId": 668,
              "DesignationName": "aaaaaaa"
          },
          {
              "DesignationId": 739,
              "DesignationName": "aaaaaaa"
          },
          {
              "DesignationId": 631,
              "DesignationName": "aaaaaaaaaa"
          },
          {
              "DesignationId": 524,
              "DesignationName": "aaaaaaaaaaaaa"
          },
          {
              "DesignationId": 675,
              "DesignationName": "aaaaaqqqqqq"
          },
          {
              "DesignationId": 740,
              "DesignationName": "aaaaqqqqqqddddd"
          },
          {
              "DesignationId": 720,
              "DesignationName": "aefcsa"
          },
          {
              "DesignationId": 721,
              "DesignationName": "aefcsa"
          },
          {
              "DesignationId": 755,
              "DesignationName": "Ahsan"
          },
          {
              "DesignationId": 825,
              "DesignationName": "Ang_DMS"
          },
          {
              "DesignationId": 784,
              "DesignationName": "Angular Developer "
          },
          {
              "DesignationId": 756,
              "DesignationName": "Angular developer"
          },
          {
              "DesignationId": 665,
              "DesignationName": "AngularRamesh"
          },
          {
              "DesignationId": 649,
              "DesignationName": "anna"
          },
          {
              "DesignationId": 621,
              "DesignationName": "anna"
          },
          {
              "DesignationId": 676,
              "DesignationName": "as"
          },
          {
              "DesignationId": 677,
              "DesignationName": "asas"
          },
          {
              "DesignationId": 781,
              "DesignationName": "bank"
          },
          {
              "DesignationId": 716,
              "DesignationName": "bhhkj"
          },
          {
              "DesignationId": 732,
              "DesignationName": "bhhkj`1"
          },
          {
              "DesignationId": 733,
              "DesignationName": "bhhkj`12"
          },
          {
              "DesignationId": 717,
              "DesignationName": "bhhkja"
          },
          {
              "DesignationId": 664,
              "DesignationName": "bxcbxcvb"
          },
          {
              "DesignationId": 667,
              "DesignationName": "cc"
          },
          {
              "DesignationId": 653,
              "DesignationName": "ccccc"
          },
          {
              "DesignationId": 866,
              "DesignationName": "Customer care"
          },
          {
              "DesignationId": 763,
              "DesignationName": "ddddddddd"
          },
          {
              "DesignationId": 816,
              "DesignationName": "demotest"
          },
          {
              "DesignationId": 775,
              "DesignationName": "dESIGNER1"
          },
          {
              "DesignationId": 801,
              "DesignationName": "Dev"
          },
          {
              "DesignationId": 301,
              "DesignationName": "Developer"
          },
          {
              "DesignationId": 641,
              "DesignationName": "Developer1"
          },
          {
              "DesignationId": 736,
              "DesignationName": "dffsdgsg"
          },
          {
              "DesignationId": 737,
              "DesignationName": "dffsdgsg1"
          },
          {
              "DesignationId": 746,
              "DesignationName": "dfsdfsd12"
          },
          {
              "DesignationId": 661,
              "DesignationName": "dgbsxsgxb"
          },
          {
              "DesignationId": 809,
              "DesignationName": "emp"
          },
          {
              "DesignationId": 786,
              "DesignationName": "Enter Designation testg"
          },
          {
              "DesignationId": 742,
              "DesignationName": "faddsdas"
          },
          {
              "DesignationId": 761,
              "DesignationName": "fdfd"
          },
          {
              "DesignationId": 759,
              "DesignationName": "fdgfgd"
          },
          {
              "DesignationId": 659,
              "DesignationName": "ffff"
          },
          {
              "DesignationId": 774,
              "DesignationName": "ffgg"
          },
          {
              "DesignationId": 766,
              "DesignationName": "fgfgddfg"
          },
          {
              "DesignationId": 712,
              "DesignationName": "fhgfgfg"
          },
          {
              "DesignationId": 713,
              "DesignationName": "fhgfgfg"
          },
          {
              "DesignationId": 758,
              "DesignationName": "fsdfsd"
          },
          {
              "DesignationId": 698,
              "DesignationName": "gggggg"
          },
          {
              "DesignationId": 699,
              "DesignationName": "ggggggtttttttttt"
          },
          {
              "DesignationId": 686,
              "DesignationName": "ghgh"
          },
          {
              "DesignationId": 700,
              "DesignationName": "ghghg"
          },
          {
              "DesignationId": 701,
              "DesignationName": "ghghg"
          },
          {
              "DesignationId": 633,
              "DesignationName": "Gopi"
          },
          {
              "DesignationId": 706,
              "DesignationName": "gvv"
          },
          {
              "DesignationId": 707,
              "DesignationName": "gvv"
          },
          {
              "DesignationId": 702,
              "DesignationName": "hdhjkjk"
          },
          {
              "DesignationId": 703,
              "DesignationName": "hdhjkjk"
          },
          {
              "DesignationId": 624,
              "DesignationName": "He man"
          },
          {
              "DesignationId": 767,
              "DesignationName": "hgfghgfh"
          },
          {
              "DesignationId": 762,
              "DesignationName": "hghgh"
          },
          {
              "DesignationId": 744,
              "DesignationName": "hhhh"
          },
          {
              "DesignationId": 704,
              "DesignationName": "hhhhhh"
          },
          {
              "DesignationId": 705,
              "DesignationName": "hhhhhh"
          },
          {
              "DesignationId": 760,
              "DesignationName": "hhjk"
          },
          {
              "DesignationId": 798,
              "DesignationName": "java121"
          },
          {
              "DesignationId": 622,
              "DesignationName": "jaweed"
          },
          {
              "DesignationId": 773,
              "DesignationName": "jbhgjjgh"
          },
          {
              "DesignationId": 710,
              "DesignationName": "jhjj"
          },
          {
              "DesignationId": 711,
              "DesignationName": "jhjj"
          },
          {
              "DesignationId": 635,
              "DesignationName": "jr.Designer"
          },
          {
              "DesignationId": 730,
              "DesignationName": "kkkkk"
          },
          {
              "DesignationId": 731,
              "DesignationName": "kkkkk"
          },
          {
              "DesignationId": 637,
              "DesignationName": "Lead"
          },
          {
              "DesignationId": 623,
              "DesignationName": "Loki"
          },
          {
              "DesignationId": 619,
              "DesignationName": "manager"
          },
          {
              "DesignationId": 647,
              "DesignationName": "mashhh"
          },
          {
              "DesignationId": 638,
              "DesignationName": "Masstter"
          },
          {
              "DesignationId": 632,
              "DesignationName": "master"
          },
          {
              "DesignationId": 681,
              "DesignationName": "mat desig"
          },
          {
              "DesignationId": 682,
              "DesignationName": "mat desig 2"
          },
          {
              "DesignationId": 666,
              "DesignationName": "mateen"
          },
          {
              "DesignationId": 714,
              "DesignationName": "MATEEN"
          },
          {
              "DesignationId": 715,
              "DesignationName": "MATEEN"
          },
          {
              "DesignationId": 672,
              "DesignationName": "matqwerty"
          },
          {
              "DesignationId": 745,
              "DesignationName": "mhvdgkjsd"
          },
          {
              "DesignationId": 685,
              "DesignationName": "mhvdgkjsd"
          },
          {
              "DesignationId": 670,
              "DesignationName": "mhvdgkjsd"
          },
          {
              "DesignationId": 634,
              "DesignationName": "mhvdgkjsd"
          },
          {
              "DesignationId": 688,
              "DesignationName": "mhvdgkjsd"
          },
          {
              "DesignationId": 810,
              "DesignationName": "MIVI Emppp"
          },
          {
              "DesignationId": 627,
              "DesignationName": "mmmm"
          },
          {
              "DesignationId": 678,
              "DesignationName": "qaqaqa"
          },
          {
              "DesignationId": 673,
              "DesignationName": "qqqqqqqqqqqq"
          },
          {
              "DesignationId": 669,
              "DesignationName": "qwerty"
          },
          {
              "DesignationId": 722,
              "DesignationName": "qwerty"
          },
          {
              "DesignationId": 723,
              "DesignationName": "qwerty"
          },
          {
              "DesignationId": 671,
              "DesignationName": "qwerty"
          },
          {
              "DesignationId": 724,
              "DesignationName": "qwerty1"
          },
          {
              "DesignationId": 725,
              "DesignationName": "qwerty12"
          },
          {
              "DesignationId": 743,
              "DesignationName": "qwerty121"
          },
          {
              "DesignationId": 728,
              "DesignationName": "qwerty999"
          },
          {
              "DesignationId": 729,
              "DesignationName": "qwerty9996"
          },
          {
              "DesignationId": 630,
              "DesignationName": "Ramesh"
          },
          {
              "DesignationId": 769,
              "DesignationName": "Ramesh"
          },
          {
              "DesignationId": 620,
              "DesignationName": "Ramesh"
          },
          {
              "DesignationId": 652,
              "DesignationName": "Ramesh Dev"
          },
          {
              "DesignationId": 645,
              "DesignationName": "ravi"
          },
          {
              "DesignationId": 791,
              "DesignationName": "rhhghfffbbbb 123"
          },
          {
              "DesignationId": 694,
              "DesignationName": "rrrrr"
          },
          {
              "DesignationId": 646,
              "DesignationName": "rrrrr"
          },
          {
              "DesignationId": 708,
              "DesignationName": "rtr"
          },
          {
              "DesignationId": 709,
              "DesignationName": "rtrbbbfggfg"
          },
          {
              "DesignationId": 751,
              "DesignationName": "sameertesting"
          },
          {
              "DesignationId": 753,
              "DesignationName": "sameertesting"
          },
          {
              "DesignationId": 787,
              "DesignationName": "sasffftttgg"
          },
          {
              "DesignationId": 726,
              "DesignationName": "sdasd"
          },
          {
              "DesignationId": 727,
              "DesignationName": "sdasd"
          },
          {
              "DesignationId": 757,
              "DesignationName": "sfdsd"
          },
          {
              "DesignationId": 625,
              "DesignationName": "Shaktiman"
          },
          {
              "DesignationId": 651,
              "DesignationName": "sir"
          },
          {
              "DesignationId": 648,
              "DesignationName": "sir"
          },
          {
              "DesignationId": 657,
              "DesignationName": "sir"
          },
          {
              "DesignationId": 660,
              "DesignationName": "sirccc"
          },
          {
              "DesignationId": 826,
              "DesignationName": "Software DS"
          },
          {
              "DesignationId": 799,
              "DesignationName": "sofware yyy"
          },
          {
              "DesignationId": 302,
              "DesignationName": "Sr.Designer099"
          },
          {
              "DesignationId": 643,
              "DesignationName": "Sr.Designer11"
          },
          {
              "DesignationId": 851,
              "DesignationName": "SRH"
          },
          {
              "DesignationId": 718,
              "DesignationName": "ssasd"
          },
          {
              "DesignationId": 719,
              "DesignationName": "ssasds"
          },
          {
              "DesignationId": 674,
              "DesignationName": "sss"
          },
          {
              "DesignationId": 690,
              "DesignationName": "ssss"
          },
          {
              "DesignationId": 654,
              "DesignationName": "ssssss"
          },
          {
              "DesignationId": 734,
              "DesignationName": "tdhrgf"
          },
          {
              "DesignationId": 735,
              "DesignationName": "tdhrgf1"
          },
          {
              "DesignationId": 636,
              "DesignationName": "Team "
          },
          {
              "DesignationId": 639,
              "DesignationName": "Team Lead"
          },
          {
              "DesignationId": 640,
              "DesignationName": "Team Lead"
          },
          {
              "DesignationId": 644,
              "DesignationName": "Team Lead112"
          },
          {
              "DesignationId": 642,
              "DesignationName": "Team Lead2"
          },
          {
              "DesignationId": 765,
              "DesignationName": "test"
          },
          {
              "DesignationId": 695,
              "DesignationName": "test"
          },
          {
              "DesignationId": 696,
              "DesignationName": "test"
          },
          {
              "DesignationId": 770,
              "DesignationName": "test"
          },
          {
              "DesignationId": 790,
              "DesignationName": "test"
          },
          {
              "DesignationId": 792,
              "DesignationName": "Test "
          },
          {
              "DesignationId": 771,
              "DesignationName": "test"
          },
          {
              "DesignationId": 780,
              "DesignationName": "test"
          },
          {
              "DesignationId": 794,
              "DesignationName": "test 198"
          },
          {
              "DesignationId": 789,
              "DesignationName": "Test 27"
          },
          {
              "DesignationId": 788,
              "DesignationName": "Test 27 yy"
          },
          {
              "DesignationId": 628,
              "DesignationName": "test ang"
          },
          {
              "DesignationId": 629,
              "DesignationName": "test fiur"
          },
          {
              "DesignationId": 796,
              "DesignationName": "Test Mateen"
          },
          {
              "DesignationId": 626,
              "DesignationName": "test qwerty"
          },
          {
              "DesignationId": 811,
              "DesignationName": "test RBC"
          },
          {
              "DesignationId": 797,
              "DesignationName": "Test Waseen "
          },
          {
              "DesignationId": 785,
              "DesignationName": "test work"
          },
          {
              "DesignationId": 738,
              "DesignationName": "test12"
          },
          {
              "DesignationId": 687,
              "DesignationName": "test123"
          },
          {
              "DesignationId": 772,
              "DesignationName": "test123"
          },
          {
              "DesignationId": 778,
              "DesignationName": "test1234"
          },
          {
              "DesignationId": 779,
              "DesignationName": "test1234"
          },
          {
              "DesignationId": 748,
              "DesignationName": "testing156"
          },
          {
              "DesignationId": 754,
              "DesignationName": "testing587"
          },
          {
              "DesignationId": 747,
              "DesignationName": "testting15"
          },
          {
              "DesignationId": 793,
              "DesignationName": "TestWork 123"
          },
          {
              "DesignationId": 689,
              "DesignationName": "tttt"
          },
          {
              "DesignationId": 693,
              "DesignationName": "vghvghvhg"
          },
          {
              "DesignationId": 692,
              "DesignationName": "vghvghvhg"
          },
          {
              "DesignationId": 697,
              "DesignationName": "vgvvvb"
          },
          {
              "DesignationId": 691,
              "DesignationName": "vvvvv"
          },
          {
              "DesignationId": 749,
              "DesignationName": "Wast"
          },
          {
              "DesignationId": 750,
              "DesignationName": "Wast"
          },
          {
              "DesignationId": 752,
              "DesignationName": "wcd"
          },
          {
              "DesignationId": 795,
              "DesignationName": "working"
          },
          {
              "DesignationId": 812,
              "DesignationName": "working test "
          },
          {
              "DesignationId": 741,
              "DesignationName": "xxxxxx"
          },
          {
              "DesignationId": 658,
              "DesignationName": "xxxxxxxx"
          },
          {
              "DesignationId": 680,
              "DesignationName": "xxxxxxxxxxxxxxxx"
          },
          {
              "DesignationId": 679,
              "DesignationName": "zzzzzzz"
          }
      ],
      "GlobalUsers": [
          {
              "UserId": 1632,
              "ContactName": "Ahmed Moustfa Abdelatif Mohammed (Chief Accountant/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1680,
              "ContactName": "Aimad  Aaouine (Marketing Officer/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1370,
              "ContactName": "Akram  Tammouch (Training & Talent Acquisition Supervisor/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1395,
              "ContactName": "Aziz Ayoub (General Manager/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1355,
              "ContactName": "Constantino A Infante (Production Supervisor/Five Mountains)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1397,
              "ContactName": "Deni Koswara Abas (Production Manager/Bakery & Company)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1348,
              "ContactName": "Driss  Kiouach (Duty Manager/Bakery & Company)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2313,
              "ContactName": "Eri Cah Yadi Subadri (Production Supervisor/Bakery & Company)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2244,
              "ContactName": "Eris Susandi (Head Roaster & Quality Control/Five Mountains)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1398,
              "ContactName": "Fuad Ahmad Amairah (HR Manager/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2243,
              "ContactName": "Johan Henry Rodriguez (Plant Manager/Five Mountains)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1638,
              "ContactName": "Landlier Aldrick Talastas (Acting Transportation Supervisor/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1340,
              "ContactName": "Luisito Estoque Ubaldo (Executive Secretary/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2116,
              "ContactName": "Maher Ramdan Eletreby (Project Manager/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1633,
              "ContactName": "Mohammed  Zidan (Sr. Accountant/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1405,
              "ContactName": "Mohammed Shahid Hussain (Executive Chef/Bakery & Company)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2162,
              "ContactName": "Muhamad Sahdan Anduk (Data Entry Operator/Bakery & Company)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1406,
              "ContactName": "Sohail Ahmed Khan (WareHouse Manager/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2066,
              "ContactName": "Sultan Saad (HR Specialist/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1347,
              "ContactName": "Taimur  Qazi Saed (Warehouse Supervisor/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 1367,
              "ContactName": "Tufail Ahmad Bhat (Procurement Manager/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2141,
              "ContactName": "Waqar Aslam Muhammad (Graphic Designer/First Economic Company        )",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 2078,
              "ContactName": "Yazan Aljarrah (Factory Manager/Bakery & Company)",
              "OrganizationName": "FECO "
          },
          {
              "UserId": 40,
              "ContactName": "Sage Demo (---/---)",
              "OrganizationName": "sage demo"
          },
          {
              "UserId": 474,
              "ContactName": "Mohammed (---/---)",
              "OrganizationName": "Test_Demo"
          },
          {
              "UserId": 2072,
              "ContactName": "Abdul Basith Hashim (Projects Manager/Executive Contractors Company)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 66,
              "ContactName": "Abdul Naveed Naim (SR. Dot Net Developer/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1729,
              "ContactName": "Abdul  Sameer (Jr. Android Developer/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 123,
              "ContactName": "Abdul Gaphoor Chali (Inventory Controller/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 158,
              "ContactName": "Abuaziz Naseem Ahmed (Senior Operations Excellence Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 53,
              "ContactName": "Ahmad Raza Riyaz (I.T Support/Creative Solutions)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 489,
              "ContactName": "Ahmed Elharty (Internal Auditing Assistant/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 300,
              "ContactName": "Ahmed Elyas (Operations Manager/Global Digital Creative)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1508,
              "ContactName": "Ahmed Ibrahim  Mohammed (Financial Analyst/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2180,
              "ContactName": "Aleksandar Paunovic (General Manager/Executive Contractors Company)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1412,
              "ContactName": "Allen Steve Arendtsz (Group Recruitment In-Charge/YR Shared Services)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2322,
              "ContactName": "Amirrakhim Putrantyo (Coffee Trainer and Enhancement Specialist/CORE Coffee & Roastery)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 367,
              "ContactName": "Anees Kalari Kandi (WareHouse Incharge/Globus Logistics)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1931,
              "ContactName": "Anthony Oreto (Store General Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 437,
              "ContactName": "Anwar Shah Syed (Procurement Officer/YR Trading)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2033,
              "ContactName": "Aqib Ameer Showketh (Recruitment Officer/YR Shared Services)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 65,
              "ContactName": "Aquib Shahbaz (Team Lead/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2219,
              "ContactName": "Archit Gupta (Executive Chef/Saudi Franchising Company)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2058,
              "ContactName": "Arshad Mohamed (Coordinator/Creative Solutions)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2151,
              "ContactName": "Ayedh Ali Al-Baradoni (Deputy Project Manager/Al-Rajhi Agriculture Company)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1537,
              "ContactName": "Barista  Rights (HR Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1536,
              "ContactName": "Barista  Relations (Barista Relation Officer/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 699,
              "ContactName": "BINIT  BHAT (Store General Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1693,
              "ContactName": "Binod  Rai (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1960,
              "ContactName": "Binod Bist (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 944,
              "ContactName": "Christian Malaga Fajardo (Assistant Store Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2335,
              "ContactName": "Daneis Rashid Maktum (Barista/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 230,
              "ContactName": "Edmar Santos Losanta (QA Officer/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2193,
              "ContactName": "Eman Awwad (MEM Coordinator/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 190,
              "ContactName": "Eric  Subieto (Coffee Passion Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 231,
              "ContactName": "Fouzi Shukere (TUF In Charge/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 365,
              "ContactName": "Francis Shaju (Procurement Manager/Globus Logistics)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 488,
              "ContactName": "Harun Ar Rashid Rony (Jr. Accountant/Broasted Express)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2263,
              "ContactName": "Iyad Obeid (Principal Architect/357 Co)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 162,
              "ContactName": "Jefferson Umali Subi (Jr. Accountant/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2171,
              "ContactName": "Jingkie Paiz (Operation Coordinator/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 288,
              "ContactName": "Jojo D. Lucrecio (Chairman Office Manager/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 395,
              "ContactName": "Jonnel  Herman (Graphic Incharge/Global Digital Creative)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1899,
              "ContactName": "Kabiraj mahat (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 56,
              "ContactName": "Khaja Mohinuddin (Accountant/Creative Solutions)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 233,
              "ContactName": "Khurram Rasheed Mughal (Payroll Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1068,
              "ContactName": "Ma. Kristina Portes Pabellosa (Assistant Store Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2152,
              "ContactName": "Lamyaa Nawaf Al Mutairi (Legal Officer/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2264,
              "ContactName": "Lavein Muthiraparambil Thilakan (Logistic Manager\t/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1920,
              "ContactName": "Mahmod Imam Diampuan (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 297,
              "ContactName": "Mahmoud Nouraldien Al Toum (Legal Affairs Manager\t/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 267,
              "ContactName": "Mark  Columbres (Call Center Officer/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2334,
              "ContactName": "Maruf Shaikh Hamid (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1336,
              "ContactName": "Mehraj Udin Udin (Logistics Coordinator/CORE Coffee & Roastery)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 67,
              "ContactName": "Mirza Hussain Baig (Team Leader/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1667,
              "ContactName": "Mohamed   Shihaff (Group Finance Controller/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1627,
              "ContactName": "Mohammad Jahed Shaikh (Payroll Officer/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 292,
              "ContactName": "Mohammad Abdul Kaleem (Chief Accountant/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 369,
              "ContactName": "Mohammed Helmy (Chief Accountant/Oregano Pizzeria)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 118,
              "ContactName": "Mohammed Afzal (Accountant/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1518,
              "ContactName": "Mohammed Nawaz Shareef (Desktop Support Adminstration\t/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1584,
              "ContactName": "Mohammed  Taher (Key Accounts Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2332,
              "ContactName": "Mohammed Abdul Mubashir (Store General Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2333,
              "ContactName": "Mohammed Wassim (Store General Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 472,
              "ContactName": "Mohammed Kareem Qureshi (SEO / Marketing Specialist/Creative Solutions)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 60,
              "ContactName": "Mohammed  Shujatuddin (Team Lead/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 440,
              "ContactName": "Mohammed  Asif (YR Personal Consultant/YR Shared Services)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 214,
              "ContactName": "Mohsin  Ahmed (Marketing Specialist/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2113,
              "ContactName": "Najla Atiah Alfahmi (Beta Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 175,
              "ContactName": "Nidhin Mathew (Training Manager\t/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2312,
              "ContactName": "Praveen Khare (General Manager/Globus Logistics)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 502,
              "ContactName": "Pulendra  Adusumalli (Jr. Android Developer/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2124,
              "ContactName": "Qamar Mozaffar (JR. Civil Engineer/Executive Contractors Company)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 484,
              "ContactName": "Radhakrishna Vijay S (ERP Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 289,
              "ContactName": "Ramadan  Mohammed (Internal Audit Manager /YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1704,
              "ContactName": "Ramesh  Neelapala (Jr.Angular Developer/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 682,
              "ContactName": "REWAT DAHAL  (Asst. Store Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2294,
              "ContactName": "Rey Revatoris (Senior Operations Manager/CORE Coffee & Roastery)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 709,
              "ContactName": "Ricky  Bondad (Store Opening Officer/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2123,
              "ContactName": "Riyas Ali Varikkodan (Logistics Coordinator/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 238,
              "ContactName": "Riyas Kurunkattil (Finance Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 263,
              "ContactName": "Rogelio Esteban Espiritu (Area Manager/CORE Coffee & Roastery)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2179,
              "ContactName": "Rola Al Hindi (Digital Marketing Specialist/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2249,
              "ContactName": "Ruffa Mae Deleon (Barista/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2128,
              "ContactName": "Sadeesh Sivakumar (Jr. Accountant/Oregano Pizzeria)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 295,
              "ContactName": "Said Ibrahim Abdou (Chief Accountant/YRG Corporate)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 386,
              "ContactName": "Mohammed Sajib (Sales Coordinator/Global Digital Creative)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1751,
              "ContactName": "Sanjay   Ghising  (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2305,
              "ContactName": "Sara Al Qublan (Recruitment Officer/YR Shared Services)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 423,
              "ContactName": "Seraj  Ahmed (Acting Area Manager\t/Oregano Pizzeria)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2196,
              "ContactName": "Shahebaz Mohammed (Training Officer/CORE Coffee & Roastery)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 459,
              "ContactName": "Shaik Mohammad Rafi (Team Lead/Creative Solutions)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1652,
              "ContactName": "Shaikh  Asif Qamar (Store General Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2292,
              "ContactName": "Shajid Paglala Pilas (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 242,
              "ContactName": "Shijin  Purushothaman (HR Specialist/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1564,
              "ContactName": "Siva  Nanendla (UX/UI Designer/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 59,
              "ContactName": "Sudheer Chowdary Srimalla (Team Lead/Devbox Software Pvt. Ltd.)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1740,
              "ContactName": "Suhaib  Mohammed Ezz (Sr. Accountant/Executive Contractors Company)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 434,
              "ContactName": "Syed Mohamed Buhari (Acting General Manager/YR Trading)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2300,
              "ContactName": "Syed Meeran Gani (Operations Manager/Broasted Express)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 71,
              "ContactName": "Syed Sayeeduddin Hussain (General Manager/Creative Solutions)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1523,
              "ContactName": "Syed  Mujeebuddin  Hussaini (Desktop Support Adminstration\t/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 915,
              "ContactName": "Tek Bahadur Gurung (Asst. Store Manager/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 387,
              "ContactName": "Thiyaga Lingam (Acting General Manager/Global Digital Creative)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 2257,
              "ContactName": "Tricia Mie Dais (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 363,
              "ContactName": "Usman Javed Butt (Data Entry Operator/Globus Logistics)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 1797,
              "ContactName": "Uttam   Pradhan (Store Supervisor/dr.CAFE)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 442,
              "ContactName": "Viqhar Ahmed (SR. HR Officer/YR Shared Services)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 407,
              "ContactName": "Waseem Hassan Dohbi (Multi Unit Manager/Oregano Pizzeria)",
              "OrganizationName": "YR Global"
          },
          {
              "UserId": 229,
              "ContactName": "Yousef S. Al Rajhi (Chairman/YRG Corporate)",
              "OrganizationName": "YR Global"
          }
      ]
  }
};

this._obj = data as UserRegistrationDTO;
this.companyid = this._obj.Data["UserDetails"][0].CompanyId;
this.Repuser = this._obj.Data["UserDetails"][0].ReportingUserId;
this.UserDetailsarray = this._obj.Data["UserDetails"];
// console.log( this.UserDetailsarray,"userlistrep");     
this.IsActive = this._obj.Data["IsActive"];
this.ObjgetCompanyList = this._obj.Data["Company"];
this.ObjgetDepartmentList = this._obj.Data["Department"];
this.ObjgetRoleList = this._obj.Data["Role"]
this.ObjgetDesignationList = this._obj.Data["Designation"];
this.ObjgetReportingUser = this._obj.Data["ReportingUsers"];
this.ObjgetcountryList = this._obj.Data["Country"];
this.GlobalUsers = this._obj.Data["GlobalUsers"];
this.lstCities = this._obj.Data["City"];
this.Fname = this._obj.Data["UserDetails"][0].FirstName;
this.mname = this._obj.Data["UserDetails"][0].MiddleName;
this.lname = this._obj.Data["UserDetails"][0].LastName;
this.Display = this._obj.Data["UserDetails"][0].DisplayName;
this.email = this._obj.Data["UserDetails"][0].Email;
// console.log(this.email, "update list");
this.phonenum = this._obj.Data["UserDetails"][0].Phone;
this.countrycode = this._obj.Data["UserDetails"][0].CountryCode;
this.address = this._obj.Data["UserDetails"][0].Address;
this.cunname = this._obj.Data["UserDetails"][0].CountryId;
this.cty = this._obj.Data["UserDetails"][0].CityId;
this.code = this._obj.Data["UserDetails"][0].PinCode;
this.tele1 = this._obj.Data["UserDetails"][0].Telephone1;
this.tele2 = this._obj.Data["UserDetails"][0].Telephone2;
this.status = this._obj.Data["UserDetails"][0].IsActive;
this.login = this._obj.Data["UserDetails"][0].UserName;
const outOfNetworkUsersJson = this._obj.Data["UserDetails"][0].OutOfNetworkUsersJson;
const parsedData = JSON.parse(outOfNetworkUsersJson);
this._globalsers = [];
parsedData.forEach(element => {
  this._globalsers.push(parseInt(element.UserId));
});
this.Repuser = this._obj.Data["UserDetails"][0].ReportingUserId;
this.Empid = this._obj.Data["UserDetails"][0].EmployeeId;
this.Positionid = this._obj.Data["UserDetails"][0].PositionId;
this.dept = this._obj.Data["UserDetails"][0].DepartmentId;
this.role = this._obj.Data["UserDetails"][0].RoleId;
this.desig = this._obj.Data["UserDetails"][0].DesignationId;
this.global = this._obj.Data["UserDetails"][0].IsGlobalUser;
this.iner = this._obj.Data["UserDetails"][0].IsInterCompany;
this.IsArchiveApproval = this._obj.Data["UserDetails"][0].IsArchiveApproval;
this.IsCommunication = this._obj.Data["UserDetails"][0].IsCommunicationDownload;
this.IsArchiveDownload = this._obj.Data["UserDetails"][0].IsArchiveDownload;
this.IsStreamPlannerDownload = this._obj.Data["UserDetails"][0].IsStreamPlannerDownload;








// waste testing

    this._services.GetUserProfile(this._obj)
      .subscribe(data => {
        // debugger
        // console.log(data, 'userlist');
        this._obj = data as UserRegistrationDTO;
        this.companyid = this._obj.Data["UserDetails"][0].CompanyId;
        this.Repuser = this._obj.Data["UserDetails"][0].ReportingUserId;
        this.UserDetailsarray = this._obj.Data["UserDetails"];
        // console.log( this.UserDetailsarray,"userlistrep");     
        this.IsActive = this._obj.Data["IsActive"];
        this.ObjgetCompanyList = this._obj.Data["Company"];
        this.ObjgetDepartmentList = this._obj.Data["Department"];
        this.ObjgetRoleList = this._obj.Data["Role"]
        this.ObjgetDesignationList = this._obj.Data["Designation"];
        this.ObjgetReportingUser = this._obj.Data["ReportingUsers"];
        this.ObjgetcountryList = this._obj.Data["Country"];
        this.GlobalUsers = this._obj.Data["GlobalUsers"];
        this.lstCities = this._obj.Data["City"];
        this.Fname = this._obj.Data["UserDetails"][0].FirstName;
        this.mname = this._obj.Data["UserDetails"][0].MiddleName;
        this.lname = this._obj.Data["UserDetails"][0].LastName;
        this.Display = this._obj.Data["UserDetails"][0].DisplayName;
        this.email = this._obj.Data["UserDetails"][0].Email;
        // console.log(this.email, "update list");
        this.phonenum = this._obj.Data["UserDetails"][0].Phone;
        this.countrycode = this._obj.Data["UserDetails"][0].CountryCode;
        this.address = this._obj.Data["UserDetails"][0].Address;
        this.cunname = this._obj.Data["UserDetails"][0].CountryId;
        this.cty = this._obj.Data["UserDetails"][0].CityId;
        this.code = this._obj.Data["UserDetails"][0].PinCode;
        this.tele1 = this._obj.Data["UserDetails"][0].Telephone1;
        this.tele2 = this._obj.Data["UserDetails"][0].Telephone2;
        this.status = this._obj.Data["UserDetails"][0].IsActive;
        this.login = this._obj.Data["UserDetails"][0].UserName;
        const outOfNetworkUsersJson = this._obj.Data["UserDetails"][0].OutOfNetworkUsersJson;
        const parsedData = JSON.parse(outOfNetworkUsersJson);
        this._globalsers = [];
        parsedData.forEach(element => {
          this._globalsers.push(parseInt(element.UserId));
        });
        this.Repuser = this._obj.Data["UserDetails"][0].ReportingUserId;
        this.Empid = this._obj.Data["UserDetails"][0].EmployeeId;
        this.Positionid = this._obj.Data["UserDetails"][0].PositionId;
        this.dept = this._obj.Data["UserDetails"][0].DepartmentId;
        this.role = this._obj.Data["UserDetails"][0].RoleId;
        this.desig = this._obj.Data["UserDetails"][0].DesignationId;
        this.global = this._obj.Data["UserDetails"][0].IsGlobalUser;
        this.iner = this._obj.Data["UserDetails"][0].IsInterCompany;
        this.IsArchiveApproval = this._obj.Data["UserDetails"][0].IsArchiveApproval;
        this.IsCommunication = this._obj.Data["UserDetails"][0].IsCommunicationDownload;
        this.IsArchiveDownload = this._obj.Data["UserDetails"][0].IsArchiveDownload;
        this.IsStreamPlannerDownload = this._obj.Data["UserDetails"][0].IsStreamPlannerDownload;
        // this._globalsers = JSON.parse(this._obj.Data["UserDetails"][0].OutOfNetworkUsersJson);
        // let _ary = [];
        // this._globalsers.forEach(element => {
        //   _ary.push(parseInt(element.UserId))
        // });
        // this._globalsers = JSON.parse(this._obj.Data["UserDetails"][0].OutOfNetworkUsersJson);
        // let _ary = [];
        // this._globalsers.forEach(element => {
        //   const parsedUserId = parseInt(element.UserId);
        //   console.log(`UserId: ${element.UserId}, Parsed: ${parsedUserId}`);
        //   _ary.push(parsedUserId);
        // });
        // console.log('_ary:', _ary);
        // this._globalsers = JSON.parse(this._obj.Data["UserDetails"][0].OutOfNetworkUsersJson);
        // let _ary = [];
        // this._globalsers.forEach(element => {
        //   _ary.push(parseInt(element.UserId));
        // });
        
        //     var ids = this._obj.Data["UserDetails"][0].OutOfNetworkUsersJson;
        // this.selected = ids.split(",");
        //     let _ary = [];
        // for (let index = 0; index < this.selected.length; index++) {
        //   const element = this.selected[index];

        // }
        // this._globalsers = _ary
        // alert( this.login);ReportingUserId
        // this.Repuser = this._obj.Data["UserDetails"][0].ReportingUserName;
      
        // this._globalsers = [];
        // this.getReportingDropDown(this.CompanyId);
        // alert(this.UserId);
       
      });
     
    // this.GetUserList();
    document.getElementById("proset").classList.remove("pronew");
    document.getElementById("prodetails").classList.add("pronew");
  }
  // telInputObject(obj) {
  //   console.log(obj);
  //   obj.setCountry('uae');
  // }
  getReportingDropDown(CompanyId) {
    this._obj.CompanyId = CompanyId;
    this._services.GetReportingUser(this._obj)
      .subscribe(data => {
        this.ObjgetReportingUser = data;
        // alert(this.Repuser);
      });
  }
  onClickPage(pageNumber: number) {
    this.activePage = pageNumber;

    if (this.activePage == 1) {
      this.NextPage = false;
    } else {
      this.NextPage = true;
    }
    // this.GetUserList();
    this.GetUserList();

  }
  // userglobal() {
  //   this._obj.ToUserIdsStr = this._globalsers.toString();
  //   this._obj.UserId = this.SelectedUserId
  //   this.services.globaluser(this._obj)
  //     .subscribe(data => {
  //     })
  // }
  OnUpdate(I: number) {
    try {
      // debugger
      this._obj.UserId = this.SelectedUserId;
      this._obj.FirstName = this.Fname;
      this._obj.lastName = this.lname;
      this._obj.DisplayName = this.Display;
      this._obj.UserEmail = this.email;
      // console.log(this.email, "slider");
      this._obj.UserPhone = this.phonenum;
      this._obj.CountryCode = this.countrycode;
      this._obj.UserAddress = this.address;
      this._obj.CityId = this.cty;
      this._obj.CountryId = this.cunname;
      this._obj.UserPincode = this.code;
      this._obj.UserIsActive = this.status;
      // this._obj.UserName = this.login;
      this._obj.ReportingUserId = this.Repuser;
      // alert( this._obj.ReportingUserId)
      this._obj.CompanyId = this.companyid;
      this._obj.DepartmentId = this.dept;
      this._obj.RoleId = this.role;
      this._obj.EmployeeId = this.Empid;
      this._obj.DesignationId = this.desig;
      this._obj.PositionId = this.Positionid;
      this._obj.IsInterCompany = this.iner;
      this._obj.IsArchiveApproval = this.IsArchiveApproval;
      this._obj.IsCommunicationDownload = this.IsCommunication;
      this._obj.IsArchiveDownload = this.IsArchiveDownload;
      this._obj.IsStreamDownload = this.IsStreamPlannerDownload;
      this._obj.IsGlobalUser = this.global;
      // alert(this.global);
      this._obj.FlagId = I;

      const fd = new FormData();
      if (this.mname == null) {
        this.mname = "";
      }
      if (this.tele1 == null) {
        this.tele1 = 0;
      }
      if (this.tele2 == null) {
        this.tele2 = 0;
      }
      this._obj.MiddleName = this.mname;
      this._obj.Telephone1 = this.tele1;
      this._obj.Telephone2 = this.tele2;
     
        this._services.UpdateUserProfile(this._obj, this.currentUserValue.createdby, this.currentUserValue.organizationid)
        .subscribe(data => {
          // console.log(data, 'userslistupdated')
          this._obj = data as UserRegistrationDTO;
          if (this._obj.message == "1" && I == 1) {
            // (<HTMLInputElement>document.getElementById("txtlongitude")).value = "";
            this._snackBar.open('Personal Details Updated SucessFully', 'End now', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
              panelClass: ['blue-snackbar']
            });
            this.sidev(this.SelectedUserId);
            this.GetUserList();
          }
          if (this._obj.message == "1" && I == 2) {
            // (<HTMLInputElement>document.getElementById("txtlongitude")).value = "";
            this._snackBar.open('Company Details Updated SucessFully', 'End now', {
              duration: 5000,
              verticalPosition: 'bottom',
              horizontalPosition: 'right',
              panelClass: ['blue-snackbar']
            });
            this.sidev(this.SelectedUserId);
            this.GetUserList();
          }
        });
     if(this.global == false){
        this._obj.ToUserIdsStr = "";
    this._obj.UserId = this.SelectedUserId
    this._services.globaluser(this._obj)
      .subscribe(data => {
        // console.log(data,"userrggggggggggggggg");
        // this._globaluser = data
      })
      }
      this._obj.ToUserIdsStr = this._globalsers.toString();
      this._obj.UserId = this.SelectedUserId
      this._services.globaluser(this._obj)
        .subscribe(data => {
        })
      // this.getReportingDropDown(this.CompanyId);
    } catch (error) {
      alert(error);
    }
  }
 
  CheckEmailExist() {
    let mail = (<HTMLInputElement>document.getElementById("txtemail")).value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.match(mailformat)) {
    } else {
      (<HTMLInputElement>document.getElementById("txtemail")).value = "";
      this._snackBar.open('Email incorrect', 'End now', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: ['red-snackbar']
      });
    }
  }
  gotoMemoDetailsV2(name, id) {
    var url = document.baseURI + name;
    var myurl = `${url}/${id}`;
    var myWindow = window.open(myurl, id);
    myWindow.focus();
  }
  // tabchng() {
  //   document.getElementById("ver0").classList.toggle("tab_one");
  //   document.getElementById("ver1").classList.toggle("tab_one");
  // }
  UpdateStatus(Obj_Status: UserRegistrationDTO) {
    if (Obj_Status.UserIsActive === true) {
      this.String_status = "In-Active"
      document.getElementById("toglesta").classList.remove("fase");
    }
    else {
      this.String_status = "Active"
      document.getElementById("toglesta").classList.add("fase");
    }
    this._services.UpDatedialog_Status(Obj_Status).subscribe(data => {
      this.sidev(Obj_Status.UserId);
      this._snackBar.open('Status Successfully', 'End now', {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
      });
    });
  }
  TriggerLengthValidation() {
    if (this.Fname.trim().length < 1) {
      this.MinFirstNameLength = false;
    }
    else {
      this.MinFirstNameLength = true;
    }
  }
  LastLengthValidation() {
    if (this.lname.trim().length < 3) {
      this.MinLastNameLength = false;
    }
    else {
      this.MinLastNameLength = true;
    }
  }
  LastLengthValidation11() {
    if (this.Display.trim().length < 3) {
      this.MinLastNameLength = false;
    }
    else {
      this.MinLastNameLength = true;
    }
  }
  PhoneLengthValidation() {
    if (this.phonenum.toString().trim().length < 8) {
      this.MinPhoneLength = false;
    }
    else {
      this.MinPhoneLength = true;
    }
  }
  AddressLengthValidation() {
    if (this.address.trim().length < 3) {
      this.MinAddressLength = false;
    }
    else {
      this.MinAddressLength = true;
    }
  }
  PinLengthValidation() {
    if (this.code.toString().trim().length < 3) {
      this.MinPinLength = false;
    }
    else {
      this.MinPinLength = true;
    }
  }
  onRest() {
    this.Fname = "";
    this.mname = "";
    this.Display = "";
    this.email = "";
    this.countrycode = null;
    this.phonenum = null;
    this.address = "";
    this.cunname = null;
    this.cty = null;
    this.code = null;
    this.tele1 = null;
    this.tele2 = null;
    this.status = null;
    this.Positionid = null;
    this.companyid = null;
    this.dept = null;
    this.role = null;
    this.desig = null;
    this.login = null;
    this.Empid = null;
    this.Repuser = null;
    this.global = null;
    this.iner = null;
    this.IsArchiveApproval = null;
    this.IsCommunication = null;
  }


// New 

GetUserList1(){

}


// New 


}
