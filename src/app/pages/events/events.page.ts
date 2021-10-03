import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  events: any;
  new_events : any;

  constructor(public _apiService: ApiService, public router: Router, public loadingController: LoadingController, public toastController: ToastController,) {
    this.getEvent(); 
    this.recently_added_events();
  }

  async getEvent(){

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();

    this._apiService.events().subscribe((response: any) => {
      loading.dismiss();
      // console.log("SUCCESS ===", response);
     this.events = response;

    },async (error: any) =>{

      loading.dismiss();
      const toast = await this.toastController.create({
        message: 'No internet connection',
        duration: 6000,
        buttons: [{
          text : 'OK',
         
        }]
        
        
      });
      
      toast.present();

    })

  }

  recently_added_events(){
    this._apiService.recently_added_events().subscribe((response: any) => {
      this.new_events = response;
      // console.log(this.new_events)

    })

  }

  event_selected(event_id: any){
    let id  = event_id;
    
    this.router.navigate(['home/events/event-profile/'+id]);

  }

  
  calendar() {
    this.router.navigate(['home/calendar-of-events']);
  }

 
  ngOnInit() {
    this.recently_added_events();
    this.getEvent(); 
  }

}
