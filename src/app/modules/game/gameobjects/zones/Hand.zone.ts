import {ICardGameZone} from './Deck.zone';
import {BaseZone, IGameZoneConfig} from './Base.zone';
import CardDraggable from '../CardDraggable';
import FFTCGCard from '../FftcgCard';


export default class HandZone extends BaseZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }

    addCard(card: FFTCGCard) {
        super.addCard(card);
    }

    alignCardsInZone(newCard: CardDraggable) {
        super.alignCardsInZone(newCard);

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
        this.orientCard(card);
    }

    orientCard(card: FFTCGCard) {
        card.flipForward();
        card.untap();
    }

    xTranslateOnDrop(card: CardDraggable, index: number) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);
        return this.x + (shifts * shiftDirection * (card.width));
    }

    yTranslateOnDrop(card: CardDraggable, index: number) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);

        return this.y + (shifts * 10);
    }

    angleTranslateOnDrop(card: CardDraggable, index: number) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);
        const shiftDirection = index < centerIndex ? -1 : 1;

        return card.angle + (shifts * 3 / 2) * shiftDirection;
    }

    onDropped(card: FFTCGCard) {
        super.onDropped(card);

        if (this.shouldBeShown()) {
            card.flipForward();
        } else {
            card.flipBack();
        }
    }

    shouldBeSideways(): boolean {
        return false;
    }

    onReceivedCardDrop(card: CardDraggable) {
    }
}
