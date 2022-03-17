import Zone = Phaser.GameObjects.Zone;
import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import ParticleEmitter = Phaser.GameObjects.Particles.ParticleEmitter;
import CardDraggable from '../cards/card_draggable';
import {Scene} from 'phaser';
import FFTCGCard from '../cards/fftcg_card';
import CubicBezier = Phaser.Curves.CubicBezier;

export interface IGameZoneConfig {
    scene: Scene;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    borderColor?: number;
    opponent: boolean;
}

export interface ICardGameZone {
    shouldBeShown(): boolean;

    shouldStack(): boolean;

    shouldBeSideways(): boolean;

    orientCard(card: FFTCGCard): void;

    updateCardScale(card: FFTCGCard): void;
}

export abstract class BaseZone extends Zone implements ICardGameZone {
    public cards: Array<FFTCGCard>;
    public name: string;
    protected cardCount: Text;
    protected label: Text;
    protected border: Graphics;
    protected highlightedBorder: Graphics;
    private _emitterManager: ParticleEmitterManager;
    private _borderParticleEffect: ParticleEmitter;
    protected cardScale = 1;
    protected inverted: boolean;

    protected constructor(config: IGameZoneConfig) {
        super(config.scene, config.x, config.y, config.width, config.height);
        this.name = config.name;
        this.cards = [];
        this.scene.add.existing(this);
        this.setRectangleDropZone(this.width, this.height);
        this.createBorder(config.borderColor);
        this.createCardCount();
        this.createLabel();

        this.inverted = config.opponent;
    }

    createBorder(color: number = 0x3e3e3e, lineWidth: number = 10, alpha: number = .5) {
        const border = new Graphics(this.scene);
        this.scene.add.existing(border);
        border.lineStyle(lineWidth, color, alpha);

        border.strokeRect(this.x - this.input.hitArea.width / 2,
            this.y - this.input.hitArea.height / 2,
            this.input.hitArea.width,
            this.input.hitArea.height);

        this.border = border;
    }

    createCardCount() {
        const cardCounter = new Text(this.scene,
            this.x + (this.width / 2) - 25,
            this.y + (this.height / 2) - 25,
            this.cards.length.toString(),
            {});

        this.scene.add.existing(cardCounter);
        this.cardCount = cardCounter;
    }

    addCard(card: FFTCGCard) {
        if (!this.cards) {
            this.cards = [];
        }

        this.cards.push(card);
        this.onCardAdded(card);
    }

    removeCard(cardToRemove: FFTCGCard) {
        this.cards = this.cards.filter((card: FFTCGCard) => {
            return cardToRemove.gameCardID !== card.gameCardID;
        });

        this.alignCardsInZone();
        this.onCardRemoved(cardToRemove);
    }

    findCard(cardToFind: FFTCGCard): FFTCGCard {
        return this.cards.find((card: FFTCGCard) => {
            return cardToFind.gameCardID === card.gameCardID;
        });
    }

    alignCardsInZone() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            this.scene.add.tween({
                targets: [card],
                ease: 'Sine',
                duration: 500,
                x: this.xTranslateOnDrop(card, i),
                y: this.yTranslateOnDrop(card, i)
            });
        }
    }

    onCardAdded(card: FFTCGCard) {
        this.alignCardsInZone();
        this.updateCardScale(card);
        this.orientCard(card);
    }

    updateCardScale(card: FFTCGCard) {
        card.setCardScale(this.cardScale);
    }

    onCardRemoved(card: FFTCGCard) {

    }

    createLabel(): void {
        const label: Text = new Text(this.scene,
            this.x,
            this.y,
            this.name,
            {});

        label.x -= label.width / 2;

        this.scene.add.existing(label);
        this.label = label;
    }

    xTranslateOnDrop(card: CardDraggable, index: number) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);
        return this.x + (shifts * shiftDirection * (card.width));
    }

    yTranslateOnDrop(card: CardDraggable, index: number) {
        return this.y;
    }

    angleTranslateOnDrop(card: CardDraggable, index: number) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);
        const angle = (shifts * shiftDirection * 7);

        if (index === centerIndex) {
            return 0;
        } else {
            return shiftDirection * 7;
        }
    }

    highlightZone() {
        const border = new Graphics(this.scene);
        this.scene.add.existing(border);
        border.lineStyle(20, 0xff0000, 1);

        border.strokeRect(this.x - this.input.hitArea.width / 2,
            this.y - this.input.hitArea.height / 2,
            this.input.hitArea.width,
            this.input.hitArea.height);

        this.highlightedBorder = border;
    }

    unhighlightZone() {
        if (this.highlightedBorder) {
            this.highlightedBorder.destroy(true);
        }
        if (this.borderParticleEffect) {
            this.borderParticleEffect.explode(-1, 0, 0);
        }
    }


    shouldBeShown(): boolean {
        return false;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return false;
    }

    onDropped(card: FFTCGCard) {
        this.addCard(card);
    }

    orientCard(card: FFTCGCard): void {
    }

    highlightZoneParticleEffect() {
        this.scene.time.delayedCall(250, () => {
                const rect = new Phaser.Geom.Rectangle(this.x - (this.width / 2),
                    this.y - (this.height / 2), this.width, this.height);

                this.emitterManager = this.scene.add.particles('flares');
                this.borderParticleEffect = this.emitterManager.createEmitter({
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
                    this.unhighlightZone();
                });
            }
        );
    }


    get emitterManager(): Phaser.GameObjects.Particles.ParticleEmitterManager {
        return this._emitterManager;
    }

    set emitterManager(value: Phaser.GameObjects.Particles.ParticleEmitterManager) {
        this._emitterManager = value;
    }

    get borderParticleEffect(): Phaser.GameObjects.Particles.ParticleEmitter {
        return this._borderParticleEffect;
    }

    set borderParticleEffect(value: Phaser.GameObjects.Particles.ParticleEmitter) {
        this._borderParticleEffect = value;
    }
}
