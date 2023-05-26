import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAttendeePageRoutingModule } from './create-attendee-routing.module';

import { CreateAttendeePage } from './create-attendee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAttendeePageRoutingModule
  ],
  declarations: [CreateAttendeePage]
})
export class CreateAttendeePageModule {}
