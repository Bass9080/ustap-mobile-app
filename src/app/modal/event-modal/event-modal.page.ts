import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {
  
  title: string;
  imageURL: string;
  decsription: string;
  start: string;
  end: string;

  constructor( public modalController: ModalController,
    public navParams: NavParams) { 

      this.title = navParams.get('title');
      this.imageURL = navParams.get('imageURL');
      this.decsription = navParams.get('description');
      this.start = formatDate(navParams.get('startTime'), 'medium', 'en-FR');
      this.end = formatDate(navParams.get('endTime'), 'medium', 'en-FR');
    }
    

    close() {
      this.modalController.dismiss();
    }

   

  ngOnInit() {
  }

}
