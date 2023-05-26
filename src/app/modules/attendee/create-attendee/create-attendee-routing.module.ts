import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAttendeePage } from './create-attendee.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAttendeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAttendeePageRoutingModule {}
