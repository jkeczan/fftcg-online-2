import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;
import Zone = Phaser.GameObjects.Zone;
import GameScene from '../../scenes/game.scene';
import FFTCGCard from '../cards/card_fftcg';

export enum GameZoneDataKeys {
    STAGE_CARD_ON_DROP = 'stage_card_on_drop'
}

export enum GameZoneEvents {
    UNSTAGE_CARDS = 'unstageCards',
    STAGE_CARDS = 'stageCards',

}

export interface IGameZoneConfig {
    scene: GameScene;
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
    protected cardScale = 1;
    protected inverted: boolean;
    public scene: GameScene;

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

    activateServerHandler() {

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

        this.onCardRemoved(cardToRemove);
    }

    onCardRemoved(cardToRemove: FFTCGCard) {
        this.alignCardsInZone(cardToRemove);
    }

    alignCardsInZone(cardAdded: FFTCGCard) {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            this.scene.add.tween({
                targets: [card],
                duration: 500,
                ease: 'Cubic',
                x: this.xTranslateOnDrop(card, i),
                y: this.yTranslateOnDrop(card, i),
                scale: this.cardScale
            });
        }
    }

    onCardAdded(card: FFTCGCard) {
        console.log('align base cards');
        this.alignCardsInZone(card);
        this.updateCardScale(card);
        this.orientCard(card);
    }

    updateCardScale(card: FFTCGCard) {
        card.setCardScale(this.cardScale);
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

    xTranslateOnDrop(card: FFTCGCard, index: number) {
        if (!card) {
            return;
        }
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);
        return this.x + (shifts * shiftDirection * (card.width));
    }

    yTranslateOnDrop(card: FFTCGCard, index: number) {
        if (!card) {
            return;
        }
        return this.y;
    }

    angleTranslateOnDrop(card: FFTCGCard, index: number) {
        return 0;
    }

    highlightZone() {
        this.highlightZoneParticleEffect();
    }

    unhighlightZone() {

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

    orientCard(card: FFTCGCard): void {
    }

    highlightZoneParticleEffect(limitTime?: number) {
        // const emitManager = this.scene.add.particles('flares');
        //
        // (window as any).emitter = emitManager.createEmitter({
        //     frame: ['red', 'yellow', 'green', 'blue'],
        //     speed: 15,
        //     lifespan: 1500,
        //     quantity: 25,
        //     frequency: 4,
        //     scale: {start: 0.4, end: 0},
        //     blendMode: 'ADD',
        //     particleBringToTop: true,
        //     emitZone: {type: 'edge', source: this.getBounds(), quantity: 140}
        // });
    }
}
