import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';
import {TimeDiffPipe} from '../time-diff.pipe';



@NgModule({
  declarations: [ShareComponent,TimeDiffPipe],
  imports: [
    CommonModule
  ],
  exports:[ShareComponent,TimeDiffPipe]

})
export class ShareModule { }
