import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingServicesPageRoutingModule } from './training-services-routing.module';

import { TrainingServicesPage } from './training-services.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingServicesPageRoutingModule,
    ComponentModule
  ],
  declarations: [TrainingServicesPage]
})
export class TrainingServicesPageModule {}
