import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardUploaderPage } from './card-uploader.page';

const routes: Routes = [
  {
    path: '',
    component: CardUploaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardUploaderPageRoutingModule {}
