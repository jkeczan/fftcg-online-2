import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardBrowserPage } from './card-browser.page';

const routes: Routes = [
  {
    path: '',
    component: CardBrowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardBrowserPageRoutingModule {}
