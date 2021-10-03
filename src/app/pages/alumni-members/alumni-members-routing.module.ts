import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniMembersPage } from './alumni-members.page';

const routes: Routes = [
  {
    path: '',
    component: AlumniMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumniMembersPageRoutingModule {}
