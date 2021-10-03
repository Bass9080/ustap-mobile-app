import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  displayUserData : any;
  userdata: any;

  constructor(private router : Router, private authService: AuthService, public _apiService: ApiService, ) {
    // this.user()
   }

  settings(){
    this.router.navigate(['/home/settings']);
  }

  ngOnInit() {

    // this.user()

    
   
    
  }


  user() {
    this.authService.userData$.subscribe((res:any) => {

      // this.displayUserData = res;


      // this._apiService.getUserData(res.user_id).subscribe((response: any) => {

      //   console.log(response['data']);
        
      //   this.userdata = response['data'];




      // })

     

    

    })
  }
  
  

}
