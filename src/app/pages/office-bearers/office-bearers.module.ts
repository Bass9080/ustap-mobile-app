import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficeBearersPageRoutingModule } from './office-bearers-routing.module';

import { OfficeBearersPage } from './office-bearers.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficeBearersPageRoutingModule,
    ComponentModule
  ],
  declarations: [OfficeBearersPage]
})
export class OfficeBearersPageModule {}
