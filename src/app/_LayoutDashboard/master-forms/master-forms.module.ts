import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterFormsRoutingModule } from './master-forms-routing.module';
import { ConfirmDialogComponent } from './confirmdialog/confirmdialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { NgxPaginationModule } from 'ngx-pagination';
// import { DocumentviewComponent } from './documentview/documentview.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CompanyComponent } from './company/company.component';
import { DepartmentComponent } from '../../_LayoutDashboard/master-forms/department/department.component';  
import { RoleComponent } from './role/role.component';
import { DesignationComponent } from './designation/designation.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
// import { DataTablesModule } from 'angular-datatables';
import { SourceComponent } from './source/source.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../../environments/environment';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CdkTreeModule } from '@angular/cdk/tree';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    CompanyComponent,
    DepartmentComponent,
    RoleComponent,
    DesignationComponent,
    UserlistComponent,
    UserregistrationComponent,
    SourceComponent
  ],
  imports: [
    MatDatepickerModule,
    CommonModule,
    MasterFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatTreeModule,
    MatCheckboxModule,
    CdkTreeModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MaterialModule
    , Ng2SearchPipeModule
    , NgSelectModule
    , PdfViewerModule,
    Ng2TelInputModule
    //,NgxDocViewerModule
     
    ,NgxDaterangepickerMd.forRoot()
    , TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  ]
  ,
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class MasterFormsModule { }
export function HttpLoaderFactory(http: HttpClient) {
  if(environment.production){
    return new TranslateHttpLoader(http, environment.Language_file_url, '.json');
  }
  else{
    return new TranslateHttpLoader(http);
  }

}