import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsChartRoutingModule } from './projects-chart-routing.module';
import { ProjectsChartComponent } from './projects-chart.component';


@NgModule({
  declarations: [ProjectsChartComponent],
  imports: [
    CommonModule,
    ProjectsChartRoutingModule
  ]
})
export class ProjectsChartModule { }
