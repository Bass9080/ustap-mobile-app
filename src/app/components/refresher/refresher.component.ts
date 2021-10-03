import { Component, OnInit } from '@angular/core';

import { JobBoardPage } from 'src/app/pages/job-board/job-board.page';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss'],
})
export class RefresherComponent implements OnInit {

  constructor(public job: JobBoardPage) { }

  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.job.getJob();
    }, 1000);
  }

  ngOnInit() {}

}
