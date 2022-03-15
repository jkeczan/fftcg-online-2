import {ICardGameZone} from './Deck.zone';
import {BaseZone, IGameZoneConfig} from './Base.zone';
import CardDraggable from '../CardDraggable';
import FFTCGCard from '../FftcgCard';


export default class HandZone extends BaseZone implements ICardGameZone {
    protected cardScale = 1.4;

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
        super.onCardAdded(card);

        this.orientCard(card);
        card.activateHandHoverMode();
    }

    onCardRemoved(card: FFTCGCard) {
        super.onCardRemoved(card);
        card.deactivateHandHoverMode();
    }

    orientCard(card: FFTCGCard) {
        card.flipForward();
        card.untap();
    }

    yTranslateOnDrop(card: CardDraggable, index: number): number {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);

        return this.y + (shifts * 25);
    }

    shouldBeSideways(): boolean {
        return false;
    }
}
