import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepasswordComponent } from '../settings/changepassword/changepassword.component';
import { MyprofileComponent } from '../settings/myprofile/myprofile.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';

export const Settings_Routes: Routes = [{
  path: 'myprofile',
  component: MyprofileComponent

},
{
  path: 'changepassword',
  component: ChangepasswordComponent

}, {
  path: 'privacypolicy',
  component: UserPolicyComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(Settings_Routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
