import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-alumni-members',
  templateUrl: './alumni-members.page.html',
  styleUrls: ['./alumni-members.page.scss'],
})
export class AlumniMembersPage implements OnInit {
  alumni: any;

  constructor(public _apiService: ApiService, public router: Router , public loadingController: LoadingController, public toastController: ToastController,) {
    this.getAlumni(); 
   }

  async getAlumni(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();
    this._apiService.alumni().subscribe((response: any) => {
      loading.dismiss();
      // console.log("SUCCESS ===", response);
     this.alumni = response;

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

  refreshAlumni(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.getAlumni();
    }, 1000);
  }

  calendar() {
    this.router.navigate(['home/calendar-of-events']);
  }

  open_profile(event){

    // console.log(event);
    let id = event;
  
    this.router.navigate(['home/alumni-members/profile/'+id]);
  }

  ngOnInit() {
    this.getAlumni()
  }

}
