import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAttendeePageRoutingModule } from './update-attendee-routing.module';

import { UpdateAttendeePage } from './update-attendee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAttendeePageRoutingModule
  ],
  declarations: [UpdateAttendeePage]
})
export class UpdateAttendeePageModule {}
