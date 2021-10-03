import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventProfilePageRoutingModule } from './event-profile-routing.module';

import { EventProfilePage } from './event-profile.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventProfilePageRoutingModule,
    ComponentModule
  ],
  declarations: [EventProfilePage]
})
export class EventProfilePageModule {}
