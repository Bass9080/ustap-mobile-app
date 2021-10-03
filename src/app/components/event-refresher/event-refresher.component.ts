import { Component, OnInit } from '@angular/core';
import { EventsPage } from 'src/app/pages/events/events.page';

@Component({
  selector: 'app-event-refresher',
  templateUrl: './event-refresher.component.html',
  styleUrls: ['./event-refresher.component.scss'],
})
export class EventRefresherComponent implements OnInit {

  constructor(public event: EventsPage) { }

  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.event.getEvent();
    }, 1000);
  }

  ngOnInit() {}

}
