import {BaseZone, IGameZoneConfig} from './Base.zone';
import CardDraggable from '../CardDraggable';
import FFTCGCard from '../FftcgCard';

export interface ICardGameZone {
    shouldBeShown(): boolean;

    shouldStack(): boolean;

    shouldBeSideways(): boolean;

    orientCard(card: FFTCGCard): void;
}

export default class DeckZone extends BaseZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);

        this.depth = -100;
    }

    orientCard(card: FFTCGCard) {
        card.flipBack();
    }

    addCard(card: FFTCGCard) {
        super.addCard(card);
        this.orientCard(card);
    }

    alignCardsInZone(newCard: CardDraggable) {
        newCard.x = this.x;
        newCard.y = this.y;
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
