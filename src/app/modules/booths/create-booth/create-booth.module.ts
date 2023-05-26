import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBoothPageRoutingModule } from './create-booth-routing.module';

import { CreateBoothPage } from './create-booth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBoothPageRoutingModule
  ],
  declarations: [CreateBoothPage]
})
export class CreateBoothPageModule {}
