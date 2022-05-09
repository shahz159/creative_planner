import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionToAssignComponent } from './action-to-assign.component';

const routes: Routes = [{
  path: '', component: ActionToAssignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionToAssignRoutingModule { }
