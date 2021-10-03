import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-training-services',
  templateUrl: './training-services.page.html',
  styleUrls: ['./training-services.page.scss'],
})
export class TrainingServicesPage implements OnInit {
  training: any;

  constructor(public _apiService: ApiService, public router: Router,  public loadingController: LoadingController, public toastController: ToastController)
  {
    this.getTraining();
  }

  async getTraining(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();
    this._apiService.training().subscribe((response: any) => {
      // console.log("SUCCESS ===", response);
      loading.dismiss();
     this.training = response;
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

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this. getTraining();
    }, 1000);
  }

  calendar() {
    this.router.navigate(['home/calendar-of-events']);
  }

  training_selected(training_id:any) {
   
    let id  = training_id;
    
    this.router.navigate(['home/training-and-services/profile/'+id]);
  }
  

  ngOnInit() {
    this.getTraining();
  }

}
