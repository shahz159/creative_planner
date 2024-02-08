import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "src/app/material-module";
import { MeetingDetailsRoutingModule } from './meeting-details-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MeetingDetailsComponent } from './meeting-details.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    MeetingDetailsComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    MeetingDetailsRoutingModule,
    AngularEditorModule,
    MaterialModule,
    FormsModule
  ]
})
export class MeetingDetailsModule { }
