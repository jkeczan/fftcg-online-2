import GameServer from '../server/server';
import {BaseScene} from './base.scene';

export class RelayScene extends BaseScene {
    constructor() {
        super('RelayScene');
    }

    preload() {
        this.load.glsl('loading_animation', 'assets/shaders/loading_animation.frag');
        this.load.glsl('loading_text', 'assets/shaders/loading_game.frag');
        // this.load.glsl('gray_cloud', 'assets/shaders/gray_cloud.frag');
    }

    create(data: { server: GameServer }) {
        this.server = data.server;
        const {width, height} = this.scale;

        this.add.shader('loading_animation', width / 2, height / 2, width, height);
        // this.add.shader('loading_text', width / 2, 200, width, 600);


        this.add.text(width / 2.4,  100, 'Loading Game', {
            fontSize: '40pt',
            fontFamily: 'Ken Vector'
        });

        this.time.delayedCall(2000, () => {
            this.scene.start('GameScene', {server: this.server})
        })
    }
}
