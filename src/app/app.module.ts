import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpRequestInterceptor } from './interceptor/http-loading.interceptor';
import { EventModalPageModule } from './modal/event-modal/event-modal.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
            BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            HttpClientModule,
            EventModalPageModule
          ],

          
  providers: [
      Camera,
      File,
      FileTransfer, 
    FileTransferObject,
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
    
  //   ,{
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HttpRequestInterceptor,
  //   multi: true
  
  // }

],
  bootstrap: [AppComponent],
})
export class AppModule {}
