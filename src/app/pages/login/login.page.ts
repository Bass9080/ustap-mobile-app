import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/config/auth-constant';
import { LoadingController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email1: any;
  password1 : any;
  form: FormGroup;
  data: any;


  postData = {
    username : '',
    password : ''
  }
  logo: any;

  constructor(
              private http: HttpClient, 
              private alertCtrl : AlertController, 
              private router: Router,
              public _apiService: ApiService,
              public toastController: ToastController,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private storageService: StorageService,
              public loadingController: LoadingController,
              
              ){

                this.system_logo();
              }


  
  ngOnInit() {
    this.system_logo();
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }


  system_logo(){

    this._apiService.system_profile().subscribe((response: any) => {
    
   
     this.logo = response['data'];
     console.log(this.logo)

    })

  }


  async signin() {

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();

    this.authService.login(this.postData).subscribe((res:any)=> {
       if(res.data.response){

      const a = this.storageService.store(AuthConstants.AUTH, res.data);

      // console.log(a);
        loading.dismiss();
        // this.success_toast(res.data);
        this.router.navigate(['home/feed']);

      }
      else{
        loading.dismiss();
        console.log(res.data.message);
        this.error_toast(res.data);
      }
    }
    ,
      async (error: any) => {

        
        loading.dismiss();
        const toast = await this.toastController.create({
          message: 'No internet connection',
          duration: 6000,
          buttons: [{
            text : 'OK',
           
          }]
          
          
        });
        
        toast.present();
      }
    )
  }



  register(){

    this.router.navigate(['signup']);
  }


  // signin() {

  //   // const data = {
  //   //           email: this.email1,
  //   //           password : this.password1
  //   //         };

  //   console.log(this.postData); 
           
  //             this._apiService.login(this.postData).subscribe((response: any) => {
                

  //               console.log(response);

  //               // if(response.success == 1){
                  
  //               //     // this.success_toast(response);
  //               //     // this.router.navigate(['home/feed']);
  //               //  }else{
  //               //   this.error_toast(response);
  //               //  }
  //         })
      
            

   

  // }


  



  async success_toast(response) {
    const toast = await this.toastController.create({
      message: response.message,
      duration: 2000,
      
    });
    toast.present();
  }

  async error_toast(response) {
    const toast = await this.toastController.create({
      message: response.message,
      duration: 2000,
      
    });
    toast.present();
  }

}
