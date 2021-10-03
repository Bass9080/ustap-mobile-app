import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolver/userData.resolver';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate : [HomeGuard],
    resolve: {
              userData : UserDataResolver
    },
    children : [
      
        {
          path: 'feed',
          loadChildren: () => import('../pages/feed/feed.module').then( m => m.FeedPageModule)
        },
        {
          path: 'notifications',
          loadChildren: () => import('../pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
        },
        {
          path: 'messages',
          loadChildren: () => import('../pages/messages/messages.module').then( m => m.MessagesPageModule)
        },
        {
          path: 'search',
          loadChildren: () => import('../pages/search/search.module').then( m => m.SearchPageModule)
        },
        {
          path: 'profile',
          loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
        },
        {
          path: 'settings',
          loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
        },
        {
          path: 'job',
          loadChildren: () => import('../pages/job-board/job-board.module').then( m => m.JobBoardPageModule)
        },
        {
          path: 'alumni-members',
          loadChildren: () => import('../pages/alumni-members/alumni-members.module').then( m => m.AlumniMembersPageModule)
        },
        {
          path: 'events',
          loadChildren: () => import('../pages/events/events.module').then( m => m.EventsPageModule)
        },
        {
          path: 'office-bearers',
          loadChildren: () => import('../pages/office-bearers/office-bearers.module').then( m => m.OfficeBearersPageModule)
        },
        {
          path: 'training-and-services',
          loadChildren: () => import('../pages/training-services/training-services.module').then( m => m.TrainingServicesPageModule)
        },
        {
          path: 'calendar-of-events',
          loadChildren: () => import('../pages/calendar/calendar.module').then( m => m.CalendarPageModule)
        },
        {
          path: 'alumni-members/profile/:id',
          loadChildren: () => import('../profile_page/alumni-profile/alumni-profile.module').then( m => m.AlumniProfilePageModule)
        },
        {
          path: 'job/job-profile/:id',
          loadChildren: () => import('../profile_page/job-profile/job-profile.module').then( m => m.JobProfilePageModule)
        },
        {
          path: 'events/event-profile/:id',
          loadChildren: () => import('../profile_page/event-profile/event-profile.module').then( m => m.EventProfilePageModule)
        },
        {
          path: 'training-and-services/profile/:id',
          loadChildren: () => import('../profile_page/training-profile/training-profile.module').then( m => m.TrainingProfilePageModule)
        },
        {
          path : '',
          redirectTo : '/home/feed',
          pathMatch : 'full'

        }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouter {}
