import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office-bearers',
  templateUrl: './office-bearers.page.html',
  styleUrls: ['./office-bearers.page.scss'],
})
export class OfficeBearersPage implements OnInit {

  officials: any = [];

  constructor(public _apiService: ApiService, public router: Router,  public loadingController: LoadingController, public toastController: ToastController,) { 
    this.get(); 
  }

  async get(){

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();

    this._apiService.officials().subscribe((response: any) => {
      loading.dismiss();
      // console.log("SUCCESS ===", response);
     this.officials = response;

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

  alumni_selected(id : any){


    this.router.navigate(['home/alumni-members/profile/'+id]);

  }

  calendar() {
    this.router.navigate(['home/calendar-of-events']);
  }
  ngOnInit() {
    this.get();
  }

}
