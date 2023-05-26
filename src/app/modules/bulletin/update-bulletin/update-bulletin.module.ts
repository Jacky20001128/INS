import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBulletinPageRoutingModule } from './update-bulletin-routing.module';

import { UpdateBulletinPage } from './update-bulletin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateBulletinPageRoutingModule
  ],
  declarations: [UpdateBulletinPage]
})
export class UpdateBulletinPageModule {}
