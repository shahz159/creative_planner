import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StreamCalendarRoutingModule } from './stream-calendar-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { StreamCalendarComponent } from './stream-calendar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ StreamCalendarComponent ],
  imports: [
    AngularEditorModule,
    CommonModule,
    StreamCalendarRoutingModule,
    MatDatepickerModule,
    FormsModule,
    NgSelectModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [StreamCalendarComponent]
})
export class StreamCalendarModule { }
