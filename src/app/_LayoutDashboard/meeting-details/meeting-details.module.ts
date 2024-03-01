import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material-module";
import { MeetingDetailsRoutingModule } from './meeting-details-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MeetingDetailsComponent } from './meeting-details.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    MeetingDetailsComponent
    
  ],
  imports: [
    CommonModule,
    MeetingDetailsRoutingModule,
    AngularEditorModule,
    MaterialModule,
    FormsModule,
    CKEditorModule
  ]
})
export class MeetingDetailsModule { }
