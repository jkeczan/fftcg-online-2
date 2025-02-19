import FFTCGCard from '../cards/card_fftcg';
import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';
import Shuffle = Phaser.Utils.Array.Shuffle;

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

    addCards(cards: FFTCGCard[], position: 'top' | 'bottom') {
        for (const card of cards) {
            if (position === 'bottom') {
                this.putCardOnBottom(card);
            } else if (position === 'top') {
                this.putCardOnTop(card);
            }

            this.onCardAdded(card);
        }
    }

    putCardOnBottom(card) {
        const cards = [card];
        this.cards = cards.concat(this.cards);
    }

    putCardOnTop(card) {
        this.cards.push(card);
    }

    drawCard(numberOfCards: number = 1): FFTCGCard[] {
        const cards = this.cards.slice(0, numberOfCards);

        for (const card of cards) {
            this.removeCard(card);
        }

        return cards;
    }

    alignCardsInZone() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            card.x = this.x
            card.y = this.y
        }
    }

    shuffle() {
        this.cards = Shuffle(this.cards);
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
