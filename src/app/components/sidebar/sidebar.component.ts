import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor() { }

  
  public appPages = [
    { title: 'Home', url: '/home/feed', icon: 'home' },
    { title: 'Job Board', url: '/home/job', icon: 'bag' },
    { title: 'Alumni Members', url: '/home/alumni-members', icon: 'school' },
    { title: 'Events', url: '/home/events', icon: 'calendar-clear' },
    { title: 'Office Bearers', url: '/home/office-bearers', icon: 'people' },
    { title: 'Training And Services', url: '/home/training-and-services', icon: 'eyedrop' },
  ];

  ngOnInit() {}

}
