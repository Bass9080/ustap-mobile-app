import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.page.html',
  styleUrls: ['./job-profile.page.scss'],
})
export class JobProfilePage implements OnInit {
  id: any;
  data: any;
  constructor( 
              public router: Router,
              public _apiService: ApiService, 
              private route: ActivatedRoute,
              public loadingController: LoadingController,
              public toastController: ToastController,) { 
    this.data_selected();
  }

  ngOnInit() {
    this.data_selected();
  }

  back_button(){
    this.router.navigate(['home/job']);
  }

  async data_selected(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();
    this.route.params.subscribe(params => {
      this.id = params['id'];
       
     
      this._apiService.get_job_selected(this.id).subscribe((response: any) => {
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


}
