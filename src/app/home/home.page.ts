import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // router: any;
   alumni: any;

  constructor(private router: Router, private menu: MenuController, private authService: AuthService, public apiService: ApiService) {
    // this.getAlumni();
   }

  public appPages = [
    { title: 'Home', url: '/home/feed', icon: 'home' },
    { title: 'Job Board', url: '/home/job', icon: 'bag' },
    { title: 'Alumni Members', url: '/home/alumni-members', icon: 'school' },
    { title: 'Events', url: '/home/events', icon: 'calendar-clear' },
    { title: 'Office Bearers', url: '/home/office-bearers', icon: 'people' },
    { title: 'Training And Services', url: '/home/training-and-services', icon: 'eyedrop' },
  ];


  home(){
    this.router.navigate(['home/feed']);
    console.log('asd');
    this.menu.close();
  }

  events(){
    this.router.navigate(['home/events']);
    console.log('asdd');
    this.menu.close();
  }

  job_board(){
    this.router.navigate(['home/job']);
    console.log('asdd');
    this.menu.close();
  }

  alumni_members(){
    this.router.navigate(['home/alumni-members']);
    console.log('asdd');
    this.menu.close();
  }

  office_bearers(){
    this.router.navigate(['home/office-bearers']);
    console.log('asdd');
    this.menu.close();
  }

  training_services(){
    this.router.navigate(['home/training-and-services']);
    console.log('asdd');
    this.menu.close();
  }

  close(){
    this.menu.close();
  }

  profile(){

    this.router.navigate(['home/profile']);
    console.log('asdd');
    this.menu.close();

  }

  // getAlumni() {
  // this.apiService.alumni().subscribe((response: any) => {

  //     console.log("SUCCESS ===", response);

  //     this.alumni = response;

  //   },(error: any) =>{

  //     console.log("ERROR ===", error)

  //   })
  // }


  ngOnInit() {

    

  }

}
