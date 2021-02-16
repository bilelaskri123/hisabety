import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KilometragePage } from './kilometrage.page';

const routes: Routes = [
  {
    path: '',
    component: KilometragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KilometragePageRoutingModule {}
