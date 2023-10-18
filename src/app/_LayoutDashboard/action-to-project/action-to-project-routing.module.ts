import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionToProjectComponent } from './action-to-project.component';

const routes: Routes = [{
  path: '', component: ActionToProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionToProjectRoutingModule { }
