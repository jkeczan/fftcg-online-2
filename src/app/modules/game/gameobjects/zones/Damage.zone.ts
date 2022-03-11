import {BaseZone, IGameZoneConfig} from './Base.zone';
import {ICardGameZone} from './Deck.zone';
import CardDraggable from '../CardDraggable';
import FFTCGCard from '../FftcgCard';

export default class DamageZone extends BaseZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    alignCardsInZone(card: CardDraggable) {
        this.scene.add.tween({
            targets: [card],
            ease: 'Cubic',
            duration: 500,
            y: this.y + (this.height / 2) - (card.eigthHeight * this.cards.length)
        });
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }

    orientCard(card: FFTCGCard): void {
    }
}
