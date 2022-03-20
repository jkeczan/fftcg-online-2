import {BaseZone, ICardGameZone} from './base.zone';
import FFTCGCard from '../cards/fftcg_card';

export default class BackupZone extends BaseZone implements ICardGameZone {
    protected cardScale = .7;
    constructor(data) {
        super(data);
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);
        card.flipForward();
        card.tap();
        if (this.inverted) {
            card.rotateCard(180);
        } else {
            card.rotateCard(0);
        }
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
