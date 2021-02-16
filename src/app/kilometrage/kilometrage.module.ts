import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { KilometragePageRoutingModule } from './kilometrage-routing.module';

import { KilometragePage } from './kilometrage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    KilometragePageRoutingModule
  ],
  declarations: [KilometragePage]
})
export class KilometragePageModule {}
