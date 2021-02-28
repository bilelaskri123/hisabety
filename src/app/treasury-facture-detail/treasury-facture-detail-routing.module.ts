import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreasuryFactureDetailPage } from './treasury-facture-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TreasuryFactureDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreasuryFactureDetailPageRoutingModule {}
