import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from 'phaser';
import FSMPlugin from 'phaser3-rex-plugins/plugins/fsm-plugin.js';
import GlowFilterPipelinePlugin from 'phaser3-rex-plugins/plugins/glowfilterpipeline-plugin';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin';
import ParticlesAlongBoundsPlugin from 'phaser3-rex-plugins/plugins/particlesalongbounds-plugin';
import ShakePositionPlugin from 'phaser3-rex-plugins/plugins/shakeposition-plugin.js';
import ShatterImagePlugin from 'phaser3-rex-plugins/plugins/shatterimage-plugin.js';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import BootstrapScene from './scenes/bootstrap.scene';
import ChooseDeckScene from './scenes/choose-deck.scene';
import {GameSceneV2} from './scenes/gamev2.scene';
import {RelayScene} from './scenes/relay.scene';
import TestRoomScene from './scenes/test-room.scene';
import Center = Phaser.Scale.Center;
import ScaleModes = Phaser.Scale.ScaleModes;


@Component({
    selector: 'app-game',
    templateUrl: './game.page.html',
    styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
    private gameClient: Game;
    @ViewChild('#game-container')
    private gameContainer: HTMLCanvasElement;

    constructor() {

    }

    ngOnInit() {
        this.gameClient = new Game({
            type: Phaser.WEBGL,
            backgroundColor: '#000000',
            width: 1920,
            height: 1080,
            scale: {
                mode: ScaleModes.FIT,
                autoCenter: Center.CENTER_BOTH
            },
            scene: [BootstrapScene, ChooseDeckScene, GameSceneV2, TestRoomScene, RelayScene],
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
                }, {
                    key: 'rexOutlinePipeline',
                    plugin: OutlinePipelinePlugin,
                    start: true
                }, {
                    key: 'rexGlowFilterPipeline',
                    plugin: GlowFilterPipelinePlugin,
                    start: true
                }, {
                    key: 'rexparticlesalongboundsplugin',
                    plugin: ParticlesAlongBoundsPlugin,
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

    get game(): Game {
        return this.gameClient;
    }

    set game(game: Game) {
        this.gameClient = game;
    }

}
