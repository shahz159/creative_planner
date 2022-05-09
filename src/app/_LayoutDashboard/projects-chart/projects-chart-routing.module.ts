import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsChartComponent } from './projects-chart.component';

const routes: Routes = [{ path: '', component: ProjectsChartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsChartRoutingModule { }
