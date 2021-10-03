import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingProfilePage } from './training-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingProfilePageRoutingModule {}
