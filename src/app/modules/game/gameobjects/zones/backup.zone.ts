import {BaseZone} from './base.zone';
import {ICardGameZone} from './deck.zone';
import FFTCGCard from '../cards/fftcg_card';

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
