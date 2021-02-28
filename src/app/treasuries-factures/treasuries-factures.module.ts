import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreasuriesFacturesPageRoutingModule } from './treasuries-factures-routing.module';

import { TreasuriesFacturesPage } from './treasuries-factures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreasuriesFacturesPageRoutingModule
  ],
  declarations: [TreasuriesFacturesPage]
})
export class TreasuriesFacturesPageModule {}
