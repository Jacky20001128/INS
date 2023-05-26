import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBoothPage } from './update-booth.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBoothPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBoothPageRoutingModule {}
