import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCreationComponent } from "./project-creation.component";

import { ProjectCreationRoutingModule } from './project-creation-routing.module';


@NgModule({
  declarations: [
    ProjectCreationComponent
  ],
  imports: [
    CommonModule,
    ProjectCreationRoutingModule
  ]
})
export class ProjectCreationModule { }
