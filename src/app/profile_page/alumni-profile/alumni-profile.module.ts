import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumniProfilePageRoutingModule } from './alumni-profile-routing.module';

import { AlumniProfilePage } from './alumni-profile.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumniProfilePageRoutingModule,
    ComponentModule
  ],
  declarations: [AlumniProfilePage]
})
export class AlumniProfilePageModule {}
