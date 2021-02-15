import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

import { IonicModule } from '@ionic/angular';

import { SinistrePageRoutingModule } from './sinistre-routing.module';

import { SinistrePage } from './sinistre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinistrePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SinistrePage]
})
export class SinistrePageModule {}
