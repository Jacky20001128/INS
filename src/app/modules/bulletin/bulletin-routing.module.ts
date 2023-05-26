import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BulletinPage } from './bulletin.page';

const routes: Routes = [
  {
    path: '',
    component: BulletinPage
  },
  {
    path: 'create-bulletin',
    loadChildren: () => import('./create-bulletin/create-bulletin.module').then( m => m.CreateBulletinPageModule)
  },
  {
    path: 'update-bulletin',
    loadChildren: () => import('./update-bulletin/update-bulletin.module').then( m => m.UpdateBulletinPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BulletinPageRoutingModule {}
