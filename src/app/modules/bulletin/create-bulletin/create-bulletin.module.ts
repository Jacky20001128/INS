import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBulletinPageRoutingModule } from './create-bulletin-routing.module';

import { CreateBulletinPage } from './create-bulletin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBulletinPageRoutingModule
  ],
  declarations: [CreateBulletinPage]
})
export class CreateBulletinPageModule {}
