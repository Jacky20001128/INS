import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBoothPage } from './create-booth.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBoothPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBoothPageRoutingModule {}
