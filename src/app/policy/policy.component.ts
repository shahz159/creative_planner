import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PolicyDTO } from '../_Models/policy-dto';
import { AuthService } from 'src/app/_Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from 'src/app/_Services/policy.service';
import { NotificationService } from '../_Services/notification.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  PolicyId: number;
  PolicyHeader: string;
  PolicyContent: string;
  currentuserId: string;
  ObjPolicyDTO: PolicyDTO;

  // private currentUserSubject: BehaviorSubject<UserDetailsDTO>;
  //public currentUserId: Observable<UserDetailsDTO>;
  displayStyle = "none";  
  dashboardUrl: string = 'backend/Streamdashboard';
  loginUrl: string = 'login';
  Currentuser: string;

  constructor(private router: Router,
    private authService: AuthService,
    private PolicyService: PolicyService,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute
  ) {
    this.ObjPolicyDTO = new PolicyDTO;
    this.Currentuser = localStorage.getItem("UserfullName");
    this.currentuserId = localStorage.getItem('EmpNo');
  }
  val: number;
  ngOnInit(): void {
    this.val = this.activatedRoute.snapshot.params.val;
    this.PolicyService.GetPolicyDetails(this.currentuserId)
      .subscribe(data => {
        this.PolicyId = data[0]['PolicyId'];
        this.PolicyHeader = data[0]['PolicyHeader'];
        this.PolicyContent = data[0]['PolicyContent'];
      });
  }

  result: number;
  Agreement(_val: number) {
    if (_val == 1) {
      this.PolicyService.InsertUserPolicyAgreement(this.PolicyId, this.currentuserId)
        .subscribe(data => {
          this.result = data["Result"];
          if (this.result = 1) {
            this.notifyService.showSuccess(this.Currentuser, "Successfully logged in by : ");
            this.notifyService.showInfo("Accepted", "User Policy");
            this.router.navigate([this.dashboardUrl]);
          }
          else {
            this.router.navigate([this.loginUrl])
          }
        });
    }
    else {
      localStorage.removeItem('EmpNo');
      this.authService.logout();
      return this.router.navigate(['login']);
    }
  }
}
