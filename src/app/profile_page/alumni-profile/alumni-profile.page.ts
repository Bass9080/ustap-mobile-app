import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Location } from "@angular/common";
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-alumni-profile',
  templateUrl: './alumni-profile.page.html',
  styleUrls: ['./alumni-profile.page.scss'],
})
export class AlumniProfilePage implements OnInit {

  id: any;
  sub: any;
  alumni: any;
  name : any;
  data: any;
  constructor(
              public _apiService: ApiService,
              private route: ActivatedRoute, 
              private router: Router, 
              private location: Location,
              public loadingController: LoadingController,
              public toastController: ToastController,) { 


    this.selected_data()

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
      
      this._apiService.get_alumni_selected(this.id).subscribe((response: any) => {
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
  // doRefresh(event) {
  //   console.log('Begin async operation');
    

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     event.target.complete();
  //     this.selected_data();
  //   }, 1000);
  // }

  ngOnInit() {

    this.selected_data()
    
    
  }

  // get(id) {
    
  // }



}
