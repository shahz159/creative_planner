import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { ChangepasswordComponent } from '../settings/changepassword/changepassword.component';
import { MyprofileComponent } from '../settings/myprofile/myprofile.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';

@NgModule({
  declarations: [ChangepasswordComponent,MyprofileComponent, UserPolicyComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SettingModule { }
