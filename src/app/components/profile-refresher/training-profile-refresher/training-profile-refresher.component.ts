import { Component, OnInit } from '@angular/core';
import { TrainingProfilePage } from 'src/app/profile_page/training-profile/training-profile.page';

@Component({
  selector: 'app-training-profile-refresher',
  templateUrl: './training-profile-refresher.component.html',
  styleUrls: ['./training-profile-refresher.component.scss'],
})
export class TrainingProfileRefresherComponent implements OnInit {

  constructor(public data: TrainingProfilePage) { }

  ngOnInit() {}
  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.data.selected_data();
    }, 1000);
  }

}
