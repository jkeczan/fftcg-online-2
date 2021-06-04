import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoPlayerGamePageRoutingModule } from './two-player-game-routing.module';

import { TwoPlayerGamePage } from './two-player-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoPlayerGamePageRoutingModule
  ],
  declarations: [TwoPlayerGamePage]
})
export class TwoPlayerGamePageModule {}
