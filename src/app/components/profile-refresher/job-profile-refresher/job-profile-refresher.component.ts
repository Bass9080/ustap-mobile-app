import { Component, OnInit } from '@angular/core';
import { JobProfilePage } from 'src/app/profile_page/job-profile/job-profile.page';

@Component({
  selector: 'app-job-profile-refresher',
  templateUrl: './job-profile-refresher.component.html',
  styleUrls: ['./job-profile-refresher.component.scss'],
})
export class JobProfileRefresherComponent implements OnInit {

  constructor(public job: JobProfilePage) { }

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.job.data_selected();
    }, 1000);
  }

}
