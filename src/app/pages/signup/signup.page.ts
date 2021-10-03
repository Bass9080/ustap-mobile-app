import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupPageForm } from './signup.page.form';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { File,FileEntry } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { ActionSheetController, LoadingController, ToastController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ApiService } from 'src/app/api.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupform : SignupPageForm;
  form: FormGroup;
  image : any;
  imageform : any;
  private files : File;
  imageURI:any;
  imageFileName:any;
  GetImageNameUpload:any;

  postData = {
    first_name : '',
    middle_name : '',
    last_name : '',
    email : '',
    phone_number : '',
  }
  logo: any;

  constructor(
             private router: Router, 
             private formBuilder: FormBuilder,
             public http: HttpClient,
             public actionSheetController: ActionSheetController,
             public toastController: ToastController,
             public loadingController: LoadingController,
             private camera: Camera,
             private file: File,
             private filePath: FilePath,
             private transfer: FileTransfer,
             public _apiService: ApiService,
            
  ) 
  
  { this.system_logo(); }

  system_logo(){

    this._apiService.system_profile().subscribe((response: any) => {
    
   
     this.logo = response['data'];
     console.log(this.logo)

    })

  }

  ngOnInit() {
    this.form = new SignupPageForm(this.formBuilder).createForm();
  }

  selectedFile(event){

    // this.files = event.target.files[0];
    // console.log(this.file)


  }

  register(){

      // const formData = new FormData();
      // formData.append('image', this.image);


      // this.http.post('http://localhost/ustap/mobile/authentication/register',formData).subscribe((response : any) => {
      //   console.log(response);
      // })
     


    // console.log(this.postData);
  }

  login(){

    this.router.navigate(['']);

  }

  private createForm() {
    this.signupform= new SignupPageForm(this.formBuilder);

   
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Open Camera',
        icon: 'camera',
        handler: () => {
          this.getImage(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Open Gallery',
        icon: 'image',
        handler: () => {
          this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Close',
        role: 'cancel'
      }
    ]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  async getImage(sourceType) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();


    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType
    }  
    this.camera.getPicture(options).then((imagePath) => {
      this.imageURI = imagePath;      
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo =>
            {
              let files = fileInfo as FileEntry;
              files.file(success =>
                {                  
                  this.imageFileName=success.name;
                });
            },err =>
            {
              console.log(err);
              throw err;              
            });
        });
        loading.dismiss();
    }, (err) => {
      console.log(err);
      this.success_toast(err)
      loading.dismiss();
    });    
  }
  


  async uploadFile() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    await loading.present();
    const fileTransfer: FileTransferObject = this.transfer.create();  

    let URL="http://192.168.254.112/ustap/mobile/authentication/register";
    
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.imageFileName,
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }  
    fileTransfer.upload(this.imageURI, URL, options)
      .then((data) => {
      this.GetImageNameUpload=this.imageFileName;
      loading.dismiss();
      this.success_toast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loading.dismiss();
      this.success_toast(err);
    });
  }



  async success_toast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      
    });
    toast.present();
  }






}
