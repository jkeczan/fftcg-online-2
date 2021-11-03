import { Component, OnInit } from '@angular/core';
import {APIService, Game} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {NewGameFormComponent} from "../../components/new-game-form/new-game-form.component";

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.page.html',
  styleUrls: ['./game-lobby.page.scss'],
})
export class GameLobbyPage implements OnInit {

  public games: Array<Game>;

  constructor() { }

  ngOnInit() {
    // this.games = this.activatedRoute.snapshot.data.games.items;
    // this.apiService.OnCreateGameListener.subscribe((newGame) => {
    //   this.games.push(newGame.value.data);
    // });
  }

  async createGame() {
    // const gameForm = await this.modalController.create({
    //   component: NewGameFormComponent
    // });
    //
    // await gameForm.present();
  }
}
