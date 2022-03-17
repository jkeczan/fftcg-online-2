import Container = Phaser.GameObjects.Container;
import Sprite = Phaser.GameObjects.Sprite;
import Graphics = Phaser.GameObjects.Graphics;
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import ParticleEmitter = Phaser.GameObjects.Particles.ParticleEmitter;
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
    private _spriteBorder: Sprite;
    private _particleEmitterManager: ParticleEmitterManager;
    private _exBurstEmitter: ParticleEmitter;

    constructor(data: ICardConfig) {
        const {scene, x, y, card, image, name, depth, imageBack} = data;
        const spriteBorder = new Sprite(scene, 0, 0, 'card_border');
        const spriteCard = new Sprite(scene, 0, 0, card);
        const spriteImage = new Sprite(scene, 0, 0, image);
        const spriteImageBack = new Sprite(scene, 0, 0, imageBack);
        const cardCenter = new Graphics(scene);

        super(scene, x, y, [cardCenter, spriteImageBack, spriteImage, spriteBorder]);
        this.width = 150;
        this.height = 200;

        this.spriteCard = spriteCard;
        this.spriteImage = spriteImage;
        this.spriteImageBack = spriteImageBack;
        this.spriteBorder = spriteBorder;

        this.setCardSpriteScale(spriteImageBack);
        this.setCardSpriteScale(spriteImage);
        this.setCardSpriteScale(spriteBorder);

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
     * @param scale The Phaser scale to set the entire container to
     */
    setCardScale(scale: number) {
        const tween = this.scene.add.tween({
            targets: [this],
            ease: 'Cubic',
            duration: 500,
            scale
        });
    }

    flipBack() {
        this.spriteImage.visible = false;
        this.spriteImageBack.visible = true;
    }

    flipForward() {
        this.spriteImage.visible = true;
        this.spriteImageBack.visible = false;
    }

    crop() {
    }

    public rotateCard(angle) {
        if (Math.abs(this.angle) !== angle) {
            this.scene.add.tween({
                targets: [this],
                ease: 'Power1',
                duration: 250,
                angle
            });
        }
    }

    highlightZoneParticleEffect() {
        this.scene.time.delayedCall(1500, () => {
                const rect = new Phaser.Geom.Rectangle(this.x - (this.width / 2),
                    this.y - (this.height / 2), this.height, this.width);

                this.particleEmitterManager = this.scene.add.particles('flares');
                this.exBurstEmitter = this.particleEmitterManager.createEmitter({
                    frame: ['red', 'yellow', 'green', 'blue'],
                    speed: 50,
                    lifespan: 1000,
                    quantity: 10,
                    frequency: 5,
                    delay: 100,
                    scale: {start: 0.4, end: 0},
                    blendMode: 'ADD',
                    emitZone: {type: 'edge', source: rect, quantity: 200}
                });

                this.scene.time.delayedCall(1500, () => {
                        this.stopZoneParticleEffect();
                    }
                );
            }
        );
    }

    stopZoneParticleEffect() {
        this.exBurstEmitter.explode(-1, 0, 0);
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

    get spriteBorder(): Phaser.GameObjects.Sprite {
        return this._spriteBorder;
    }

    set spriteBorder(value: Phaser.GameObjects.Sprite) {
        this._spriteBorder = value;
    }

    get particleEmitterManager(): Phaser.GameObjects.Particles.ParticleEmitterManager {
        return this._particleEmitterManager;
    }

    set particleEmitterManager(value: Phaser.GameObjects.Particles.ParticleEmitterManager) {
        this._particleEmitterManager = value;
    }

    get exBurstEmitter(): Phaser.GameObjects.Particles.ParticleEmitter {
        return this._exBurstEmitter;
    }

    set exBurstEmitter(value: Phaser.GameObjects.Particles.ParticleEmitter) {
        this._exBurstEmitter = value;
    }
}
