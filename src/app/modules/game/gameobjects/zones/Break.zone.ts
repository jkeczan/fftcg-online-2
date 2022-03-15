import {BaseZone, IGameZoneConfig} from './Base.zone';
import {ICardGameZone} from './Deck.zone';
import FFTCGCard from '../FftcgCard';

export default class BreakZone extends BaseZone implements ICardGameZone {
    protected cardScale = .5;

    constructor(config: IGameZoneConfig) {
        super(config);
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

    alignCardsInZone() {
        for (const card of this.cards) {
            card.x = this.x;
            card.y = this.y;

            this.onCardAdded(card);
        }
    }

    onDropped(card: FFTCGCard) {
        super.onDropped(card);
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
