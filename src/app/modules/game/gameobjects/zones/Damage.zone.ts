import {BaseZone, IGameZoneConfig} from './Base.zone';
import {ICardGameZone} from './Deck.zone';
import CardDraggable from '../CardDraggable';
import FFTCGCard from '../FftcgCard';

export default class DamageZone extends BaseZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    alignCardsInZone() {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            // card.setPosition(this.xTranslateOnDrop(card, i), this.yTranslateOnDrop(card, i));
            const tween = this.scene.add.tween({
                targets: [card],
                ease: 'Cubic',
                duration: 500,
                x: this.x,
                y: this.yTranslateOnDrop(card, i)
            });
        }
    }

    yTranslateOnDrop(card: CardDraggable, index: number): number {
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);
        return this.y + (shifts * shiftDirection * (card.width / 3));
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);

        card.flipForward();
        card.tap();
    }

    onCardAdded(card: FFTCGCard) {
        super.onCardAdded(card);
        this.orientCard(card);
        this.playEXBurst(card);
    }

    playEXBurst(card: FFTCGCard) {
       this.highlightZoneParticleEffect();
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
}
