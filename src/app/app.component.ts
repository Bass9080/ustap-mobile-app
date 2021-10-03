import { Component } from '@angular/core';
import { ConnectivityService } from './connectivity.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private connectivity: ConnectivityService, private alertController : AlertController) {}

  ngOnInit() {

    this.connectivity.appIsOnline$.subscribe(online => {

    

      if (online) {

          console.log("App is online");
          
         
      } else {

          console.log("App is offline");
          this.alert();


      }

    })

  }

  async alert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Check your internet Connection',
     
      message: 'You do not have Internet Connection',
      buttons: [{
        text : 'OK',
        // handler: () => {
        //   navigator['app'].exitApp();
        // }
      }]
    });

    await alert.present();

    
  }
}
