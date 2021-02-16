import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssencePage } from './essence.page';

const routes: Routes = [
  {
    path: '',
    component: EssencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssencePageRoutingModule {}
