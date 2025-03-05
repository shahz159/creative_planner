import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent} from './create-project.component';
import { DetailsComponent } from '../details/details.component';
import { DetailsModule } from '../details/details.module';
import {DeactivateCreateProjectService} from '../../_Services/deactivate-create-project.service';

const routes: Routes = [

  {
    path: '', component: CreateProjectComponent, canDeactivate:[DeactivateCreateProjectService],
    children: [
      {
        path: 'ActionToProject/:id',
        loadChildren: () => import('../action-to-project/action-to-project.module').then(m => m.ActionToProjectModule),
      },

    ]
  },
  {
      path: 'Assigned Projects/:assignId', component: CreateProjectComponent,
      children:[
        {
          path: 'ActionToProject/:id',
          loadChildren: () => import('../action-to-project/action-to-project.module').then(m => m.ActionToProjectModule),
        }
      ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateProjectRoutingModule { }
