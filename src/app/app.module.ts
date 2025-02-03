import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
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
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NotificationComponent } from './_LayoutDashboard/notification/notification.component';
import { TimelineComponent } from './_LayoutDashboard/timeline/timeline.component';
import { MeetingReportComponent } from './_LayoutDashboard/meeting-report/meeting-report.component';
import { FileviewComponent } from './_LayoutDashboard/fileview/fileview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { CreateProjectComponent } from './_LayoutDashboard/create-project/create-project.component';
// import { AutosearchComponent } from './Shared/components/autosearch/autosearch.component';
// import { MoreinfoComponent } from './_LayoutDashboard/moreinfo/moreinfo.component';
// import { MoreinfoModule } from './_LayoutDashboard/moreinfo/moreinfo.module';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MeetingDetailsComponent } from './_LayoutDashboard/meeting-details/meeting-details.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { StreamDashboardComponent } from './_LayoutDashboard/stream-dashboard/stream-dashboard.component';
import { TimelineModule } from './_LayoutDashboard/timeline/timeline.module';
// import { TimelineModule } from './_LayoutDashboard/timeline/timeline.module';
// import { StreamCalendarComponent } from './_LayoutDashboard/stream-calendar/stream-calendar.component';



// import { ProjectCreationComponent } from './_LayoutDashboard/project-creation/project-creation.component';
// import { ProjectAssignTaskComponent } from './_LayoutDashboard/project-assign-task/project-assign-task.component';
//  import { ProjectUnplannedTaskComponent } from './_LayoutDashboard/project-unplanned-task/project-unplanned-task.component';
//import { ToDoProjectsComponent } from './_LayoutDashboard/to-do-projects/to-do-projects.component';
//import { FilterPipeSearchPipe } from './Shared/filter-pipe-search.pipe';
//import { ProjectInfoComponent } from "src/app/_LayoutDashboard/project-info/project-info.component";

// Import Translate Modules
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';


// Function to load translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BackendLayoutComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ConfirmDialogComponent,
    // TimelineComponent,
    StreamDashboardComponent,
    // StreamCalendarComponent,
    
    // MeetingReportComponent
   
    // NotificationComponent    
    

  
    // ProjectCreationComponent,
    // ProjectAssignTaskComponent,
    // ProjectUnplannedTaskComponent,
   // ToDoProjectsComponent,
    //FilterPipeSearchPipe,
   // ProjectInfoComponent
  ],
  imports: [
    BrowserModule,
    // MoreinfoModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({}),
    RouterModule,
    
    LoadingBarRouterModule,
    LoadingBarHttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    PdfViewerModule,
    NgxDocViewerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ScrollingModule,
    TimelineModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  
   
  ],
  providers:
    [AuthGuard,TranslateService
      // ,ProjectUnplannedTaskComponent
     ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
