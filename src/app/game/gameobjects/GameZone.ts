import Zone = Phaser.GameObjects.Zone;
import Graphics = Phaser.GameObjects.Graphics;
import Text = Phaser.GameObjects.Text;
import CardDraggable from './CardDraggable';
import {Scene} from 'phaser';
import {ICardGameZone} from './PlayerDeck';

export interface IGameZoneConfig {
    scene: Scene;
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

export class GameZone extends Zone implements ICardGameZone {
    public cards: Array<CardDraggable>;
    public name: string;
    protected cardCount: Text;
    protected label: Text;

    constructor(config: IGameZoneConfig) {
        super(config.scene, config.x, config.y, config.width, config.height);
        this.name = config.name;
        this.cards = [];
        this.scene.add.existing(this);
        this.setRectangleDropZone(this.width, this.height);
        this.createBorder();
        this.createCardCount();
        this.createLabel();
    }

    createBorder(): Graphics {
        const border = new Graphics(this.scene);
        this.scene.add.existing(border);
        border.strokeRect(this.x - this.input.hitArea.width / 2,
            this.y - this.input.hitArea.height / 2,
            this.input.hitArea.width,
            this.input.hitArea.height);
        border.lineStyle(10, 0x00FF00);
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

    addCard(card: CardDraggable) {
        if (!this.cards) {
            this.cards = [];
        }

        if (this.findCard(card)) {
            return;
        }

        this.cards.push(card);
        if (this.cards.length > 1) {
            this.cardCount.text = this.cards.length.toString();
        }
        this.cardCount.text = this.cards.length.toString();
    }

    removeCard(cardToRemove: CardDraggable) {
        this.cards = this.cards.filter((card: CardDraggable) => {
            return cardToRemove.name !== card.name;
        });

        this.cardCount.text = this.cards.length.toString();
    }

    findCard(cardToFind: CardDraggable): CardDraggable {
        return this.cards.find((card) => {
            return cardToFind.name === card.name;
        });
    }

    shiftCards(direction: number = 1) {
        if (direction) {
            for (const card of this.cards) {
                card.x = card.x + (card.width * .32);
            }
        } else {

        }
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

    shouldBeShown(): boolean {
        return false;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return false;
    }
}
