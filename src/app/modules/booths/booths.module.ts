import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoothsPageRoutingModule } from './booths-routing.module';

import { BoothsPage } from './booths.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoothsPageRoutingModule
  ],
  declarations: [BoothsPage]
})
export class BoothsPageModule {}
