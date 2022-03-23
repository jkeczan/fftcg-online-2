import Container = Phaser.GameObjects.Container;
import Graphics = Phaser.GameObjects.Graphics;
import GameObject = Phaser.GameObjects.GameObject;
import {Scene} from 'phaser';

export interface IBorderContainerConfig {
    scene: Scene;
    x: number;
    y: number;
    width: number;
    height: number;
    children?: Array<GameObject>;
    borderColor: number;
}

export default class BorderContainer extends Container {
    private _border: Graphics;

    constructor(config: IBorderContainerConfig) {
        const border = new Graphics(config.scene);

        super(config.scene, config.x, config.y, [border]);
        this.width = config.width;
        this.height = config.height;
        this._border = border;
        this.createBorder(config.borderColor);
    }

    createBorder(color: number = 0xA020F0) {
        this._border.lineStyle(10, color, .5);
        this._border.strokeRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

        this.bringToTop(this._border);
    }

    get border(): Phaser.GameObjects.Graphics {
        return this._border;
    }

    set border(value: Phaser.GameObjects.Graphics) {
        this._border = value;
    }
}
