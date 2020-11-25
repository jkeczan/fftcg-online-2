import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {Game} from 'phaser';
import GameScene from './scenes/GameScene';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-game',
    templateUrl: './game.page.html',
    styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
    private gameClient: Game;

    @ViewChild('#game-container')
    private gameContainer: HTMLCanvasElement;

    constructor(private menuController: MenuController) {

    }

    ngOnInit() {
        this.gameClient = new Phaser.Game({
            type: Phaser.AUTO,
            backgroundColor: '#125555',
            width: window.screen.width,
            height: window.screen.height,
            scene: GameScene,
            parent: 'game-container',
        });
    }

    async toggleMenu() {
        console.log('Toggle')
        await this.menuController.close('side-menu');
       // await this.menuController.toggle('side-menu');
    }

    get game(): Game {
        return this.gameClient;
    }

    set game(game: Game) {
        this.gameClient = game;
    }

}
