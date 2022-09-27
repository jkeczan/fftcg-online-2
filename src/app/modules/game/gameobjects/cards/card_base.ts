import Container = Phaser.GameObjects.Container;
import ParticleEmitter = Phaser.GameObjects.Particles.ParticleEmitter;
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import Sprite = Phaser.GameObjects.Sprite;
import {Scene} from 'phaser';
import {IFFTCGCardMetadata} from './card_fftcg';

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

export default abstract class CardBase extends Container {
    public abstract metadata: IFFTCGCardMetadata;
    private _spriteImage: Sprite;
    private _spriteImageBack: Sprite;
    private _spriteBorder: Sprite;
    private _particleEmitterManager: ParticleEmitterManager;
    private _exBurstEmitter: ParticleEmitter;

    protected constructor(scene: Scene) {
        super(scene);

        this.scene = scene;
        this.width = 150;
        this.height = 200;

        this.scene.add.existing(this);
    }

    public async setupSprites() {
        await this.loadCardImage();

        this.spriteImageBack = new Sprite(this.scene, 0, 0, 'card-back');
        this.spriteBorder = new Sprite(this.scene, 0, 0, 'card_border');

        this.add(this.spriteImageBack);
        this.add(this.spriteBorder);

        // Scale Sprites
        this.setCardSpriteScale(this.spriteImageBack);
        this.setCardSpriteScale(this.spriteBorder);

        this.add(this.spriteImageBack);
        this.add(this.spriteBorder);

    }

    private async loadCardImage() {
        return new Promise((resolve, reject) => {
            if (this.scene.textures.exists(this.metadata.serialNumber)) {
                this.spriteImage = new Sprite(this.scene, 0, 0, this.metadata.serialNumber);
                resolve(true);
            } else {
                this.spriteImage = new Sprite(this.scene, 0, 0, 'card-back');
                const opus = this.metadata.serialNumber.split('-')[0];
                console.log('Load Image for Serial: ', this.metadata.serialNumber);
                this.scene.load.image(this.metadata.serialNumber, `assets/game/cards/opus${opus}/${this.metadata.serialNumber}.jpeg`);
                this.scene.load.once(Phaser.Loader.Events.COMPLETE, () => {
                    this.spriteImage.setTexture(this.metadata.serialNumber);
                    this.add(this.spriteImage);

                    this.setCardSpriteScale(this.spriteImageBack);
                    this.setCardSpriteScale(this.spriteImage);
                    this.setCardSpriteScale(this.spriteBorder);
                    resolve(true);
                });
                this.scene.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, (err) => {
                    console.log(err);
                    reject(err);
                });
                this.scene.load.start();
            }
        });
    }

    private setCardSpriteScale(sprite: Sprite) {
        if (sprite?.width > this.width) {
            sprite.setScale(
                1 - ((sprite.width - this.width) / sprite.width),
                1 - ((sprite.height - this.height) / sprite.height)
            );
        } else {
            sprite?.setScale(
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
        this.scene.add.tween({
            targets: [this],
            ease: 'Cubic',
            duration: 500,
            scale
        });
    }

    flipBack() {
        this.spriteImage.visible = false;
        this.spriteImageBack.visible = true;
        this.spriteBorder.visible = true;
    }

    flipForward() {
        this.spriteImage.visible = true;
        this.spriteBorder.visible = true;
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
        // const rect = new Phaser.Geom.Rectangle(this.x - (this.width / 2),
        //     this.y - (this.height / 2), this.width, this.height);

        const rect = this.spriteImage.getBounds();

        this.particleEmitterManager = this.scene.add.particles('flares');
        this.exBurstEmitter = this.particleEmitterManager.createEmitter({
            frame: ['red', 'yellow', 'green', 'blue'],
            speed: 48,
            lifespan: 1500,
            quantity: 12,
            frequency: 4,
            scale: {start: 0.4, end: 0},
            blendMode: 'ADD',
            particleBringToTop: true,
            emitZone: {type: 'edge', source: rect, quantity: 48}
        });
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
