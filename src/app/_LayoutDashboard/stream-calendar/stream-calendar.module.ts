import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StreamCalendarRoutingModule } from './stream-calendar-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MY_FORMATS, StreamCalendarComponent } from './stream-calendar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ShareModule } from 'src/app/Shared/share/share.module';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

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
    MatCardModule,
    MatCheckboxModule,
    GooglePlaceModule,
    ShareModule,
    MatSelectModule,
    ReactiveFormsModule
  ],

  providers: [DatePipe
    ,{provide:MAT_DATE_FORMATS,useValue:MY_FORMATS},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]} ],
  exports: [StreamCalendarComponent]
})
export class StreamCalendarModule { }
