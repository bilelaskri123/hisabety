import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssencePageRoutingModule } from './essence-routing.module';

import { EssencePage } from './essence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EssencePageRoutingModule
  ],
  declarations: [EssencePage]
})
export class EssencePageModule {}
