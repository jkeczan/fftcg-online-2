import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GameLobbyPageRoutingModule} from './game-lobby-routing.module';

import {GameLobbyPage} from './game-lobby.page';
import {NewGameFormComponent} from "../../components/new-game-form/new-game-form.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        GameLobbyPageRoutingModule
    ],
    declarations: [GameLobbyPage, NewGameFormComponent]
})
export class GameLobbyPageModule {
}
