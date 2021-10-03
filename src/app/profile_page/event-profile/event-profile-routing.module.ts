import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventProfilePage } from './event-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EventProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventProfilePageRoutingModule {}
