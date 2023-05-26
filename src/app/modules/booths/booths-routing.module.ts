import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoothsPage } from './booths.page';

const routes: Routes = [
  {
    path: '',
    component: BoothsPage
  },
  {
    path: 'create-booth',
    loadChildren: () => import('./create-booth/create-booth.module').then( m => m.CreateBoothPageModule)
  },
  {
    path: 'update-booth',
    loadChildren: () => import('./update-booth/update-booth.module').then( m => m.UpdateBoothPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoothsPageRoutingModule {}
