import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { CompanyComponent } from './company/company.component';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { DesignationComponent } from './designation/designation.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { SourceComponent } from './source/source.component';
// import { UserInfoComponent } from '../user-details/user-info/user-info.component';
const routes: Routes = [
  { path: 'Company', component: CompanyComponent, canActivate: [AuthGuard] },
  { path: 'Department', component: DepartmentComponent, canActivate: [AuthGuard] },
  { path: 'Role', component: RoleComponent, canActivate: [AuthGuard] },
  { path: 'Designation', component: DesignationComponent, canActivate: [AuthGuard] },
  { path: 'UserList', component: UserlistComponent, canActivate: [AuthGuard] },
  { path: 'UserRegistration', component: UserregistrationComponent, canActivate: [AuthGuard] },
  { path: 'source', component: SourceComponent, canActivate: [AuthGuard] },
  // {
  //   path: 'UserList',
  //   component: UserlistComponent,
  //   canActivate: [AuthGuard]
  //   , children: [
  //     // { path: '', component: UserlistComponent, canActivate: [AuthGuard] },
  //     { path: 'UserInfo/:UserId', component: UserInfoComponent, canActivate: [AuthGuard] }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MasterFormsRoutingModule {
}
