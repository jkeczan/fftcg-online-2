import {Component, OnInit} from '@angular/core';
import {CreateGameInput, Game} from "../../services/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalController, ToastController} from "@ionic/angular";
import {GamesService} from "../../services/games.service";

@Component({
    selector: 'app-new-game-form',
    templateUrl: './new-game-form.component.html',
    styleUrls: ['./new-game-form.component.scss'],
})
export class NewGameFormComponent implements OnInit {

    public gameForm: FormGroup;
    public game: Game;

    constructor(private gameService: GamesService,
                private formBuilder: FormBuilder,
                private modalController: ModalController) {
        this.gameForm = this.formBuilder.group({
            game_name: ['', Validators.required],
            game_format: ['', Validators.required],
            game_status: ['', Validators.required]
        });
    }

    // id: ID!
    // game_name: String!
    // player1: Player!
    // player2: Player!
    // gameState: GameState!

    ngOnInit() {

    }

    async createNewGame() {
        await this.gameService.createGame(this.gameForm.value as CreateGameInput);
        await this.close();
    }

    async close() {
        await this.modalController.dismiss();
    }

}
