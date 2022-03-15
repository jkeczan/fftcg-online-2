import {BaseZone, IGameZoneConfig} from './Base.zone';
import {ICardGameZone} from './Deck.zone';
import CardDraggable from '../CardDraggable';
import FFTCGCard from '../FftcgCard';

export default class ForwardZone extends BaseZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);

        card.flipForward();
        card.untap();
    }

    onCardAdded(card: FFTCGCard) {
        this.orientCard(card);
        card.crop();
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return false;
    }
}
