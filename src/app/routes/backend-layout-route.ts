import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


export const BACKEND_ROUTES: Routes = [

    
     {
          path: 'dashboard',
          loadChildren: () => import('../_LayoutDashboard/dashboard/dashboard.module').then(m => m.DashboardModule)
     },

     {
          path: 'Streamdashboard',
          loadChildren: () => import('../_LayoutDashboard/stream-dashboard/stream-dashboard.module').then(m => m.StreamDashboardModule)
     },

     {
          path: 'StreamCalendar',
          loadChildren: () => import('../_LayoutDashboard/stream-calendar/stream-calendar.module').then(m => m.StreamCalendarModule)
     },
   
     {
          path: 'Portfolio',
          loadChildren: () => import('../_LayoutDashboard/home/home.module').then(m => m.HomeModule)
     },

     {
          path: 'portfolio',
          loadChildren: () => import('../_LayoutDashboard/home/home.module').then(m => m.HomeModule)
     },

     {
          path: 'ProjectsSummary',
          loadChildren: () => import('../_LayoutDashboard/projects-summary/projects-summary.module').then(m => m.ProjectsSummaryModule),

     },
     {
          path: 'createproject',
          loadChildren: () => import('../_LayoutDashboard/create-project/create-project.module').then(m => m.CreateProjectModule),

     },
     {
          path: 'Timeline',
          loadChildren: () => import('../_LayoutDashboard/timeline/timeline.module').then(m => m.TimelineModule),

     },
     {
          path: 'PerformanceDashboard',
          loadChildren: () => import('../_LayoutDashboard/projects-chart/projects-chart.module').then(m => m.ProjectsChartModule)
     },
     {
          path: 'performancedashboard',
          loadChildren: () => import('../_LayoutDashboard/projects-chart/projects-chart.module').then(m => m.ProjectsChartModule)
     },

     {
          path: 'DeleteHistory',
          loadChildren: () => import('../_LayoutDashboard/history/history.module').then(m => m.HistoryModule)
     },
    
     {
          path: 'ToDoProjects',
          loadChildren: () => import('../_LayoutDashboard/to-do-projects/to-do-projects.module').then(m => m.ToDoProjectsModule)
     },
     {
          path: 'settings',
          loadChildren: () => import('../settings/setting.module').then(m => m.SettingModule)
     },
     {
          path: 'userpolicy/:val',
          loadChildren: () => import('../policy/policy.module').then(m => m.PolicyModule)
     }
     ,
     {
         path: 'masterforms',
         loadChildren: () => import('../_LayoutDashboard/master-forms/master-forms.module').then(m => m.MasterFormsModule),
         canActivate: [AuthGuard],
     }

]


