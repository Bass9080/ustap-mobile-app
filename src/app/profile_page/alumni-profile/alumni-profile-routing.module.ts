import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniProfilePage } from './alumni-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AlumniProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumniProfilePageRoutingModule {}
