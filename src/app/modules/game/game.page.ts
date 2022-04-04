import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Game} from 'phaser';
import FSMPlugin from 'phaser3-rex-plugins/plugins/fsm-plugin.js';
import ShakePositionPlugin from 'phaser3-rex-plugins/plugins/shakeposition-plugin.js';
import ShatterImagePlugin from 'phaser3-rex-plugins/plugins/shatterimage-plugin.js';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import BootstrapScene from './scenes/bootstrap.scene';


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
        this.gameClient = new Game({
            type: Phaser.AUTO,
            backgroundColor: '#3e3e3e',
            width: window.innerWidth,
            height: window.innerHeight,
            scene: [BootstrapScene],
            parent: 'game-container',
            plugins: {
                global: [{
                    key: 'rexShakePosition',
                    plugin: ShakePositionPlugin,
                    start: true
                }, {
                    key: 'rexShatterImagePlugin',
                    plugin: ShatterImagePlugin,
                    start: true
                }],
                scene: [{
                    key: 'rexUI',
                    plugin: RexUIPlugin,
                    mapping: 'rexUI'
                }, {
                    key: 'rexFSM',
                    plugin: FSMPlugin,
                    start: true
                }]
            }
        });
    }

    async toggleMenu() {
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
