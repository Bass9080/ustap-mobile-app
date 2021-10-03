import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumniMembersPageRoutingModule } from './alumni-members-routing.module';

import { AlumniMembersPage } from './alumni-members.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumniMembersPageRoutingModule,
    ComponentModule
  ],
  declarations: [AlumniMembersPage]
})
export class AlumniMembersPageModule {}
