import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBoothPageRoutingModule } from './update-booth-routing.module';

import { UpdateBoothPage } from './update-booth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBoothPageRoutingModule
  ],
  declarations: [UpdateBoothPage]
})
export class UpdateBoothPageModule {}
