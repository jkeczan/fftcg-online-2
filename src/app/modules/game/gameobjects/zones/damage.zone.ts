import CardDraggable from '../cards/card_draggable';
import FFTCGCard from '../cards/card_fftcg';
import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';

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
        if (this.inverted) {
            card.rotateCard(270);
        } else {
            card.rotateCard(90);
        }
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
