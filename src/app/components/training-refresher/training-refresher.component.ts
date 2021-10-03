import { Component, OnInit } from '@angular/core';
import { TrainingServicesPage } from 'src/app/pages/training-services/training-services.page';

@Component({
  selector: 'app-training-refresher',
  templateUrl: './training-refresher.component.html',
  styleUrls: ['./training-refresher.component.scss'],
})
export class TrainingRefresherComponent implements OnInit {

  constructor(public training: TrainingServicesPage) { }

  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.training.getTraining();
    }, 1000);
  }

  ngOnInit() {}

}
