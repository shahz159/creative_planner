import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileviewRoutingModule } from './fileview-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FileviewComponent } from './fileview.component';
import { MaterialModule } from 'src/app/material-module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [FileviewComponent],
  imports: [
    CommonModule,
    FileviewRoutingModule,
    PdfViewerModule,
    NgxDocViewerModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    MatTooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FileviewModule { }
