import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficeBearersPage } from './office-bearers.page';

const routes: Routes = [
  {
    path: '',
    component: OfficeBearersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficeBearersPageRoutingModule {}
