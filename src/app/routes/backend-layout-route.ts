import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


export const BACKEND_ROUTES: Routes = [

    
     {
          path: 'dashboard',canActivate:[AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/dashboard/dashboard.module').then(m => m.DashboardModule)
     },

     {
          path: 'Streamdashboard',canActivate:[AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/stream-dashboard/stream-dashboard.module').then(m => m.StreamDashboardModule)
     },

     {
          path: 'StreamCalendar',canActivate:[AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/stream-calendar/stream-calendar.module').then(m => m.StreamCalendarModule)
     },

     {
          path: 'Portfolio',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/home/home.module').then(m => m.HomeModule)
     },

     {
          path: 'portfolio',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/home/home.module').then(m => m.HomeModule)
     },

     {
          path: 'ProjectsSummary',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/projects-summary/projects-summary.module').then(m => m.ProjectsSummaryModule),

     },
     {
          path: 'createproject',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/create-project/create-project.module').then(m => m.CreateProjectModule),

     },
     {
          path: 'Timeline',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/timeline/timeline.module').then(m => m.TimelineModule),

     },
     {
          path: 'PerformanceDashboard',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/projects-chart/projects-chart.module').then(m => m.ProjectsChartModule)
     },
     {
          path: 'performancedashboard',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/projects-chart/projects-chart.module').then(m => m.ProjectsChartModule)
     },

     {
          path: 'DeleteHistory',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/history/history.module').then(m => m.HistoryModule)
     },
    
     {
          path: 'ToDoProjects',canActivate: [AuthGuard],
          loadChildren: () => import('../_LayoutDashboard/to-do-projects/to-do-projects.module').then(m => m.ToDoProjectsModule)
     },
     {
          path: 'settings',canActivate:[AuthGuard],
          loadChildren: () => import('../settings/setting.module').then(m => m.SettingModule)
     },
     {
          path: 'userpolicy/:val',canActivate: [AuthGuard],
          loadChildren: () => import('../policy/policy.module').then(m => m.PolicyModule)
     }

]


