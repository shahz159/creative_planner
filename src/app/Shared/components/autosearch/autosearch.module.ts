import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosearchRoutingModule } from './autosearch-routing.module';
import {AsyncPipe} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AutosearchComponent } from '.src/app/Shared/components/autosearch/autosearch.component';

@NgModule({
  declarations: [AutosearchComponent],
  imports: [
    CommonModule,
    AutosearchRoutingModule,
    AsyncPipe,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AutosearchModule { }
