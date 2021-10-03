import { Component, OnInit } from '@angular/core';
import { EventProfilePage } from 'src/app/profile_page/event-profile/event-profile.page';

@Component({
  selector: 'app-event-profile-refresher',
  templateUrl: './event-profile-refresher.component.html',
  styleUrls: ['./event-profile-refresher.component.scss'],
})
export class EventProfileRefresherComponent implements OnInit {

  constructor(public event: EventProfilePage) { }

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.event.data_selected();
    }, 1000);
  }

}
