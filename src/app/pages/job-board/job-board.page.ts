import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LoadingController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.page.html',
  styleUrls: ['./job-board.page.scss'],
})
export class JobBoardPage implements OnInit {
  jobs: any;

  title : 'Job';

  constructor(
              public _apiService: ApiService, 
              public router: Router,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public modalController: ModalController
       
       ) { 
    this.getJob(); 
  }

  async getJob(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();
    this._apiService.jobs().subscribe((response: any) => {
      loading.dismiss();
      // console.log("SUCCESS ===", response);
     this.jobs = response;

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

  calendar() {
    this.router.navigate(['home/calendar-of-events']);
  }


  info(job_id: any){
    let id  = job_id;
    
    this.router.navigate(['home/job/job-profile/'+id]);
  }

  
  ngOnInit() {
    this.getJob();
  }

}
