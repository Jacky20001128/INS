import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBulletinPage } from './update-bulletin.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBulletinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBulletinPageRoutingModule {}
