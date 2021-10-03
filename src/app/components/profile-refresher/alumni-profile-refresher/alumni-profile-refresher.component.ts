import { Component, OnInit } from '@angular/core';
import { AlumniProfilePage } from 'src/app/profile_page/alumni-profile/alumni-profile.page';

@Component({
  selector: 'app-alumni-profile-refresher',
  templateUrl: './alumni-profile-refresher.component.html',
  styleUrls: ['./alumni-profile-refresher.component.scss'],
})
export class AlumniProfileRefresherComponent implements OnInit {

  constructor(public alumni: AlumniProfilePage) { }

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.alumni.selected_data();
    }, 1000);
  }

}
