import Zone = Phaser.GameObjects.Zone;
import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;
import CardDraggable from '../CardDraggable';
import {Scene} from 'phaser';
import {ICardGameZone} from './Deck.zone';
import {Observable, Subject} from 'rxjs';
import FFTCGCard from '../FftcgCard';

export interface IGameZoneConfig {
    scene: Scene;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    borderColor?: number;
}

export abstract class BaseZone extends Zone implements ICardGameZone {
    public cards: Array<FFTCGCard>;
    public name: string;
    protected cardCount: Text;
    protected label: Text;
    protected addCardEvent: Subject<CardDraggable>;
    protected $addCardEvent: Observable<CardDraggable>;
    protected removeCardEvent: Subject<CardDraggable>;
    protected $removeCardEvent: Observable<CardDraggable>;

    protected constructor(config: IGameZoneConfig) {
        super(config.scene, config.x, config.y, config.width, config.height);
        this.name = config.name;
        this.cards = [];
        this.scene.add.existing(this);
        this.setRectangleDropZone(this.width, this.height);
        this.createBorder(config.borderColor);
        this.createCardCount();
        this.createLabel();
        this.setupEvents();


    }

    setupEvents() {
        this.addCardEvent = new Subject<CardDraggable>();
        this.$addCardEvent = this.addCardEvent.asObservable();
        this.removeCardEvent = new Subject<CardDraggable>();
        this.$removeCardEvent = this.removeCardEvent.asObservable();
    }

    setupListeners() {
        this.$addCardEvent.subscribe((card: CardDraggable) => {
            this.alignCardsInZone(card);
            this.cardCount.text = this.cards.length.toString();
        });

        this.$removeCardEvent.subscribe((card: CardDraggable) => {
            this.alignCardsInZone(card);
            this.cardCount.text = this.cards.length.toString();
        });
    }

    createBorder(color: number = 0x3e3e3e): Graphics {
        const border = new Graphics(this.scene);
        this.scene.add.existing(border);
        border.lineStyle(10, color, .5);

        border.strokeRect(this.x - this.input.hitArea.width / 2,
            this.y - this.input.hitArea.height / 2,
            this.input.hitArea.width,
            this.input.hitArea.height);
        return border;
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
        console.log('Add Card');
        if (!this.cards) {
            this.cards = [];
        }

        this.cards.push(card);
        this.alignCardsInZone(card);
    }

    removeCard(cardToRemove: CardDraggable) {
        this.cards = this.cards.filter((card: CardDraggable) => {
            return cardToRemove.name !== card.name;
        });

        this.removeCardEvent.next(cardToRemove);
    }

    findCard(cardToFind: FFTCGCard): FFTCGCard {
        return this.cards.find((card: FFTCGCard) => {
            return cardToFind.gameCardID === card.gameCardID;
        });
    }

    alignCardsInZone(newCard: CardDraggable) {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            // card.setPosition(this.xTranslateOnDrop(card, i), this.yTranslateOnDrop(card, i));
            const tween = this.scene.add.tween({
                targets: [card],
                ease: 'Cubic',
                duration: 500,
                x: this.xTranslateOnDrop(card, i),
                y: this.yTranslateOnDrop(card, i),
                onComplete: this.onCardAdded(card)
            });
        }
    }

    onCardAdded(card: FFTCGCard) {

    }

    createLabel(): void {
        const label: Text = new Text(this.scene,
            this.x,
            this.y,
            this.name,
            {});

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

    }

    onReceivedCardDrop(card: CardDraggable) {

    }

    orientCard(card: FFTCGCard): void {
    }
}
