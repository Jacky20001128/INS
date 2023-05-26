import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendeePageRoutingModule } from './attendee-routing.module';

import { AttendeePage } from './attendee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendeePageRoutingModule
  ],
  declarations: [AttendeePage]
})
export class AttendeePageModule {}
