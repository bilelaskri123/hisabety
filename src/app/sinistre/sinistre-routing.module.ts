import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinistrePage } from './sinistre.page';

const routes: Routes = [
  {
    path: '',
    component: SinistrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinistrePageRoutingModule {}
