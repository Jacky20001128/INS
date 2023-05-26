import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAttendeePage } from './update-attendee.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateAttendeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAttendeePageRoutingModule {}
