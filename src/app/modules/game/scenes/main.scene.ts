import {Scene} from 'phaser';

export class MainScene extends Scene {

    private topFrame: any;

    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.glsl('flames', 'assets/shaders/flames.frag');
        //
        // this.load.spritesheet('frame', 'assets/uipack/frames/texture_frames/texture_frames-0.png', {
        //     frameWidth: 2333,
        //     frameHeight: 875,
        //     margin: 63,
        //     spacing: 27
        //
        // });
        // this.load.image('frame_image', 'assets/uipack/frames/texture_frames/texture_frames-0.png');

    }

    create() {
        const {width, height} = this.scale;

        // this.add.sprite(width / 2, height / 2, 'frame', 0);
        this.add.shader('flames', width / 2, height / 2, width, height);
        // this.add.text(width / 2, height / 2, 'Welcome to FFTCG.ONLINE', {
        //     fontFamily: 'Ken Vector',
        //     fontSize: '40pt'
        // }).setOrigin(.5, .5);
    }
}
