import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectCreationComponent } from './project-creation.component';

const routes: Routes = [{
  path: '', component: ProjectCreationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectCreationRoutingModule { }
