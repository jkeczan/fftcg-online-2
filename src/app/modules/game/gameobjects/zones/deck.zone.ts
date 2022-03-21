import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';
import FFTCGCard from '../cards/fftcg_card';

export default class DeckZone extends BaseZone implements ICardGameZone {
    protected cardScale = .6;

    constructor(config: IGameZoneConfig) {
        super(config);

        this.depth = -100;
    }

    orientCard(card: FFTCGCard) {
        card.flipBack();

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

    addCard(card: FFTCGCard) {
        super.addCard(card);
        this.onCardAdded(card);
    }

    alignCardsInZone() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            card.x = this.x + (i + 3);
            card.y = this.y + (i + 3);
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
