import { Component, OnInit } from '@angular/core';
import { CalendarPage } from 'src/app/pages/calendar/calendar.page';

@Component({
  selector: 'app-calendar-refresher',
  templateUrl: './calendar-refresher.component.html',
  styleUrls: ['./calendar-refresher.component.scss'],
})
export class CalendarRefresherComponent implements OnInit {

  constructor(public calendar : CalendarPage ) { }

  doRefresh(calendar) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      calendar.target.complete();
      this.calendar.loadEvent();
    }, 1000);
  }

  ngOnInit() {}

}
