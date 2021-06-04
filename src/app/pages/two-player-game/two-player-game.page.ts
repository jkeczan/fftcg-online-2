import { Component, OnInit } from '@angular/core';
import {APIService, OnUpdateGameSubscription} from "../../services/api.service";

@Component({
  selector: 'app-two-player-game',
  templateUrl: './two-player-game.page.html',
  styleUrls: ['./two-player-game.page.scss'],
})
export class TwoPlayerGamePage implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit(  ) {

    this.apiService.OnUpdateGameListener.subscribe((gameUpdate) => {
      console.log(gameUpdate.value.data)
    })

  }

}
