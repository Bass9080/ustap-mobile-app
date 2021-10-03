import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { HomePage } from './home.page';
import { HomeRouter } from './home.router';
import { ComponentModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRouter,
    ComponentModule
   
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  buttonActive: boolean = true;
}
