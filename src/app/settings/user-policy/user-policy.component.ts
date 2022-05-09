import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyDTO } from 'src/app/_Models/policy-dto';
import { AuthService } from 'src/app/_Services/auth.service';
import { NotificationService } from 'src/app/_Services/notification.service';
import { PolicyService } from 'src/app/_Services/policy.service';

@Component({
  selector: 'app-user-policy',
  templateUrl: './user-policy.component.html',
  styleUrls: ['./user-policy.component.css']
})
export class UserPolicyComponent implements OnInit {
  PolicyId: number;
  PolicyHeader: string;
  PolicyContent: string;
  currentuserId: string;
  ObjPolicyDTO: PolicyDTO;
  Currentuser: string
  constructor(
    private authService: AuthService,
    private PolicyService: PolicyService,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.ObjPolicyDTO = new PolicyDTO;
    this.Currentuser = localStorage.getItem("UserfullName");
    this.currentuserId = localStorage.getItem('EmpNo');
  }

  val: number;
  _LstPolicy: any;
  ngOnInit(): void {
    this.val = this.activatedRoute.snapshot.params.val;
    this.PolicyService.GetPolicyDetails(this.currentuserId)
      .subscribe(data => {
       // console.log("Policy Data---->",data)
        this._LstPolicy = data;
        // this.PolicyId = data[0]['PolicyId'];
        // this.PolicyHeader = data[0]['PolicyHeader'];
        // this.PolicyContent = data[0]['PolicyContent'];
      });
  }
  result: number;
  displayStyle = "none";
  dashboardUrl: string = 'backend/dashboard';
  loginUrl: string = 'login';
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
