import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';
import CardDraggable from '../cards/card_draggable';
import FFTCGCard from '../cards/fftcg_card';


export default class HandZone extends BaseZone implements ICardGameZone {
    protected cardScale = 1.2;

    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }

    orientCard(card: FFTCGCard) {
        if (this.inverted) {
            card.flipBack();
            card.rotateCard(180);

        } else {
            card.flipForward();
            card.rotateCard(0);
        }
    }

    yTranslateOnDrop(card: CardDraggable, index: number): number {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);

        if (this.inverted) {
            return this.y - (shifts * 25);
        } else {
            return this.y + (shifts * 25);
        }

    }

    shouldBeSideways(): boolean {
        return false;
    }
}
