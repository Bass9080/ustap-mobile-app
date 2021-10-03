import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { HttpClient } from '@angular/common/http';
import { CalendarComponent } from 'ionic2-calendar';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { EventModalPage } from 'src/app/modal/event-modal/event-modal.page';
import { ApiService } from 'src/app/api.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  constructor(
              private http:HttpClient,
              public modalController: ModalController,
              public _apiService: ApiService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              private location: Location,
              ) 
              {
                  this.loadEvent();
              }

  viewTitle : string;
  currentMonth : string;
  
  showAddEvent: boolean;

  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;

  newEvent = {
    title: '',
    description: '',
    imageURL: '',
    startTime: '',
    endTime: ''
  };
  minDate = new Date().toISOString();
  allEvents = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  back_button(){
    this.location.back();
  }
  

  onViewTitleChanged(title: string) {
    this.currentMonth = title
  }

  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      imageURL: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }
  addEvent() {
   this.allEvents.push({
      title: this.newEvent.title,
      startTime:  new Date(this.newEvent.startTime),
      endTime: new Date(this.newEvent.endTime),
      description: this.newEvent.description,
      imageURL: this.newEvent.imageURL
    });
    console.log(new Date(this.newEvent.startTime));
    this.showHideForm();
  }

  onTimeSelected(ev: any) {
    const selected = new Date(ev.selectedTime);
    this.newEvent.startTime = selected.toISOString();
    
    selected.setHours(selected.getHours() + 1);
    this.newEvent.endTime = (selected.toISOString());
  }

  next() {
    this.myCalendar.slideNext();
  }

  back() {
    this.myCalendar.slidePrev();
  }

  


  selectedDate: Date;

  // @ViewChild(CalendarComponent) myCal : CalendarComponent;


  
  // events = [];
  // calendarOptions: CalendarOptions;

 

  async loadEvent() {

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();

    this._apiService.events().subscribe((actions:any) => {

    // console.log(actions);
    loading.dismiss();
    this.allEvents = [];

    actions.forEach(action => {
        
      // console.log('action:' + action.start);

      // console.log( new Date(action.start));
      // console.log( new Date(action.end))
      

      this.allEvents.push({
        title: action.event_name,
        startTime:  new Date( action.start),
        endTime: new Date( action.end),
        description: action.event_description,
        imageURL: action.pic
      });
      this.myCalendar.loadEvents();    
    });

  })
  }

 

  async onEventSelected(event: any) {
     
  const modal = await this.modalController.create({
    component: EventModalPage,
    componentProps: event
  });
  return await modal.present();
  }


  ngOnInit() {

    
    this.loadEvent();
    
  }

}
