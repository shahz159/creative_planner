import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BackendLayoutComponent } from './_Layouts/backend-layout/backend-layout.component';
import {BACKEND_ROUTES  } from "./routes/backend-layout-route";
import { DefaultLayoutComponent } from './_Layouts/default-layout/default-layout.component';
import {DEFAULT_ROUTES  } from "./routes/default-layout-route";
//import { Settings_Routes } from './settings/setting-routing.module';
const routes: Routes = [
  {
    path:'',component:DefaultLayoutComponent,children:DEFAULT_ROUTES
  },
  {
    path:'backend',component:BackendLayoutComponent,children:BACKEND_ROUTES,
    canActivate:[AuthGuard],
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
