import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingProfilePageRoutingModule } from './training-profile-routing.module';

import { TrainingProfilePage } from './training-profile.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingProfilePageRoutingModule,
    ComponentModule
  ],
  declarations: [TrainingProfilePage]
})
export class TrainingProfilePageModule {}
