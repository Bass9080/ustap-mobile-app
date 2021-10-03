import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/config/auth-constant';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  displayUserData : any;
  posts: any;
  color  = 'medium';

  constructor( private authService: AuthService, public router: Router, public _apiService: ApiService, public http: HttpClient ) { 

  this.getPost();

  }

  ngOnInit() {

    this.authService.userData$.subscribe((res:any) => {

      this.displayUserData = res;

    })
   
  }

  calendar() {
    this.router.navigate(['home/calendar-of-events']);
  }

 getPost(){

 this.http.get('https://ustap.xyz/api/PostApi/get_post').subscribe((response: any) => {

 


 console.log(response);
  this.posts = response;

 })
   
  }

  heart_post() {

      console.log('hello');
  }
  
}
