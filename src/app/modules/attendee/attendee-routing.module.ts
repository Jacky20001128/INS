import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendeePage } from './attendee.page';

const routes: Routes = [
  {
    path: '',
    component: AttendeePage
  },
  {
    path: 'create-attendee',
    loadChildren: () => import('./create-attendee/create-attendee.module').then( m => m.CreateAttendeePageModule)
  },
  {
    path: 'update-attendee',
    loadChildren: () => import('./update-attendee/update-attendee.module').then( m => m.UpdateAttendeePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendeePageRoutingModule {}
