import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBulletinPage } from './create-bulletin.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBulletinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBulletinPageRoutingModule {}
