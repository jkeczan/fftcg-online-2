import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';
import FFTCGCard from '../cards/fftcg_card';

export default class BreakZone extends BaseZone implements ICardGameZone {
    protected cardScale = .5;

    constructor(config: IGameZoneConfig) {
        super(config);
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);

        card.flipForward();
        card.untap();
        card.angle = 0;
        card.setCardScale(this.cardScale);
    }

    onCardAdded(card: FFTCGCard) {
        this.orientCard(card);
        this.alignCardsInZone();
    }

    alignCardsInZone() {
        console.log('Align Cards in Break Zone');
        for (const card of this.cards) {
            card.x = this.x;
            card.y = this.y;
        }
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return true;
    }


}
