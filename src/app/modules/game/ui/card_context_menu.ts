import Graphics = Phaser.GameObjects.Graphics;
import Container = Phaser.GameObjects.Container;
import Text = Phaser.GameObjects.Text;
import {Scene} from 'phaser';

export default class CardContextMenu extends Container {
    public border: Graphics;
    public label: Text;

    constructor(scene: Scene, x: number, y: number, label: string) {
        const border = new Graphics(scene);
        const text = new Text(scene, 0, 0, label, {});

        super(scene, x, y, [border, text]);
        this.border = border;
        this.label = text;

        this.createBorder();
        this.createLabel();
    }

    createBorder() {
        this.scene.add.existing(this.border);
        this.border.lineStyle(10, 0xff0000, 1);
        this.border.strokeRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

    }

    createLabel() {
        this.label.x = this.x;
        this.label.y = this.y;

        this.scene.add.existing(this.label);
    }
}
