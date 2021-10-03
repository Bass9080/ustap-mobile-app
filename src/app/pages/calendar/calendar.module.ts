import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { CalendarPage } from './calendar.page';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { CalendarModule } from 'ion2-calendar';
import { RouterModule } from '@angular/router';
import { NgCalendarModule} from 'ionic2-calendar';
import { ComponentModule } from 'src/app/components/component.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/en';
registerLocaleData(localeFr, 'en');








FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    ComponentModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    FullCalendarModule,
     NgCalendarModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarPage
      }
    ]),
    CalendarModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
