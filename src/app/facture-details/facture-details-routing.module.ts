import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactureDetailsPage } from './facture-details.page';

const routes: Routes = [
  {
    path: '',
    component: FactureDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureDetailsPageRoutingModule {}
