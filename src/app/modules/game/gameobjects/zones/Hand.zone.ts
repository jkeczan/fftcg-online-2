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

    onCardAdded(card: FFTCGCard) {
        this.orientCard(card);
    }

    orientCard(card: FFTCGCard) {
        card.flipForward();
        card.untap();
    }

    yTranslateOnDrop(card: CardDraggable, index: number): number {
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
