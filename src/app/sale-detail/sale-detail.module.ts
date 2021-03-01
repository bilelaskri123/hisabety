import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleDetailPageRoutingModule } from './sale-detail-routing.module';

import { SaleDetailPage } from './sale-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleDetailPageRoutingModule
  ],
  declarations: [SaleDetailPage]
})
export class SaleDetailPageModule {}
