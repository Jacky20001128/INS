import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoothDetailPageRoutingModule } from './booth-detail-routing.module';

import { BoothDetailPage } from './booth-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoothDetailPageRoutingModule
  ],
  declarations: [BoothDetailPage]
})
export class BoothDetailPageModule {}
