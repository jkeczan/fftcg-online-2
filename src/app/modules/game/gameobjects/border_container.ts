import Container = Phaser.GameObjects.Container;
import GameObject = Phaser.GameObjects.GameObject;
import Graphics = Phaser.GameObjects.Graphics;
import {GameSceneV2} from '../scenes/gamev2.scene';

export interface IBorderContainerConfig {
    scene: GameSceneV2;
    x: number;
    y: number;
    width: number;
    height: number;
    children?: Array<GameObject>;
    borderColor: number;
    name?: string;
}

export default class BorderContainer extends Container {
    private border: Graphics;


    constructor(config: IBorderContainerConfig) {
        const border = new Graphics(config.scene);

        super(config.scene, config.x, config.y, [border]);

        this.width = config.width;
        this.height = config.height;
        this.border = border;
        this.createBorder(config.borderColor);
    }

    createBorder(color: number = 0xA020F0) {
        console.log('Create Borders');
        this.border.lineStyle(10, color, .5);
        this.border.strokeRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

        this.bringToTop(this.border);
    }
}
