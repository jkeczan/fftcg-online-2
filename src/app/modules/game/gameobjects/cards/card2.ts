import Container = Phaser.GameObjects.Container;

export class Card2 extends Container {
    constructor(scene: Phaser.Scene, public texture: string) {
        super(scene);
    }
}
