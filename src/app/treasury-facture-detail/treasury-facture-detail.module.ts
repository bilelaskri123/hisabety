import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreasuryFactureDetailPageRoutingModule } from './treasury-facture-detail-routing.module';

import { TreasuryFactureDetailPage } from './treasury-facture-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreasuryFactureDetailPageRoutingModule
  ],
  declarations: [TreasuryFactureDetailPage]
})
export class TreasuryFactureDetailPageModule {}
