import { Component, OnInit } from '@angular/core';
import { OfficeBearersPage } from 'src/app/pages/office-bearers/office-bearers.page';

@Component({
  selector: 'app-official-refresher',
  templateUrl: './official-refresher.component.html',
  styleUrls: ['./official-refresher.component.scss'],
})
export class OfficialRefresherComponent implements OnInit {

  constructor(public official: OfficeBearersPage) { }

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.official.get();
    }, 1000);
  }

}
