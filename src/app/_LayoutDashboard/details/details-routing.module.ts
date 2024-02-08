import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  { path: '', component: DetailsComponent,
  children:[
    {
      path: 'ActionToProject/:id',
      loadChildren: () => import('../action-to-project/action-to-project.module').then(m => m.ActionToProjectModule),   
    }
  ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }


