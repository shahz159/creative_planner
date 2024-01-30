import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ViewDashboardProjectsComponent } from '../_LayoutDashboard/view-dashboard-projects/view-dashboard-projects.component';


export const DEFAULT_ROUTES: Routes = [
     {
          path: '',
          loadChildren: () => import('../_LayoutDefault/login/login.module').then(m => m.LoginModule)
     },
     {
          path: 'login',
          loadChildren: () => import('../_LayoutDefault/login/login.module').then(m => m.LoginModule)
     },
     {
          path: 'moredetails/:projectcode', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/more-details/more-details.module').then(m => m.MoreDetailsModule),

     },
     // {
     //      path: 'MoreDetails/:projectcode', canActivate: [AuthGuard],
     //      loadChildren: () => import('../_LayoutDashboard/more-details/more-details.module').then(m => m.MoreDetailsModule),

     // },
     {
          path: 'ArchiveView/:projectcode/:url', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/fileview/fileview.module').then(m => m.FileviewModule),

     },
     {
          path: 'Notifications', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/notification/notification.module').then(m => m.NotificationModule),

     },
     {
          path: 'Meeting-Report/:scheduleid', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/meeting-report/meeting-report.module').then(m => m.MeetingReportModule),

     },
     {
          path: 'Meeting-Details', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/meeting-details/meeting-details.module').then(m => m.MeetingDetailsModule),

     },
     {
          path: 'portfolioprojects/:portfolioId', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/portfolio-projects/portfolio-projects.module').then(m => m.PortfolioProjectsModule)

     },
     
     {
          path: 'AddProjectsToPortfolio/:portfolioId', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/projects-add/projects-add.module').then(m => m.ProjectsAddModule)
     },
    
     {
          path: 'NewProjectCreation', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/project-creation/project-creation.module').then(m => m.ProjectCreationModule)
     },
     
     {
          path: 'AssignTask', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/project-assign-task/project-assign-task.module').then(m => m.ProjectAssignTaskModule),
     },

     {
          path: 'UnplannedTask', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/project-unplanned-task/project-unplanned-task.module').then(m => m.ProjectUnplannedTaskModule)
     },
     {
          path: 'Details/:ProjectCode', canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/details/details.module').then(m => m.DetailsModule)
     },
     {
          path: 'ViewProjects/:Mode',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/view-dashboard-projects/view-dashboard-projects.module').then(m => m.ViewDashboardProjectsModule)
     },
     // {
     //      path: 'projectinfo/:projectcode',
     //      loadChildren: () => import('../_LayoutDashboard/project-info/project-info.module').then(m => m.ProjectInfoModule)
     //    },
     // {
     //      path: 'ViewProjects/:Mode',component:ViewDashboardProjectsComponent,
     //      children: [
     //           {
     //             path: 'projectinfo/:projectcode',
     //             loadChildren: () => import('../_LayoutDashboard/project-info/project-info.module').then(m => m.ProjectInfoModule)
                 
     //           }
     //         ]
     // }
    
     {
          path: 'userpolicy',canActivate: [AuthGuard],
          loadChildren: () => import('../policy/policy.module').then(m => m.PolicyModule)
     },
]