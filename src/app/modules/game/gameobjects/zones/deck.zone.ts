import {BaseZone, IGameZoneConfig} from './base.zone';
import FFTCGCard from '../cards/fftcg_card';

export interface ICardGameZone {
    shouldBeShown(): boolean;

    shouldStack(): boolean;

    shouldBeSideways(): boolean;

    orientCard(card: FFTCGCard): void;
}

export default class DeckZone extends BaseZone implements ICardGameZone {
    protected cardScale = .5;

    constructor(config: IGameZoneConfig) {
        super(config);

        this.depth = -100;
    }

    orientCard(card: FFTCGCard) {
        card.flipBack();
        card.untap();
    }

    onCardAdded(card: FFTCGCard) {
        super.onCardAdded(card);
        this.orientCard(card);
    }

    addCard(card: FFTCGCard) {
        super.addCard(card);
        this.onCardAdded(card);
    }

    alignCardsInZone() {
        for (const card of this.cards) {
            card.x = this.x;
            card.y = this.y;
        }
    }

    shouldBeShown(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return false;
    }
}
