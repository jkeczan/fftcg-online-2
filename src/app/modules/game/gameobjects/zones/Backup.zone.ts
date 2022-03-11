import {BaseZone} from './Base.zone';
import {ICardGameZone} from './Deck.zone';
import FFTCGCard from '../FftcgCard';

export default class BackupZone extends BaseZone implements ICardGameZone {
    constructor(data) {
        super(data);
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);

        card.flipForward();
        card.untap();
    }

    onCardAdded(card: FFTCGCard) {
        super.onCardAdded(card);

        this.orientCard(card);
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
