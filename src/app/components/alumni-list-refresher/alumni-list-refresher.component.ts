import { Component, OnInit } from '@angular/core';
import { AlumniMembersPage } from 'src/app/pages/alumni-members/alumni-members.page';

@Component({
  selector: 'app-alumni-list-refresher',
  templateUrl: './alumni-list-refresher.component.html',
  styleUrls: ['./alumni-list-refresher.component.scss'],
})
export class AlumniListRefresherComponent implements OnInit {

  constructor(public alumni: AlumniMembersPage) { }
  doRefresh(event) {
    console.log('Begin async operation');
    

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.alumni.getAlumni();
    }, 1000);
  }

  ngOnInit() {}

}
