import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';

// const routes: Routes = [

//   { path: '', component: MasterComponent },

//   { path: 'Dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },

//   { path: 'footer', loadChildren: () => import('../footer/footer.module').then(m => m.FooterModule) },

//   { path: 'header', loadChildren: () => import('../header/header.module').then(m => m.HeaderModule) },

//   { path: 'sidebar', loadChildren: () => import('../sidebar/sidebar.module').then(m => m.SidebarModule) },

//   { path: 'Portfolio', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },

//   { path: 'CreatePortfolio', loadChildren: () => import('../projects-add/projects-add.module').then(m => m.ProjectsAddModule) },

//   { path: 'ProjectsSummary', loadChildren: () => import('../projects-summary/projects-summary.module').then(m => m.ProjectsSummaryModule) },

//   { path: 'PerformanceDashboard', loadChildren: () => import('../projects-chart/projects-chart.module').then(m => m.ProjectsChartModule) },

//   { path: 'ViewProjects/:Mode', pathMatch: 'full', loadChildren: () => import('../view-dashboard-projects/view-dashboard-projects.module').then(m => m.ViewDashboardProjectsModule) },

//   { path: 'History', loadChildren: () => import('../history/history.module').then(m => m.HistoryModule) },

//   { path: 'MoreDetails', loadChildren: () => import('../more-details/more-details.module').then(m => m.MoreDetailsModule) },

//   { path: 'PortfolioProjects', loadChildren: () => import('../portfolio-projects/portfolio-projects.module').then(m => m.PortfolioProjectsModule) },

//   {
//     path: 'projectinfo',
//     loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
//   },
//   {
//     path: 'ProjectInfo',
//     loadChildren: () => import('../project-info/project-info.module').then(m => m.ProjectInfoModule)
//   }

// ];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
