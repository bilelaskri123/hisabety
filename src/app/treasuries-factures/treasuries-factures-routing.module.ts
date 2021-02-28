import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreasuriesFacturesPage } from './treasuries-factures.page';

const routes: Routes = [
  {
    path: '',
    component: TreasuriesFacturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreasuriesFacturesPageRoutingModule {}
