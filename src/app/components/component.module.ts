import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent} from './slides/slides.component';
import { StartComponent} from './start/start.component';
import { LogoComponent} from './logo/logo.component';
import { ToggleComponent } from './toggle/toggle.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RefresherComponent } from './refresher/refresher.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { CalendarComponent } from './calendar/calendar.component';

import { EventRefresherComponent } from './event-refresher/event-refresher.component';
import { TrainingRefresherComponent } from './training-refresher/training-refresher.component';
import { CalendarRefresherComponent } from './calendar-refresher/calendar-refresher.component';
import { OfficialRefresherComponent } from './official-refresher/official-refresher.component';
import { AlumniListRefresherComponent } from './alumni-list-refresher/alumni-list-refresher.component';
import { AlumniProfileRefresherComponent } from './profile-refresher/alumni-profile-refresher/alumni-profile-refresher.component';
import { JobProfileRefresherComponent } from './profile-refresher/job-profile-refresher/job-profile-refresher.component';
import { EventProfileRefresherComponent } from './profile-refresher/event-profile-refresher/event-profile-refresher.component';
import { TrainingProfilePage } from '../profile_page/training-profile/training-profile.page';
import { TrainingProfileRefresherComponent } from './profile-refresher/training-profile-refresher/training-profile-refresher.component';

// import { FormsModule } from '@angular/forms';

// import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,  
  ],
  declarations:
   [
     SlidesComponent,
      StartComponent,
      LogoComponent,
      ToggleComponent,
      SidebarComponent,
      RefresherComponent,
      LoaderComponent,
      HeaderComponent,
      TitleComponent,
      CalendarComponent,
      AlumniListRefresherComponent,
      EventRefresherComponent,
      TrainingRefresherComponent,
      CalendarRefresherComponent,
      OfficialRefresherComponent,
      AlumniProfileRefresherComponent,
      JobProfileRefresherComponent,
      EventProfileRefresherComponent,
      TrainingProfileRefresherComponent
    ],
  exports : [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    ToggleComponent,
    SidebarComponent,
     RefresherComponent,
     LoaderComponent,
     HeaderComponent,
     TitleComponent,
     CalendarComponent,
     AlumniListRefresherComponent,
     EventRefresherComponent,
     TrainingRefresherComponent,
     CalendarRefresherComponent,
     OfficialRefresherComponent,
     AlumniProfileRefresherComponent,
     JobProfileRefresherComponent,
     EventProfileRefresherComponent,
     TrainingProfileRefresherComponent
     ]
})
export class ComponentModule {}
