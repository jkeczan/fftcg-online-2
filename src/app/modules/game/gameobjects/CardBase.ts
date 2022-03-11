import Container = Phaser.GameObjects.Container;
import Sprite = Phaser.GameObjects.Sprite;
import Graphics = Phaser.GameObjects.Graphics;
import {Scene} from 'phaser';

export interface ICardConfig {
    scene: Scene;
    x?: number;
    y?: number;
    card: string;
    image: string;
    name: string;
    depth: number;
    imageBack: string;
}

export default class CardBase extends Container {
    private _spriteCard: Sprite;
    private _spriteImage: Sprite;
    private _spriteImageBack: Sprite;
    private _border: Graphics;
    private _center: Graphics;

    constructor(data: ICardConfig) {
        const {scene, x, y, card, image, name, depth, imageBack} = data;
        const spriteCard = new Sprite(scene, 0, 0, card);
        const spriteImage = new Sprite(scene, 0, 0, image);
        const spriteImageBack = new Sprite(scene, 0, 0, imageBack);
        const cardBorder = new Graphics(scene);
        const cardCenter = new Graphics(scene);

        super(scene, x, y, [cardBorder, cardCenter, spriteImageBack, spriteImage]);
        this.width = 150;
        this.height = 200;

        this.spriteCard = spriteCard;
        this.spriteImage = spriteImage;
        this.spriteImageBack = spriteImageBack;
        this.border = cardBorder;
        this.center = cardCenter;

        this.createBorder();
        this.createCenter();
        this.setCardSpriteScale(spriteImageBack);
        this.setCardSpriteScale(spriteImage);

        this.scene = scene;
        this.name = name;
        this.depth = depth;
        this.flipBack();
        this.scene.add.existing(this);
    }

    private setCardSpriteScale(sprite: Sprite) {
        if (sprite.width > this.width) {
            sprite.setScale(
                1 - ((sprite.width - this.width) / sprite.width),
                1 - ((sprite.height - this.height) / sprite.height)
            );
        } else {
            sprite.setScale(
                1 + ((this.width - sprite.width) / this.width),
                1 + ((this.height - sprite.height) / this.height)
            );
        }
    }

    /**
     * External method used by zones to increase card sizes when moving. Allows for different sizes per zone
     * @param scale
     */
    setCardScale(scale: number) {
        this.scale = 2;
    }

    createCenter() {
        this.center.fillStyle(0xff0000, 1);
        this.center.fillCircle(this.centerOriginX, this.centerOriginY, 5);
    }

    createBorder() {
        this.border.lineStyle(10, 0xff0000, 1);
        this.border.strokeRect(this.originX - (this.width / 2), this.originY - (this.height / 2), this.width, this.height);

        this.bringToTop(this.border);
    }

    flipBack() {
        this.spriteImage.visible = false;
        this.spriteImageBack.visible = true;
    }

    flipForward() {
        this.spriteImage.visible = true;
        this.spriteImageBack.visible = false;
    }

    updateCardImage(image: string) {
        this.spriteImage = new Sprite(this.scene, this.x, this.y, image);
    }

    public rotateCard(angle) {
        this.scene.add.tween({
            targets: [this],
            ease: 'Power1',
            duration: 250,
            angle
        });
    }

    get isVisible(): boolean {
        return this.spriteImage.visible;
    }

    get isHidden(): boolean {
        return this.spriteImageBack.visible;
    }

    get centerOriginX(): number {
        return this.originX + (this.width / 2);
    }

    get centerOriginY(): number {
        return this.originY + (this.height / 2);
    }

    get halfWidth(): number {
        return this.width / 2;
    }

    get halfHeight(): number {
        return this.height / 2;
    }

    get fourthWidth(): number {
        return this.width / 4;
    }

    get fourthHeight(): number {
        return this.height / 4;
    }

    get eigthWidth(): number {
        return this.width / 8;
    }

    get eigthHeight(): number {
        return this.height / 8;
    }

    get spriteCard(): Phaser.GameObjects.Sprite {
        return this._spriteCard;
    }

    set spriteCard(value: Phaser.GameObjects.Sprite) {
        this._spriteCard = value;
    }

    get spriteImage(): Phaser.GameObjects.Sprite {
        return this._spriteImage;
    }

    set spriteImage(value: Phaser.GameObjects.Sprite) {
        this._spriteImage = value;
    }


    get spriteImageBack(): Phaser.GameObjects.Sprite {
        return this._spriteImageBack;
    }

    set spriteImageBack(value: Phaser.GameObjects.Sprite) {
        this._spriteImageBack = value;
    }


    get border(): Phaser.GameObjects.Graphics {
        return this._border;
    }

    set border(value: Phaser.GameObjects.Graphics) {
        this._border = value;
    }


    get center(): Phaser.GameObjects.Graphics {
        return this._center;
    }

    set center(value: Phaser.GameObjects.Graphics) {
        this._center = value;
    }
}
