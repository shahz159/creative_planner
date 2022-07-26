import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_LayoutDashboard/header/header.component';
import { SidebarComponent } from './_LayoutDashboard/sidebar/sidebar.component';
import { MaterialModule } from "src/app/material-module";
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ToastrModule } from 'ngx-toastr';
import { BackendLayoutComponent } from './_Layouts/backend-layout/backend-layout.component';
import { DefaultLayoutComponent } from './_Layouts/default-layout/default-layout.component';
import { ConfirmDialogComponent } from 'src/app/Shared/components/confirm-dialog/confirm-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




// import { ProjectCreationComponent } from './_LayoutDashboard/project-creation/project-creation.component';
// import { ProjectAssignTaskComponent } from './_LayoutDashboard/project-assign-task/project-assign-task.component';
//  import { ProjectUnplannedTaskComponent } from './_LayoutDashboard/project-unplanned-task/project-unplanned-task.component';
//import { ToDoProjectsComponent } from './_LayoutDashboard/to-do-projects/to-do-projects.component';
//import { FilterPipeSearchPipe } from './Shared/filter-pipe-search.pipe';
//import { ProjectInfoComponent } from "src/app/_LayoutDashboard/project-info/project-info.component";


@NgModule({
  declarations: [
    AppComponent,
    BackendLayoutComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ConfirmDialogComponent
    
    

  
    // ProjectCreationComponent,
    // ProjectAssignTaskComponent,
    // ProjectUnplannedTaskComponent,
   // ToDoProjectsComponent,
    //FilterPipeSearchPipe,
   // ProjectInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({}),
    RouterModule,
    
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    FormsModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    
    
  ],
  providers:
    [AuthGuard
      // ,ProjectUnplannedTaskComponent
     ],

  bootstrap: [AppComponent]
})
export class AppModule { }
