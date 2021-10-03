import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // path: '',
    // redirectTo: 'folder/Inbox',
    // pathMatch: 'full'

    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'alumni-members',
    loadChildren: () => import('./pages/alumni-members/alumni-members.module').then( m => m.AlumniMembersPageModule)
  },
  {
    path: 'job-board',
    loadChildren: () => import('./pages/job-board/job-board.module').then( m => m.JobBoardPageModule)
  },
  {
    path: 'office-bearers',
    loadChildren: () => import('./pages/office-bearers/office-bearers.module').then( m => m.OfficeBearersPageModule)
  },
  {
    path: 'training-services',
    loadChildren: () => import('./pages/training-services/training-services.module').then( m => m.TrainingServicesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'event-modal',
    loadChildren: () => import('./modal/event-modal/event-modal.module').then( m => m.EventModalPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'alumni-profile',
    loadChildren: () => import('./profile_page/alumni-profile/alumni-profile.module').then( m => m.AlumniProfilePageModule)
  },
  {
    path: 'job-profile',
    loadChildren: () => import('./profile_page/job-profile/job-profile.module').then( m => m.JobProfilePageModule)
  },
  {
    path: 'job-profile',
    loadChildren: () => import('./profile_page/job-profile/job-profile.module').then( m => m.JobProfilePageModule)
  },
  {
    path: 'event-profile',
    loadChildren: () => import('./profile_page/event-profile/event-profile.module').then( m => m.EventProfilePageModule)
  },
  {
    path: 'training-profile',
    loadChildren: () => import('./profile_page/training-profile/training-profile.module').then( m => m.TrainingProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
