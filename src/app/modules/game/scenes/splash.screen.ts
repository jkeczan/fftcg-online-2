import {Scene} from 'phaser';
import Server from '../server/server';
import Sprite = Phaser.GameObjects.Sprite;

export default class SplashScreen extends Scene {
    public logo: Sprite;
    public server: Server;

    constructor() {
        super({
            active: true
        });
    }

    preload() {
        this.load.image('logo', '../../../assets/logos/Reckanlabs-logos_transparent.png');
    }

    async create() {
        const {width, height} = this.scale;
        this.logo = this.add.sprite(width / 2, height / 2, 'logo');
        this.logo.scale = 2;

        this.server = new Server();
        this.server.room = await this.server.client.joinOrCreate('Cornelia');

    }

    update() {

    }
}