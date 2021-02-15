import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfractionPageRoutingModule } from './infraction-routing.module';

import { InfractionPage } from './infraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfractionPageRoutingModule
  ],
  declarations: [InfractionPage]
})
export class InfractionPageModule {}
