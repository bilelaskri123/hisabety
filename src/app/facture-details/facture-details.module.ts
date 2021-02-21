import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactureDetailsPageRoutingModule } from './facture-details-routing.module';

import { FactureDetailsPage } from './facture-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactureDetailsPageRoutingModule
  ],
  declarations: [FactureDetailsPage]
})
export class FactureDetailsPageModule {}
