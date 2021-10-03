import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Location } from "@angular/common";
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-event-profile',
  templateUrl: './event-profile.page.html',
  styleUrls: ['./event-profile.page.scss'],
})
export class EventProfilePage implements OnInit {
  id: any;
  data: any;
  s: any;

  constructor(
              public router: Router, public _apiService: ApiService, 
              private route: ActivatedRoute,
              private location: Location,
              public loadingController: LoadingController,
              public toastController: ToastController,) { }

  
  async data_selected(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();
    this.route.params.subscribe(params => {
      this.id = params['id']; 
   

      console.log(this.id)
     
      this._apiService.get_event_selected(this.id).subscribe((response: any) => {
        this.data = response['data'];
        loading.dismiss();
        console.log(this.data)
  
  
      }, async (error: any) =>{

        loading.dismiss();
          const toast = await this.toastController.create({
            message: "Can't connect to server",
            duration: 6000,
            buttons: [{
              text : 'OK',
             
            }]
            
            
          });
          
          toast.present();
  
      })  
      
     
 });
  }

  ngOnInit() {
    this.data_selected();
  }

  back_button(){
    // this.router.navigate(['home/events']);
    this.location.back();
  }

}
