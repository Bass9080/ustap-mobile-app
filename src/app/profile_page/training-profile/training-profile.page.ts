import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Location } from "@angular/common";
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-training-profile',
  templateUrl: './training-profile.page.html',
  styleUrls: ['./training-profile.page.scss'],
})
export class TrainingProfilePage implements OnInit {
  id: any;
  data: any;

  constructor(
    public _apiService: ApiService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location,
    public loadingController: LoadingController,
    public toastController: ToastController,) { 

      this.selected_data();


   }

   back_button(){
    // this.router.navigate(['home/alumni-members']);
    this.location.back();
  }

  async selected_data(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();
    this.route.params.subscribe(params => {
      this.id = params['id']; 
      let id = this.id;

      console.log(id);
      
      this._apiService.get_training_selected(this.id).subscribe((response: any) => {

        loading.dismiss();
        this.data = response['data'];
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
    this.selected_data();
  }

}
